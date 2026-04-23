import React, { createContext, useContext, useRef, useMemo } from 'react';
import Server from '../utils/Server';
import { useFingerprint } from './useFingerprint';

export type ServerContextType = PromisifyFunctions<typeof Server> & { loading: boolean };

const ServerContext = createContext<ServerContextType>({
  ...Server,
  loading: true,
});

export const useServer = () => useContext(ServerContext);

// Helper type to recursively wrap all functions in an object
type PromisifyFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
  ? (...args: A) => Promise<Awaited<R>>
  : T[K] extends object
  ? PromisifyFunctions<T[K]>
  : T[K];
};

// Cache for wrapped nested objects to maintain stable references
const wrappedCache = new WeakMap<object, unknown>();

function wrapServer<T extends object>(
  obj: T,
  loadingRef: { current: boolean }
): PromisifyFunctions<T> {
  // Check cache first
  const cached = wrappedCache.get(obj);
  if (cached) {
    return cached as PromisifyFunctions<T>;
  }

  const result = {} as PromisifyFunctions<T>;
  (Object.keys(obj) as Array<keyof T>).forEach((_key) => {
    const key = _key;
    const value = obj[key];
    if (typeof value === 'function') {
      type Func = T[typeof key] extends (...args: infer A) => infer R
        ? (...args: A) => Promise<Awaited<R>>
        : never;
      (result[key] as Func) = ((...args: unknown[]) => {
        if (!loadingRef.current) {
          return Promise.resolve(
            (value as (...args: unknown[]) => unknown)(...args)
          );
        }
        return new Promise((resolve, reject) => {
          const handler = () => {
            window.removeEventListener('fingerprint-ready', handler);
            try {
              Promise.resolve(
                (value as (...args: unknown[]) => unknown)(...args)
              )
                .then(resolve)
                .catch(reject);
            } catch (err) {
              reject(err);
            }
          };
          window.addEventListener('fingerprint-ready', handler);
        });
      }) as Func;
    } else if (typeof value === 'object' && value !== null) {
      (result[key] as PromisifyFunctions<T[typeof key]>) = wrapServer(value, loadingRef);
    } else {
      (result[key] as T[typeof key]) = value;
    }
  });

  // Cache the wrapped object
  wrappedCache.set(obj, result);

  return result;
}

export const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const fingerprint = useFingerprint();

  // Use ref to track loading state dynamically
  const loadingRef = useRef(fingerprint.loading);
  loadingRef.current = fingerprint.loading;

  // Memoize the wrapped server with stable reference
  const value: ServerContextType = useMemo(() => ({
    ...wrapServer(Server, loadingRef),
    loading: loadingRef.current,
  }), []); // Empty deps - only create once

  // Update the loading property without recreating the object
  value.loading = fingerprint.loading;

  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  );
};
