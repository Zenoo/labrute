import { TFunction } from 'react-i18next';
import { FightStep, Fighter, SkillById, StepType, WeaponById } from '@labrute/core';
import { BossName, PetName } from '@labrute/prisma';

const getFighterName = (
  fighters: Fighter[],
  fighterId: number,
  t: TFunction
) => {
  const fighter = fighters.find((f) => f.index === fighterId);
  if (!fighter) {
    return '';
  }

  if (fighter.type === 'brute') {
    return fighter.name;
  }

  return t(fighter.name as PetName | BossName);
};

const translateFightStep = (
  fighters: Fighter[],
  step: FightStep,
  t: TFunction
) => {
  switch (step.a) {
    case StepType.Saboteur:
      return t('fight.step.saboteur', {
        weapon: t(WeaponById[step.w]),
      });
    case StepType.Leave:
      return t('fight.step.leave', {
        name: getFighterName(fighters, step.f, t),
      });
    case StepType.Arrive:
      return t('fight.step.arrive', {
        name: getFighterName(fighters, step.f, t),
      });
    case StepType.Trash:
      return t('fight.step.trash', {
        brute: getFighterName(fighters, step.b, t),
        name: t(WeaponById[step.w]),
      });
    case StepType.Steal:
      return t('fight.step.steal', {
        brute: getFighterName(fighters, step.b, t),
        name: t(WeaponById[step.w]),
        target: getFighterName(fighters, step.t, t),
      });
    case StepType.Trap:
      return t('fight.step.trap', {
        brute: getFighterName(fighters, step.b, t),
        target: getFighterName(fighters, step.t, t),
      });
    case StepType.Heal:
      return t('fight.step.heal', {
        brute: getFighterName(fighters, step.b, t),
        amount: step.h,
      });
    case StepType.Resist:
      return t('fight.step.resist', {
        brute: getFighterName(fighters, step.b, t),
      });
    case StepType.Survive:
      return t('fight.step.survive', {
        brute: getFighterName(fighters, step.b, t),
      });
    case StepType.Hit: {
      const data = {
        fighter: getFighterName(fighters, step.f, t),
        damage: step.d,
        target: getFighterName(fighters, step.t, t),
      };
      let text = '';

      if (typeof step.w !== 'undefined') {
        text += t('fight.step.hitWith', {
          ...data,
          weapon: t(WeaponById[step.w]),
        });
      } else {
        text += t('fight.step.hit', data);
      }

      if (step.s) {
        text += ' ';
        text += t('fight.step.stun', {
          brute: getFighterName(fighters, step.t, t),
        });
      }

      return text;
    }
    case StepType.Hammer:
      return t('fight.step.hammer', {
        brute: getFighterName(fighters, step.f, t),
        damage: step.d,
        target: getFighterName(fighters, step.t, t),
      });
    case StepType.Bomb:
      return t('fight.step.bomb', {
        fighter: getFighterName(fighters, step.f, t),
        damage: Object.values(step.d).join(', '),
      });
    case StepType.FlashFlood:
      if (typeof step.w !== 'undefined') {
        return t('fight.step.flashFlood', {
          brute: getFighterName(fighters, step.f, t),
          damage: step.d,
          target: getFighterName(fighters, step.t, t),
          weapon: t(WeaponById[step.w]),
        });
      }
      return '';
    case StepType.Poison:
      return t('fight.step.poison', {
        brute: getFighterName(fighters, step.f, t),
        damage: step.d,
        target: getFighterName(fighters, step.t, t),
      });
    case StepType.Hypnotise:
      return t('fight.step.hypnotise', {
        brute: getFighterName(fighters, step.b, t),
      });
    case StepType.Move:
      return t('fight.step.moveTo', {
        fighter: getFighterName(fighters, step.f, t),
        target: getFighterName(fighters, step.t, t),
      });
    case StepType.Eat:
      return t('fight.step.eat', {
        brute: getFighterName(fighters, step.b, t),
        target: getFighterName(fighters, step.t, t),
        heal: step.h,
      });
    case StepType.MoveBack:
      return t('fight.step.moveBack', {
        fighter: getFighterName(fighters, step.f, t),
      });
    case StepType.Equip:
      return t('fight.step.equip', {
        brute: getFighterName(fighters, step.b, t),
        name: t(WeaponById[step.w]),
      });
    case StepType.AttemptHit: {
      let text = t('fight.step.attemptHit', {
        fighter: getFighterName(fighters, step.f, t),
        target: getFighterName(fighters, step.t, t),
      });

      if (step.b) {
        text += ' ';
        text += t('fight.step.break', {
          fighter: getFighterName(fighters, step.f, t),
          opponent: getFighterName(fighters, step.t, t),
        });
      }

      return text;
    }
    case StepType.Block:
      return t('fight.step.block', {
        fighter: getFighterName(fighters, step.f, t),
      });
    case StepType.Evade:
      return t('fight.step.evade', {
        fighter: getFighterName(fighters, step.f, t),
      });
    case StepType.Sabotage:
      return t('fight.step.sabotage', {
        fighter: getFighterName(fighters, step.f, t),
        opponent: getFighterName(fighters, step.t, t),
        weapon: t(WeaponById[step.w]),
      });
    case StepType.Disarm:
      return t('fight.step.disarm', {
        fighter: getFighterName(fighters, step.f, t),
        opponent: getFighterName(fighters, step.t, t),
        weapon: t(WeaponById[step.w]),
      });
    case StepType.Death:
      return t('fight.step.death', {
        fighter: getFighterName(fighters, step.f, t),
      });
    case StepType.Throw:
      return t('fight.step.throw', {
        fighter: getFighterName(fighters, step.f, t),
        opponent: getFighterName(fighters, step.t, t),
        weapon: t(WeaponById[step.w]),
      });
    case StepType.End:
      return t('fight.step.end', {
        winner: getFighterName(fighters, step.w, t),
        loser: getFighterName(fighters, step.l, t),
      });
    case StepType.Counter:
      return t('fight.step.counter', {
        fighter: getFighterName(fighters, step.f, t),
        opponent: getFighterName(fighters, step.t, t),
      });
    case StepType.SkillExpire:
      return t('fight.step.skillExpire', {
        brute: getFighterName(fighters, step.b, t),
        skill: t(SkillById[step.s]),
      });
    case StepType.SkillActivate:
      return t('fight.step.skillActivate', {
        brute: getFighterName(fighters, step.b, t),
        skill: t(SkillById[step.s]),
      });
    case StepType.Spy:
      return t('fight.step.spy', {
        brute: getFighterName(fighters, step.b, t),
        opponent: getFighterName(fighters, step.t, t),
      });
    case StepType.Vampirism:
      return t('fight.step.vampirism', {
        brute: getFighterName(fighters, step.b, t),
        opponent: getFighterName(fighters, step.t, t),
        damage: step.d,
        heal: step.h,
      });
    case StepType.Haste:
      return t('fight.step.haste', {
        brute: getFighterName(fighters, step.b, t),
        opponent: getFighterName(fighters, step.t, t),
        damage: step.d,
      });
    case StepType.Treat:
      return t('fight.step.treat', {
        brute: getFighterName(fighters, step.b, t),
        target: getFighterName(fighters, step.t, t),
        heal: step.h,
      });
    case StepType.DropShield:
      return t('fight.step.dropShield', {
        brute: getFighterName(fighters, step.b, t),
      });
    default:
      return '';
  }
};

export default translateFightStep;
