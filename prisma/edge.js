
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  lang: 'lang',
  name: 'name',
  admin: 'admin',
  moderator: 'moderator',
  connexionToken: 'connexionToken',
  bruteLimit: 'bruteLimit',
  gold: 'gold',
  fightSpeed: 'fightSpeed',
  backgroundMusic: 'backgroundMusic'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.BruteBodyScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  p2: 'p2',
  p3: 'p3',
  p4: 'p4',
  p7: 'p7',
  p1: 'p1',
  p1a: 'p1a',
  p1b: 'p1b',
  p6: 'p6',
  p8: 'p8',
  p7b: 'p7b',
  p5: 'p5'
};

exports.Prisma.BruteColorsScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  col0: 'col0',
  col0a: 'col0a',
  col0c: 'col0c',
  col1: 'col1',
  col1a: 'col1a',
  col1b: 'col1b',
  col1c: 'col1c',
  col1d: 'col1d',
  col3: 'col3',
  col2: 'col2',
  col2b: 'col2b',
  col3b: 'col3b',
  col2a: 'col2a',
  col4: 'col4',
  col4a: 'col4a',
  col4b: 'col4b'
};

exports.Prisma.BruteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  destinyPath: 'destinyPath',
  previousDestinyPath: 'previousDestinyPath',
  level: 'level',
  xp: 'xp',
  hp: 'hp',
  enduranceStat: 'enduranceStat',
  enduranceModifier: 'enduranceModifier',
  enduranceValue: 'enduranceValue',
  strengthStat: 'strengthStat',
  strengthModifier: 'strengthModifier',
  strengthValue: 'strengthValue',
  agilityStat: 'agilityStat',
  agilityModifier: 'agilityModifier',
  agilityValue: 'agilityValue',
  speedStat: 'speedStat',
  speedModifier: 'speedModifier',
  speedValue: 'speedValue',
  ranking: 'ranking',
  gender: 'gender',
  userId: 'userId',
  weapons: 'weapons',
  skills: 'skills',
  pets: 'pets',
  masterId: 'masterId',
  pupilsCount: 'pupilsCount',
  clanId: 'clanId',
  registeredForTournament: 'registeredForTournament',
  nextTournamentDate: 'nextTournamentDate',
  currentTournamentDate: 'currentTournamentDate',
  currentTournamentStepWatched: 'currentTournamentStepWatched',
  lastFight: 'lastFight',
  fightsLeft: 'fightsLeft',
  victories: 'victories',
  opponentsGeneratedAt: 'opponentsGeneratedAt',
  canRankUpSince: 'canRankUpSince',
  favorite: 'favorite',
  wantToJoinClanId: 'wantToJoinClanId'
};

exports.Prisma.FightScalarFieldEnum = {
  id: 'id',
  date: 'date',
  brute1Id: 'brute1Id',
  brute2Id: 'brute2Id',
  winner: 'winner',
  loser: 'loser',
  steps: 'steps',
  fighters: 'fighters'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  date: 'date',
  currentBruteId: 'currentBruteId',
  type: 'type',
  level: 'level',
  brute: 'brute',
  fightId: 'fightId',
  xp: 'xp'
};

exports.Prisma.DestinyChoiceScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  path: 'path',
  type: 'type',
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stat1: 'stat1',
  stat1Value: 'stat1Value',
  stat2: 'stat2',
  stat2Value: 'stat2Value'
};

exports.Prisma.TournamentScalarFieldEnum = {
  id: 'id',
  date: 'date',
  type: 'type',
  rounds: 'rounds'
};

exports.Prisma.TournamentStepScalarFieldEnum = {
  id: 'id',
  tournamentId: 'tournamentId',
  step: 'step',
  fightId: 'fightId'
};

exports.Prisma.TournamentAchievementScalarFieldEnum = {
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  achievement: 'achievement',
  achievementCount: 'achievementCount'
};

exports.Prisma.TournamentGoldScalarFieldEnum = {
  id: 'id',
  date: 'date',
  userId: 'userId',
  gold: 'gold'
};

exports.Prisma.TournamentXpScalarFieldEnum = {
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  xp: 'xp'
};

exports.Prisma.AchievementScalarFieldEnum = {
  id: 'id',
  name: 'name',
  count: 'count',
  bruteId: 'bruteId',
  userId: 'userId'
};

exports.Prisma.TitleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  count: 'count'
};

exports.Prisma.BruteReportScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  reason: 'reason',
  count: 'count',
  date: 'date',
  status: 'status'
};

exports.Prisma.ServerStateScalarFieldEnum = {
  id: 'id',
  ready: 'ready',
  globalTournamentValid: 'globalTournamentValid'
};

exports.Prisma.BannedWordScalarFieldEnum = {
  id: 'id',
  word: 'word'
};

exports.Prisma.WorkerJobScalarFieldEnum = {
  id: 'id',
  worker: 'worker',
  payload: 'payload'
};

exports.Prisma.ClanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  limit: 'limit',
  points: 'points',
  boss: 'boss',
  damageOnBoss: 'damageOnBoss',
  masterId: 'masterId'
};

exports.Prisma.ClanThreadScalarFieldEnum = {
  id: 'id',
  clanId: 'clanId',
  creatorId: 'creatorId',
  title: 'title',
  locked: 'locked',
  pinned: 'pinned',
  postCount: 'postCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClanPostScalarFieldEnum = {
  id: 'id',
  threadId: 'threadId',
  authorId: 'authorId',
  date: 'date',
  message: 'message'
};

exports.Prisma.BruteInventoryItemScalarFieldEnum = {
  id: 'id',
  type: 'type',
  count: 'count',
  bruteId: 'bruteId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Lang = exports.$Enums.Lang = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ru: 'ru',
  pt: 'pt'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.DestinyChoiceSide = exports.$Enums.DestinyChoiceSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

exports.WeaponName = exports.$Enums.WeaponName = {
  fan: 'fan',
  keyboard: 'keyboard',
  knife: 'knife',
  leek: 'leek',
  mug: 'mug',
  sai: 'sai',
  racquet: 'racquet',
  axe: 'axe',
  bumps: 'bumps',
  flail: 'flail',
  fryingPan: 'fryingPan',
  hatchet: 'hatchet',
  mammothBone: 'mammothBone',
  morningStar: 'morningStar',
  trombone: 'trombone',
  baton: 'baton',
  halbard: 'halbard',
  lance: 'lance',
  trident: 'trident',
  whip: 'whip',
  noodleBowl: 'noodleBowl',
  piopio: 'piopio',
  shuriken: 'shuriken',
  broadsword: 'broadsword',
  scimitar: 'scimitar',
  sword: 'sword'
};

exports.SkillName = exports.$Enums.SkillName = {
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  immortality: 'immortality',
  reconnaissance: 'reconnaissance',
  weaponsMaster: 'weaponsMaster',
  martialArts: 'martialArts',
  sixthSense: 'sixthSense',
  hostility: 'hostility',
  fistsOfFury: 'fistsOfFury',
  shield: 'shield',
  armor: 'armor',
  toughenedSkin: 'toughenedSkin',
  untouchable: 'untouchable',
  sabotage: 'sabotage',
  shock: 'shock',
  bodybuilder: 'bodybuilder',
  relentless: 'relentless',
  survival: 'survival',
  leadSkeleton: 'leadSkeleton',
  balletShoes: 'balletShoes',
  determination: 'determination',
  firstStrike: 'firstStrike',
  resistant: 'resistant',
  counterAttack: 'counterAttack',
  ironHead: 'ironHead',
  thief: 'thief',
  fierceBrute: 'fierceBrute',
  tragicPotion: 'tragicPotion',
  net: 'net',
  bomb: 'bomb',
  hammer: 'hammer',
  cryOfTheDamned: 'cryOfTheDamned',
  hypnosis: 'hypnosis',
  flashFlood: 'flashFlood',
  tamer: 'tamer',
  regeneration: 'regeneration',
  chef: 'chef',
  spy: 'spy',
  saboteur: 'saboteur',
  backup: 'backup',
  hideaway: 'hideaway',
  monk: 'monk'
};

exports.PetName = exports.$Enums.PetName = {
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
};

exports.LogType = exports.$Enums.LogType = {
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  survive: 'survive',
  tournament: 'tournament',
  tournamentXp: 'tournamentXp'
};

exports.DestinyChoiceType = exports.$Enums.DestinyChoiceType = {
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
};

exports.BruteStat = exports.$Enums.BruteStat = {
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
};

exports.TournamentType = exports.$Enums.TournamentType = {
  DAILY: 'DAILY',
  GLOBAL: 'GLOBAL',
  CUSTOM: 'CUSTOM'
};

exports.AchievementName = exports.$Enums.AchievementName = {
  wins: 'wins',
  defeats: 'defeats',
  flawless: 'flawless',
  winWith1HP: 'winWith1HP',
  steal2Weapons: 'steal2Weapons',
  singleHitWin: 'singleHitWin',
  combo3: 'combo3',
  combo4: 'combo4',
  combo5: 'combo5',
  counter5: 'counter5',
  evade10: 'evade10',
  block25: 'block25',
  counter4b2b: 'counter4b2b',
  reversal4b2b: 'reversal4b2b',
  block4b2b: 'block4b2b',
  evade4b2b: 'evade4b2b',
  throw10b2b: 'throw10b2b',
  disarm4: 'disarm4',
  disarm8: 'disarm8',
  damage50once: 'damage50once',
  damage100once: 'damage100once',
  hit20times: 'hit20times',
  use10skills: 'use10skills',
  kill3pets: 'kill3pets',
  maxDamage: 'maxDamage',
  saboteur: 'saboteur',
  dog: 'dog',
  panther: 'panther',
  bear: 'bear',
  panther_bear: 'panther_bear',
  felAg_fistsOfF: 'felAg_fistsOfF',
  felAg_fistsOfF_untouch_relentless: 'felAg_fistsOfF_untouch_relentless',
  vita_armor_toughened: 'vita_armor_toughened',
  herculStr_hammer_fierceBrute: 'herculStr_hammer_fierceBrute',
  shock: 'shock',
  balletShoes_survival: 'balletShoes_survival',
  cryOfTheDamned_hypnosis: 'cryOfTheDamned_hypnosis',
  shield_counterAttack: 'shield_counterAttack',
  reconnaissance_monk: 'reconnaissance_monk',
  immortality: 'immortality',
  doubleBoost: 'doubleBoost',
  tripleBoost: 'tripleBoost',
  quadrupleBoost: 'quadrupleBoost',
  regeneration_potion: 'regeneration_potion',
  bear_tamer: 'bear_tamer',
  tripleDogs: 'tripleDogs',
  fiveWeapons: 'fiveWeapons',
  tenWeapons: 'tenWeapons',
  fifteenWeapons: 'fifteenWeapons',
  twentyWeapons: 'twentyWeapons',
  twentyThreeWeapons: 'twentyThreeWeapons',
  monk_sixthSense_whip: 'monk_sixthSense_whip',
  weaponsMaster_sharp_bodybuilder_heavy: 'weaponsMaster_sharp_bodybuilder_heavy',
  hostility_counterWeapon: 'hostility_counterWeapon',
  flashFlood_twelveWeapons: 'flashFlood_twelveWeapons',
  lightningBolt_firstStrike: 'lightningBolt_firstStrike',
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  potion_chef: 'potion_chef',
  tamer_net: 'tamer_net',
  untouchable_balletShoes: 'untouchable_balletShoes',
  survival_resistant: 'survival_resistant',
  hideaway_spy: 'hideaway_spy',
  weaponsFast3: 'weaponsFast3',
  weaponsSharp3: 'weaponsSharp3',
  weaponsHeavy3: 'weaponsHeavy3',
  weaponsLong3: 'weaponsLong3',
  weaponsThrown3: 'weaponsThrown3',
  weaponsBlunt3: 'weaponsBlunt3',
  thor: 'thor',
  agility50: 'agility50',
  agility100: 'agility100',
  speed50: 'speed50',
  speed100: 'speed100',
  strength50: 'strength50',
  strength100: 'strength100',
  hp300: 'hp300',
  hp600: 'hp600',
  maxLevel: 'maxLevel',
  allAchievements: 'allAchievements',
  winTournamentAs20: 'winTournamentAs20',
  winTournamentAs15: 'winTournamentAs15',
  looseAgainst2: 'looseAgainst2',
  looseAgainst3: 'looseAgainst3',
  looseAgainst4: 'looseAgainst4',
  winAgainst2: 'winAgainst2',
  winAgainst3: 'winAgainst3',
  winAgainst4: 'winAgainst4',
  winAsLower: 'winAsLower',
  win: 'win',
  rankUp10: 'rankUp10',
  rankUp9: 'rankUp9',
  rankUp8: 'rankUp8',
  rankUp7: 'rankUp7',
  rankUp6: 'rankUp6',
  rankUp5: 'rankUp5',
  rankUp4: 'rankUp4',
  rankUp3: 'rankUp3',
  rankUp2: 'rankUp2',
  rankUp1: 'rankUp1',
  rankUp0: 'rankUp0',
  sacrifice: 'sacrifice',
  beta: 'beta',
  bug: 'bug'
};

exports.BruteReportReason = exports.$Enums.BruteReportReason = {
  name: 'name'
};

exports.BruteReportStatus = exports.$Enums.BruteReportStatus = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.BossName = exports.$Enums.BossName = {
  GoldClaw: 'GoldClaw',
  EmberFang: 'EmberFang'
};

exports.InventoryItemType = exports.$Enums.InventoryItemType = {
  visualReset: 'visualReset'
};

exports.Prisma.ModelName = {
  User: 'User',
  BruteBody: 'BruteBody',
  BruteColors: 'BruteColors',
  Brute: 'Brute',
  Fight: 'Fight',
  Log: 'Log',
  DestinyChoice: 'DestinyChoice',
  Tournament: 'Tournament',
  TournamentStep: 'TournamentStep',
  TournamentAchievement: 'TournamentAchievement',
  TournamentGold: 'TournamentGold',
  TournamentXp: 'TournamentXp',
  Achievement: 'Achievement',
  Title: 'Title',
  BruteReport: 'BruteReport',
  ServerState: 'ServerState',
  BannedWord: 'BannedWord',
  WorkerJob: 'WorkerJob',
  Clan: 'Clan',
  ClanThread: 'ClanThread',
  ClanPost: 'ClanPost',
  BruteInventoryItem: 'BruteInventoryItem'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\perso\\Documents\\GitHub\\labrute\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [
      "nativeDistinct",
      "relationJoins"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../server/.env"
  },
  "relativePath": "../server/prisma",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uLy4uL3ByaXNtYSIKICBiaW5hcnlUYXJnZXRzICAgPSBbIm5hdGl2ZSIsICJkZWJpYW4tb3BlbnNzbC0zLjAueCIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCiAgcHJldmlld0ZlYXR1cmVzID0gWyJyZWxhdGlvbkpvaW5zIiwgIm5hdGl2ZURpc3RpbmN0Il0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBMYW5nIHsKICBlbgogIGZyCiAgZGUKICBlcwogIHJ1CiAgcHQKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRiLlV1aWQKICBsYW5nICAgICAgICAgICAgTGFuZyAgICAgICAgICAgICBAZGVmYXVsdChmcikKICBuYW1lICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgYWRtaW4gICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgbW9kZXJhdG9yICAgICAgIEJvb2xlYW4gICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY29ubmV4aW9uVG9rZW4gIFN0cmluZyAgICAgICAgICAgQGRiLlV1aWQKICBicnV0ZUxpbWl0ICAgICAgSW50ICAgICAgICAgICAgICBAZGVmYXVsdCgzKQogIGdvbGQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZmlnaHRTcGVlZCAgICAgIEludCAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBiYWNrZ3JvdW5kTXVzaWMgQm9vbGVhbiAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGJydXRlcyAgICAgICAgICBCcnV0ZVtdCiAgYWNoaWV2ZW1lbnRzICAgIEFjaGlldmVtZW50W10KICByZXBvcnRzICAgICAgICAgQnJ1dGVSZXBvcnRbXQogIHRvdXJuYW1lbnRHb2xkcyBUb3VybmFtZW50R29sZFtdCn0KCmVudW0gRGVzdGlueUNob2ljZVNpZGUgewogIExFRlQgIEBtYXAoIjAiKQogIFJJR0hUIEBtYXAoIjEiKQp9CgplbnVtIEdlbmRlciB7CiAgbWFsZQogIGZlbWFsZQp9Cgptb2RlbCBCcnV0ZUJvZHkgewogIGlkICAgICAgSW50ICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBicnV0ZSAgIEJydXRlIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludCAgIEB1bmlxdWUKICBwMiAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIEJvZHkgc2l6ZSAoc21hbGwgPSAwLCBiaWcgPSA3KSAobWFsZSBvbmx5LCAwIGZvciBmZW1hbGVzKQogIHAzICAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gSGFpciBbMC0xMV0gMTIgPSBubyBoZWFkCiAgcDQgICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyAobWFsZSkgQmVhcmQgWzAtNF0gNSA9IG5vdGhpbmcgLyAoZmVtYWxlKSBGcm9udCBoYWlyIFswLTJdIDMgPSBub3RoaW5nCiAgcDcgICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyBNYWluIGNsb3RoaW5nIFswLTZdIDcgPSBuYWtlZAogIHAxICAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gQXJtb3IgdmFyaWF0aW9uIFswLTFdCiAgcDFhICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyBbMC0xXSAwPWJlbHQsIDE9bm90aGluZwogIHAxYiAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gWzAtMV0gMD1yb21hbiBiZWx0LCAxPW5vdGhpbmcKICBwNiAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIChtYWxlKSAwPXNob3J0cywgMT10cm91c2VycyAvIChmZW1hbGUpIDA9c2hvcnRzLCAxPW5vdGhpbmcKICBwOCAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIFswLTRdIFN1cHBvc2VkIHRvIGJlIHNob2VzIGJ1dCBkb2Vzbid0IGNoYW5nZSBhbnl0aGluZyA/PwogIHA3YiAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gU2hvZXMgdW5kZXJzaWRlICgyID0gdmlzaWJsZSwgb3RoZXJzID0gaGlkZGVuKQogIHA1ICAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gMD1Ob3RoaW5nLCAxPVNoaXJ0Lgp9Cgptb2RlbCBCcnV0ZUNvbG9ycyB7CiAgaWQgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBicnV0ZSAgIEJydXRlICBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCBJbnQgICAgQHVuaXF1ZQogIGNvbDAgICAgU3RyaW5nIEBkZWZhdWx0KCIjZWFhY2E2IikgQGRiLlZhckNoYXIoNykgLy8gU2tpbgogIGNvbDBhICAgU3RyaW5nIEBkZWZhdWx0KCIjZWFhY2E2IikgQGRiLlZhckNoYXIoNykgLy8gRmFjZQogIGNvbDBjICAgU3RyaW5nIEBkZWZhdWx0KCIjZWFhY2E2IikgQGRiLlZhckNoYXIoNykgLy8gRWFyCiAgY29sMSAgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmFhMWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBIYWlyCiAgY29sMWEgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmFhMWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBIYWlyIGJhY2sKICBjb2wxYiAgIFN0cmluZyBAZGVmYXVsdCgiI2ZmYWExZSIpIEBkYi5WYXJDaGFyKDcpIC8vIEhhaXIgYmFjayAyCiAgY29sMWMgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmFhMWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBIYWlyIGZyb250CiAgY29sMWQgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmFhMWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBFeWVicm93cwogIGNvbDMgICAgU3RyaW5nIEBkZWZhdWx0KCIjYmIxMTExIikgQGRiLlZhckNoYXIoNykgLy8gUHJpbWFyeSAoaW5jbHVkZXMgZXllcykKICBjb2wyICAgIFN0cmluZyBAZGVmYXVsdCgiIzhiYTNkNyIpIEBkYi5WYXJDaGFyKDcpIC8vIFNlY29uZGFyeQogIGNvbDJiICAgU3RyaW5nIEBkZWZhdWx0KCIjN2E3M2M4IikgQGRiLlZhckNoYXIoNykgLy8gQWNjZW50IDEKICBjb2wzYiAgIFN0cmluZyBAZGVmYXVsdCgiI2ZhZTMxZiIpIEBkYi5WYXJDaGFyKDcpIC8vIEFjY2VudCAyCiAgY29sMmEgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmY5YWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBBY2NlbnQgMwogIGNvbDQgICAgU3RyaW5nIEBkZWZhdWx0KCIjNTU5Mzk5IikgQGRiLlZhckNoYXIoNykgLy8gU2hpcnQKICBjb2w0YSAgIFN0cmluZyBAZGVmYXVsdCgiIzdhNzNjOCIpIEBkYi5WYXJDaGFyKDcpIC8vIFNob2VzIGFjY2VudCA/CiAgY29sNGIgICBTdHJpbmcgQGRlZmF1bHQoIiMwMDAwZmYiKSBAZGIuVmFyQ2hhcig3KSAvLyA/Pwp9CgplbnVtIFdlYXBvbk5hbWUgewogIGZhbgogIGtleWJvYXJkCiAga25pZmUKICBsZWVrCiAgbXVnCiAgc2FpCiAgcmFjcXVldAogIGF4ZQogIGJ1bXBzCiAgZmxhaWwKICBmcnlpbmdQYW4KICBoYXRjaGV0CiAgbWFtbW90aEJvbmUKICBtb3JuaW5nU3RhcgogIHRyb21ib25lCiAgYmF0b24KICBoYWxiYXJkCiAgbGFuY2UKICB0cmlkZW50CiAgd2hpcAogIG5vb2RsZUJvd2wKICBwaW9waW8KICBzaHVyaWtlbgogIGJyb2Fkc3dvcmQKICBzY2ltaXRhcgogIHN3b3JkCn0KCmVudW0gU2tpbGxOYW1lIHsKICBoZXJjdWxlYW5TdHJlbmd0aAogIGZlbGluZUFnaWxpdHkKICBsaWdodG5pbmdCb2x0CiAgdml0YWxpdHkKICBpbW1vcnRhbGl0eQogIHJlY29ubmFpc3NhbmNlCiAgd2VhcG9uc01hc3RlcgogIG1hcnRpYWxBcnRzCiAgc2l4dGhTZW5zZQogIGhvc3RpbGl0eQogIGZpc3RzT2ZGdXJ5CiAgc2hpZWxkCiAgYXJtb3IKICB0b3VnaGVuZWRTa2luCiAgdW50b3VjaGFibGUKICBzYWJvdGFnZQogIHNob2NrCiAgYm9keWJ1aWxkZXIKICByZWxlbnRsZXNzCiAgc3Vydml2YWwKICBsZWFkU2tlbGV0b24KICBiYWxsZXRTaG9lcwogIGRldGVybWluYXRpb24KICBmaXJzdFN0cmlrZQogIHJlc2lzdGFudAogIGNvdW50ZXJBdHRhY2sKICBpcm9uSGVhZAogIHRoaWVmCiAgZmllcmNlQnJ1dGUKICB0cmFnaWNQb3Rpb24KICBuZXQKICBib21iCiAgaGFtbWVyCiAgY3J5T2ZUaGVEYW1uZWQKICBoeXBub3NpcwogIGZsYXNoRmxvb2QKICB0YW1lcgogIHJlZ2VuZXJhdGlvbgogIGNoZWYKICBzcHkKICBzYWJvdGV1cgogIGJhY2t1cAogIGhpZGVhd2F5CiAgbW9uawp9CgplbnVtIFBldE5hbWUgewogIGRvZzEKICBkb2cyCiAgZG9nMwogIHBhbnRoZXIKICBiZWFyCn0KCm1vZGVsIEJydXRlIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZGVsZXRlZEF0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wdHooKQogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eigpCiAgZGVzdGlueVBhdGggICAgICAgICAgICAgICAgICBEZXN0aW55Q2hvaWNlU2lkZVtdICAgICBAZGVmYXVsdChbXSkKICBwcmV2aW91c0Rlc3RpbnlQYXRoICAgICAgICAgIERlc3RpbnlDaG9pY2VTaWRlW10gICAgIEBkZWZhdWx0KFtdKQogIGxldmVsICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICB4cCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgaHAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGVuZHVyYW5jZVN0YXQgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBlbmR1cmFuY2VNb2RpZmllciAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpCiAgZW5kdXJhbmNlVmFsdWUgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHN0cmVuZ3RoU3RhdCAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzdHJlbmd0aE1vZGlmaWVyICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpCiAgc3RyZW5ndGhWYWx1ZSAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGFnaWxpdHlTdGF0ICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBhZ2lsaXR5TW9kaWZpZXIgICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpCiAgYWdpbGl0eVZhbHVlICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHNwZWVkU3RhdCAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzcGVlZE1vZGlmaWVyICAgICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpCiAgc3BlZWRWYWx1ZSAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHJhbmtpbmcgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMTEpCiAgZ2VuZGVyICAgICAgICAgICAgICAgICAgICAgICBHZW5kZXIKICB1c2VyICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlV1aWQKICBib2R5ICAgICAgICAgICAgICAgICAgICAgICAgIEJydXRlQm9keT8KICBjb2xvcnMgICAgICAgICAgICAgICAgICAgICAgIEJydXRlQ29sb3JzPwogIHdlYXBvbnMgICAgICAgICAgICAgICAgICAgICAgV2VhcG9uTmFtZVtdICAgICAgICAgICAgQGRlZmF1bHQoW10pCiAgc2tpbGxzICAgICAgICAgICAgICAgICAgICAgICBTa2lsbE5hbWVbXSAgICAgICAgICAgICBAZGVmYXVsdChbXSkKICBwZXRzICAgICAgICAgICAgICAgICAgICAgICAgIFBldE5hbWVbXSAgICAgICAgICAgICAgIEBkZWZhdWx0KFtdKQogIG1hc3RlciAgICAgICAgICAgICAgICAgICAgICAgQnJ1dGU/ICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJNYXN0ZXIiLCBmaWVsZHM6IFttYXN0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbWFzdGVySWQgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgcHVwaWxzICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZVtdICAgICAgICAgICAgICAgICBAcmVsYXRpb24oIk1hc3RlciIpCiAgcHVwaWxzQ291bnQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGNsYW4gICAgICAgICAgICAgICAgICAgICAgICAgQ2xhbj8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NsYW5JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY2xhbklkICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgcmVnaXN0ZXJlZEZvclRvdXJuYW1lbnQgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBuZXh0VG91cm5hbWVudERhdGUgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgY3VycmVudFRvdXJuYW1lbnREYXRlICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuRGF0ZQogIGN1cnJlbnRUb3VybmFtZW50U3RlcFdhdGNoZWQgSW50PyAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBsYXN0RmlnaHQgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgZmlnaHRzTGVmdCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCg2KQogIHZpY3RvcmllcyAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBmaWdodHMgICAgICAgICAgICAgICAgICAgICAgIEZpZ2h0W10KICBmaWdodHNBc0FkdmVyc2FyeSAgICAgICAgICAgIEZpZ2h0W10gICAgICAgICAgICAgICAgIEByZWxhdGlvbigiQWR2ZXJzYXJ5IikKICBsb2dzICAgICAgICAgICAgICAgICAgICAgICAgIExvZ1tdCiAgZGVzdGlueUNob2ljZXMgICAgICAgICAgICAgICBEZXN0aW55Q2hvaWNlW10KICB0b3VybmFtZW50cyAgICAgICAgICAgICAgICAgIFRvdXJuYW1lbnRbXQogIG9wcG9uZW50cyAgICAgICAgICAgICAgICAgICAgQnJ1dGVbXSAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJPcHBvbmVudHMiKQogIG9wcG9uZW50T2YgICAgICAgICAgICAgICAgICAgQnJ1dGVbXSAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJPcHBvbmVudHMiKQogIG9wcG9uZW50c0dlbmVyYXRlZEF0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLkRhdGUKICBjYW5SYW5rVXBTaW5jZSAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgYWNoaWV2ZW1lbnRzICAgICAgICAgICAgICAgICBBY2hpZXZlbWVudFtdCiAgcmVwb3J0cyAgICAgICAgICAgICAgICAgICAgICBCcnV0ZVJlcG9ydFtdCiAgZmF2b3JpdGUgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0aXRsZXMgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlW10KICBtYXN0ZXJPZkNsYW4gICAgICAgICAgICAgICAgIENsYW4/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiTWFzdGVyT2ZDbGFuIikKICBjbGFuUG9zdHMgICAgICAgICAgICAgICAgICAgIENsYW5Qb3N0W10KICB3YW50VG9Kb2luQ2xhbiAgICAgICAgICAgICAgIENsYW4/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiSm9pblJlcXVlc3RzIiwgZmllbGRzOiBbd2FudFRvSm9pbkNsYW5JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgd2FudFRvSm9pbkNsYW5JZCAgICAgICAgICAgICBJbnQ/CiAgdGhyZWFkcyAgICAgICAgICAgICAgICAgICAgICBDbGFuVGhyZWFkW10KICBpbnZlbnRvcnkgICAgICAgICAgICAgICAgICAgIEJydXRlSW52ZW50b3J5SXRlbVtdCiAgdG91cm5hbWVudEFjaGlldmVtZW50cyAgICAgICBUb3VybmFtZW50QWNoaWV2ZW1lbnRbXQogIHRvdXJuYW1lbnRYcHMgICAgICAgICAgICAgICAgVG91cm5hbWVudFhwW10KfQoKLy8gRklHSFRTCmVudW0gRmlnaHRlclR5cGUgewogIGJydXRlCiAgcGV0Cn0KCm1vZGVsIEZpZ2h0IHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZSAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLkRhdGUKICBicnV0ZTEgICAgICAgICBCcnV0ZSAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZTFJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGUxSWQgICAgICAgSW50CiAgYnJ1dGUyICAgICAgICAgQnJ1dGU/ICAgICAgICAgICBAcmVsYXRpb24oIkFkdmVyc2FyeSIsIGZpZWxkczogW2JydXRlMklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZTJJZCAgICAgICBJbnQ/CiAgd2lubmVyICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgbG9zZXIgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgc3RlcHMgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVGV4dAogIGZpZ2h0ZXJzICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiLlRleHQKICBsb2dzICAgICAgICAgICBMb2dbXQogIFRvdXJuYW1lbnRTdGVwIFRvdXJuYW1lbnRTdGVwW10KfQoKLy8gTE9HUwplbnVtIExvZ1R5cGUgewogIHdpbgogIGxvc2UKICBjaGlsZAogIGNoaWxkdXAKICB1cAogIGx2bAogIHN1cnZpdmUKICB0b3VybmFtZW50CiAgdG91cm5hbWVudFhwCn0KCm1vZGVsIExvZyB7CiAgaWQgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlICAgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQGRiLkRhdGUKICBjdXJyZW50QnJ1dGUgICBCcnV0ZSAgICBAcmVsYXRpb24oZmllbGRzOiBbY3VycmVudEJydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGN1cnJlbnRCcnV0ZUlkIEludAogIHR5cGUgICAgICAgICAgIExvZ1R5cGUKICBsZXZlbCAgICAgICAgICBJbnQ/CiAgYnJ1dGUgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjU1KQogIGZpZ2h0ICAgICAgICAgIEZpZ2h0PyAgIEByZWxhdGlvbihmaWVsZHM6IFtmaWdodElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBmaWdodElkICAgICAgICBJbnQ/CiAgeHAgICAgICAgICAgICAgSW50Pwp9CgovLyBMRVZFTCBVUAplbnVtIERlc3RpbnlDaG9pY2VUeXBlIHsKICBza2lsbAogIHdlYXBvbgogIHBldAogIHN0YXRzCn0KCmVudW0gQnJ1dGVTdGF0IHsKICBlbmR1cmFuY2UKICBzdHJlbmd0aAogIGFnaWxpdHkKICBzcGVlZAp9Cgptb2RlbCBEZXN0aW55Q2hvaWNlIHsKICBpZCAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBicnV0ZSAgICAgIEJydXRlICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlSWQgICAgSW50CiAgcGF0aCAgICAgICBEZXN0aW55Q2hvaWNlU2lkZVtdCiAgdHlwZSAgICAgICBEZXN0aW55Q2hvaWNlVHlwZQogIHNraWxsICAgICAgU2tpbGxOYW1lPwogIHdlYXBvbiAgICAgV2VhcG9uTmFtZT8KICBwZXQgICAgICAgIFBldE5hbWU/CiAgc3RhdDEgICAgICBCcnV0ZVN0YXQ/CiAgc3RhdDFWYWx1ZSBJbnQ/CiAgc3RhdDIgICAgICBCcnV0ZVN0YXQ/CiAgc3RhdDJWYWx1ZSBJbnQ/Cn0KCi8vIFRPVVJOQU1FTlRTCmVudW0gVG91cm5hbWVudFR5cGUgewogIERBSUxZCiAgR0xPQkFMCiAgQ1VTVE9NCn0KCm1vZGVsIFRvdXJuYW1lbnQgewogIGlkICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZSAgICAgICAgIERhdGVUaW1lICAgICAgICAgQGRiLkRhdGUKICB0eXBlICAgICAgICAgVG91cm5hbWVudFR5cGUgICBAZGVmYXVsdChEQUlMWSkKICBwYXJ0aWNpcGFudHMgQnJ1dGVbXQogIHN0ZXBzICAgICAgICBUb3VybmFtZW50U3RlcFtdCiAgcm91bmRzICAgICAgIEludAogIEBAaW5kZXgoW3R5cGUsIGRhdGVdKQp9Cgptb2RlbCBUb3VybmFtZW50U3RlcCB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdG91cm5hbWVudCAgICBUb3VybmFtZW50IEByZWxhdGlvbihmaWVsZHM6IFt0b3VybmFtZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHRvdXJuYW1lbnRJZCAgSW50CiAgc3RlcCAgICAgICAgICBJbnQKICBmaWdodCAgICAgICAgIEZpZ2h0ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZpZ2h0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGZpZ2h0SWQgICAgICAgSW50Cn0KCm1vZGVsIFRvdXJuYW1lbnRBY2hpZXZlbWVudCB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICBAZGIuRGF0ZQogIGJydXRlICAgICAgICAgICAgQnJ1dGUgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkICAgICAgICAgIEludAogIGFjaGlldmVtZW50ICAgICAgQWNoaWV2ZW1lbnROYW1lCiAgYWNoaWV2ZW1lbnRDb3VudCBJbnQKfQoKbW9kZWwgVG91cm5hbWVudEdvbGQgewogIGlkICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGUgICBEYXRlVGltZSBAZGIuRGF0ZQogIHVzZXIgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgU3RyaW5nICAgQGRiLlV1aWQKICBnb2xkICAgSW50Cn0KCm1vZGVsIFRvdXJuYW1lbnRYcCB7CiAgaWQgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGUgICAgRGF0ZVRpbWUgQGRiLkRhdGUKICBicnV0ZSAgIEJydXRlICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludAogIHhwICAgICAgSW50Cn0KCi8vIEFDSElFVkVNRU5UUwplbnVtIEFjaGlldmVtZW50TmFtZSB7CiAgLy8gRmlnaHRzCiAgd2lucwogIGRlZmVhdHMKICBmbGF3bGVzcwogIHdpbldpdGgxSFAKICBzdGVhbDJXZWFwb25zCiAgc2luZ2xlSGl0V2luCiAgY29tYm8zCiAgY29tYm80CiAgY29tYm81CiAgY291bnRlcjUKICBldmFkZTEwCiAgYmxvY2syNQogIGNvdW50ZXI0YjJiCiAgcmV2ZXJzYWw0YjJiCiAgYmxvY2s0YjJiCiAgZXZhZGU0YjJiCiAgdGhyb3cxMGIyYgogIGRpc2FybTQKICBkaXNhcm04CiAgZGFtYWdlNTBvbmNlCiAgZGFtYWdlMTAwb25jZQogIGhpdDIwdGltZXMKICB1c2UxMHNraWxscwogIGtpbGwzcGV0cwogIG1heERhbWFnZQogIC8vIFNraWxscyB1c2UKICBzYWJvdGV1cgogIC8vIFBlcmtzIHVubG9jawogIGRvZwogIHBhbnRoZXIKICBiZWFyCiAgcGFudGhlcl9iZWFyCiAgZmVsQWdfZmlzdHNPZkYKICBmZWxBZ19maXN0c09mRl91bnRvdWNoX3JlbGVudGxlc3MKICB2aXRhX2FybW9yX3RvdWdoZW5lZAogIGhlcmN1bFN0cl9oYW1tZXJfZmllcmNlQnJ1dGUKICBzaG9jawogIGJhbGxldFNob2VzX3N1cnZpdmFsCiAgY3J5T2ZUaGVEYW1uZWRfaHlwbm9zaXMKICBzaGllbGRfY291bnRlckF0dGFjawogIHJlY29ubmFpc3NhbmNlX21vbmsKICBpbW1vcnRhbGl0eQogIGRvdWJsZUJvb3N0CiAgdHJpcGxlQm9vc3QKICBxdWFkcnVwbGVCb29zdAogIHJlZ2VuZXJhdGlvbl9wb3Rpb24KICBiZWFyX3RhbWVyCiAgdHJpcGxlRG9ncwogIGZpdmVXZWFwb25zCiAgdGVuV2VhcG9ucwogIGZpZnRlZW5XZWFwb25zCiAgdHdlbnR5V2VhcG9ucwogIHR3ZW50eVRocmVlV2VhcG9ucwogIG1vbmtfc2l4dGhTZW5zZV93aGlwCiAgd2VhcG9uc01hc3Rlcl9zaGFycF9ib2R5YnVpbGRlcl9oZWF2eQogIGhvc3RpbGl0eV9jb3VudGVyV2VhcG9uCiAgZmxhc2hGbG9vZF90d2VsdmVXZWFwb25zCiAgbGlnaHRuaW5nQm9sdF9maXJzdFN0cmlrZQogIGhlcmN1bGVhblN0cmVuZ3RoCiAgZmVsaW5lQWdpbGl0eQogIGxpZ2h0bmluZ0JvbHQKICB2aXRhbGl0eQogIHBvdGlvbl9jaGVmCiAgdGFtZXJfbmV0CiAgdW50b3VjaGFibGVfYmFsbGV0U2hvZXMKICBzdXJ2aXZhbF9yZXNpc3RhbnQKICBoaWRlYXdheV9zcHkKICB3ZWFwb25zRmFzdDMKICB3ZWFwb25zU2hhcnAzCiAgd2VhcG9uc0hlYXZ5MwogIHdlYXBvbnNMb25nMwogIHdlYXBvbnNUaHJvd24zCiAgd2VhcG9uc0JsdW50MwogIHRob3IKICAvLyBTdGF0cwogIGFnaWxpdHk1MAogIGFnaWxpdHkxMDAKICBzcGVlZDUwCiAgc3BlZWQxMDAKICBzdHJlbmd0aDUwCiAgc3RyZW5ndGgxMDAKICBocDMwMAogIGhwNjAwCiAgbWF4TGV2ZWwKICBhbGxBY2hpZXZlbWVudHMKICAvLyBUb3VybmFtZW50CiAgd2luVG91cm5hbWVudEFzMjAKICB3aW5Ub3VybmFtZW50QXMxNQogIGxvb3NlQWdhaW5zdDIKICBsb29zZUFnYWluc3QzCiAgbG9vc2VBZ2FpbnN0NAogIHdpbkFnYWluc3QyCiAgd2luQWdhaW5zdDMKICB3aW5BZ2FpbnN0NAogIHdpbkFzTG93ZXIKICB3aW4KICAvLyBSYW5rcwogIHJhbmtVcDEwCiAgcmFua1VwOQogIHJhbmtVcDgKICByYW5rVXA3CiAgcmFua1VwNgogIHJhbmtVcDUKICByYW5rVXA0CiAgcmFua1VwMwogIHJhbmtVcDIKICByYW5rVXAxCiAgcmFua1VwMAogIC8vIFVzZXIKICBzYWNyaWZpY2UKICBiZXRhCiAgYnVnCn0KCm1vZGVsIEFjaGlldmVtZW50IHsKICBpZCAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgQWNoaWV2ZW1lbnROYW1lCiAgY291bnQgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBicnV0ZSAgIEJydXRlPyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCBJbnQ/CiAgdXNlciAgICBVc2VyPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICBTdHJpbmc/ICAgICAgICAgQGRiLlV1aWQKICBAQHVuaXF1ZShbbmFtZSwgYnJ1dGVJZF0pCn0KCm1vZGVsIFRpdGxlIHsKICBpZCAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgIEFjaGlldmVtZW50TmFtZQogIGNvdW50ICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBicnV0ZXMgQnJ1dGVbXQp9CgovLyBSRVBPUlRTCmVudW0gQnJ1dGVSZXBvcnRTdGF0dXMgewogIHBlbmRpbmcKICBhY2NlcHRlZAogIHJlamVjdGVkCn0KCmVudW0gQnJ1dGVSZXBvcnRSZWFzb24gewogIG5hbWUKfQoKbW9kZWwgQnJ1dGVSZXBvcnQgewogIGlkICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBicnV0ZSAgIEJydXRlICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludAogIHVzZXJzICAgVXNlcltdCiAgcmVhc29uICBCcnV0ZVJlcG9ydFJlYXNvbiBAZGVmYXVsdChuYW1lKQogIGNvdW50ICAgSW50ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBkYXRlICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuRGF0ZQogIHN0YXR1cyAgQnJ1dGVSZXBvcnRTdGF0dXMgQGRlZmF1bHQocGVuZGluZykKfQoKLy8gU0VSVkVSIFNUQVRFCm1vZGVsIFNlcnZlclN0YXRlIHsKICBpZCAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHJlYWR5ICAgICAgICAgICAgICAgICBCb29sZWFuIEBkZWZhdWx0KHRydWUpCiAgZ2xvYmFsVG91cm5hbWVudFZhbGlkIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkKfQoKbW9kZWwgQmFubmVkV29yZCB7CiAgaWQgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB3b3JkIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIFdvcmtlckpvYiB7CiAgaWQgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB3b3JrZXIgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgcGF5bG9hZCBTdHJpbmcgQGRiLlRleHQKfQoKLy8gQ0xBTlMKZW51bSBCb3NzTmFtZSB7CiAgR29sZENsYXcKICBFbWJlckZhbmcKfQoKbW9kZWwgQ2xhbiB7CiAgaWQgICAgICAgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgICBTdHJpbmcgICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcigyNTUpCiAgbGltaXQgICAgICAgIEludCAgICAgICAgICBAZGVmYXVsdCgxMCkKICBwb2ludHMgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgYm9zcyAgICAgICAgIEJvc3NOYW1lICAgICBAZGVmYXVsdChHb2xkQ2xhdykKICBkYW1hZ2VPbkJvc3MgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgbWFzdGVyICAgICAgIEJydXRlICAgICAgICBAcmVsYXRpb24oIk1hc3Rlck9mQ2xhbiIsIGZpZWxkczogW21hc3RlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBtYXN0ZXJJZCAgICAgSW50ICAgICAgICAgIEB1bmlxdWUKICBicnV0ZXMgICAgICAgQnJ1dGVbXQogIGpvaW5SZXF1ZXN0cyBCcnV0ZVtdICAgICAgQHJlbGF0aW9uKCJKb2luUmVxdWVzdHMiKQogIHRocmVhZHMgICAgICBDbGFuVGhyZWFkW10KICBAQGluZGV4KFtuYW1lLCBwb2ludHNdKQp9Cgptb2RlbCBDbGFuVGhyZWFkIHsKICBpZCAgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNsYW4gICAgICBDbGFuICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNsYW5JZCAgICBJbnQKICBjcmVhdG9yICAgQnJ1dGUgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRvcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdG9ySWQgSW50CiAgdGl0bGUgICAgIFN0cmluZyAgICAgQGRiLlZhckNoYXIoMjU1KQogIGxvY2tlZCAgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogIHBpbm5lZCAgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogIHBvc3RDb3VudCBJbnQgICAgICAgIEBkZWZhdWx0KDEpCiAgcG9zdHMgICAgIENsYW5Qb3N0W10KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCgpCiAgdXBkYXRlZEF0IERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoKQp9Cgptb2RlbCBDbGFuUG9zdCB7CiAgaWQgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRocmVhZCAgIENsYW5UaHJlYWQgQHJlbGF0aW9uKGZpZWxkczogW3RocmVhZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICB0aHJlYWRJZCBJbnQKICBhdXRob3IgICBCcnV0ZSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYXV0aG9ySWQgSW50CiAgZGF0ZSAgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCgpCiAgbWVzc2FnZSAgU3RyaW5nICAgICBAZGIuVGV4dAp9CgovLyBJbnZlbnRvcnkKZW51bSBJbnZlbnRvcnlJdGVtVHlwZSB7CiAgdmlzdWFsUmVzZXQKfQoKbW9kZWwgQnJ1dGVJbnZlbnRvcnlJdGVtIHsKICBpZCAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdHlwZSAgICBJbnZlbnRvcnlJdGVtVHlwZQogIGNvdW50ICAgSW50ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBicnV0ZSAgIEJydXRlICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludAoKICBAQHVuaXF1ZShbdHlwZSwgYnJ1dGVJZF0pCn0K",
  "inlineSchemaHash": "86cb759cfed41c62bd04b033e21677fd2f9aa6e0effe30da7f5785f261a0dad3"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Lang\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connexionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backgroundMusic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentGolds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentGold\",\"relationName\":\"TournamentGoldToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteBody\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteColors\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1d\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#bb1111\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#8ba3d7\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fae31f\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fff9ae\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#559399\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#0000ff\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brute\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousDestinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ranking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":11,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteBody\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteColors\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapons\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WeaponName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SkillName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pets\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PetName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupils\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupilsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registeredForTournament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentStepWatched\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsLeft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":6,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"victories\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fights\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsAsAdversary\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"Adversary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyChoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoice\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournaments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentsGeneratedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canRankUpSince\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Title\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterOfClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[\"wantToJoinClanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteInventoryItem\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentAchievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentAchievement\",\"relationName\":\"BruteToTournamentAchievement\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentXps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentXp\",\"relationName\":\"BruteToTournamentXp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fight\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[\"brute1Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Adversary\",\"relationFromFields\":[\"brute2Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fighters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"FightToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TournamentStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Log\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBrute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[\"currentBruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToLog\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DestinyChoice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceSide\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skill\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SkillName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pet\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tournament\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TournamentType\",\"default\":\"DAILY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rounds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentStep\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[\"tournamentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentAchievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentAchievement\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievement\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievementCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentGold\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TournamentGoldToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentXp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentXp\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Achievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"bruteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"bruteId\"]}],\"isGenerated\":false},\"Title\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteReport\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportReason\",\"default\":\"name\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServerState\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ready\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"globalTournamentValid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BannedWord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkerJob\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boss\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BossName\",\"default\":\"GoldClaw\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"damageOnBoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanThread\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanPost\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[\"threadId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteInventoryItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InventoryItemType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type\",\"bruteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type\",\"bruteId\"]}],\"isGenerated\":false}},\"enums\":{\"Lang\":{\"values\":[{\"name\":\"en\",\"dbName\":null},{\"name\":\"fr\",\"dbName\":null},{\"name\":\"de\",\"dbName\":null},{\"name\":\"es\",\"dbName\":null},{\"name\":\"ru\",\"dbName\":null},{\"name\":\"pt\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceSide\":{\"values\":[{\"name\":\"LEFT\",\"dbName\":\"0\"},{\"name\":\"RIGHT\",\"dbName\":\"1\"}],\"dbName\":null},\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"WeaponName\":{\"values\":[{\"name\":\"fan\",\"dbName\":null},{\"name\":\"keyboard\",\"dbName\":null},{\"name\":\"knife\",\"dbName\":null},{\"name\":\"leek\",\"dbName\":null},{\"name\":\"mug\",\"dbName\":null},{\"name\":\"sai\",\"dbName\":null},{\"name\":\"racquet\",\"dbName\":null},{\"name\":\"axe\",\"dbName\":null},{\"name\":\"bumps\",\"dbName\":null},{\"name\":\"flail\",\"dbName\":null},{\"name\":\"fryingPan\",\"dbName\":null},{\"name\":\"hatchet\",\"dbName\":null},{\"name\":\"mammothBone\",\"dbName\":null},{\"name\":\"morningStar\",\"dbName\":null},{\"name\":\"trombone\",\"dbName\":null},{\"name\":\"baton\",\"dbName\":null},{\"name\":\"halbard\",\"dbName\":null},{\"name\":\"lance\",\"dbName\":null},{\"name\":\"trident\",\"dbName\":null},{\"name\":\"whip\",\"dbName\":null},{\"name\":\"noodleBowl\",\"dbName\":null},{\"name\":\"piopio\",\"dbName\":null},{\"name\":\"shuriken\",\"dbName\":null},{\"name\":\"broadsword\",\"dbName\":null},{\"name\":\"scimitar\",\"dbName\":null},{\"name\":\"sword\",\"dbName\":null}],\"dbName\":null},\"SkillName\":{\"values\":[{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"reconnaissance\",\"dbName\":null},{\"name\":\"weaponsMaster\",\"dbName\":null},{\"name\":\"martialArts\",\"dbName\":null},{\"name\":\"sixthSense\",\"dbName\":null},{\"name\":\"hostility\",\"dbName\":null},{\"name\":\"fistsOfFury\",\"dbName\":null},{\"name\":\"shield\",\"dbName\":null},{\"name\":\"armor\",\"dbName\":null},{\"name\":\"toughenedSkin\",\"dbName\":null},{\"name\":\"untouchable\",\"dbName\":null},{\"name\":\"sabotage\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"bodybuilder\",\"dbName\":null},{\"name\":\"relentless\",\"dbName\":null},{\"name\":\"survival\",\"dbName\":null},{\"name\":\"leadSkeleton\",\"dbName\":null},{\"name\":\"balletShoes\",\"dbName\":null},{\"name\":\"determination\",\"dbName\":null},{\"name\":\"firstStrike\",\"dbName\":null},{\"name\":\"resistant\",\"dbName\":null},{\"name\":\"counterAttack\",\"dbName\":null},{\"name\":\"ironHead\",\"dbName\":null},{\"name\":\"thief\",\"dbName\":null},{\"name\":\"fierceBrute\",\"dbName\":null},{\"name\":\"tragicPotion\",\"dbName\":null},{\"name\":\"net\",\"dbName\":null},{\"name\":\"bomb\",\"dbName\":null},{\"name\":\"hammer\",\"dbName\":null},{\"name\":\"cryOfTheDamned\",\"dbName\":null},{\"name\":\"hypnosis\",\"dbName\":null},{\"name\":\"flashFlood\",\"dbName\":null},{\"name\":\"tamer\",\"dbName\":null},{\"name\":\"regeneration\",\"dbName\":null},{\"name\":\"chef\",\"dbName\":null},{\"name\":\"spy\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"backup\",\"dbName\":null},{\"name\":\"hideaway\",\"dbName\":null},{\"name\":\"monk\",\"dbName\":null}],\"dbName\":null},\"PetName\":{\"values\":[{\"name\":\"dog1\",\"dbName\":null},{\"name\":\"dog2\",\"dbName\":null},{\"name\":\"dog3\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null}],\"dbName\":null},\"FighterType\":{\"values\":[{\"name\":\"brute\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null}],\"dbName\":null},\"LogType\":{\"values\":[{\"name\":\"win\",\"dbName\":null},{\"name\":\"lose\",\"dbName\":null},{\"name\":\"child\",\"dbName\":null},{\"name\":\"childup\",\"dbName\":null},{\"name\":\"up\",\"dbName\":null},{\"name\":\"lvl\",\"dbName\":null},{\"name\":\"survive\",\"dbName\":null},{\"name\":\"tournament\",\"dbName\":null},{\"name\":\"tournamentXp\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceType\":{\"values\":[{\"name\":\"skill\",\"dbName\":null},{\"name\":\"weapon\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null},{\"name\":\"stats\",\"dbName\":null}],\"dbName\":null},\"BruteStat\":{\"values\":[{\"name\":\"endurance\",\"dbName\":null},{\"name\":\"strength\",\"dbName\":null},{\"name\":\"agility\",\"dbName\":null},{\"name\":\"speed\",\"dbName\":null}],\"dbName\":null},\"TournamentType\":{\"values\":[{\"name\":\"DAILY\",\"dbName\":null},{\"name\":\"GLOBAL\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"AchievementName\":{\"values\":[{\"name\":\"wins\",\"dbName\":null},{\"name\":\"defeats\",\"dbName\":null},{\"name\":\"flawless\",\"dbName\":null},{\"name\":\"winWith1HP\",\"dbName\":null},{\"name\":\"steal2Weapons\",\"dbName\":null},{\"name\":\"singleHitWin\",\"dbName\":null},{\"name\":\"combo3\",\"dbName\":null},{\"name\":\"combo4\",\"dbName\":null},{\"name\":\"combo5\",\"dbName\":null},{\"name\":\"counter5\",\"dbName\":null},{\"name\":\"evade10\",\"dbName\":null},{\"name\":\"block25\",\"dbName\":null},{\"name\":\"counter4b2b\",\"dbName\":null},{\"name\":\"reversal4b2b\",\"dbName\":null},{\"name\":\"block4b2b\",\"dbName\":null},{\"name\":\"evade4b2b\",\"dbName\":null},{\"name\":\"throw10b2b\",\"dbName\":null},{\"name\":\"disarm4\",\"dbName\":null},{\"name\":\"disarm8\",\"dbName\":null},{\"name\":\"damage50once\",\"dbName\":null},{\"name\":\"damage100once\",\"dbName\":null},{\"name\":\"hit20times\",\"dbName\":null},{\"name\":\"use10skills\",\"dbName\":null},{\"name\":\"kill3pets\",\"dbName\":null},{\"name\":\"maxDamage\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"dog\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null},{\"name\":\"panther_bear\",\"dbName\":null},{\"name\":\"felAg_fistsOfF\",\"dbName\":null},{\"name\":\"felAg_fistsOfF_untouch_relentless\",\"dbName\":null},{\"name\":\"vita_armor_toughened\",\"dbName\":null},{\"name\":\"herculStr_hammer_fierceBrute\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"balletShoes_survival\",\"dbName\":null},{\"name\":\"cryOfTheDamned_hypnosis\",\"dbName\":null},{\"name\":\"shield_counterAttack\",\"dbName\":null},{\"name\":\"reconnaissance_monk\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"doubleBoost\",\"dbName\":null},{\"name\":\"tripleBoost\",\"dbName\":null},{\"name\":\"quadrupleBoost\",\"dbName\":null},{\"name\":\"regeneration_potion\",\"dbName\":null},{\"name\":\"bear_tamer\",\"dbName\":null},{\"name\":\"tripleDogs\",\"dbName\":null},{\"name\":\"fiveWeapons\",\"dbName\":null},{\"name\":\"tenWeapons\",\"dbName\":null},{\"name\":\"fifteenWeapons\",\"dbName\":null},{\"name\":\"twentyWeapons\",\"dbName\":null},{\"name\":\"twentyThreeWeapons\",\"dbName\":null},{\"name\":\"monk_sixthSense_whip\",\"dbName\":null},{\"name\":\"weaponsMaster_sharp_bodybuilder_heavy\",\"dbName\":null},{\"name\":\"hostility_counterWeapon\",\"dbName\":null},{\"name\":\"flashFlood_twelveWeapons\",\"dbName\":null},{\"name\":\"lightningBolt_firstStrike\",\"dbName\":null},{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"potion_chef\",\"dbName\":null},{\"name\":\"tamer_net\",\"dbName\":null},{\"name\":\"untouchable_balletShoes\",\"dbName\":null},{\"name\":\"survival_resistant\",\"dbName\":null},{\"name\":\"hideaway_spy\",\"dbName\":null},{\"name\":\"weaponsFast3\",\"dbName\":null},{\"name\":\"weaponsSharp3\",\"dbName\":null},{\"name\":\"weaponsHeavy3\",\"dbName\":null},{\"name\":\"weaponsLong3\",\"dbName\":null},{\"name\":\"weaponsThrown3\",\"dbName\":null},{\"name\":\"weaponsBlunt3\",\"dbName\":null},{\"name\":\"thor\",\"dbName\":null},{\"name\":\"agility50\",\"dbName\":null},{\"name\":\"agility100\",\"dbName\":null},{\"name\":\"speed50\",\"dbName\":null},{\"name\":\"speed100\",\"dbName\":null},{\"name\":\"strength50\",\"dbName\":null},{\"name\":\"strength100\",\"dbName\":null},{\"name\":\"hp300\",\"dbName\":null},{\"name\":\"hp600\",\"dbName\":null},{\"name\":\"maxLevel\",\"dbName\":null},{\"name\":\"allAchievements\",\"dbName\":null},{\"name\":\"winTournamentAs20\",\"dbName\":null},{\"name\":\"winTournamentAs15\",\"dbName\":null},{\"name\":\"looseAgainst2\",\"dbName\":null},{\"name\":\"looseAgainst3\",\"dbName\":null},{\"name\":\"looseAgainst4\",\"dbName\":null},{\"name\":\"winAgainst2\",\"dbName\":null},{\"name\":\"winAgainst3\",\"dbName\":null},{\"name\":\"winAgainst4\",\"dbName\":null},{\"name\":\"winAsLower\",\"dbName\":null},{\"name\":\"win\",\"dbName\":null},{\"name\":\"rankUp10\",\"dbName\":null},{\"name\":\"rankUp9\",\"dbName\":null},{\"name\":\"rankUp8\",\"dbName\":null},{\"name\":\"rankUp7\",\"dbName\":null},{\"name\":\"rankUp6\",\"dbName\":null},{\"name\":\"rankUp5\",\"dbName\":null},{\"name\":\"rankUp4\",\"dbName\":null},{\"name\":\"rankUp3\",\"dbName\":null},{\"name\":\"rankUp2\",\"dbName\":null},{\"name\":\"rankUp1\",\"dbName\":null},{\"name\":\"rankUp0\",\"dbName\":null},{\"name\":\"sacrifice\",\"dbName\":null},{\"name\":\"beta\",\"dbName\":null},{\"name\":\"bug\",\"dbName\":null}],\"dbName\":null},\"BruteReportStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null}],\"dbName\":null},\"BruteReportReason\":{\"values\":[{\"name\":\"name\",\"dbName\":null}],\"dbName\":null},\"BossName\":{\"values\":[{\"name\":\"GoldClaw\",\"dbName\":null},{\"name\":\"EmberFang\",\"dbName\":null}],\"dbName\":null},\"InventoryItemType\":{\"values\":[{\"name\":\"visualReset\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

