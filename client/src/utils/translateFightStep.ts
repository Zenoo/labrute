import { TFunction } from 'react-i18next';
import { FightStep } from '@eternaltwin/labrute-core/types';

const translateFightStep = (fightStep: FightStep, t: TFunction) => {
  switch (fightStep.action) {
    case 'saboteur':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute,
        weapon: t(fightStep.weapon),
      });
    case 'leave':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'arrive':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'trash':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute,
        name: t(fightStep.name),
      });
    case 'steal':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute,
        name: t(fightStep.name),
        target: fightStep.target,
      });
    case 'trap':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'heal':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'resist':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'survive':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'hit':
      if (fightStep.weapon) {
        if (fightStep.thrown) {
          return t('fight.step.hitThrow', {
            brute: fightStep.brute,
            damage: fightStep.damage,
            target: fightStep.target,
            weapon: t(fightStep.weapon),
          });
        }
        return t('fight.step.hitWith', {
          brute: fightStep.brute,
          damage: fightStep.damage,
          target: fightStep.target,
          weapon: t(fightStep.weapon),
        });
      }
      return t('fight.step.hit', {
        brute: fightStep.brute,
        damage: fightStep.damage,
        target: fightStep.target,
      });
    case 'hammer':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'flashFlood':
      if (fightStep.weapon) {
        return t(`fight.step.${fightStep.action}`, {
          brute: fightStep.brute,
          damage: fightStep.damage,
          target: fightStep.target,
          weapon: t(fightStep.weapon),
        });
      }
      return '';
    case 'poison':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'hypnotise':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute,
        pet: t(fightStep.pet),
      });
    case 'moveTo':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'eat':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'moveBack':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'equip':
      return t(`fight.step.${fightStep.action}`, {
        brute: fightStep.brute,
        name: t(fightStep.name),
      });
    case 'attemptHit':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'block':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'evade':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'break':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'sabotage':
      return t(`fight.step.${fightStep.action}`, {
        fighter: fightStep.fighter,
        opponent: fightStep.opponent,
        weapon: t(fightStep.weapon),
      });
    case 'disarm':
      return t(`fight.step.${fightStep.action}`, {
        fighter: fightStep.fighter,
        opponent: fightStep.opponent,
        weapon: t(fightStep.weapon),
      });
    case 'death':
      return t(`fight.step.${fightStep.action}`, fightStep);
    case 'throw':
      return t(`fight.step.${fightStep.action}`, {
        fighter: fightStep.fighter,
        opponent: fightStep.opponent,
        weapon: t(fightStep.weapon),
      });
    case 'end':
      return t(`fight.step.${fightStep.action}`, fightStep);
    default:
      return '';
  }
};

export default translateFightStep;