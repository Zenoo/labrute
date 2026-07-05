/**
 * Some modules are exported as ES modules, some as CommonJS modules. This function allows to import both types of modules seamlessly.
 * This is only needed for default imports from incompatible libs
 */
export const importModule = <T>(module: T): T => {
  if (typeof module === 'object' && module !== null && (module as { __esModule?: boolean }).__esModule) {
    return (module as unknown as { default: T }).default;
  }
  return module;
};
