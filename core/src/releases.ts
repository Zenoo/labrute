export type Release = {
  version: string;
  date: string;
  features: string[];
  fixes: string[];
  attachments?: string[];
};

export const LAST_RELEASE: Release = {
  version: '2.61.3',
  date: '2024-07-06',
  features: [],
  fixes: [
    'TODO',
  ],
  attachments: ['hp-calc.png'],
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
