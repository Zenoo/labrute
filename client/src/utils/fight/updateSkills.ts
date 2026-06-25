import {
  entries, SkillById, SkillId
} from '@labrute/core';
import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';
import {
  SKILL_SIZE, SKILL_SPACING, SKILLS_PER_ROW, WEAPON_SIZE, WEAPON_SPACING, WEAPONS_PER_ROW
} from './utils/fightPositions';
import { AnimationFighter } from './utils/findFighter';
import { Easing, tween } from './utils/tween';
import { Spritesheets } from './utils/spritesheet';

const addSkill = (
  app: Application,
  brute: AnimationFighter,
  skillId: SkillId,
  speed: React.MutableRefObject<number>
) => {
  const skillSprite = brute.teamSkillsIllustrations.find(
    (illustration) => illustration.name === skillId.toString()
  );
  if (!skillSprite) {
    return;
  }

  // Create a 3x copy of the skill sprite
  const skillCopy = new Sprite(skillSprite.texture);
  skillCopy.scale.x = skillSprite.scale.x * 3;
  skillCopy.scale.y = skillSprite.scale.y * 3;
  skillCopy.filters = skillSprite.filters;
  skillCopy.zIndex = 1000;

  // Center it on the target skill sprite position
  const originalWidth = skillSprite.width;
  const originalHeight = skillSprite.height;
  const copyWidth = originalWidth * 3;
  const copyHeight = originalHeight * 3;

  skillCopy.x = skillSprite.x - (copyWidth - originalWidth) / 2;
  skillCopy.y = skillSprite.y - (copyHeight - originalHeight) / 2;

  // Add to stage
  app.stage.addChild(skillCopy);

  // Animate: scale down to normal size and fade in
  tween(skillCopy, {
    duration: 2 / speed.current,
    ease: Easing.easeOutQuad,
    width: skillSprite.width,
    height: skillSprite.height,
    x: skillSprite.x,
    y: skillSprite.y,
    alpha: 1,
  }).then(() => {
    // Remove the copy after animation
    skillCopy.destroy();
  }).catch(console.error);
};

export const updateSkills = (
  app: Application,
  spritesheets: Spritesheets,
  brute: AnimationFighter,
  skillId?: SkillId,
  action?: 'remove' | 'add',
  skillTier?: number,
  speed?: React.MutableRefObject<number>
) => {
  const spritesheet = spritesheets.skills;

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Empty list
    brute.teamSkillsIllustrations.forEach((illustration) => {
      illustration.destroy();
    });
    brute.teamSkillsIllustrations.length = 0;
  }

  // Remove skill
  if (action === 'remove') {
    if (typeof skillId === 'undefined') {
      throw new Error('Skill not found');
    }

    delete brute.skills[skillId];
  } else if (action === 'add') {
    if (typeof skillId === 'undefined') {
      throw new Error('Skill not found');
    }

    if (typeof skillTier === 'undefined') {
      throw new Error('Skill tier not found');
    }

    if (brute.skills[skillId]) {
      brute.skills[skillId].uses = (brute.skills[skillId].uses || 0) + 1;
    } else {
      brute.skills[skillId] = {
        tier: skillTier,
        uses: 1,
      };
    }
  }

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Calculate starting Y position based on number of weapons
    const weaponCount = Object.keys(brute.weapons).length;
    const weaponRows = Math.ceil(weaponCount / WEAPONS_PER_ROW);
    const skillsStartY = weaponRows * (WEAPON_SIZE + WEAPON_SPACING) + 40;

    // Generate new list
    entries(brute.skills)
      // Ignore non usable skills
      .filter(([, currentSkill]) => currentSkill.uses)
      .forEach(([s, currentSkill], index) => {
        const skillName = SkillById[+s as SkillId];

        const texture = spritesheet.textures[`tier-${currentSkill.tier}/${skillName}.png`];

        if (!texture) {
          throw new Error(`Skill texture not found: tier-${currentSkill.tier}/${skillName}.png`);
        }

        texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

        const sprite = new Sprite(texture);

        sprite.name = s.toString();
        sprite.zIndex = 99;
        sprite.width = SKILL_SIZE;
        sprite.height = SKILL_SIZE;

        if (brute.team === 'L') {
          sprite.x = (index % SKILLS_PER_ROW) * (SKILL_SIZE + SKILL_SPACING) + 60;
        } else {
          sprite.x = 480 - ((index % SKILLS_PER_ROW) * (SKILL_SIZE + SKILL_SPACING) + 60);
        }
        sprite.y = Math.floor(index / SKILLS_PER_ROW) * (SKILL_SIZE + SKILL_SPACING) + skillsStartY;

        app.stage.addChild(sprite);
        brute.teamSkillsIllustrations.push(sprite);
      });

    if (action === 'add' && typeof skillId !== 'undefined' && typeof skillTier !== 'undefined' && speed) {
      addSkill(app, brute, skillId, speed);
    }
  }

};
