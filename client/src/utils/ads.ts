import { Language } from '@labrute/core';

export type AdName = 'myHordes' | 'eMush' | 'eternalDinoRPG' | 'neoparc' | 'eternalfest' | 'eternalKingdom' | 'directquiz' | 'ePopotamo';

export interface AdResult {
  name: AdName;
  illustration: string;
  url: string;
}

interface AdProps {
  url: string;
  illustrations: Record<Language, string[]>;
}

const ads: Record<AdName, AdProps> = {
  myHordes: {
    url: 'https://myhordes.eu/jx/public/welcome',
    illustrations: {
      fr: ['MH_Ads_Template_fr.png'],
      en: ['MH_Ads_Template_en.png'],
      es: ['MH_Ads_Template_es.png'],
      de: ['MH_Ads_Template_de.png'],
    },
  },
  eMush: {
    url: 'https://emush.eternaltwin.org/',
    illustrations: {
      fr: ['mush_1.jpg', 'mush_2.jpg'],
      en: ['mush_en.gif'],
      es: [],
      de: [],
    },
  },
  eternalDinoRPG: {
    url: 'https://dinorpg.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      es: [],
      de: [],
    },
  },
  neoparc: {
    url: 'https://neoparc.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
    },
  },
  eternalfest: {
    url: 'https://eternalfest.net/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
    },
  },
  eternalKingdom: {
    url: 'https://kingdom.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: ['kingdom_1.png'],
      es: [],
      de: [],
    },
  },
  directquiz: {
    url: 'https://www.directquiz.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
    },
  },
  ePopotamo: {
    url: 'https://epopotamo.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
    },
  },
};

export default ads;

const getAd = (adName: AdName, language: Language) => {
  const ad = ads[adName];
  let illustrations = ad.illustrations[language];

  // If no illustration for this language, use the first non-empty array
  if (illustrations.length === 0) {
    const firstNonEmptyArray = Object.values(ad.illustrations).find((array) => array.length > 0);
    if (firstNonEmptyArray) {
      illustrations = firstNonEmptyArray;
    }
  }

  // If no illustration at all, throw an error
  if (illustrations.length === 0) {
    throw new Error(`No illustration for ad ${adName}`);
  }

  const illustration = illustrations[Math.floor(Math.random() * illustrations.length)];

  const result = {
    name: adName,
    illustration,
    url: ad.url,
  };

  return result;
};

export const getRandomAd = (language: Language, exclude?: AdName) => {
  // Ignore ads with no illustration
  const adNames = (Object.keys(ads) as AdName[]).filter((adName) => {
    const ad = ads[adName];
    return Object.values(ad.illustrations).some((array) => array.length > 0);
  });

  // Exclude ad if needed
  if (exclude) {
    const index = adNames.indexOf(exclude);
    if (index > -1) {
      adNames.splice(index, 1);
    }
  }

  // Check if there is at least one ad left
  if (adNames.length === 0) {
    throw new Error('No ad left');
  }

  const adName = adNames[Math.floor(Math.random() * adNames.length)];

  return getAd(adName, language);
};