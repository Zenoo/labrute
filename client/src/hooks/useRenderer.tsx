import { Brute } from '@labrute/prisma';
import { Renderer } from 'pixi.js';
import React, {
  useCallback, useContext, useEffect, useMemo, useRef, useState
} from 'react';
import { BruteDisplay } from '../utils/BruteDisplay';
import { BruteColor } from '@labrute/core';

const MAX_RENDERERS = 3;

type Options = {
  skipCache?: boolean;
  highlightColorName?: BruteColor;
}

type BruteData = Pick<Brute, 'id' | 'gender' | 'body' | 'colors'> & Options;

type RenderMethod = (brute: BruteData) => void;

type RenderCallback = (content: string) => void;

type OnRenderMethod = (id: string, callback: RenderCallback) => void;

export type RendererContextInterface = {
  render: RenderMethod;
  onRender: OnRenderMethod;
  resetCache: (id: string) => void;
}

const RendererContext = React.createContext<RendererContextInterface>({
  render: () => {
    console.error('RendererContext.render() not implemented');
  },
  onRender: () => {
    console.error('RendererContext.onRender() not implemented');
  },
  resetCache: () => {
    console.error('RendererContext.resetCache() not implemented');
  },
});

export function useRenderer(): RendererContextInterface {
  return useContext(RendererContext);
}

type RendererProviderProps = {
  children: React.ReactNode;
}

type RendererInstance = {
  renderer: Renderer;
  busy: boolean;
};

type Cache = {
  id: string;
  content: string;
}[];

export const RendererProvider = ({ children }: RendererProviderProps) => {
  const [queue, setQueue] = useState<BruteData[]>([]);
  const [renderers, setRenderers] = useState<RendererInstance[]>([]);
  const [cache, setCache] = useState<Cache>([]);
  const [callbacks, setCallbacks] = useState<
    Record<string, RenderCallback[]>
  >({});
  const isProcessingRef = useRef(false);

  const render: RenderMethod = useCallback((brute) => {
    setQueue((prev) => [...prev, brute]);
  }, []);

  const onRender: OnRenderMethod = useCallback((id, callback) => {
    setCallbacks((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), callback],
    }));
  }, []);

  const resetCache = useCallback((id: string) => {
    setCache((prev) => prev.filter((c) => c.id !== id));
  }, []);

  // Process queue
  useEffect(() => {
    if (isProcessingRef.current) return;

    const request = queue[0];
    if (!request) return;

    const { body, colors } = request;
    if (!body || !colors) {
      throw new Error('BruteRenderer: missing body or colors');
    }

    const cached = cache.find((c) => c.id === request.id);
    if (cached && !request.skipCache) {
      // Remove from queue
      setQueue((prev) => prev.slice(1));

      // Callback
      if (callbacks[request.id]) {
        for (const callback of callbacks[request.id] ?? []) {
          callback(cached.content);
        }

        // Remove callbacks
        setCallbacks((prev) => ({ ...prev, [request.id]: [] }));
      }

      return;
    }

    // Find a free renderer
    let freeRenderer = renderers.find((r) => !r.busy);

    if (!freeRenderer) {
      // Create a new renderer if possible
      if (renderers.length < MAX_RENDERERS) {
        const renderer = new Renderer({
          backgroundAlpha: 0,
          width: 800,
          height: 1000,
          antialias: true,
          autoDensity: true,
          resolution: 1,
        });

        freeRenderer = { renderer, busy: false };
        setRenderers((prev) => [...prev, freeRenderer as RendererInstance]);
      } else {
        // No free renderer, wait
        return;
      }
    }

    // Mark as processing
    isProcessingRef.current = true;

    // Remove from queue
    setQueue((prev) => prev.slice(1));

    // Mark renderer as busy
    freeRenderer.busy = true;

    // Render with higher scale for better quality
    const renderScale = 3; // Adjust this for quality vs file size (textures loaded at this scale)
    const display = new BruteDisplay(request.gender, colors, body, 'left', renderScale, request.highlightColorName);

    display.onLoad(async () => {
      if (!freeRenderer) {
        isProcessingRef.current = false;
        return;
      }

      const content = await freeRenderer.renderer.extract.image(
        display.container,
        'image/png',
        1
      );

      // Destroy display
      display.destroy();

      // Don't cache id 0 or requests with skipCache
      if (request.id && !request.skipCache) {
        setCache((prev) => [...prev, { id: request.id, content: content.src }]);
      }

      // Callback
      if (callbacks[request.id]) {
        for (const callback of callbacks[request.id] ?? []) {
          callback(content.src);
        }

        // Remove callbacks
        setCallbacks((prev) => ({ ...prev, [request.id]: [] }));
      }

      // Mark renderer as free
      freeRenderer.busy = false;
      isProcessingRef.current = false;

      // Trigger next processing cycle
      setQueue((prev) => [...prev]);
    });
  }, [queue, renderers, cache, callbacks]);

  const methods = useMemo(
    () => ({
      render,
      onRender,
      resetCache,
    }),
    [render, onRender, resetCache]
  );

  return (
    <RendererContext.Provider value={methods}>
      {children}
    </RendererContext.Provider>
  );
};
