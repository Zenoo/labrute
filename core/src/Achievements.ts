/* eslint-disable no-param-reassign */
import { AchievementName } from '@labrute/prisma';

export const AchievementRarety = {
  common: 'common',
  uncommon: 'uncommon',
  rare: 'rare',
  epic: 'epic',
  legendary: 'legendary',
} as const;

export type AchievementRarety = typeof AchievementRarety[keyof typeof AchievementRarety];

export const RaretyOrder = [
  AchievementRarety.common,
  AchievementRarety.uncommon,
  AchievementRarety.rare,
  AchievementRarety.epic,
  AchievementRarety.legendary,
];

export const TournamentAchievements = [
  'winTournamentAs20',
  'winTournamentAs15',
  'looseAgainst2',
  'looseAgainst3',
  'looseAgainst4',
  'winAgainst2',
  'winAgainst3',
  'winAgainst4',
  'winAsLower',
  'win',
];

export const AchievementData: Record<
  AchievementName,
  {
    rarety: AchievementRarety,
    illustration?: string,
    perBrute?: number,
    onePerFight?: boolean,
    max?: boolean,
  }
> = {
  wins: {
    rarety: AchievementRarety.common,
    illustration: 'wins.svg',
    onePerFight: true,
  },
  defeats: {
    rarety: AchievementRarety.common,
    illustration: 'defeats.svg',
    onePerFight: true,
  },
  flawless: {
    rarety: AchievementRarety.rare,
    illustration: 'flawless.svg',
    onePerFight: true,
  },
  winWith1HP: {
    rarety: AchievementRarety.epic,
    illustration: 'winWith1HP.svg',
    onePerFight: true,
  },
  steal2Weapons: {
    rarety: AchievementRarety.uncommon,
    illustration: 'steal2Weapons.svg',
    onePerFight: true,
  },
  singleHitWin: {
    rarety: AchievementRarety.epic,
    illustration: 'singleHitWin.svg',
    onePerFight: true,
  },
  combo3: {
    rarety: AchievementRarety.common,
    illustration: 'combo3.svg',
    onePerFight: true,
  },
  combo4: {
    rarety: AchievementRarety.uncommon,
    illustration: 'combo4.svg',
    onePerFight: true,
  },
  combo5: {
    rarety: AchievementRarety.rare,
    illustration: 'combo5.svg',
    onePerFight: true,
  },
  counter5: {
    rarety: AchievementRarety.uncommon,
    illustration: 'counter5.svg',
    onePerFight: true,
  },
  evade10: {
    rarety: AchievementRarety.uncommon,
    onePerFight: true,
  },
  block25: {
    rarety: AchievementRarety.uncommon,
    onePerFight: true,
  },
  counter4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'counter4b2b.svg',
    onePerFight: true,
  },
  reversal4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_paques.gif',
    onePerFight: true,
  },
  block4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'block4b2b.svg',
    onePerFight: true,
  },
  evade4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'evade4b2b.svg',
    onePerFight: true,
  },
  throw10b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'throw10b2b.svg',
    onePerFight: true,
  },
  disarm4: {
    rarety: AchievementRarety.uncommon,
    illustration: 'disarm4.svg',
    onePerFight: true,
  },
  disarm8: {
    rarety: AchievementRarety.uncommon,
    illustration: 'disarm8.svg',
    onePerFight: true,
  },
  damage50once: {
    rarety: AchievementRarety.common,
    illustration: 'r_armag.gif',
    onePerFight: true,
  },
  damage100once: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_armag.gif',
    onePerFight: true,
  },
  hit20times: {
    rarety: AchievementRarety.common,
    illustration: 'hit20times.svg',
    onePerFight: true,
  },
  kill3pets: {
    rarety: AchievementRarety.uncommon,
    onePerFight: true,
  },
  maxDamage: {
    rarety: AchievementRarety.common,
    max: true,
  },
  hpHealed: {
    rarety: AchievementRarety.common,
  },
  use10skills: {
    rarety: AchievementRarety.rare,
    illustration: 'r_jtech.gif',
    onePerFight: true,
  },
  saboteur: {
    rarety: AchievementRarety.common,
    illustration: 'saboteur.svg',
  },
  dog: {
    rarety: AchievementRarety.common,
    illustration: 'dog.svg',
    perBrute: 3,
  },
  panther: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_animal.gif',
    perBrute: 1,
  },
  bear: {
    rarety: AchievementRarety.uncommon,
    illustration: 'bear.svg',
    perBrute: 1,
  },
  panther_bear: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_share.gif',
    perBrute: 1,
  },
  felAg_fistsOfF: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_heroac.gif',
    perBrute: 1,
  },
  felAg_fistsOfF_untouch_relentless: {
    rarety: AchievementRarety.rare,
    illustration: 'r_surlst.gif',
    perBrute: 1,
  },
  vita_armor_toughened: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_brep.gif',
    perBrute: 1,
  },
  herculStr_hammer_fierceBrute: {
    rarety: AchievementRarety.uncommon,
    illustration: 'herculStr_hammer_fierceBrute.svg',
    perBrute: 1,
  },
  shock: {
    rarety: AchievementRarety.common,
    illustration: 'shock.svg',
    perBrute: 1,
  },
  balletShoes_survival: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_doutsd.gif',
    perBrute: 1,
  },
  cryOfTheDamned_hypnosis: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_forum.gif',
    perBrute: 1,
  },
  shield_counterAttack: {
    rarety: AchievementRarety.uncommon,
    illustration: 'shield_counterAttack.svg',
    perBrute: 1,
  },
  reconnaissance_monk: {
    rarety: AchievementRarety.uncommon,
    illustration: 'reconnaissance_monk.svg',
    perBrute: 1,
  },
  immortality: {
    rarety: AchievementRarety.epic,
    illustration: 'immortality.svg',
    perBrute: 1,
  },
  doubleBoost: {
    rarety: AchievementRarety.rare,
    illustration: 'doubleBoost.svg',
    perBrute: 1,
  },
  tripleBoost: {
    rarety: AchievementRarety.epic,
    illustration: 'tripleBoost.svg',
    perBrute: 1,
  },
  quadrupleBoost: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_drug.gif',
    perBrute: 1,
  },
  regeneration_potion: {
    rarety: AchievementRarety.uncommon,
    illustration: 'regeneration_potion.svg',
    perBrute: 1,
  },
  bear_tamer: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_cannib.gif',
    perBrute: 1,
  },
  tripleDogs: {
    rarety: AchievementRarety.uncommon,
    illustration: 'tripleDogs.svg',
    perBrute: 1,
  },
  fiveWeapons: {
    rarety: AchievementRarety.common,
    illustration: 'fiveWeapons.svg',
    perBrute: 1,
  },
  tenWeapons: {
    rarety: AchievementRarety.uncommon,
    illustration: 'tenWeapons.svg',
    perBrute: 1,
  },
  fifteenWeapons: {
    rarety: AchievementRarety.rare,
    illustration: 'fifteenWeapons.svg',
    perBrute: 1,
  },
  twentyWeapons: {
    rarety: AchievementRarety.epic,
    illustration: 'r_watgun.gif',
    perBrute: 1,
  },
  twentyThreeWeapons: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_watgun.gif',
    perBrute: 1,
  },
  monk_sixthSense_whip: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_collec2.gif',
    perBrute: 1,
  },
  weaponsMaster_sharp_bodybuilder_heavy: {
    rarety: AchievementRarety.uncommon,
    illustration: 'weaponsMaster_sharp_bodybuilder_heavy.svg',
    perBrute: 1,
  },
  hostility_counterWeapon: {
    rarety: AchievementRarety.uncommon,
    illustration: 'hostility_counterWeapon.svg',
    perBrute: 1,
  },
  flashFlood_twelveWeapons: {
    rarety: AchievementRarety.rare,
    illustration: 'r_batgun.gif',
    perBrute: 1,
  },
  lightningBolt_firstStrike: {
    rarety: AchievementRarety.uncommon,
    illustration: 'lightningBolt_firstStrike.svg',
    perBrute: 1,
  },
  herculeanStrength: {
    rarety: AchievementRarety.common,
    illustration: 'herculeanStrength.svg',
    perBrute: 1,
  },
  felineAgility: {
    rarety: AchievementRarety.common,
    illustration: 'felineAgility.svg',
    perBrute: 1,
  },
  lightningBolt: {
    rarety: AchievementRarety.common,
    illustration: 'lightningBolt.svg',
    perBrute: 1,
  },
  vitality: {
    rarety: AchievementRarety.common,
    illustration: 'vitality.svg',
    perBrute: 1,
  },
  potion_chef: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_cobaye.gif',
    perBrute: 1,
  },
  tamer_net: {
    rarety: AchievementRarety.uncommon,
    perBrute: 1,
  },
  untouchable_balletShoes: {
    rarety: AchievementRarety.uncommon,
    perBrute: 1,
  },
  survival_resistant: {
    rarety: AchievementRarety.uncommon,
    perBrute: 1,
  },
  hideaway_spy: {
    rarety: AchievementRarety.uncommon,
    perBrute: 1,
  },
  weaponsFast3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_tronco.gif',
    perBrute: 1,
  },
  weaponsSharp3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'weaponsSharp3.svg',
    perBrute: 1,
  },
  weaponsHeavy3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'weaponsHeavy3.svg',
    perBrute: 1,
  },
  weaponsLong3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'weaponsLong3.svg',
    perBrute: 1,
  },
  weaponsThrown3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_sandb.gif',
    perBrute: 1,
  },
  weaponsBlunt3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_refine.gif',
    perBrute: 1,
  },
  thor: {
    rarety: AchievementRarety.rare,
    perBrute: 1,
  },
  deflector: {
    rarety: AchievementRarety.rare,
    perBrute: 1,
  },
  allFastWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  allSharpWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  allHeavyWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  allLongWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  allThrownWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  allBluntWeapons: {
    rarety: AchievementRarety.epic,
    perBrute: 1,
  },
  agility50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'agility50.svg',
    perBrute: 1,
  },
  agility100: {
    rarety: AchievementRarety.rare,
    illustration: 'agility100.svg',
    perBrute: 1,
  },
  speed50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'speed50.svg',
    perBrute: 1,
  },
  speed100: {
    rarety: AchievementRarety.rare,
    illustration: 'speed100.svg',
    perBrute: 1,
  },
  strength50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'strength50.svg',
    perBrute: 1,
  },
  strength100: {
    rarety: AchievementRarety.rare,
    illustration: 'strength100.svg',
    perBrute: 1,
  },
  hp300: {
    rarety: AchievementRarety.uncommon,
    illustration: 'hp300.svg',
    perBrute: 1,
  },
  hp600: {
    rarety: AchievementRarety.rare,
    illustration: 'hp600.svg',
    perBrute: 1,
  },
  maxLevel: {
    rarety: AchievementRarety.common,
    illustration: 'maxLevel.svg',
    max: true,
  },
  allAchievements: {
    rarety: AchievementRarety.legendary,
    perBrute: 1,
  },
  winTournamentAs20: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_winthi.gif',
  },
  winTournamentAs15: {
    rarety: AchievementRarety.rare,
    illustration: 'r_winthi.gif',
  },
  looseAgainst2: {
    rarety: AchievementRarety.uncommon,
    illustration: 'looseAgainst2.svg',
  },
  looseAgainst3: {
    rarety: AchievementRarety.rare,
    illustration: 'looseAgainst3.svg',
  },
  looseAgainst4: {
    rarety: AchievementRarety.epic,
    illustration: 'looseAgainst4.svg',
  },
  winAgainst2: {
    rarety: AchievementRarety.uncommon,
    illustration: 'winAgainst2.svg',
  },
  winAgainst3: {
    rarety: AchievementRarety.rare,
    illustration: 'winAgainst3.svg',
  },
  winAgainst4: {
    rarety: AchievementRarety.epic,
    illustration: 'winAgainst4.svg',
  },
  winAsLower: {
    rarety: AchievementRarety.rare,
    illustration: 'r_winbas.gif',
  },
  win: {
    rarety: AchievementRarety.uncommon,
    illustration: 'win.svg',
  },
  eventWin: {
    rarety: AchievementRarety.legendary,
  },
  rankUp10: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp9: {
    rarety: AchievementRarety.uncommon,
    illustration: 'rankUp9.svg',
  },
  rankUp8: {
    rarety: AchievementRarety.uncommon,
    illustration: 'rankUp8.svg',
  },
  rankUp7: {
    rarety: AchievementRarety.uncommon,
    illustration: 'rankUp7.svg',
  },
  rankUp6: {
    rarety: AchievementRarety.uncommon,
    illustration: 'rankUp6.svg',
  },
  rankUp5: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp4: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp3: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp2: {
    rarety: AchievementRarety.rare,
  },
  rankUp1: {
    rarety: AchievementRarety.epic,
  },
  rankUp0: {
    rarety: AchievementRarety.legendary,
  },
  sacrifice: {
    rarety: AchievementRarety.common,
    illustration: 'sacrifice.svg',
  },
  beta: {
    rarety: AchievementRarety.legendary,
    illustration: 'beta.svg',
  },
  bug: {
    rarety: AchievementRarety.legendary,
    illustration: 'bug.svg',
  },
};

export type AchievementsStore = Record<string, {
  userId: string | null;
  achievements: Partial<Record<AchievementName, number>>;
}>;

export const updateAchievement = (
  store: AchievementsStore,
  name: AchievementName,
  count: number,
  bruteId: string,
) => {
  if (bruteId === '') return;

  const current = store[bruteId];

  if (!current) return;

  const previousCount = current.achievements[name] || 0;

  // Limit to one per fight for some achievements
  if (previousCount > 0 && AchievementData[name].onePerFight) return;

  current.achievements[name] = previousCount + count;
};
