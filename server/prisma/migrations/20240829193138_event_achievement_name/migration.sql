/*
  Warnings:

  - The values [eventWin] on the enum `AchievementName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AchievementName_new" AS ENUM ('wins', 'defeats', 'flawless', 'winWith1HP', 'steal2Weapons', 'singleHitWin', 'combo3', 'combo4', 'combo5', 'counter5', 'evade10', 'block25', 'counter4b2b', 'reversal4b2b', 'block4b2b', 'evade4b2b', 'throw10b2b', 'disarm4', 'disarm8', 'damage50once', 'damage100once', 'hit20times', 'use10skills', 'kill3pets', 'maxDamage', 'hpHealed', 'saboteur', 'dog', 'panther', 'bear', 'panther_bear', 'felAg_fistsOfF', 'felAg_fistsOfF_untouch_relentless', 'vita_armor_toughened', 'herculStr_hammer_fierceBrute', 'shock', 'balletShoes_survival', 'cryOfTheDamned_hypnosis', 'shield_counterAttack', 'reconnaissance_monk', 'immortality', 'doubleBoost', 'tripleBoost', 'quadrupleBoost', 'regeneration_potion', 'bear_tamer', 'tripleDogs', 'fiveWeapons', 'tenWeapons', 'fifteenWeapons', 'twentyWeapons', 'twentyThreeWeapons', 'monk_sixthSense_whip', 'weaponsMaster_sharp_bodybuilder_heavy', 'hostility_counterWeapon', 'flashFlood_twelveWeapons', 'lightningBolt_firstStrike', 'herculeanStrength', 'felineAgility', 'lightningBolt', 'vitality', 'potion_chef', 'tamer_net', 'untouchable_balletShoes', 'survival_resistant', 'hideaway_spy', 'weaponsFast3', 'weaponsSharp3', 'weaponsHeavy3', 'weaponsLong3', 'weaponsThrown3', 'weaponsBlunt3', 'thor', 'deflector', 'allFastWeapons', 'allSharpWeapons', 'allHeavyWeapons', 'allLongWeapons', 'allThrownWeapons', 'allBluntWeapons', 'agility50', 'agility100', 'speed50', 'speed100', 'strength50', 'strength100', 'hp300', 'hp600', 'maxLevel', 'allAchievements', 'winTournamentAs20', 'winTournamentAs15', 'looseAgainst2', 'looseAgainst3', 'looseAgainst4', 'winAgainst2', 'winAgainst3', 'winAgainst4', 'winAsLower', 'win', 'battleRoyaleWin', 'rankUp10', 'rankUp9', 'rankUp8', 'rankUp7', 'rankUp6', 'rankUp5', 'rankUp4', 'rankUp3', 'rankUp2', 'rankUp1', 'rankUp0', 'sacrifice', 'beta', 'bug');
ALTER TABLE "TournamentAchievement" ALTER COLUMN "achievement" TYPE "AchievementName_new" USING ("achievement"::text::"AchievementName_new");
ALTER TABLE "Achievement" ALTER COLUMN "name" TYPE "AchievementName_new" USING ("name"::text::"AchievementName_new");
ALTER TABLE "Title" ALTER COLUMN "name" TYPE "AchievementName_new" USING ("name"::text::"AchievementName_new");
ALTER TYPE "AchievementName" RENAME TO "AchievementName_old";
ALTER TYPE "AchievementName_new" RENAME TO "AchievementName";
DROP TYPE "AchievementName_old";
COMMIT;
