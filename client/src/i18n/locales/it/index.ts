import achievement from './achievement.json';
import achievementRanking from './achievementRanking.json';
import arena from './arena.json';
import ascend from './ascend.json';
import bannedUsers from './bannedUsers.json';
import bruteNotFound from './bruteNotFound.json';
import common from './common.json';
import global from './global.json';
import home from './home.json';

const it = {
  achievement,
  achievementRanking,
  arena,
  ascend,
  bannedUsers,
  bruteNotFound,
  common,
  global,
  home,
} as const;

export default it;
