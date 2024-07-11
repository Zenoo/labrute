export type Release = {
  version: string;
  date: string;
  features: string[];
  fixes: string[];
  attachments?: string[];
};

export const LAST_RELEASE: Release = {
  version: '2.64.1',
  date: '2024-07-11',
  features: [
    'The brute creation date is now displayed on the brute cell',
    'A new skill has been added: `Repulse`',
    'Clan brutes can now be reordered',
    'New admin panel to manage user bans and monitor multi-accounts',
    'Defeating a clan boss increases the clan points by 1000'
  ],
  fixes: [
    'The armor stat now works as a percentage, reducing the damage taken by that percentage',
    '`Counter attack` now gives 90% reversal chance after a block',
    '`Sabotage` now triggers 90% of the time',
    '`Fierce Brute` didn\'t work on throws in some edge cases, it now works as intended',
    'DinoRPG rewards now require you to have at least one brute',
    '`Chaining` now correctly resets the chain on throws and skill hits',
    'The stats at the moment of the fight are now displayed when hovering on a brute in the tournament page, instead of the current stats',
    'Some brutes were displaying the wrong clothing colors in fights, it has been fixed',
    'Stats linked to the 3 main stats (strength, agility, and speed) are now displayed in the same color as the stat',
  ],
  attachments: ['creation-date.png', 'repulse.png', 'reorder-clan-brutes.png'],
};

export const releases: Release[] = [
  LAST_RELEASE,
  {
    version: '2.62.0',
    date: '2024-07-06',
    features: [
      'You can lock a brute appearance when creating a new brute',
      'The HP calculation is now displayed when hovering over the HP in your cell',
      '5 new modifiers have been added to the daily rotation: Low gravity, Lucky skill, Lucky weapon, Honorable Combat, and Armed and Ready',
    ],
    fixes: [
      'Every weapon now has a 1/28 chance to be thrown, instead of depending on the weapon damage',
      '`Fierce Brute` works on thrown weapons',
      '`Vampirism` deals 50% of your own missing HP',
      'Brute dying due to damage from deflected weapons stop throwing when they die',
      'The modifier `Endless supplies` had a very low chance to not work, it now works as intended',
      'Modifiers have a 4/30 chance to spawn every day. Multiple modifiers can spawn, up to 4',
    ],
    attachments: ['lock-creation.png', 'hp-calc.png'],
  },
  {
    version: '2.61.0',
    date: '2024-06-14',
    features: [
      'Patch notes are now available in the game, check them out in the footer',
    ],
    fixes: [
      'Tournaments gains are correctly given every night',
      'Logs are now correctly ordered by date',
      'Fights don\'t crash when using a `Bomb` anymore',
      'Achievement counts between the user page and the ranking page are now consistent',
    ],
    attachments: ['patch-notes.png'],
  },
  {
    version: '2.60.1',
    date: '2024-06-11',
    features: [
      'We were getting close to the database limit on the amount of fights, so the whole storing system was changed. The previous fights and logs have been purged, the tournament history will not be accurate for tournaments up to this date.',
      'You can now pause the modifier notification by clicking on it.'
    ],
    fixes: [
      'The frying pan can now deflect projectiles',
      'Deflecting uses the current weapon animation',
      'Improved hard to read colors in dark mode',
      'The missing piopio texture has been fixed',
      'Vampirism doesn\'t work on bosses anymore',
    ],
  }
];
