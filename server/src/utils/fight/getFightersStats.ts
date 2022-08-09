import { Brute, FighterStats } from '@eternaltwin/labrute-core/types';
import skills from '@eternaltwin/labrute-core/brute/skills';
import weapons from '@eternaltwin/labrute-core/brute/weapons';

const getFightersStats = (brutes: Brute[]): FighterStats[] => {
  const fightersStats: FighterStats[] = [];
  brutes.forEach((brute) => {
    const fighterStats = {
      name: brute.name,
      type: 'brute' as const,
      hp: brute.data.stats.hp,
      strength: brute.data.stats.strength.value,
      agility: brute.data.stats.agility.value,
      speed: brute.data.stats.speed.value,
      initiative: 0,
      counter: 0,
      autoCounterOnBlock: false,
      combo: 0,
      reversal: 0,
      block: 0,
      accuracy: 0,
      armor: 0,
      disarm: 0,
      evasion: 0,
      sabotage: false,
      bodybuilder: false,
      survival: false,
      balletShoes: false,
      determination: false,
      ironHead: false,
      skills: skills.filter((skill) => skill.uses && brute.data.skills.includes(skill.name)),
      weapons: weapons.filter((weapon) => brute.data.weapons.includes(weapon.name)),
      shield: false,
      activeSkills: [],
      activeWeapon: null,
      sabotagedWeapon: null,
    };

    /* INITIATIVE */

    // -2 initiative for `firstStrike`
    if (brute.data.skills.includes('firstStrike')) {
      fighterStats.initiative -= 2;
    }
    // +2 initiative for `reconnaissance`
    if (brute.data.skills.includes('reconnaissance')) {
      fighterStats.initiative += 2;
    }

    /* COUNTER */

    // +10% counter for `sixthSense`
    if (brute.data.skills.includes('sixthSense')) {
      fighterStats.counter += 0.1;
    }

    // Automatic counter on block for `counterAttack`
    if (brute.data.skills.includes('counterAttack')) {
      fighterStats.autoCounterOnBlock = true;
      fighterStats.block += 0.1;
    }

    /* COMBO */

    // +20% combo for `fistsOfFury`
    if (brute.data.skills.includes('fistsOfFury')) {
      fighterStats.combo += 0.2;
    }

    /* REVERSAL */

    // +33% reversal for `hostility`
    if (brute.data.skills.includes('hostility')) {
      fighterStats.reversal += 0.33;
    }

    /* BLOCK */

    // +45% block for `shield`
    if (brute.data.skills.includes('shield')) {
      fighterStats.block += 0.45;
      fighterStats.shield = true;
    }

    // +10% block for `counterAttack`
    if (brute.data.skills.includes('counterAttack')) {
      fighterStats.block += 0.1;
    }

    /* ACCURACY */

    // +30% accuracy for `relentless`
    if (brute.data.skills.includes('relentless')) {
      fighterStats.accuracy += 0.3;
    }

    /* ARMOR */

    // +5 armor for `armor`
    if (brute.data.skills.includes('armor')) {
      fighterStats.armor += 5;
    }

    // +2 armor for `toughenedSkin`
    if (brute.data.skills.includes('toughenedSkin')) {
      fighterStats.armor += 2;
    }

    /* DISARM */

    // +50% disarm for `shock`
    if (brute.data.skills.includes('shock')) {
      fighterStats.disarm += 0.5;
    }

    /* EVASION */

    // +30% evasion for `untouchable`
    if (brute.data.skills.includes('untouchable')) {
      fighterStats.evasion += 0.3;
    }

    /* PASSIVES */

    if (brute.data.skills.includes('sabotage')) {
      fighterStats.sabotage = true;
    }
    if (brute.data.skills.includes('bodybuilder')) {
      fighterStats.bodybuilder = true;
    }
    if (brute.data.skills.includes('survival')) {
      fighterStats.survival = true;
    }
    if (brute.data.skills.includes('balletShoes')) {
      fighterStats.balletShoes = true;
    }
    if (brute.data.skills.includes('determination')) {
      fighterStats.determination = true;
    }
    if (brute.data.skills.includes('ironHead')) {
      fighterStats.ironHead = true;
    }

    fightersStats.push(fighterStats);
  });

  return fightersStats;
};

export default getFightersStats;