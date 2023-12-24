import { Brute, BruteBody, BruteColors } from '@labrute/prisma';
import { Extract, Renderer } from 'pixi.js';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import BruteDisplay from '../utils/BruteDisplay';

const MAX_RENDERERS = 3;

type BruteData = Pick<Brute, 'id' | 'gender'> & {
  body: Omit<BruteBody, 'id' | 'bruteId'> | null;
  colors: Omit<BruteColors, 'id' | 'bruteId'> | null;
};

type RenderMethod = (brute: BruteData) => void;

type RenderCallback = (content: string) => void;

type OnRenderMethod = (id: number, callback: RenderCallback) => void;

export interface RendererContextInterface {
  render: RenderMethod;
  onRender: OnRenderMethod;
  resetCache: (id: number) => void;
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

interface RendererProviderProps {
  children: React.ReactNode;
}

type RendererInstance = {
  renderer: Renderer;
  busy: boolean;
};

type Cache = {
  id: number;
  content: string;
}[];

export const RendererProvider = ({ children }: RendererProviderProps) => {
  const [queue, setQueue] = useState<BruteData[]>([]);
  const [renderers, setRenderers] = useState<RendererInstance[]>([]);
  const [cache, setCache] = useState<Cache>([]);
  const [callbacks, setCallbacks] = useState<Record<number, RenderCallback[]>>({});

  const render: RenderMethod = (brute) => {
    setQueue((prev) => [...prev, brute]);
  };

  const onRender: OnRenderMethod = (id, callback) => {
    setCallbacks((prev) => ({ ...prev, [id]: [...(prev[id] || []), callback] }));
  };

  // Process queue
  useEffect(() => {
    if (!queue.length) return;

    // Check cache first
    const [request] = queue;

    const { body, colors } = request;
    if (!body || !colors) {
      throw new Error('BruteRenderer: missing body or colors');
    }

    const cached = cache.find((c) => c.id === request.id);
    if (cached) {
      // Remove from queue
      setQueue((prev) => prev.slice(1));

      // Callback
      if (callbacks[request.id]) {
        for (const callback of callbacks[request.id]) {
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
          width: 250,
          height: 320,
          antialias: true,
          autoDensity: true,
          resolution: window.devicePixelRatio * 2,
        });

        freeRenderer = { renderer, busy: false };
        setRenderers((prev) => [...prev, freeRenderer as RendererInstance]);
      } else {
        // No free renderer, wait
        return;
      }
    }

    // Remove from queue
    setQueue((prev) => prev.slice(1));

    // Mark renderer as busy
    freeRenderer.busy = true;

    // Render
    const display = new BruteDisplay(
      request.gender,
      colors,
      body,
      'left',
      1,
    );

    display.onLoad(() => {
      if (!freeRenderer) return;

      // Set size
      display.container.width = Math.abs(display.container.width);
      display.container.height = Math.abs(display.container.height);

      const content = (freeRenderer.renderer.plugins.extract as Extract).image(
        display.container,
        'image/webp',
      );

      // Destroy display
      display.destroy();

      // Don't cache id 0
      if (request.id) {
        setCache((prev) => [...prev, { id: request.id, content: content.src }]);
      }

      // Callback
      if (callbacks[request.id]) {
        for (const callback of callbacks[request.id]) {
          callback(content.src);
        }

        // Remove callbacks
        setCallbacks((prev) => ({ ...prev, [request.id]: [] }));
      }

      // Mark renderer as free
      freeRenderer.busy = false;
    });
  }, [queue, renderers, cache, callbacks]);

  const resetCache = (id: number) => {
    setCache((prev) => prev.filter((c) => c.id !== id));
  };

  const methods = useMemo(() => ({
    render,
    onRender,
    resetCache,
  }), []);

  return (
    <RendererContext.Provider value={methods}>
      {children}
    </RendererContext.Provider>
  );
};
