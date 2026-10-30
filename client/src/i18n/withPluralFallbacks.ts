const extraCategoriesByLanguage = new Map<string, string[]>();

// Fill missing cardinal plural categories from the same language's _other translation.
// Explicit translations always take precedence over these fallbacks.
export const withPluralFallbacks = (resources: unknown, language: string): unknown => {
  let categories = extraCategoriesByLanguage.get(language);
  if (!categories) {
    categories = new Intl.PluralRules(language).resolvedOptions().pluralCategories
      .filter((category) => category !== 'one' && category !== 'other');
    extraCategoriesByLanguage.set(language, categories);
  }

  // Languages with only _one and _other need no traversal or copying.
  if (categories.length === 0) return resources;
  const extraCategories = categories;

  const normalize = (value: unknown): unknown => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return value;

    const translations = Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, normalize(entry)]),
    );

    for (const [key, entry] of Object.entries(translations)) {
      if (!key.endsWith('_other') || key.endsWith('_ordinal_other')
        || typeof entry !== 'string') continue;

      const baseKey = key.slice(0, -'_other'.length);
      for (const category of extraCategories) {
        const pluralKey = `${baseKey}_${category}`;
        if (!Object.prototype.hasOwnProperty.call(translations, pluralKey)) {
          translations[pluralKey] = entry;
        }
      }
    }

    return translations;
  };

  return normalize(resources);
};
