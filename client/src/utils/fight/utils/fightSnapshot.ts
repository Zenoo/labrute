import type { AnimationFighter } from './findFighter';

type FighterState = Pick<AnimationFighter,
  'hp' | 'maxHp' | 'strength' | 'agility' | 'speed' | 'size' | 'team' | 'master'
  | 'weapons' | 'skills' | 'stunned' | 'trapped' | 'dead' | 'fierceBrute' | 'resist'
  | 'HUDFocused'
>;

export interface FighterSnapshot {
  readonly fighter: AnimationFighter;
  readonly state: FighterState;
  readonly pose: AnimationFighter['animation']['seekPose'];
  readonly weapon: AnimationFighter['animation']['weapon'];
  readonly shield: boolean;
  readonly animationSpeed: number;
  readonly container: {
    x: number;
    y: number;
    zIndex: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    alpha: number;
    visible: boolean;
  };
}

export interface FightSnapshot {
  readonly activeFighters: readonly AnimationFighter[];
  readonly fighters: readonly FighterSnapshot[];
}

/**
 * Retains fighter/holder identities, but copies every mutable data value.
 * Pass seeking=true when seekPose, rather than the rendered animation, is authoritative.
 * allFighters must include retained fighters that have left the active array.
 */
export const captureFightSnapshot = (
  fighters: AnimationFighter[],
  allFighters: readonly AnimationFighter[],
  seeking = false,
): FightSnapshot => ({
  activeFighters: [...fighters],
  fighters: allFighters.map((fighter) => {
    const { animation: holder } = fighter;
    const { container } = holder;
    return {
      fighter,
      state: {
        hp: fighter.hp,
        maxHp: fighter.maxHp,
        strength: fighter.strength,
        agility: fighter.agility,
        speed: fighter.speed,
        size: fighter.size,
        team: fighter.team,
        master: fighter.master,
        weapons: structuredClone(fighter.weapons),
        skills: structuredClone(fighter.skills),
        stunned: fighter.stunned,
        trapped: fighter.trapped,
        dead: fighter.dead,
        fierceBrute: fighter.fierceBrute,
        resist: fighter.resist,
        HUDFocused: fighter.HUDFocused,
      },
      pose: {
        ...holder.seekPose,
        animation: seeking ? holder.seekPose.animation : holder.animation,
      },
      weapon: holder.weapon,
      shield: holder.shield,
      animationSpeed: holder.baseAnimationSpeed,
      container: {
        x: container.x,
        y: container.y,
        zIndex: container.zIndex,
        scaleX: container.scale.x,
        scaleY: container.scale.y,
        rotation: container.rotation,
        alpha: container.alpha,
        visible: container.visible,
      },
    };
  }),
});

/**
 * Restores logical state without rendering, invoking animation events, or touching filters/HUD.
 * The caller cancels pending tweens first, then rebuilds visuals from each holder's seekPose.
 */
export const restoreFightSnapshot = (
  snapshot: FightSnapshot,
  fighters: AnimationFighter[],
): void => {
  for (const saved of snapshot.fighters) {
    const { fighter } = saved;
    const { animation: holder } = fighter;
    const { container } = holder;
    Object.assign(fighter, structuredClone(saved.state));
    Object.assign(holder.seekPose, saved.pose);
    holder.weapon = saved.weapon;
    holder.shield = saved.shield;

    holder.animationSpeed = saved.animationSpeed;

    container.x = saved.container.x;
    container.y = saved.container.y;
    container.zIndex = saved.container.zIndex;
    container.scale.x = saved.container.scaleX;
    container.scale.y = saved.container.scaleY;
    container.rotation = saved.container.rotation;
    container.alpha = saved.container.alpha;
    container.visible = saved.container.visible;
  }
  fighters.splice(0, fighters.length, ...snapshot.activeFighters);
};
