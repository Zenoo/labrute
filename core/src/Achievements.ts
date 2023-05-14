/* eslint-disable no-param-reassign */
import { AchievementName, PrismaClient } from '@labrute/prisma';

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

export const AchievementData: Record<
  AchievementName,
  { rarety: AchievementRarety, illustration?: string }
> = {
  wins: {
    rarety: AchievementRarety.common,
    illustration: 'wins.svg',
  },
  defeats: {
    rarety: AchievementRarety.common,
    illustration: 'defeats.svg',
  },
  flawless: {
    rarety: AchievementRarety.epic,
    illustration: 'flawless.svg',
  },
  winWith1HP: {
    rarety: AchievementRarety.epic,
    illustration: 'winWith1HP.svg',
  },
  steal2Weapons: {
    rarety: AchievementRarety.uncommon,
    illustration: 'steal2Weapons.svg',
  },
  singleHitWin: {
    rarety: AchievementRarety.epic,
    illustration: 'r_winbas.gif',
  },
  combo3: {
    rarety: AchievementRarety.common,
    illustration: 'combo3.svg',
  },
  combo4: {
    rarety: AchievementRarety.uncommon,
    illustration: 'combo4.svg',
  },
  combo5: {
    rarety: AchievementRarety.rare,
    illustration: 'combo5.svg',
  },
  counter4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_guard.gif',
  },
  reversal4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_paques.gif',
  },
  block4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_jguard.gif',
  },
  evade4b2b: {
    rarety: AchievementRarety.uncommon,
    illustration: 'evade4b2b.svg',
  },
  disarm4: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_broken.gif',
  },
  damage100once: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_armag.gif',
  },
  hit20times: {
    rarety: AchievementRarety.common,
    illustration: 'r_dinfec.gif',
  },
  use10skills: {
    rarety: AchievementRarety.rare,
    illustration: 'r_jtech.gif',
  },
  saboteur: {
    rarety: AchievementRarety.common,
    illustration: 'r_maso.gif',
  },
  dog: {
    rarety: AchievementRarety.common,
    illustration: 'r_jtamer.gif',
  },
  panther: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_animal.gif',
  },
  bear: {
    rarety: AchievementRarety.uncommon,
    illustration: 'bear.svg',
  },
  panther_bear: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_share.gif',
  },
  felAg_fistsOfF: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_heroac.gif',
  },
  felAg_fistsOfF_untouch_relentless: {
    rarety: AchievementRarety.rare,
    illustration: 'r_surlst.gif',
  },
  vita_armor_toughened: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_brep.gif',
  },
  herculStr_hammer_fierceBrute: {
    rarety: AchievementRarety.uncommon,
    illustration: 'herculStr_hammer_fierceBrute.svg',
  },
  shock: {
    rarety: AchievementRarety.common,
    illustration: 'shock.svg',
  },
  balletShoes_survival: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_doutsd.gif',
  },
  cryOfTheDamned_hypnosis: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_forum.gif',
  },
  shield_counterAttack: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_jguard.gif',
  },
  reconnaissance_monk: {
    rarety: AchievementRarety.uncommon,
    illustration: 'reconnaissance_monk.svg',
  },
  immortality: {
    rarety: AchievementRarety.epic,
    illustration: 'immortality.svg',
  },
  doubleBoost: {
    rarety: AchievementRarety.rare,
    illustration: 'doubleBoost.svg',
  },
  tripleBoost: {
    rarety: AchievementRarety.epic,
    illustration: 'r_drug.gif',
  },
  quadrupleBoost: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_drug.gif',
  },
  regeneration_potion: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_drgmkr.gif',
  },
  bear_tamer: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_cannib.gif',
  },
  tripleDogs: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_gsp.gif',
  },
  fiveWeapons: {
    rarety: AchievementRarety.common,
    illustration: 'fiveWeapons.svg',
  },
  tenWeapons: {
    rarety: AchievementRarety.uncommon,
    illustration: 'tenWeapons.svg',
  },
  fifteenWeapons: {
    rarety: AchievementRarety.rare,
    illustration: 'fifteenWeapons.svg',
  },
  twentyWeapons: {
    rarety: AchievementRarety.epic,
    illustration: 'r_watgun.gif',
  },
  twentyThreeWeapons: {
    rarety: AchievementRarety.legendary,
    illustration: 'r_watgun.gif',
  },
  monk_sixthSense_whip: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_collec2.gif',
  },
  weaponsMaster_sharp_bodybuilder_heavy: {
    rarety: AchievementRarety.uncommon,
    illustration: 'weaponsMaster_sharp_bodybuilder_heavy.svg',
  },
  hostility_counterWeapon: {
    rarety: AchievementRarety.uncommon,
    illustration: 'hostility_counterWeapon.svg',
  },
  flashFlood_twelveWeapons: {
    rarety: AchievementRarety.rare,
    illustration: 'r_batgun.gif',
  },
  lightningBolt_firstStrike: {
    rarety: AchievementRarety.uncommon,
    illustration: 'f_alarm.gif',
  },
  herculeanStrength: {
    rarety: AchievementRarety.common,
    illustration: 'herculeanStrength.svg',
  },
  felineAgility: {
    rarety: AchievementRarety.common,
    illustration: 'felineAgility.svg',
  },
  lightningBolt: {
    rarety: AchievementRarety.common,
  },
  vitality: {
    rarety: AchievementRarety.common,
    illustration: 'vitality.svg',
  },
  potion_chef: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_cobaye.gif',
  },
  tamer_net: {
    rarety: AchievementRarety.uncommon,
  },
  untouchable_balletShoes: {
    rarety: AchievementRarety.uncommon,
  },
  survival_resistant: {
    rarety: AchievementRarety.uncommon,
  },
  hideaway_spy: {
    rarety: AchievementRarety.uncommon,
  },
  weaponsFast3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_tronco.gif',
  },
  weaponsSharp3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_tronco.gif',
  },
  weaponsHeavy3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_tronco.gif',
  },
  weaponsLong3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_tronco.gif',
  },
  weaponsThrown3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_sandb.gif',
  },
  weaponsBlunt3: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_refine.gif',
  },
  agility50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_derwin.gif',
  },
  agility100: {
    rarety: AchievementRarety.rare,
    illustration: 'r_derwin.gif',
  },
  speed50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_derwin.gif',
  },
  speed100: {
    rarety: AchievementRarety.rare,
    illustration: 'r_derwin.gif',
  },
  strength50: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_derwin.gif',
  },
  strength100: {
    rarety: AchievementRarety.rare,
    illustration: 'r_derwin.gif',
  },
  hp300: {
    rarety: AchievementRarety.uncommon,
    illustration: 'hp300.svg',
  },
  hp600: {
    rarety: AchievementRarety.rare,
    illustration: 'r_comu2.gif',
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
    illustration: 'r_winthi.gif',
  },
  winAgainst4: {
    rarety: AchievementRarety.epic,
    illustration: 'r_winthi.gif',
  },
  winAsLower: {
    rarety: AchievementRarety.rare,
    illustration: 'r_winbas.gif',
  },
  win: {
    rarety: AchievementRarety.uncommon,
    illustration: 'r_wintop.gif',
  },
  rankUp10: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp9: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp8: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp7: {
    rarety: AchievementRarety.uncommon,
  },
  rankUp6: {
    rarety: AchievementRarety.uncommon,
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
    illustration: 'r_cgarb.gif',
  },
  beta: {
    rarety: AchievementRarety.legendary,
    illustration: 'beta.svg',
  },
};

export type AchievementsStore = Record<number, {
  userId: string | null;
  achievements: Partial<Record<AchievementName, number>>;
}>;

export const updateAchievement = (
  store: AchievementsStore,
  name: AchievementName,
  count: number,
  bruteId: number,
) => {
  if (bruteId === 0) return;

  const current = store[bruteId];

  if (!current) return;

  const previousCount = current.achievements[name] || 0;

  current.achievements[name] = previousCount + count;
};

export const increaseAchievement = async (
  prisma: PrismaClient,
  userId: string | null,
  bruteId: number | null,
  name: AchievementName,
) => {
  const current = await prisma.achievement.findFirst({
    where: {
      bruteId,
      userId,
      name,
    },
  });

  if (current) {
    await prisma.achievement.update({
      where: {
        id: current.id,
      },
      data: {
        count: current.count + 1,
      },
    });
  } else {
    await prisma.achievement.create({
      data: {
        bruteId,
        userId,
        name,
        count: 1,
      },
    });
  }
};