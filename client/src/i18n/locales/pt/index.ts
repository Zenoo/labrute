import achievement from './achievement.json';
import achievementRanking from './achievementRanking.json';
import arena from './arena.json';
import ascend from './ascend.json';
import common from './common.json';
import global from './global.json';
import home from './home.json';

const pt = {
  achievement,
  achievementRanking,
  arena,
  ascend,
  common,
  global,
  home,
} as const;

export default pt;
