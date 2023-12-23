
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
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
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
  fightId: 'fightId',
  xpDistributed: 'xpDistributed'
};

exports.Prisma.TournamentEarningScalarFieldEnum = {
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  points: 'points',
  achievement: 'achievement',
  achievementCount: 'achievementCount'
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
  TournamentEarning: 'TournamentEarning',
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
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uLy4uL3ByaXNtYSIKICBiaW5hcnlUYXJnZXRzICAgPSBbIm5hdGl2ZSIsICJkZWJpYW4tb3BlbnNzbC0zLjAueCIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCiAgcHJldmlld0ZlYXR1cmVzID0gWyJyZWxhdGlvbkpvaW5zIiwgIm5hdGl2ZURpc3RpbmN0Il0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBMYW5nIHsKICBlbgogIGZyCiAgZGUKICBlcwogIHJ1CiAgcHQKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEB1bmlxdWUgQGRiLlV1aWQKICBsYW5nICAgICAgICAgICAgTGFuZyAgICAgICAgICBAZGVmYXVsdChmcikKICBuYW1lICAgICAgICAgICAgU3RyaW5nICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgYWRtaW4gICAgICAgICAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgbW9kZXJhdG9yICAgICAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY29ubmV4aW9uVG9rZW4gIFN0cmluZyAgICAgICAgQGRiLlV1aWQKICBicnV0ZUxpbWl0ICAgICAgSW50ICAgICAgICAgICBAZGVmYXVsdCgzKQogIGdvbGQgICAgICAgICAgICBJbnQgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZmlnaHRTcGVlZCAgICAgIEludCAgICAgICAgICAgQGRlZmF1bHQoMSkKICBiYWNrZ3JvdW5kTXVzaWMgQm9vbGVhbiAgICAgICBAZGVmYXVsdCh0cnVlKQogIGJydXRlcyAgICAgICAgICBCcnV0ZVtdCiAgYWNoaWV2ZW1lbnRzICAgIEFjaGlldmVtZW50W10KICByZXBvcnRzICAgICAgICAgQnJ1dGVSZXBvcnRbXQp9CgplbnVtIERlc3RpbnlDaG9pY2VTaWRlIHsKICBMRUZUICBAbWFwKCIwIikKICBSSUdIVCBAbWFwKCIxIikKfQoKZW51bSBHZW5kZXIgewogIG1hbGUKICBmZW1hbGUKfQoKbW9kZWwgQnJ1dGVCb2R5IHsKICBpZCAgICAgIEludCAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYnJ1dGUgICBCcnV0ZSBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCBJbnQgICBAdW5pcXVlCiAgcDIgICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyBCb2R5IHNpemUgKHNtYWxsID0gMCwgYmlnID0gNykgKG1hbGUgb25seSwgMCBmb3IgZmVtYWxlcykKICBwMyAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIEhhaXIgWzAtMTFdIDEyID0gbm8gaGVhZAogIHA0ICAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gKG1hbGUpIEJlYXJkIFswLTRdIDUgPSBub3RoaW5nIC8gKGZlbWFsZSkgRnJvbnQgaGFpciBbMC0yXSAzID0gbm90aGluZwogIHA3ICAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gTWFpbiBjbG90aGluZyBbMC02XSA3ID0gbmFrZWQKICBwMSAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIEFybW9yIHZhcmlhdGlvbiBbMC0xXQogIHAxYSAgICAgSW50ICAgQGRlZmF1bHQoMCkgLy8gWzAtMV0gMD1iZWx0LCAxPW5vdGhpbmcKICBwMWIgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIFswLTFdIDA9cm9tYW4gYmVsdCwgMT1ub3RoaW5nCiAgcDYgICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyAobWFsZSkgMD1zaG9ydHMsIDE9dHJvdXNlcnMgLyAoZmVtYWxlKSAwPXNob3J0cywgMT1ub3RoaW5nCiAgcDggICAgICBJbnQgICBAZGVmYXVsdCgwKSAvLyBbMC00XSBTdXBwb3NlZCB0byBiZSBzaG9lcyBidXQgZG9lc24ndCBjaGFuZ2UgYW55dGhpbmcgPz8KICBwN2IgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIFNob2VzIHVuZGVyc2lkZSAoMiA9IHZpc2libGUsIG90aGVycyA9IGhpZGRlbikKICBwNSAgICAgIEludCAgIEBkZWZhdWx0KDApIC8vIDA9Tm90aGluZywgMT1TaGlydC4KfQoKbW9kZWwgQnJ1dGVDb2xvcnMgewogIGlkICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYnJ1dGUgICBCcnV0ZSAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlSWQgSW50ICAgIEB1bmlxdWUKICBjb2wwICAgIFN0cmluZyBAZGVmYXVsdCgiI2VhYWNhNiIpIEBkYi5WYXJDaGFyKDcpIC8vIFNraW4KICBjb2wwYSAgIFN0cmluZyBAZGVmYXVsdCgiI2VhYWNhNiIpIEBkYi5WYXJDaGFyKDcpIC8vIEZhY2UKICBjb2wwYyAgIFN0cmluZyBAZGVmYXVsdCgiI2VhYWNhNiIpIEBkYi5WYXJDaGFyKDcpIC8vIEVhcgogIGNvbDEgICAgU3RyaW5nIEBkZWZhdWx0KCIjZmZhYTFlIikgQGRiLlZhckNoYXIoNykgLy8gSGFpcgogIGNvbDFhICAgU3RyaW5nIEBkZWZhdWx0KCIjZmZhYTFlIikgQGRiLlZhckNoYXIoNykgLy8gSGFpciBiYWNrCiAgY29sMWIgICBTdHJpbmcgQGRlZmF1bHQoIiNmZmFhMWUiKSBAZGIuVmFyQ2hhcig3KSAvLyBIYWlyIGJhY2sgMgogIGNvbDFjICAgU3RyaW5nIEBkZWZhdWx0KCIjZmZhYTFlIikgQGRiLlZhckNoYXIoNykgLy8gSGFpciBmcm9udAogIGNvbDFkICAgU3RyaW5nIEBkZWZhdWx0KCIjZmZhYTFlIikgQGRiLlZhckNoYXIoNykgLy8gRXllYnJvd3MKICBjb2wzICAgIFN0cmluZyBAZGVmYXVsdCgiI2JiMTExMSIpIEBkYi5WYXJDaGFyKDcpIC8vIFByaW1hcnkgKGluY2x1ZGVzIGV5ZXMpCiAgY29sMiAgICBTdHJpbmcgQGRlZmF1bHQoIiM4YmEzZDciKSBAZGIuVmFyQ2hhcig3KSAvLyBTZWNvbmRhcnkKICBjb2wyYiAgIFN0cmluZyBAZGVmYXVsdCgiIzdhNzNjOCIpIEBkYi5WYXJDaGFyKDcpIC8vIEFjY2VudCAxCiAgY29sM2IgICBTdHJpbmcgQGRlZmF1bHQoIiNmYWUzMWYiKSBAZGIuVmFyQ2hhcig3KSAvLyBBY2NlbnQgMgogIGNvbDJhICAgU3RyaW5nIEBkZWZhdWx0KCIjZmZmOWFlIikgQGRiLlZhckNoYXIoNykgLy8gQWNjZW50IDMKICBjb2w0ICAgIFN0cmluZyBAZGVmYXVsdCgiIzU1OTM5OSIpIEBkYi5WYXJDaGFyKDcpIC8vIFNoaXJ0CiAgY29sNGEgICBTdHJpbmcgQGRlZmF1bHQoIiM3YTczYzgiKSBAZGIuVmFyQ2hhcig3KSAvLyBTaG9lcyBhY2NlbnQgPwogIGNvbDRiICAgU3RyaW5nIEBkZWZhdWx0KCIjMDAwMGZmIikgQGRiLlZhckNoYXIoNykgLy8gPz8KfQoKZW51bSBXZWFwb25OYW1lIHsKICBmYW4KICBrZXlib2FyZAogIGtuaWZlCiAgbGVlawogIG11ZwogIHNhaQogIHJhY3F1ZXQKICBheGUKICBidW1wcwogIGZsYWlsCiAgZnJ5aW5nUGFuCiAgaGF0Y2hldAogIG1hbW1vdGhCb25lCiAgbW9ybmluZ1N0YXIKICB0cm9tYm9uZQogIGJhdG9uCiAgaGFsYmFyZAogIGxhbmNlCiAgdHJpZGVudAogIHdoaXAKICBub29kbGVCb3dsCiAgcGlvcGlvCiAgc2h1cmlrZW4KICBicm9hZHN3b3JkCiAgc2NpbWl0YXIKICBzd29yZAp9CgplbnVtIFNraWxsTmFtZSB7CiAgaGVyY3VsZWFuU3RyZW5ndGgKICBmZWxpbmVBZ2lsaXR5CiAgbGlnaHRuaW5nQm9sdAogIHZpdGFsaXR5CiAgaW1tb3J0YWxpdHkKICByZWNvbm5haXNzYW5jZQogIHdlYXBvbnNNYXN0ZXIKICBtYXJ0aWFsQXJ0cwogIHNpeHRoU2Vuc2UKICBob3N0aWxpdHkKICBmaXN0c09mRnVyeQogIHNoaWVsZAogIGFybW9yCiAgdG91Z2hlbmVkU2tpbgogIHVudG91Y2hhYmxlCiAgc2Fib3RhZ2UKICBzaG9jawogIGJvZHlidWlsZGVyCiAgcmVsZW50bGVzcwogIHN1cnZpdmFsCiAgbGVhZFNrZWxldG9uCiAgYmFsbGV0U2hvZXMKICBkZXRlcm1pbmF0aW9uCiAgZmlyc3RTdHJpa2UKICByZXNpc3RhbnQKICBjb3VudGVyQXR0YWNrCiAgaXJvbkhlYWQKICB0aGllZgogIGZpZXJjZUJydXRlCiAgdHJhZ2ljUG90aW9uCiAgbmV0CiAgYm9tYgogIGhhbW1lcgogIGNyeU9mVGhlRGFtbmVkCiAgaHlwbm9zaXMKICBmbGFzaEZsb29kCiAgdGFtZXIKICByZWdlbmVyYXRpb24KICBjaGVmCiAgc3B5CiAgc2Fib3RldXIKICBiYWNrdXAKICBoaWRlYXdheQogIG1vbmsKfQoKZW51bSBQZXROYW1lIHsKICBkb2cxCiAgZG9nMgogIGRvZzMKICBwYW50aGVyCiAgYmVhcgp9Cgptb2RlbCBCcnV0ZSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGRlbGV0ZWRBdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcHR6KCkKICBjcmVhdGVkQXQgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooKQogIGRlc3RpbnlQYXRoICAgICAgICAgICAgICAgICAgRGVzdGlueUNob2ljZVNpZGVbXSAgQGRlZmF1bHQoW10pCiAgcHJldmlvdXNEZXN0aW55UGF0aCAgICAgICAgICBEZXN0aW55Q2hvaWNlU2lkZVtdICBAZGVmYXVsdChbXSkKICBsZXZlbCAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpCiAgeHAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGhwICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBlbmR1cmFuY2VTdGF0ICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZW5kdXJhbmNlTW9kaWZpZXIgICAgICAgICAgICBGbG9hdCAgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIGVuZHVyYW5jZVZhbHVlICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzdHJlbmd0aFN0YXQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgc3RyZW5ndGhNb2RpZmllciAgICAgICAgICAgICBGbG9hdCAgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIHN0cmVuZ3RoVmFsdWUgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBhZ2lsaXR5U3RhdCAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgYWdpbGl0eU1vZGlmaWVyICAgICAgICAgICAgICBGbG9hdCAgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIGFnaWxpdHlWYWx1ZSAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzcGVlZFN0YXQgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgc3BlZWRNb2RpZmllciAgICAgICAgICAgICAgICBGbG9hdCAgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIHNwZWVkVmFsdWUgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByYW5raW5nICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDExKQogIGdlbmRlciAgICAgICAgICAgICAgICAgICAgICAgR2VuZGVyCiAgdXNlciAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5VdWlkCiAgYm9keSAgICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZUJvZHk/CiAgY29sb3JzICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZUNvbG9ycz8KICB3ZWFwb25zICAgICAgICAgICAgICAgICAgICAgIFdlYXBvbk5hbWVbXSAgICAgICAgIEBkZWZhdWx0KFtdKQogIHNraWxscyAgICAgICAgICAgICAgICAgICAgICAgU2tpbGxOYW1lW10gICAgICAgICAgQGRlZmF1bHQoW10pCiAgcGV0cyAgICAgICAgICAgICAgICAgICAgICAgICBQZXROYW1lW10gICAgICAgICAgICBAZGVmYXVsdChbXSkKICBtYXN0ZXIgICAgICAgICAgICAgICAgICAgICAgIEJydXRlPyAgICAgICAgICAgICAgIEByZWxhdGlvbigiTWFzdGVyIiwgZmllbGRzOiBbbWFzdGVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1hc3RlcklkICAgICAgICAgICAgICAgICAgICAgSW50PwogIHB1cGlscyAgICAgICAgICAgICAgICAgICAgICAgQnJ1dGVbXSAgICAgICAgICAgICAgQHJlbGF0aW9uKCJNYXN0ZXIiKQogIHB1cGlsc0NvdW50ICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjbGFuICAgICAgICAgICAgICAgICAgICAgICAgIENsYW4/ICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNsYW5JZCAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIHJlZ2lzdGVyZWRGb3JUb3VybmFtZW50ICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgbmV4dFRvdXJuYW1lbnREYXRlICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuRGF0ZQogIGN1cnJlbnRUb3VybmFtZW50RGF0ZSAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLkRhdGUKICBjdXJyZW50VG91cm5hbWVudFN0ZXBXYXRjaGVkIEludD8gICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgbGFzdEZpZ2h0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuRGF0ZQogIGZpZ2h0c0xlZnQgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoNikKICB2aWN0b3JpZXMgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZmlnaHRzICAgICAgICAgICAgICAgICAgICAgICBGaWdodFtdCiAgZmlnaHRzQXNBZHZlcnNhcnkgICAgICAgICAgICBGaWdodFtdICAgICAgICAgICAgICBAcmVsYXRpb24oIkFkdmVyc2FyeSIpCiAgbG9ncyAgICAgICAgICAgICAgICAgICAgICAgICBMb2dbXQogIGRlc3RpbnlDaG9pY2VzICAgICAgICAgICAgICAgRGVzdGlueUNob2ljZVtdCiAgdG91cm5hbWVudHMgICAgICAgICAgICAgICAgICBUb3VybmFtZW50W10KICBvcHBvbmVudHMgICAgICAgICAgICAgICAgICAgIEJydXRlW10gICAgICAgICAgICAgIEByZWxhdGlvbigiT3Bwb25lbnRzIikKICBvcHBvbmVudE9mICAgICAgICAgICAgICAgICAgIEJydXRlW10gICAgICAgICAgICAgIEByZWxhdGlvbigiT3Bwb25lbnRzIikKICBvcHBvbmVudHNHZW5lcmF0ZWRBdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5EYXRlCiAgY2FuUmFua1VwU2luY2UgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuRGF0ZQogIGFjaGlldmVtZW50cyAgICAgICAgICAgICAgICAgQWNoaWV2ZW1lbnRbXQogIHRvdXJuYW1lbnRFYXJuaW5ncyAgICAgICAgICAgVG91cm5hbWVudEVhcm5pbmdbXQogIHJlcG9ydHMgICAgICAgICAgICAgICAgICAgICAgQnJ1dGVSZXBvcnRbXQogIGZhdm9yaXRlICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdGl0bGVzICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVtdCiAgbWFzdGVyT2ZDbGFuICAgICAgICAgICAgICAgICBDbGFuPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oIk1hc3Rlck9mQ2xhbiIpCiAgY2xhblBvc3RzICAgICAgICAgICAgICAgICAgICBDbGFuUG9zdFtdCiAgd2FudFRvSm9pbkNsYW4gICAgICAgICAgICAgICBDbGFuPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oIkpvaW5SZXF1ZXN0cyIsIGZpZWxkczogW3dhbnRUb0pvaW5DbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHdhbnRUb0pvaW5DbGFuSWQgICAgICAgICAgICAgSW50PwogIHRocmVhZHMgICAgICAgICAgICAgICAgICAgICAgQ2xhblRocmVhZFtdCiAgaW52ZW50b3J5ICAgICAgICAgICAgICAgICAgICBCcnV0ZUludmVudG9yeUl0ZW1bXQp9CgovLyBGSUdIVFMKZW51bSBGaWdodGVyVHlwZSB7CiAgYnJ1dGUKICBwZXQKfQoKbW9kZWwgRmlnaHQgewogIGlkICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlICAgICAgICAgICBEYXRlVGltZSAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuRGF0ZQogIGJydXRlMSAgICAgICAgIEJydXRlICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlMUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZTFJZCAgICAgICBJbnQKICBicnV0ZTIgICAgICAgICBCcnV0ZT8gICAgICAgICAgIEByZWxhdGlvbigiQWR2ZXJzYXJ5IiwgZmllbGRzOiBbYnJ1dGUySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlMklkICAgICAgIEludD8KICB3aW5uZXIgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsb3NlciAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBzdGVwcyAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5UZXh0CiAgZmlnaHRlcnMgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVGV4dAogIGxvZ3MgICAgICAgICAgIExvZ1tdCiAgVG91cm5hbWVudFN0ZXAgVG91cm5hbWVudFN0ZXBbXQp9CgovLyBMT0dTCmVudW0gTG9nVHlwZSB7CiAgd2luCiAgbG9zZQogIGNoaWxkCiAgY2hpbGR1cAogIHVwCiAgbHZsCiAgc3Vydml2ZQogIHRvdXJuYW1lbnQKICB0b3VybmFtZW50WHAKfQoKbW9kZWwgTG9nIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGUgICAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuRGF0ZQogIGN1cnJlbnRCcnV0ZSAgIEJydXRlICAgIEByZWxhdGlvbihmaWVsZHM6IFtjdXJyZW50QnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY3VycmVudEJydXRlSWQgSW50CiAgdHlwZSAgICAgICAgICAgTG9nVHlwZQogIGxldmVsICAgICAgICAgIEludD8KICBicnV0ZSAgICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigyNTUpCiAgZmlnaHQgICAgICAgICAgRmlnaHQ/ICAgQHJlbGF0aW9uKGZpZWxkczogW2ZpZ2h0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGZpZ2h0SWQgICAgICAgIEludD8KICB4cCAgICAgICAgICAgICBJbnQ/Cn0KCi8vIExFVkVMIFVQCmVudW0gRGVzdGlueUNob2ljZVR5cGUgewogIHNraWxsCiAgd2VhcG9uCiAgcGV0CiAgc3RhdHMKfQoKZW51bSBCcnV0ZVN0YXQgewogIGVuZHVyYW5jZQogIHN0cmVuZ3RoCiAgYWdpbGl0eQogIHNwZWVkCn0KCm1vZGVsIERlc3RpbnlDaG9pY2UgewogIGlkICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGJydXRlICAgICAgQnJ1dGUgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCAgICBJbnQKICBwYXRoICAgICAgIERlc3RpbnlDaG9pY2VTaWRlW10KICB0eXBlICAgICAgIERlc3RpbnlDaG9pY2VUeXBlCiAgc2tpbGwgICAgICBTa2lsbE5hbWU/CiAgd2VhcG9uICAgICBXZWFwb25OYW1lPwogIHBldCAgICAgICAgUGV0TmFtZT8KICBzdGF0MSAgICAgIEJydXRlU3RhdD8KICBzdGF0MVZhbHVlIEludD8KICBzdGF0MiAgICAgIEJydXRlU3RhdD8KICBzdGF0MlZhbHVlIEludD8KfQoKLy8gVE9VUk5BTUVOVFMKZW51bSBUb3VybmFtZW50VHlwZSB7CiAgREFJTFkKICBHTE9CQUwKICBDVVNUT00KfQoKbW9kZWwgVG91cm5hbWVudCB7CiAgaWQgICAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlICAgICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGIuRGF0ZQogIHR5cGUgICAgICAgICBUb3VybmFtZW50VHlwZSAgIEBkZWZhdWx0KERBSUxZKQogIHBhcnRpY2lwYW50cyBCcnV0ZVtdCiAgc3RlcHMgICAgICAgIFRvdXJuYW1lbnRTdGVwW10KICByb3VuZHMgICAgICAgSW50Cn0KCm1vZGVsIFRvdXJuYW1lbnRTdGVwIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0b3VybmFtZW50ICAgIFRvdXJuYW1lbnQgQHJlbGF0aW9uKGZpZWxkczogW3RvdXJuYW1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdG91cm5hbWVudElkICBJbnQKICBzdGVwICAgICAgICAgIEludAogIGZpZ2h0ICAgICAgICAgRmlnaHQgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZmlnaHRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZmlnaHRJZCAgICAgICBJbnQKICB4cERpc3RyaWJ1dGVkIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpCn0KCm1vZGVsIFRvdXJuYW1lbnRFYXJuaW5nIHsKICBpZCAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgQGRiLkRhdGUKICBicnV0ZSAgICAgICAgICAgIEJydXRlICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlSWQgICAgICAgICAgSW50CiAgcG9pbnRzICAgICAgICAgICBJbnQ/CiAgYWNoaWV2ZW1lbnQgICAgICBBY2hpZXZlbWVudE5hbWU/CiAgYWNoaWV2ZW1lbnRDb3VudCBJbnQ/Cn0KCi8vIEFDSElFVkVNRU5UUwplbnVtIEFjaGlldmVtZW50TmFtZSB7CiAgLy8gRmlnaHRzCiAgd2lucwogIGRlZmVhdHMKICBmbGF3bGVzcwogIHdpbldpdGgxSFAKICBzdGVhbDJXZWFwb25zCiAgc2luZ2xlSGl0V2luCiAgY29tYm8zCiAgY29tYm80CiAgY29tYm81CiAgY291bnRlcjUKICBldmFkZTEwCiAgYmxvY2syNQogIGNvdW50ZXI0YjJiCiAgcmV2ZXJzYWw0YjJiCiAgYmxvY2s0YjJiCiAgZXZhZGU0YjJiCiAgdGhyb3cxMGIyYgogIGRpc2FybTQKICBkaXNhcm04CiAgZGFtYWdlNTBvbmNlCiAgZGFtYWdlMTAwb25jZQogIGhpdDIwdGltZXMKICB1c2UxMHNraWxscwogIGtpbGwzcGV0cwogIG1heERhbWFnZQogIC8vIFNraWxscyB1c2UKICBzYWJvdGV1cgogIC8vIFBlcmtzIHVubG9jawogIGRvZwogIHBhbnRoZXIKICBiZWFyCiAgcGFudGhlcl9iZWFyCiAgZmVsQWdfZmlzdHNPZkYKICBmZWxBZ19maXN0c09mRl91bnRvdWNoX3JlbGVudGxlc3MKICB2aXRhX2FybW9yX3RvdWdoZW5lZAogIGhlcmN1bFN0cl9oYW1tZXJfZmllcmNlQnJ1dGUKICBzaG9jawogIGJhbGxldFNob2VzX3N1cnZpdmFsCiAgY3J5T2ZUaGVEYW1uZWRfaHlwbm9zaXMKICBzaGllbGRfY291bnRlckF0dGFjawogIHJlY29ubmFpc3NhbmNlX21vbmsKICBpbW1vcnRhbGl0eQogIGRvdWJsZUJvb3N0CiAgdHJpcGxlQm9vc3QKICBxdWFkcnVwbGVCb29zdAogIHJlZ2VuZXJhdGlvbl9wb3Rpb24KICBiZWFyX3RhbWVyCiAgdHJpcGxlRG9ncwogIGZpdmVXZWFwb25zCiAgdGVuV2VhcG9ucwogIGZpZnRlZW5XZWFwb25zCiAgdHdlbnR5V2VhcG9ucwogIHR3ZW50eVRocmVlV2VhcG9ucwogIG1vbmtfc2l4dGhTZW5zZV93aGlwCiAgd2VhcG9uc01hc3Rlcl9zaGFycF9ib2R5YnVpbGRlcl9oZWF2eQogIGhvc3RpbGl0eV9jb3VudGVyV2VhcG9uCiAgZmxhc2hGbG9vZF90d2VsdmVXZWFwb25zCiAgbGlnaHRuaW5nQm9sdF9maXJzdFN0cmlrZQogIGhlcmN1bGVhblN0cmVuZ3RoCiAgZmVsaW5lQWdpbGl0eQogIGxpZ2h0bmluZ0JvbHQKICB2aXRhbGl0eQogIHBvdGlvbl9jaGVmCiAgdGFtZXJfbmV0CiAgdW50b3VjaGFibGVfYmFsbGV0U2hvZXMKICBzdXJ2aXZhbF9yZXNpc3RhbnQKICBoaWRlYXdheV9zcHkKICB3ZWFwb25zRmFzdDMKICB3ZWFwb25zU2hhcnAzCiAgd2VhcG9uc0hlYXZ5MwogIHdlYXBvbnNMb25nMwogIHdlYXBvbnNUaHJvd24zCiAgd2VhcG9uc0JsdW50MwogIHRob3IKICAvLyBTdGF0cwogIGFnaWxpdHk1MAogIGFnaWxpdHkxMDAKICBzcGVlZDUwCiAgc3BlZWQxMDAKICBzdHJlbmd0aDUwCiAgc3RyZW5ndGgxMDAKICBocDMwMAogIGhwNjAwCiAgbWF4TGV2ZWwKICBhbGxBY2hpZXZlbWVudHMKICAvLyBUb3VybmFtZW50CiAgd2luVG91cm5hbWVudEFzMjAKICB3aW5Ub3VybmFtZW50QXMxNQogIGxvb3NlQWdhaW5zdDIKICBsb29zZUFnYWluc3QzCiAgbG9vc2VBZ2FpbnN0NAogIHdpbkFnYWluc3QyCiAgd2luQWdhaW5zdDMKICB3aW5BZ2FpbnN0NAogIHdpbkFzTG93ZXIKICB3aW4KICAvLyBSYW5rcwogIHJhbmtVcDEwCiAgcmFua1VwOQogIHJhbmtVcDgKICByYW5rVXA3CiAgcmFua1VwNgogIHJhbmtVcDUKICByYW5rVXA0CiAgcmFua1VwMwogIHJhbmtVcDIKICByYW5rVXAxCiAgcmFua1VwMAogIC8vIFVzZXIKICBzYWNyaWZpY2UKICBiZXRhCiAgYnVnCn0KCm1vZGVsIEFjaGlldmVtZW50IHsKICBpZCAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgQWNoaWV2ZW1lbnROYW1lCiAgY291bnQgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBicnV0ZSAgIEJydXRlPyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCBJbnQ/CiAgdXNlciAgICBVc2VyPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICBTdHJpbmc/ICAgICAgICAgQGRiLlV1aWQKfQoKbW9kZWwgVGl0bGUgewogIGlkICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgQWNoaWV2ZW1lbnROYW1lCiAgY291bnQgIEludCAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIGJydXRlcyBCcnV0ZVtdCn0KCi8vIFJFUE9SVFMKZW51bSBCcnV0ZVJlcG9ydFN0YXR1cyB7CiAgcGVuZGluZwogIGFjY2VwdGVkCiAgcmVqZWN0ZWQKfQoKZW51bSBCcnV0ZVJlcG9ydFJlYXNvbiB7CiAgbmFtZQp9Cgptb2RlbCBCcnV0ZVJlcG9ydCB7CiAgaWQgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGJydXRlICAgQnJ1dGUgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlSWQgSW50CiAgdXNlcnMgICBVc2VyW10KICByZWFzb24gIEJydXRlUmVwb3J0UmVhc29uIEBkZWZhdWx0KG5hbWUpCiAgY291bnQgICBJbnQgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIGRhdGUgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5EYXRlCiAgc3RhdHVzICBCcnV0ZVJlcG9ydFN0YXR1cyBAZGVmYXVsdChwZW5kaW5nKQp9CgovLyBTRVJWRVIgU1RBVEUKbW9kZWwgU2VydmVyU3RhdGUgewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcmVhZHkgICAgICAgICAgICAgICAgIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkKICBnbG9iYWxUb3VybmFtZW50VmFsaWQgQm9vbGVhbiBAZGVmYXVsdCh0cnVlKQp9Cgptb2RlbCBCYW5uZWRXb3JkIHsKICBpZCAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHdvcmQgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgV29ya2VySm9iIHsKICBpZCAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHdvcmtlciAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKICBwYXlsb2FkIFN0cmluZyBAZGIuVGV4dAp9CgovLyBDTEFOUwplbnVtIEJvc3NOYW1lIHsKICBHb2xkQ2xhdwogIEVtYmVyRmFuZwp9Cgptb2RlbCBDbGFuIHsKICBpZCAgICAgICAgICAgSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgIFN0cmluZyAgICAgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDI1NSkKICBsaW1pdCAgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDEwKQogIHBvaW50cyAgICAgICBJbnQgICAgICAgICAgQGRlZmF1bHQoMCkKICBib3NzICAgICAgICAgQm9zc05hbWUgICAgIEBkZWZhdWx0KEdvbGRDbGF3KQogIGRhbWFnZU9uQm9zcyBJbnQgICAgICAgICAgQGRlZmF1bHQoMCkKICBtYXN0ZXIgICAgICAgQnJ1dGUgICAgICAgIEByZWxhdGlvbigiTWFzdGVyT2ZDbGFuIiwgZmllbGRzOiBbbWFzdGVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1hc3RlcklkICAgICBJbnQgICAgICAgICAgQHVuaXF1ZQogIGJydXRlcyAgICAgICBCcnV0ZVtdCiAgam9pblJlcXVlc3RzIEJydXRlW10gICAgICBAcmVsYXRpb24oIkpvaW5SZXF1ZXN0cyIpCiAgdGhyZWFkcyAgICAgIENsYW5UaHJlYWRbXQp9Cgptb2RlbCBDbGFuVGhyZWFkIHsKICBpZCAgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNsYW4gICAgICBDbGFuICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNsYW5JZCAgICBJbnQKICBjcmVhdG9yICAgQnJ1dGUgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRvcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdG9ySWQgSW50CiAgdGl0bGUgICAgIFN0cmluZyAgICAgQGRiLlZhckNoYXIoMjU1KQogIGxvY2tlZCAgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogIHBpbm5lZCAgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogIHBvc3RDb3VudCBJbnQgICAgICAgIEBkZWZhdWx0KDEpCiAgcG9zdHMgICAgIENsYW5Qb3N0W10KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCgpCiAgdXBkYXRlZEF0IERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoKQp9Cgptb2RlbCBDbGFuUG9zdCB7CiAgaWQgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRocmVhZCAgIENsYW5UaHJlYWQgQHJlbGF0aW9uKGZpZWxkczogW3RocmVhZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICB0aHJlYWRJZCBJbnQKICBhdXRob3IgICBCcnV0ZSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYXV0aG9ySWQgSW50CiAgZGF0ZSAgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCgpCiAgbWVzc2FnZSAgU3RyaW5nICAgICBAZGIuVGV4dAp9CgovLyBJbnZlbnRvcnkKZW51bSBJbnZlbnRvcnlJdGVtVHlwZSB7CiAgdmlzdWFsUmVzZXQKfQoKbW9kZWwgQnJ1dGVJbnZlbnRvcnlJdGVtIHsKICBpZCAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdHlwZSAgICBJbnZlbnRvcnlJdGVtVHlwZQogIGNvdW50ICAgSW50ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBicnV0ZSAgIEJydXRlICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludAogIEBAdW5pcXVlKFt0eXBlLCBicnV0ZUlkXSkKfQ==",
  "inlineSchemaHash": "717562c1955feda641a63ac24a6f16043e49a7e302c4243709bc78e18e4ac88b"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Lang\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connexionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backgroundMusic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteBody\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteColors\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1d\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#bb1111\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#8ba3d7\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fae31f\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fff9ae\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#559399\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#0000ff\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brute\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousDestinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ranking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":11,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteBody\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteColors\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapons\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WeaponName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SkillName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pets\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PetName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupils\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupilsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registeredForTournament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentStepWatched\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsLeft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":6,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"victories\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fights\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsAsAdversary\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"Adversary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyChoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoice\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournaments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentsGeneratedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canRankUpSince\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentEarnings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentEarning\",\"relationName\":\"BruteToTournamentEarning\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Title\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterOfClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[\"wantToJoinClanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteInventoryItem\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fight\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[\"brute1Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Adversary\",\"relationFromFields\":[\"brute2Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fighters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"FightToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TournamentStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Log\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBrute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[\"currentBruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToLog\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DestinyChoice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceSide\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skill\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SkillName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pet\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tournament\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TournamentType\",\"default\":\"DAILY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rounds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentStep\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[\"tournamentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xpDistributed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentEarning\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentEarning\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievement\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievementCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Achievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Title\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteReport\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportReason\",\"default\":\"name\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServerState\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ready\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"globalTournamentValid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BannedWord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkerJob\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boss\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BossName\",\"default\":\"GoldClaw\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"damageOnBoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanThread\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanPost\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[\"threadId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteInventoryItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InventoryItemType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type\",\"bruteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type\",\"bruteId\"]}],\"isGenerated\":false}},\"enums\":{\"Lang\":{\"values\":[{\"name\":\"en\",\"dbName\":null},{\"name\":\"fr\",\"dbName\":null},{\"name\":\"de\",\"dbName\":null},{\"name\":\"es\",\"dbName\":null},{\"name\":\"ru\",\"dbName\":null},{\"name\":\"pt\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceSide\":{\"values\":[{\"name\":\"LEFT\",\"dbName\":\"0\"},{\"name\":\"RIGHT\",\"dbName\":\"1\"}],\"dbName\":null},\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"WeaponName\":{\"values\":[{\"name\":\"fan\",\"dbName\":null},{\"name\":\"keyboard\",\"dbName\":null},{\"name\":\"knife\",\"dbName\":null},{\"name\":\"leek\",\"dbName\":null},{\"name\":\"mug\",\"dbName\":null},{\"name\":\"sai\",\"dbName\":null},{\"name\":\"racquet\",\"dbName\":null},{\"name\":\"axe\",\"dbName\":null},{\"name\":\"bumps\",\"dbName\":null},{\"name\":\"flail\",\"dbName\":null},{\"name\":\"fryingPan\",\"dbName\":null},{\"name\":\"hatchet\",\"dbName\":null},{\"name\":\"mammothBone\",\"dbName\":null},{\"name\":\"morningStar\",\"dbName\":null},{\"name\":\"trombone\",\"dbName\":null},{\"name\":\"baton\",\"dbName\":null},{\"name\":\"halbard\",\"dbName\":null},{\"name\":\"lance\",\"dbName\":null},{\"name\":\"trident\",\"dbName\":null},{\"name\":\"whip\",\"dbName\":null},{\"name\":\"noodleBowl\",\"dbName\":null},{\"name\":\"piopio\",\"dbName\":null},{\"name\":\"shuriken\",\"dbName\":null},{\"name\":\"broadsword\",\"dbName\":null},{\"name\":\"scimitar\",\"dbName\":null},{\"name\":\"sword\",\"dbName\":null}],\"dbName\":null},\"SkillName\":{\"values\":[{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"reconnaissance\",\"dbName\":null},{\"name\":\"weaponsMaster\",\"dbName\":null},{\"name\":\"martialArts\",\"dbName\":null},{\"name\":\"sixthSense\",\"dbName\":null},{\"name\":\"hostility\",\"dbName\":null},{\"name\":\"fistsOfFury\",\"dbName\":null},{\"name\":\"shield\",\"dbName\":null},{\"name\":\"armor\",\"dbName\":null},{\"name\":\"toughenedSkin\",\"dbName\":null},{\"name\":\"untouchable\",\"dbName\":null},{\"name\":\"sabotage\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"bodybuilder\",\"dbName\":null},{\"name\":\"relentless\",\"dbName\":null},{\"name\":\"survival\",\"dbName\":null},{\"name\":\"leadSkeleton\",\"dbName\":null},{\"name\":\"balletShoes\",\"dbName\":null},{\"name\":\"determination\",\"dbName\":null},{\"name\":\"firstStrike\",\"dbName\":null},{\"name\":\"resistant\",\"dbName\":null},{\"name\":\"counterAttack\",\"dbName\":null},{\"name\":\"ironHead\",\"dbName\":null},{\"name\":\"thief\",\"dbName\":null},{\"name\":\"fierceBrute\",\"dbName\":null},{\"name\":\"tragicPotion\",\"dbName\":null},{\"name\":\"net\",\"dbName\":null},{\"name\":\"bomb\",\"dbName\":null},{\"name\":\"hammer\",\"dbName\":null},{\"name\":\"cryOfTheDamned\",\"dbName\":null},{\"name\":\"hypnosis\",\"dbName\":null},{\"name\":\"flashFlood\",\"dbName\":null},{\"name\":\"tamer\",\"dbName\":null},{\"name\":\"regeneration\",\"dbName\":null},{\"name\":\"chef\",\"dbName\":null},{\"name\":\"spy\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"backup\",\"dbName\":null},{\"name\":\"hideaway\",\"dbName\":null},{\"name\":\"monk\",\"dbName\":null}],\"dbName\":null},\"PetName\":{\"values\":[{\"name\":\"dog1\",\"dbName\":null},{\"name\":\"dog2\",\"dbName\":null},{\"name\":\"dog3\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null}],\"dbName\":null},\"FighterType\":{\"values\":[{\"name\":\"brute\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null}],\"dbName\":null},\"LogType\":{\"values\":[{\"name\":\"win\",\"dbName\":null},{\"name\":\"lose\",\"dbName\":null},{\"name\":\"child\",\"dbName\":null},{\"name\":\"childup\",\"dbName\":null},{\"name\":\"up\",\"dbName\":null},{\"name\":\"lvl\",\"dbName\":null},{\"name\":\"survive\",\"dbName\":null},{\"name\":\"tournament\",\"dbName\":null},{\"name\":\"tournamentXp\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceType\":{\"values\":[{\"name\":\"skill\",\"dbName\":null},{\"name\":\"weapon\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null},{\"name\":\"stats\",\"dbName\":null}],\"dbName\":null},\"BruteStat\":{\"values\":[{\"name\":\"endurance\",\"dbName\":null},{\"name\":\"strength\",\"dbName\":null},{\"name\":\"agility\",\"dbName\":null},{\"name\":\"speed\",\"dbName\":null}],\"dbName\":null},\"TournamentType\":{\"values\":[{\"name\":\"DAILY\",\"dbName\":null},{\"name\":\"GLOBAL\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"AchievementName\":{\"values\":[{\"name\":\"wins\",\"dbName\":null},{\"name\":\"defeats\",\"dbName\":null},{\"name\":\"flawless\",\"dbName\":null},{\"name\":\"winWith1HP\",\"dbName\":null},{\"name\":\"steal2Weapons\",\"dbName\":null},{\"name\":\"singleHitWin\",\"dbName\":null},{\"name\":\"combo3\",\"dbName\":null},{\"name\":\"combo4\",\"dbName\":null},{\"name\":\"combo5\",\"dbName\":null},{\"name\":\"counter5\",\"dbName\":null},{\"name\":\"evade10\",\"dbName\":null},{\"name\":\"block25\",\"dbName\":null},{\"name\":\"counter4b2b\",\"dbName\":null},{\"name\":\"reversal4b2b\",\"dbName\":null},{\"name\":\"block4b2b\",\"dbName\":null},{\"name\":\"evade4b2b\",\"dbName\":null},{\"name\":\"throw10b2b\",\"dbName\":null},{\"name\":\"disarm4\",\"dbName\":null},{\"name\":\"disarm8\",\"dbName\":null},{\"name\":\"damage50once\",\"dbName\":null},{\"name\":\"damage100once\",\"dbName\":null},{\"name\":\"hit20times\",\"dbName\":null},{\"name\":\"use10skills\",\"dbName\":null},{\"name\":\"kill3pets\",\"dbName\":null},{\"name\":\"maxDamage\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"dog\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null},{\"name\":\"panther_bear\",\"dbName\":null},{\"name\":\"felAg_fistsOfF\",\"dbName\":null},{\"name\":\"felAg_fistsOfF_untouch_relentless\",\"dbName\":null},{\"name\":\"vita_armor_toughened\",\"dbName\":null},{\"name\":\"herculStr_hammer_fierceBrute\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"balletShoes_survival\",\"dbName\":null},{\"name\":\"cryOfTheDamned_hypnosis\",\"dbName\":null},{\"name\":\"shield_counterAttack\",\"dbName\":null},{\"name\":\"reconnaissance_monk\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"doubleBoost\",\"dbName\":null},{\"name\":\"tripleBoost\",\"dbName\":null},{\"name\":\"quadrupleBoost\",\"dbName\":null},{\"name\":\"regeneration_potion\",\"dbName\":null},{\"name\":\"bear_tamer\",\"dbName\":null},{\"name\":\"tripleDogs\",\"dbName\":null},{\"name\":\"fiveWeapons\",\"dbName\":null},{\"name\":\"tenWeapons\",\"dbName\":null},{\"name\":\"fifteenWeapons\",\"dbName\":null},{\"name\":\"twentyWeapons\",\"dbName\":null},{\"name\":\"twentyThreeWeapons\",\"dbName\":null},{\"name\":\"monk_sixthSense_whip\",\"dbName\":null},{\"name\":\"weaponsMaster_sharp_bodybuilder_heavy\",\"dbName\":null},{\"name\":\"hostility_counterWeapon\",\"dbName\":null},{\"name\":\"flashFlood_twelveWeapons\",\"dbName\":null},{\"name\":\"lightningBolt_firstStrike\",\"dbName\":null},{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"potion_chef\",\"dbName\":null},{\"name\":\"tamer_net\",\"dbName\":null},{\"name\":\"untouchable_balletShoes\",\"dbName\":null},{\"name\":\"survival_resistant\",\"dbName\":null},{\"name\":\"hideaway_spy\",\"dbName\":null},{\"name\":\"weaponsFast3\",\"dbName\":null},{\"name\":\"weaponsSharp3\",\"dbName\":null},{\"name\":\"weaponsHeavy3\",\"dbName\":null},{\"name\":\"weaponsLong3\",\"dbName\":null},{\"name\":\"weaponsThrown3\",\"dbName\":null},{\"name\":\"weaponsBlunt3\",\"dbName\":null},{\"name\":\"thor\",\"dbName\":null},{\"name\":\"agility50\",\"dbName\":null},{\"name\":\"agility100\",\"dbName\":null},{\"name\":\"speed50\",\"dbName\":null},{\"name\":\"speed100\",\"dbName\":null},{\"name\":\"strength50\",\"dbName\":null},{\"name\":\"strength100\",\"dbName\":null},{\"name\":\"hp300\",\"dbName\":null},{\"name\":\"hp600\",\"dbName\":null},{\"name\":\"maxLevel\",\"dbName\":null},{\"name\":\"allAchievements\",\"dbName\":null},{\"name\":\"winTournamentAs20\",\"dbName\":null},{\"name\":\"winTournamentAs15\",\"dbName\":null},{\"name\":\"looseAgainst2\",\"dbName\":null},{\"name\":\"looseAgainst3\",\"dbName\":null},{\"name\":\"looseAgainst4\",\"dbName\":null},{\"name\":\"winAgainst2\",\"dbName\":null},{\"name\":\"winAgainst3\",\"dbName\":null},{\"name\":\"winAgainst4\",\"dbName\":null},{\"name\":\"winAsLower\",\"dbName\":null},{\"name\":\"win\",\"dbName\":null},{\"name\":\"rankUp10\",\"dbName\":null},{\"name\":\"rankUp9\",\"dbName\":null},{\"name\":\"rankUp8\",\"dbName\":null},{\"name\":\"rankUp7\",\"dbName\":null},{\"name\":\"rankUp6\",\"dbName\":null},{\"name\":\"rankUp5\",\"dbName\":null},{\"name\":\"rankUp4\",\"dbName\":null},{\"name\":\"rankUp3\",\"dbName\":null},{\"name\":\"rankUp2\",\"dbName\":null},{\"name\":\"rankUp1\",\"dbName\":null},{\"name\":\"rankUp0\",\"dbName\":null},{\"name\":\"sacrifice\",\"dbName\":null},{\"name\":\"beta\",\"dbName\":null},{\"name\":\"bug\",\"dbName\":null}],\"dbName\":null},\"BruteReportStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null}],\"dbName\":null},\"BruteReportReason\":{\"values\":[{\"name\":\"name\",\"dbName\":null}],\"dbName\":null},\"BossName\":{\"values\":[{\"name\":\"GoldClaw\",\"dbName\":null},{\"name\":\"EmberFang\",\"dbName\":null}],\"dbName\":null},\"InventoryItemType\":{\"values\":[{\"name\":\"visualReset\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

