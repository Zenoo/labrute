import i18n, { BackendModule, Resource } from 'i18next';
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

const languageLoaders: Record<Lang, () => Promise<{ default: Resource }>> = {
  [Lang.en]: () => import('./i18n/locales/en'),
  [Lang.fr]: () => import('./i18n/locales/fr'),
  [Lang.de]: () => import('./i18n/locales/de'),
  [Lang.es]: () => import('./i18n/locales/es'),
  [Lang.ru]: () => import('./i18n/locales/ru'),
  [Lang.pt]: () => import('./i18n/locales/pt'),
};

const languageResourceCache = new Map<Lang, Promise<Resource>>();

const loadLanguageResources = (language: Lang): Promise<Resource> => {
  const cachedResources = languageResourceCache.get(language);

  if (cachedResources) {
    return cachedResources;
  }

  const resources = languageLoaders[language]()
    .then(({ default: loadedResources }) => loadedResources);

  languageResourceCache.set(language, resources);

  return resources;
};

const languageBackend: BackendModule = {
  type: 'backend',
  init: () => undefined,
  read: async (language, namespace, callback) => {
    if (!isSupportedLanguage(language)) {
      callback(new Error(`Unsupported language "${language}"`), false);
      return;
    }

    try {
      const resources = await loadLanguageResources(language);
      const namespaceResources = resources[namespace];

      if (!namespaceResources) {
        callback(new Error(`Missing namespace "${namespace}" for language "${language}"`), false);
        return;
      }

      callback(null, namespaceResources);
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
    ns: namespaces,
    defaultNS,
    supportedLngs: [...supportedLanguages],
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: Lang.en,
  })
  .catch((err) => {
    console.error('Error loading language', err);
  });

export default i18n;
