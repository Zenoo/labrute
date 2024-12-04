import { randomItem, SkillId, weapons, WeaponType } from '@labrute/core';
import { AnimationFighter } from './findFighter';

// Y positions
const minYPosition = 175;
const maxYPosition = 281;

// Left X positions
const minLeftXPosition = 40;
const maxLeftXPosition = 125;

// Right X positions
const minRightXPosition = 500 - minLeftXPosition;
const maxRightXPosition = 500 - maxLeftXPosition;

const getRandomPosition = (
  fighters: AnimationFighter[],
  fighter: AnimationFighter,
  takenPositions?: { y: number }[],
): {x: number, y: number} => {
  // Get fighter min and max x position
  const minXPosition = fighter.team === 'L' ? minLeftXPosition : minRightXPosition;
  const maxXPosition = fighter.team === 'L' ? maxLeftXPosition : maxRightXPosition;

  // Returned value, should always change
  const resultPosition = {
    x: (minXPosition + maxXPosition) / 2,
    y: (minYPosition + maxYPosition) / 2,
  };

  // Y positioning
  // Sort position of fighters in the target side of the map
  const sortedPositions = [
    ...fighters
      .filter((animationFighter) => {
        // Remove animationFighter not positioned yet
        if (animationFighter.animation.container.y < minYPosition
          || animationFighter.animation.container.y > maxYPosition) return false;
        // Add self, for more natural movements
        if (animationFighter === fighter) return true;
        // Get fighters in the target side of the map
        return (fighter.team === 'L')
          ? animationFighter.animation.container.x < 250
          : animationFighter.animation.container.x > 250;
      })
      // Get y positions
      .map((animationFighter) => animationFighter.animation.container.y),
    ...(takenPositions?.map((position) => position.y) || []),
  ]
    // Sort ascending
    .sort((a, b) => a - b);

  // Add max and min Y position
  sortedPositions.unshift(minYPosition);
  sortedPositions.push(maxYPosition);

  // Find the largest gap
  let largestGap = 0;
  let largestGapPositions: {start: number, end: number} | null = null;
  // List every large enough gap
  const comfortYMargin = 15;
  const comfortableGapPositions: {start: number, end: number}[] = [];

  // Loop throught fighters Y
  for (let i = 1; i < sortedPositions.length; i++) {
    const gap = sortedPositions[i]! - sortedPositions[i - 1]!;
    const gapPosition = { start: sortedPositions[i - 1]!, end: sortedPositions[i]! };
    // Add to lerge enough gap list
    if (gap > comfortYMargin * 2) comfortableGapPositions.push(gapPosition);
    // Update largest gap
    if (gap > largestGap) {
      largestGap = gap;
      largestGapPositions = gapPosition;
    }
  }

  // Should never happen
  if (!largestGapPositions) {
    throw new Error('No gap found');
  }

  // Chose a random large enough gap position
  let chosenGapPositions: {start: number, end: number} = comfortableGapPositions.length
    ? randomItem(comfortableGapPositions)
    : largestGapPositions;

  // If it is smaller than twice the largest gap, chose the largest gap instead
  if (chosenGapPositions.end - chosenGapPositions.start < largestGap * 0.5) {
    chosenGapPositions = largestGapPositions;
  }

  // Chose an y within the chosen gap
  // Candidate interval length
  const comfortSpace = chosenGapPositions.end - chosenGapPositions.start - comfortYMargin * 2;
  // If not enough space, just go in the middle of the gap
  if (comfortSpace <= 0) {
    resultPosition.y = (chosenGapPositions.start + chosenGapPositions.end) / 2;
  // Else, chose a random y in the candidate interval
  } else {
    resultPosition.y = chosenGapPositions.start
      + comfortYMargin
      + comfortSpace * 0.15
      + Math.random() * (
        chosenGapPositions.end
        - chosenGapPositions.start
        - comfortYMargin * 2
        - comfortSpace * 0.2
      );
  }

  // If chosen y is too close to the edges, stick it to the edge
  // This way space is optimized for crowded fights
  if (resultPosition.y <= minYPosition + comfortYMargin
    && chosenGapPositions.start === minYPosition) resultPosition.y = minYPosition + 1;
  if (resultPosition.y >= maxYPosition - comfortYMargin
    && chosenGapPositions.end === maxYPosition) resultPosition.y = maxYPosition - 1;

  // X positioning
  // Random x position from 0 to 1
  let randomXPositionFactor = 0.4 + Math.random() * 0.6;

  // Adjust x position to get more natural looking movements
  const possibleWeapon = weapons.find((weapon) => weapon.name === fighter.animation.weapon);
  // If fighter has a weapon
  if (possibleWeapon) {
    // A bit further if long range
    if (possibleWeapon.types.includes(WeaponType.LONG)) randomXPositionFactor -= 0.25;
    // Further if thrown weapon
    if (possibleWeapon.types.includes(WeaponType.THROWN)) randomXPositionFactor -= 0.5;
    // Confidence boost if heavy weapon and bodybuilder
    if (possibleWeapon.types.includes(WeaponType.HEAVY)
      && fighter.skills.some((skillId) => skillId === SkillId.bodybuilder)) {
      randomXPositionFactor += 0.15;
    }
    // Confidence boost if sharp weapon and weaponMaster
    if (possibleWeapon.types.includes(WeaponType.SHARP)
      && fighter.skills.some((skillId) => skillId === SkillId.weaponsMaster)) {
      randomXPositionFactor += 0.15;
    }
  // Confidence boost if unarmed and martialArts
  } else if (fighter.skills.some((skillId) => skillId === SkillId.martialArts)) {
    randomXPositionFactor += 0.25;
  }

  // Adjust x position to overall gameplan
  const skillPositionModifiers: Partial<Record<SkillId, number>> = {
    [SkillId.hideaway]: -0.25,
    [SkillId.monk]: -0.25,
    [SkillId.untouchable]: -0.25,
    [SkillId.sixthSense]: -0.1,
    [SkillId.balletShoes]: -0.05,
    [SkillId.shield]: 0.05,
    [SkillId.toughenedSkin]: 0.05,
    [SkillId.leadSkeleton]: 0.1,
    [SkillId.armor]: 0.1,
    [SkillId.ironHead]: 0.15,
  };

  // Apply position modifier for each fighter's skill
  fighter.skills.forEach((skillId) => {
    randomXPositionFactor += skillPositionModifiers[skillId] ?? 0;
  });

  // Clamp position to 0 - 1
  randomXPositionFactor = Math.max(0, Math.min(1, randomXPositionFactor));

  // Interpolate it to minXPosition - maxXPosition
  resultPosition.x = minXPosition + randomXPositionFactor * (maxXPosition - minXPosition);

  return resultPosition;
};

const getMultipleRandomPosition = (
  fighters: AnimationFighter[],
  multipleFighters: AnimationFighter[],
): { x: number; y: number }[] => {
  const positions: { x: number; y: number }[] = [];

  for (const fighter of multipleFighters) {
    positions.push(getRandomPosition(fighters, fighter, positions));
  }
  return positions;
};

export {
  getRandomPosition,
  getMultipleRandomPosition,
};
