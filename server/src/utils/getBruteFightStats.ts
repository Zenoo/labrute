import { Brute } from '@eternaltwin/labrute-core/types';

const getBruteFightStats = (brute: Brute) => {
  const initiative = 0;

  // // +200 initiative for `firstStrike`
  // if (brute.data.skills.includes('firstStrike')) {
  //   initiative += 200;
  // }
  // // -200 initiative for `reconnaissance`
  // if (brute.data.skills.includes('reconnaissance')) {
  //   initiative -= 200;
  // }

  return {
    // Main stats
    hp: brute.data.stats.hp,
    strength: brute.data.stats.strength.value,
    agility: brute.data.stats.agility.value,
    speed: brute.data.stats.speed.value,
    // Hidden stats
    initiative,
    interval: 100, // 100 for hand combat ? Not sure
    reach: 0, // 0 for hand combat ? Not sure
  };
};

export default getBruteFightStats;