import achievement from './achievement.json';
import achievementRanking from './achievementRanking.json';
import arena from './arena.json';
import ascend from './ascend.json';
import bannedUsers from './bannedUsers.json';
import bruteNotFound from './bruteNotFound.json';
import cell from './cell.json';
import common from './common.json';
import destiny from './destiny.json';
import followingFeed from './followingFeed.json';
import generating from './generating.json';
import global from './global.json';
import globalTournament from './globalTournament.json';
import hall from './hall.json';
import home from './home.json';
import inventory from './inventory.json';

const it = {
  achievement,
  achievementRanking,
  arena,
  ascend,
  bannedUsers,
  bruteNotFound,
  cell,
  common,
  destiny,
  followingFeed,
  generating,
  global,
  globalTournament,
  hall,
  home,
  inventory,
} as const;

export default it;
