import { randomItem } from '@labrute/core';
import { Lang } from '@labrute/prisma';

export type AdName = 'myHordes' | 'eMush' | 'eternalDinoRPG' | 'neoparc' | 'eternalfest' | 'eternalKingdom' | 'directquiz' | 'ePopotamo';

export interface AdResult {
  name: AdName;
  illustration: string;
  url: string;
}

interface AdProps {
  url: string;
  illustrations: Record<Lang, string[]>;
}

const ads: Record<AdName, AdProps> = {
  myHordes: {
    url: 'https://myhordes.eu/jx/public/welcome',
    illustrations: {
      fr: ['MH_Ads_Template_fr.png'],
      en: ['MH_Ads_Template_en.png'],
      es: ['MH_Ads_Template_es.png'],
      de: ['MH_Ads_Template_de.png'],
      ru: ['MH_Ads_Template_en.png'],
      pt: ['MH_Ads_Template_en.png'],
    },
  },
  eMush: {
    url: 'https://emush.eternaltwin.org/',
    illustrations: {
      fr: ['mush_1.jpg', 'mush_2.jpg'],
      en: ['mush_en.gif'],
      es: ['mush_en.gif'],
      de: ['mush_en.gif'],
      ru: ['mush_en.gif'],
      pt: ['mush_en.gif'],
    },
  },
  eternalDinoRPG: {
    url: 'https://dinorpg.eternaltwin.org/',
    illustrations: {
      fr: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      en: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      es: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      de: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      ru: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
      pt: ['dinorpg_2.jpg', 'dinorpg_3.jpg', 'dinorpg-tw-brute-en.gif'],
    },
  },
  neoparc: {
    url: 'https://neoparc.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
      ru: [],
      pt: [],
    },
  },
  eternalfest: {
    url: 'https://eternalfest.net/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
      ru: [],
      pt: [],
    },
  },
  eternalKingdom: {
    url: 'https://kingdom.eternaltwin.org/',
    illustrations: {
      fr: ['kingdom_1.png'],
      en: ['kingdom_1.png'],
      es: ['kingdom_1.png'],
      de: ['kingdom_1.png'],
      ru: ['kingdom_1.png'],
      pt: ['kingdom_1.png'],
    },
  },
  directquiz: {
    url: 'https://www.directquiz.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
      ru: [],
      pt: [],
    },
  },
  ePopotamo: {
    url: 'https://epopotamo.eternaltwin.org/',
    illustrations: {
      fr: [],
      en: [],
      es: [],
      de: [],
      ru: [],
      pt: [],
    },
  },
};

export default ads;

const getAd = (adName: AdName, language: Lang) => {
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

  const illustration = randomItem(illustrations);

  const result = {
    name: adName,
    illustration,
    url: ad.url,
  };

  return result;
};

export const getRandomAd = (language: Lang, exclude?: AdName) => {
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

  const adName = randomItem(adNames);

  return getAd(adName, language);
};
