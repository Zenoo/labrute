export const entries = <K extends string, V>(obj: Partial<Record<K, V>>): [K, V][] => {
  const keys = Object.keys(obj) as K[];
  const result: [K, V][] = [];

  for (const key of keys) {
    const value = obj[key];
    if (value !== undefined) {
      result.push([key, value]);
    }
  }

  return result;
};
