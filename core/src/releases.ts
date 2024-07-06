export type Release = {
  version: string;
  date: string;
  features: string[];
  fixes: string[];
  attachments?: string[];
};

export const LAST_RELEASE: Release = {
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
};

export const releases: Release[] = [
  LAST_RELEASE,
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
