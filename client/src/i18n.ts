import i18n, { BackendModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { HOST, Host } from './utils/host';

export const defaultLangByHost: Record<string, Lang> = {
  [Host.LaBrute]: Lang.fr,
  [Host.MyBrute]: Lang.en,
  [Host.ElBruto]: Lang.es,
  [Host.MeinBrutalo]: Lang.de,
};

export const defaultNS = 'common';
export const namespaces = [
  'achievement',
  'achievementRanking',
  'admin',
  'arena',
  'ascend',
  'bannedUsers',
  'bruteNotFound',
  'cell',
  'clan',
  'common',
  'destiny',
  'event',
  'followingFeed',
  'generating',
  'globalTournament',
  'hall',
  'home',
  'inventory',
  'levelUp',
  'nameChange',
  'notFound',
  'patchNotes',
  'ranking',
  'resetVisuals',
  'tournament',
  'tournamentHistory',
  'transferBrute',
  'user',
  'versus',
  'wiki',
] as const;

export const supportedLanguages = [
  Lang.en,
  Lang.fr,
  Lang.de,
  Lang.es,
  Lang.ru,
  Lang.pt,
] as const;

const supportedLanguageSet = new Set<Lang>(supportedLanguages);

export const isSupportedLanguage = (value: string | null | undefined): value is Lang => (
  !!value && supportedLanguageSet.has(value as Lang)
);

export const getInitialLanguage = (): Lang => {
  const storedLanguage = localStorage.getItem('language');

  if (isSupportedLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const hostLanguage = defaultLangByHost[HOST];

  if (isSupportedLanguage(hostLanguage)) {
    return hostLanguage;
  }

  return DEFAULT_LANGUAGE;
};

// Language-specific namespace loaders for webpack code-splitting
const createLanguageLoader = (lang: Lang) => (
  (namespace: string): Promise<unknown> => import(`./i18n/locales/${lang}/${namespace}.json`)
);

// Map of language loaders - one per supported language
const languageLoaders: Record<Lang, (namespace: string) => Promise<unknown>> = {
  [Lang.en]: createLanguageLoader(Lang.en),
  [Lang.fr]: createLanguageLoader(Lang.fr),
  [Lang.de]: createLanguageLoader(Lang.de),
  [Lang.es]: createLanguageLoader(Lang.es),
  [Lang.ru]: createLanguageLoader(Lang.ru),
  [Lang.pt]: createLanguageLoader(Lang.pt),
};

// Load a specific namespace for a language - delegates to language-specific loader
const loadNamespace = (language: Lang, namespace: string): Promise<unknown> => {
  const loader = languageLoaders[language];
  if (!loader) {
    return Promise.reject(new Error(`Unsupported language "${language}"`));
  }
  return loader(namespace);
};

const namespaceCache = new Map<string, Promise<unknown>>();

const languageBackend: BackendModule = {
  type: 'backend',
  init: () => undefined,
  read: async (language, namespace, callback) => {
    if (!isSupportedLanguage(language)) {
      callback(new Error(`Unsupported language "${language}"`), false);
      return;
    }

    const cacheKey = `${language}-${namespace}`;
    const cached = namespaceCache.get(cacheKey);

    if (cached) {
      try {
        const resources = await cached;
        callback(null, resources as never);
        return;
      } catch (error) {
        callback(error instanceof Error ? error : new Error(String(error)), false);
        return;
      }
    }

    const loadPromise = loadNamespace(language, namespace)
      .then((module) => (module as { default: unknown }).default);

    namespaceCache.set(cacheKey, loadPromise);

    try {
      const resources = await loadPromise;
      callback(null, resources as never);
    } catch (error) {
      callback(error instanceof Error ? error : new Error(String(error)), false);
    }
  },
};

const initialLanguage = getInitialLanguage();

i18n
  .use(languageBackend)
  .use(initReactI18next)
  .init({
    lng: initialLanguage,
    ns: [defaultNS], // Only preload common namespace
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: [...supportedLanguages],
    partialBundledLanguages: true,
    load: 'currentOnly',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: Lang.en,
    react: {
      useSuspense: false, // Disable Suspense to avoid blocking state updates
    },
    saveMissing: true,
    missingKeyHandler: (lngs, ns, key, fallbackValue) => {
      console.error(
        `Missing translation: [${lngs.join(', ')}] ${ns}:${key}`,
        fallbackValue ? `(fallback: "${fallbackValue}")` : ''
      );
    },
  })
  .catch((err) => {
    console.error('Error loading language', err);
  });

// Prefetch all namespaces during idle time for instant navigation
const prefetchNamespaces = () => {
  const language = i18n.language as Lang;

  // Load all namespaces except those already loaded
  const namespacesToLoad = namespaces.filter((ns) => !i18n.hasResourceBundle(language, ns));

  if (namespacesToLoad.length === 0) return;

  const loadNext = (index: number) => {
    if (index >= namespacesToLoad.length) return;

    const ns = namespacesToLoad[index];
    if (!ns) return;

    // Load namespace in the background
    i18n.loadNamespaces(ns).then(() => {
      // Use requestIdleCallback for the next one, or setTimeout as fallback
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadNext(index + 1), { timeout: 2000 });
      } else {
        setTimeout(() => loadNext(index + 1), 100);
      }
    }).catch((err) => {
      console.warn(`Failed to prefetch namespace ${ns}:`, err);
      // Continue with next namespace even if one fails
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadNext(index + 1), { timeout: 2000 });
      } else {
        setTimeout(() => loadNext(index + 1), 100);
      }
    });
  };

  // Start prefetching when the page is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => loadNext(0), { timeout: 5000 });
  } else {
    setTimeout(() => loadNext(0), 2000);
  }
};

// Start prefetching after initial load
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    prefetchNamespaces();
  } else {
    window.addEventListener('load', prefetchNamespaces);
  }
}

export default i18n;
