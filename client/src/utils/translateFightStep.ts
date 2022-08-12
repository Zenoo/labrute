import { TFunction } from 'react-i18next';
import { FightStep, PetName, StepFighter } from '@eternaltwin/labrute-core/types';

const getFighterName = (fighter: StepFighter, t: TFunction) => (fighter.type === 'brute'
  ? fighter.name
  : t(fighter.name as PetName));

const translateFightStep = (fightStep: FightStep, t: TFunction) => {
  switch (fightStep.action) {
    case 'saboteur':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute.name,
        weapon: t(fightStep.weapon),
      });
    case 'leave':
      return t(`fight.step.${fightStep.action}`, {
        name: getFighterName(fightStep.fighter, t),
      });
    case 'arrive':
      return t(`fight.step.${fightStep.action}`, {
        name: getFighterName(fightStep.fighter, t),
      });
    case 'trash':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute.name,
        name: t(fightStep.name),
      });
    case 'steal':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        name: t(fightStep.name),
        target: getFighterName(fightStep.target, t),
      });
    case 'trap':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        target: getFighterName(fightStep.target, t),
      });
    case 'heal':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        amount: fightStep.amount,
      });
    case 'resist':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
      });
    case 'survive':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
      });
    case 'hit': {
      const data = {
        fighter: getFighterName(fightStep.fighter, t),
        damage: fightStep.damage,
        target: getFighterName(fightStep.target, t),
      };
      if (fightStep.weapon) {
        if (fightStep.thrown) {
          return t('fight.step.hitThrow', {
            ...data,
            weapon: t(fightStep.weapon),
          });
        }
        return t('fight.step.hitWith', {
          ...data,
          weapon: t(fightStep.weapon),
        });
      }
      return t('fight.step.hit', data);
    }
    case 'hammer':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        damage: fightStep.damage,
        target: getFighterName(fightStep.target, t),
      });
    case 'flashFlood':
      if (fightStep.weapon) {
        return t(`fight.step.${fightStep.action}`, {
          fighter: getFighterName(fightStep.fighter, t),
          damage: fightStep.damage,
          target: getFighterName(fightStep.target, t),
          weapon: t(fightStep.weapon),
        });
      }
      return '';
    case 'poison':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.fighter, t),
        damage: fightStep.damage,
        target: getFighterName(fightStep.target, t),
      });
    case 'hypnotise':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        pet: getFighterName(fightStep.pet, t),
      });
    case 'moveTo':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        target: getFighterName(fightStep.target, t),
      });
    case 'eat':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        target: getFighterName(fightStep.target, t),
        heal: fightStep.heal,
      });
    case 'moveBack':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
      });
    case 'equip':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        name: t(fightStep.name),
      });
    case 'attemptHit':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        target: getFighterName(fightStep.target, t),
      });
    case 'block':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
      });
    case 'evade':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
      });
    case 'break':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        opponent: getFighterName(fightStep.opponent, t),
      });
    case 'sabotage':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        opponent: getFighterName(fightStep.opponent, t),
        weapon: t(fightStep.weapon),
      });
    case 'disarm':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        opponent: getFighterName(fightStep.opponent, t),
        weapon: t(fightStep.weapon),
      });
    case 'death':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
      });
    case 'throw':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        opponent: getFighterName(fightStep.opponent, t),
        weapon: t(fightStep.weapon),
      });
    case 'end':
      return t(`fight.step.${fightStep.action}`, {
        winner: getFighterName(fightStep.winner, t),
        loser: getFighterName(fightStep.loser, t),
      });
    case 'counter':
      return t(`fight.step.${fightStep.action}`, {
        fighter: getFighterName(fightStep.fighter, t),
        opponent: getFighterName(fightStep.opponent, t),
      });
    case 'skillExpire':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        skill: t(fightStep.skill),
      });
    case 'skillActivate':
      return t(`fight.step.${fightStep.action}`, {
        brute: getFighterName(fightStep.brute, t),
        skill: t(fightStep.skill),
      });
    default:
      return '';
  }
};

export default translateFightStep;