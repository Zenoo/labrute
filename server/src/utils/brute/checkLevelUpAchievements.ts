import { skills, weapons, WeaponType } from '@labrute/core';
import {
  AchievementName,
  Brute, DestinyChoice, PetName, PrismaClient, SkillName, WeaponName,
} from '@labrute/prisma';
import { increaseAchievement } from '../../controllers/Achievements.js';

export const checkLevelUpAchievements = async (
  prisma: PrismaClient,
  _brute: Pick<Brute, 'id' | 'level' | 'userId' | 'pets' | 'skills' | 'weapons' | 'agilityValue' | 'speedValue' | 'strengthValue' | 'hp'>,
  destinyChoice: Pick<DestinyChoice, 'pet' | 'skill' | 'weapon'>,
  oldBrute?: Pick<Brute, 'weapons' | 'agilityValue' | 'speedValue' | 'strengthValue' | 'hp'>,
) => {
  const { userId } = _brute;

  if (!userId) {
    return;
  }

  const brute = {
    ..._brute,
    userId,
  };

  const fastWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.FAST))
    .map((weapon) => weapon.name);
  const sharpWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.SHARP))
    .map((weapon) => weapon.name);
  const heavyWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.HEAVY))
    .map((weapon) => weapon.name);
  const longWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.LONG))
    .map((weapon) => weapon.name);
  const thrownWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.THROWN))
    .map((weapon) => weapon.name);
  const bluntWeapons = weapons
    .filter((weapon) => weapon.types.includes(WeaponType.BLUNT))
    .map((weapon) => weapon.name);
  const deflectingWeapons = weapons
    .filter((weapon) => weapon.deflect > 0)
    .map((weapon) => weapon.name);

  // Max level
  const currentMaxLevel = await prisma.achievement.findFirst({
    where: {
      bruteId: brute.id,
      name: AchievementName.maxLevel,
    },
    select: { id: true, count: true },
  });

  if (currentMaxLevel) {
    // Only increase if new level is higher
    if (brute.level > currentMaxLevel.count) {
      await prisma.achievement.update({
        where: {
          id: currentMaxLevel.id,
        },
        data: {
          count: brute.level,
        },
        select: { id: true },
      });
    }
  } else {
    await prisma.achievement.create({
      data: {
        bruteId: brute.id,
        userId: brute.userId,
        name: AchievementName.maxLevel,
        count: brute.level,
      },
      select: { id: true },
    });
  }

  // Dog
  if (destinyChoice.pet?.startsWith('dog')) {
    const current = await prisma.achievement.findFirst({
      where: {
        bruteId: brute.id,
        userId: brute.userId,
        name: AchievementName.dog,
      },
      select: { id: true, count: true },
    });

    // First dog
    if (destinyChoice.pet === PetName.dog1) {
      if (!current) {
        await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.dog);
      }
    } else if (destinyChoice.pet === PetName.dog2) {
      // Second dog
      if (current?.count === 1) {
        await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.dog);
      }
    } else if (current?.count === 2) {
      // Third dog
      await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.dog);
    }
  }

  // Panther
  if (destinyChoice.pet === PetName.panther) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.panther);
  }

  // Bear
  if (destinyChoice.pet === PetName.bear) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.bear);
  }

  // Panther + Bear
  const pantherBearConditions = [PetName.panther, PetName.bear] as PetName[];
  if (destinyChoice.pet
    && pantherBearConditions.includes(destinyChoice.pet)
    && pantherBearConditions.every((pet) => brute.pets.includes(pet))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.panther_bear);
  }

  // Feline Agility + Fists of Fury
  const felAg_fistsOfFConditions = [SkillName.felineAgility, SkillName.fistsOfFury] as SkillName[];
  if (destinyChoice.skill
    && felAg_fistsOfFConditions.includes(destinyChoice.skill)
    && felAg_fistsOfFConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.felAg_fistsOfF);
  }

  // Feline Agility + Fists of Fury + Untouchable + Relentless
  const felAg_fistsOfF_untouch_relentlessConditions = [
    SkillName.felineAgility,
    SkillName.fistsOfFury,
    SkillName.untouchable,
    SkillName.relentless,
  ] as SkillName[];
  if (destinyChoice.skill
    && felAg_fistsOfF_untouch_relentlessConditions.includes(destinyChoice.skill)
    && felAg_fistsOfF_untouch_relentlessConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.felAg_fistsOfF_untouch_relentless,
    );
  }

  // Vitality + Armor + Toughened Skin
  const vitArmToughConditions = [
    SkillName.vitality,
    SkillName.armor,
    SkillName.toughenedSkin,
  ] as SkillName[];
  if (destinyChoice.skill
    && vitArmToughConditions.includes(destinyChoice.skill)
    && vitArmToughConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.vita_armor_toughened);
  }

  // Herculean Strength + Hammer + Fierce Brute
  const hercHamFierceConditions = [
    SkillName.herculeanStrength,
    SkillName.hammer,
    SkillName.fierceBrute,
  ] as SkillName[];
  if (destinyChoice.skill
    && hercHamFierceConditions.includes(destinyChoice.skill)
    && hercHamFierceConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.herculStr_hammer_fierceBrute,
    );
  }

  // Shock
  if (destinyChoice.skill === SkillName.shock) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.shock);
  }

  // Ballet Shoes + Survival
  const balletShoesSurvivalConditions = [
    SkillName.balletShoes,
    SkillName.survival,
  ] as SkillName[];
  if (destinyChoice.skill
    && balletShoesSurvivalConditions.includes(destinyChoice.skill)
    && balletShoesSurvivalConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.balletShoes_survival);
  }

  // Cry of the Damned + Hypnosis
  const cryOfTheDamnedHypnosisConditions = [
    SkillName.cryOfTheDamned,
    SkillName.hypnosis,
  ] as SkillName[];
  if (destinyChoice.skill
    && cryOfTheDamnedHypnosisConditions.includes(destinyChoice.skill)
    && cryOfTheDamnedHypnosisConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.cryOfTheDamned_hypnosis,
    );
  }

  // Shield + Counter Attack
  const shieldCounterAttackConditions = [
    SkillName.shield,
    SkillName.counterAttack,
  ] as SkillName[];
  if (destinyChoice.skill
    && shieldCounterAttackConditions.includes(destinyChoice.skill)
    && shieldCounterAttackConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.shield_counterAttack);
  }

  // Reconnaissance + Monk
  const reconnaissanceMonkConditions = [
    SkillName.reconnaissance,
    SkillName.monk,
  ] as SkillName[];
  if (destinyChoice.skill
    && reconnaissanceMonkConditions.includes(destinyChoice.skill)
    && reconnaissanceMonkConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.reconnaissance_monk);
  }

  // Immortality
  if (destinyChoice.skill === SkillName.immortality) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.immortality);
  }

  const boosts = skills.filter((skill) => skill.type === 'booster').map((skill) => skill.name);

  // Double boost
  if (destinyChoice.skill
    && boosts.includes(destinyChoice.skill)
    && brute.skills.filter((skill) => boosts.includes(skill)).length === 2) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.doubleBoost);
  }

  // Triple boost
  if (destinyChoice.skill
    && boosts.includes(destinyChoice.skill)
    && brute.skills.filter((skill) => boosts.includes(skill)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.tripleBoost);
  }

  // Quadruple boost
  if (destinyChoice.skill
    && boosts.includes(destinyChoice.skill)
    && brute.skills.filter((skill) => boosts.includes(skill)).length === 4) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.quadrupleBoost);
  }

  // Regeneration + Tragic Potion
  const regenerationTragicPotionConditions = [
    SkillName.regeneration,
    SkillName.tragicPotion,
  ] as SkillName[];
  if (destinyChoice.skill
    && regenerationTragicPotionConditions.includes(destinyChoice.skill)
    && regenerationTragicPotionConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.regeneration_potion);
  }

  // Bear + Tamer
  if ((destinyChoice.pet === PetName.bear || destinyChoice.skill === SkillName.tamer)
    && brute.skills.includes(SkillName.tamer)
    && brute.pets.includes(PetName.bear)) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.bear_tamer);
  }

  // Triple dogs
  if (destinyChoice.pet === PetName.dog3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.tripleDogs);
  }

  // Five weapons
  if (oldBrute?.weapons.length === 4 && brute.weapons.length === 5) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.fiveWeapons);
  }

  // Ten weapons
  if (oldBrute?.weapons.length === 9 && brute.weapons.length === 10) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.tenWeapons);
  }

  // Fifteen weapons
  if (oldBrute?.weapons.length === 14 && brute.weapons.length === 15) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.fifteenWeapons);
  }

  // Twenty weapons
  if (oldBrute?.weapons.length === 19 && brute.weapons.length === 20) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.twentyWeapons);
  }

  // Twenty-three weapons
  if (oldBrute?.weapons.length === 22 && brute.weapons.length === 23) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.twentyThreeWeapons);
  }

  // Monk + Sixth Sense + Whip
  if ((destinyChoice.skill === SkillName.monk
    || destinyChoice.skill === SkillName.sixthSense
    || destinyChoice.weapon === WeaponName.whip)
    && brute.skills.includes(SkillName.monk)
    && brute.skills.includes(SkillName.sixthSense)
    && brute.weapons.includes(WeaponName.whip)) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.monk_sixthSense_whip);
  }

  // Weapons master + 1 sharp weapon + Bodybuilder + 1 heavy weapon
  if ((destinyChoice.skill === SkillName.weaponsMaster
    || destinyChoice.skill === SkillName.bodybuilder
    || (destinyChoice.weapon && (sharpWeapons.includes(destinyChoice.weapon)
      || heavyWeapons.includes(destinyChoice.weapon))))
    && brute.skills.includes(SkillName.weaponsMaster)
    && brute.skills.includes(SkillName.bodybuilder)
    && brute.weapons.some((weapon) => sharpWeapons.includes(weapon))
    && brute.weapons.some((weapon) => heavyWeapons.includes(weapon))
  ) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.weaponsMaster_sharp_bodybuilder_heavy,
    );
  }

  // Hostility + a weapon with reversal
  const counterWeapons = weapons
    .filter((weapon) => weapon.reversal > 0)
    .map((weapon) => weapon.name);

  if ((destinyChoice.skill === SkillName.hostility
    || (destinyChoice.weapon && counterWeapons.includes(destinyChoice.weapon)))
    && brute.skills.includes(SkillName.hostility)
    && brute.weapons.some((weapon) => counterWeapons.includes(weapon))
  ) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.hostility_counterWeapon,
    );
  }

  // Flash flood + 12 weapons
  if ((destinyChoice.skill === SkillName.flashFlood
    || destinyChoice.weapon)
    && brute.skills.includes(SkillName.flashFlood)
    && brute.weapons.length === 12) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.flashFlood_twelveWeapons,
    );
  }

  // Lightning Bolt + First Strike
  const lightningBoltFirstStrikeConditions = [
    SkillName.lightningBolt,
    SkillName.firstStrike,
  ] as SkillName[];
  if (destinyChoice.skill
    && lightningBoltFirstStrikeConditions.includes(destinyChoice.skill)
    && lightningBoltFirstStrikeConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.lightningBolt_firstStrike,
    );
  }

  // Herculean Strength
  if (destinyChoice.skill === SkillName.herculeanStrength) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.herculeanStrength);
  }

  // Feline agility
  if (destinyChoice.skill === SkillName.felineAgility) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.felineAgility);
  }

  // Lightning Bolt
  if (destinyChoice.skill === SkillName.lightningBolt) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.lightningBolt);
  }

  // Vitality
  if (destinyChoice.skill === SkillName.vitality) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.vitality);
  }

  // Tragic Potion + Chef
  const tragicPotionChefConditions = [
    SkillName.tragicPotion,
    SkillName.chef,
  ] as SkillName[];
  if (destinyChoice.skill
    && tragicPotionChefConditions.includes(destinyChoice.skill)
    && tragicPotionChefConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.potion_chef);
  }

  // Tamer + Net
  const tamerNetConditions = [
    SkillName.tamer,
    SkillName.net,
  ] as SkillName[];
  if (destinyChoice.skill
    && tamerNetConditions.includes(destinyChoice.skill)
    && tamerNetConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.tamer_net);
  }

  // Untouchable + ballet Shoes
  const untouchableBalletShoesConditions = [
    SkillName.untouchable,
    SkillName.balletShoes,
  ] as SkillName[];
  if (destinyChoice.skill
    && untouchableBalletShoesConditions.includes(destinyChoice.skill)
    && untouchableBalletShoesConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(
      prisma,
      brute.userId,
      brute.id,
      AchievementName.untouchable_balletShoes,
    );
  }

  // Survival + Resistant
  const survivalResistantConditions = [
    SkillName.survival,
    SkillName.resistant,
  ] as SkillName[];
  if (destinyChoice.skill
    && survivalResistantConditions.includes(destinyChoice.skill)
    && survivalResistantConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.survival_resistant);
  }

  // Hideaway + Spy
  const hideawaySpyConditions = [
    SkillName.hideaway,
    SkillName.spy,
  ] as SkillName[];
  if (destinyChoice.skill
    && hideawaySpyConditions.includes(destinyChoice.skill)
    && hideawaySpyConditions.every((skill) => brute.skills.includes(skill))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.hideaway_spy);
  }

  // Axe + Hideaway
  if ((destinyChoice.weapon === WeaponName.axe || destinyChoice.skill === SkillName.hideaway)
    && brute.weapons.includes(WeaponName.axe)
    && brute.skills.includes(SkillName.hideaway)) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.thor);
  }

  // Repulse + 2 deflecting weapons
  if ((destinyChoice.skill === SkillName.repulse
    || (destinyChoice.weapon && deflectingWeapons.includes(destinyChoice.weapon)))
    && brute.skills.includes(SkillName.repulse)
    && brute.weapons.filter((weapon) => deflectingWeapons.includes(weapon)).length >= 2) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.deflector);
  }

  // 3 Fast weapons
  if (destinyChoice.weapon
    && fastWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => fastWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsFast3);
  }

  // 3 Sharp weapons
  if (destinyChoice.weapon
    && sharpWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => sharpWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsSharp3);
  }

  // 3 Heavy weapons
  if (destinyChoice.weapon
    && heavyWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => heavyWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsHeavy3);
  }

  // 3 Long weapons
  if (destinyChoice.weapon
    && longWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => longWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsLong3);
  }

  // 3 Thrown weapons
  if (destinyChoice.weapon
    && thrownWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => thrownWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsThrown3);
  }

  // 3 Blunt weapons
  if (destinyChoice.weapon
    && bluntWeapons.includes(destinyChoice.weapon)
    && brute.weapons.filter((weapon) => bluntWeapons.includes(weapon)).length === 3) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.weaponsBlunt3);
  }

  // All fast weapons
  if (destinyChoice.weapon
    && fastWeapons.includes(destinyChoice.weapon)
    && fastWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allFastWeapons);
  }

  // All sharp weapons
  if (destinyChoice.weapon
    && sharpWeapons.includes(destinyChoice.weapon)
    && sharpWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allSharpWeapons);
  }

  // All heavy weapons
  if (destinyChoice.weapon
    && heavyWeapons.includes(destinyChoice.weapon)
    && heavyWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allHeavyWeapons);
  }

  // All long weapons
  if (destinyChoice.weapon
    && longWeapons.includes(destinyChoice.weapon)
    && longWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allLongWeapons);
  }

  // All thrown weapons
  if (destinyChoice.weapon
    && thrownWeapons.includes(destinyChoice.weapon)
    && thrownWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allThrownWeapons);
  }

  // All blunt weapons
  if (destinyChoice.weapon
    && bluntWeapons.includes(destinyChoice.weapon)
    && bluntWeapons.every((weapon) => brute.weapons.includes(weapon))) {
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.allBluntWeapons);
  }

  if (brute.agilityValue >= 100 && (oldBrute?.agilityValue || 0) < 100) {
    // Agility 100
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.agility100);
  } else if (brute.agilityValue >= 50 && (oldBrute?.agilityValue || 0) < 50) {
    // Agility 50
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.agility50);
  }

  if (brute.speedValue >= 100 && (oldBrute?.speedValue || 0) < 100) {
    // Speed 100
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.speed100);
  } else if (brute.speedValue >= 50 && (oldBrute?.speedValue || 0) < 50) {
    // Speed 50
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.speed50);
  }

  if (brute.strengthValue >= 100 && (oldBrute?.strengthValue || 0) < 100) {
    // Strength 100
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.strength100);
  } else if (brute.strengthValue >= 50 && (oldBrute?.strengthValue || 0) < 50) {
    // Strength 50
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.strength50);
  }

  if (brute.hp >= 600 && (oldBrute?.hp || 0) < 600) {
    // HP 600
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.hp600);
  } else if (brute.hp >= 300 && (oldBrute?.hp || 0) < 300) {
    // HP 300
    await increaseAchievement(prisma, brute.userId, brute.id, AchievementName.hp300);
  }
};
