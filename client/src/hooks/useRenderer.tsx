import { Brute } from '@labrute/prisma';
import { autoDetectRenderer, Renderer } from 'pixi.js';
import React, {
  useCallback, useContext, useEffect, useMemo, useRef, useState
} from 'react';
import { BruteDisplay, clearPortraitCache } from 'labrute-pixi-static-portrait';
import {
  BruteColor, readBodyString, readColorString
} from '@labrute/core';
import { PORTRAIT_SCALE, PortraitFrame } from '../utils/portraitLayout';

const MAX_RENDERERS = 3;
const EMPTY_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9s8w6f4AAAAASUVORK5CYII=';

const isRendererUsable = (renderer: Renderer) => {
  try {
    return !!renderer.canvas;
  } catch {
    return false;
  }
};

type Options = {
  skipCache?: boolean;
  highlightColorName?: BruteColor;
}

type BruteData = Pick<Brute, 'id' | 'gender' | 'body' | 'colors'> & Options;

type RenderMethod = (brute: BruteData) => void;

type RenderCallback = (content: string, frame?: PortraitFrame) => void;

type OnRenderMethod = (
  id: string,
  callback: RenderCallback,
  options?: { skipCache?: boolean }
) => void;

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
  frame: PortraitFrame;
}[];

export const RendererProvider = ({ children }: RendererProviderProps) => {
  const [queue, setQueue] = useState<BruteData[]>([]);
  const [renderers, setRenderers] = useState<RendererInstance[]>([]);
  const [cache, setCache] = useState<Cache>([]);
  const [callbacks, setCallbacks] = useState<
    Record<string, RenderCallback[]>
  >({});
  const isProcessingRef = useRef(false);
  const callbacksRef = useRef<Record<string, RenderCallback[]>>({});
  const cacheRef = useRef<Cache>([]);

  useEffect(() => {
    callbacksRef.current = callbacks;
  }, [callbacks]);

  useEffect(() => {
    cacheRef.current = cache;
  }, [cache]);

  const resolveCallbacks = useCallback((id: string, content: string, frame?: PortraitFrame) => {
    const idCallbacks = callbacksRef.current[id] ?? [];

    const callback = idCallbacks[0];
    if (!callback) return;

    callback(content, frame);

    setCallbacks((prev) => {
      const prevCallbacks = prev[id] ?? [];
      if (prevCallbacks.length <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }

      return {
        ...prev,
        [id]: prevCallbacks.slice(1),
      };
    });
  }, []);

  const render: RenderMethod = useCallback((brute) => {
    setQueue((prev) => [...prev, brute]);
  }, []);

  const onRender: OnRenderMethod = useCallback((id, callback, options) => {
    if (options?.skipCache) {
      setCallbacks((prev) => ({
        ...prev,
        [id]: [...(prev[id] ?? []), callback],
      }));
      return;
    }

    const cached = cacheRef.current.find((c) => c.id === id);
    if (cached) {
      callback(cached.content, cached.frame);
      return;
    }

    setCallbacks((prev) => ({
      ...prev,
      [id]: [...(prev[id] ?? []), callback],
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
      console.error('BruteRenderer: missing body or colors');
      setQueue((prev) => prev.slice(1));
      return;
    }

    const cached = cache.find((c) => c.id === request.id);
    if (cached && !request.skipCache) {
      setQueue((prev) => prev.slice(1));
      resolveCallbacks(request.id, cached.content, cached.frame);
      return;
    }

    const existingRenderer = renderers.find((r) => !r.busy);
    const shouldCreateRenderer = !existingRenderer && renderers.length < MAX_RENDERERS;

    if (!existingRenderer && !shouldCreateRenderer) {
      return;
    }

    isProcessingRef.current = true;
    setQueue((prev) => prev.slice(1));

    const acquireRenderer = existingRenderer
      ? Promise.resolve(existingRenderer)
      : autoDetectRenderer({
        backgroundAlpha: 0,
        width: 800,
        height: 1000,
        antialias: true,
        autoDensity: true,
        resolution: 1,
      }).then((renderer) => {
        const rendererInstance: RendererInstance = { renderer, busy: false };
        setRenderers((prev) => [...prev, rendererInstance]);
        return rendererInstance;
      });

    acquireRenderer.then(async (freeRenderer) => {
      if (!isRendererUsable(freeRenderer.renderer)) {
        resolveCallbacks(request.id, EMPTY_PNG);
        setRenderers((prev) => prev.filter((r) => r !== freeRenderer));
        isProcessingRef.current = false;
        setQueue((prev) => [...prev]);
        return;
      }

      freeRenderer.busy = true;

      let display: BruteDisplay | undefined;
      try {
        display = new BruteDisplay({
          renderer: freeRenderer.renderer,
          gender: request.gender,
          parts: readBodyString(body),
          colors: readColorString(request.gender, colors),
          facing: 'left',
          scale: PORTRAIT_SCALE,
          highlightColorName: request.highlightColorName,
        });
        await display.ready;
        if (!isRendererUsable(freeRenderer.renderer) || display.container.destroyed) {
          resolveCallbacks(request.id, EMPTY_PNG);
          return;
        }

        // Keep the crop's origin: fitting every tight PNG to the same CSS width
        // would change the fighter's scale when hair or clothing changes its bounds.
        const bounds = display.container.getLocalBounds().rectangle.clone();
        const frame: PortraitFrame = {
          x: bounds.x / PORTRAIT_SCALE,
          y: bounds.y / PORTRAIT_SCALE,
          width: bounds.width / PORTRAIT_SCALE,
          height: bounds.height / PORTRAIT_SCALE,
        };
        const content = await freeRenderer.renderer.extract.image({
          target: display.container,
          frame: bounds,
          format: 'png',
          quality: 1,
        });

        if (!content?.src) {
          resolveCallbacks(request.id, EMPTY_PNG);
          return;
        }

        // Don't cache id 0 or requests with skipCache
        if (request.id && !request.skipCache) {
          setCache((prev) => [...prev, { id: request.id, content: content.src, frame }]);
        }

        resolveCallbacks(request.id, content.src, frame);
      } catch (error) {
        console.error('Error extracting rendered brute image:', error);

        // If a renderer gets into an invalid state during teardown/reload, drop it.
        try {
          display?.destroy();
          clearPortraitCache(freeRenderer.renderer);
          freeRenderer.renderer.destroy();
        } catch {
          // Ignore renderer destroy errors during recovery.
        }
        setRenderers((prev) => prev.filter((r) => r !== freeRenderer));
        resolveCallbacks(request.id, EMPTY_PNG);
      } finally {
        // Destroy display
        display?.destroy();

        // Mark renderer as free
        if (isRendererUsable(freeRenderer.renderer)) {
          freeRenderer.busy = false;
        } else {
          setRenderers((prev) => prev.filter((r) => r !== freeRenderer));
        }
        isProcessingRef.current = false;

        // Trigger next processing cycle
        setQueue((prev) => [...prev]);
      }
    }).catch((error) => {
      console.error('Error acquiring renderer:', error);
      resolveCallbacks(request.id, EMPTY_PNG);
      isProcessingRef.current = false;
      setQueue((prev) => [...prev]);
    });
  }, [queue, renderers, cache, resolveCallbacks]);

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
