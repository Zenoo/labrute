
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
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
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


  const path = require('path')

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
  fighters: 'fighters',
  tournamentId: 'tournamentId'
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
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
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
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../../prisma\"\n  binaryTargets   = [\"native\", \"debian-openssl-3.0.x\", \"debian-openssl-1.1.x\"]\n  previewFeatures = [\"relationJoins\", \"nativeDistinct\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum Lang {\n  en\n  fr\n  de\n  es\n  ru\n  pt\n}\n\nmodel User {\n  id              String           @id @unique @db.Uuid\n  lang            Lang             @default(fr)\n  name            String           @db.VarChar(255)\n  admin           Boolean          @default(false)\n  moderator       Boolean          @default(false)\n  connexionToken  String           @db.Uuid\n  bruteLimit      Int              @default(3)\n  gold            Int              @default(0)\n  fightSpeed      Int              @default(1)\n  backgroundMusic Boolean          @default(true)\n  brutes          Brute[]\n  achievements    Achievement[]\n  reports         BruteReport[]\n  tournamentGolds TournamentGold[]\n}\n\nenum DestinyChoiceSide {\n  LEFT  @map(\"0\")\n  RIGHT @map(\"1\")\n}\n\nenum Gender {\n  male\n  female\n}\n\nmodel BruteBody {\n  id      Int   @id @default(autoincrement())\n  brute   Brute @relation(fields: [bruteId], references: [id])\n  bruteId Int   @unique\n  p2      Int   @default(0) // Body size (small = 0, big = 7) (male only, 0 for females)\n  p3      Int   @default(0) // Hair [0-11] 12 = no head\n  p4      Int   @default(0) // (male) Beard [0-4] 5 = nothing / (female) Front hair [0-2] 3 = nothing\n  p7      Int   @default(0) // Main clothing [0-6] 7 = naked\n  p1      Int   @default(0) // Armor variation [0-1]\n  p1a     Int   @default(0) // [0-1] 0=belt, 1=nothing\n  p1b     Int   @default(0) // [0-1] 0=roman belt, 1=nothing\n  p6      Int   @default(0) // (male) 0=shorts, 1=trousers / (female) 0=shorts, 1=nothing\n  p8      Int   @default(0) // [0-4] Supposed to be shoes but doesn't change anything ??\n  p7b     Int   @default(0) // Shoes underside (2 = visible, others = hidden)\n  p5      Int   @default(0) // 0=Nothing, 1=Shirt.\n}\n\nmodel BruteColors {\n  id      Int    @id @default(autoincrement())\n  brute   Brute  @relation(fields: [bruteId], references: [id])\n  bruteId Int    @unique\n  col0    String @default(\"#eaaca6\") @db.VarChar(7) // Skin\n  col0a   String @default(\"#eaaca6\") @db.VarChar(7) // Face\n  col0c   String @default(\"#eaaca6\") @db.VarChar(7) // Ear\n  col1    String @default(\"#ffaa1e\") @db.VarChar(7) // Hair\n  col1a   String @default(\"#ffaa1e\") @db.VarChar(7) // Hair back\n  col1b   String @default(\"#ffaa1e\") @db.VarChar(7) // Hair back 2\n  col1c   String @default(\"#ffaa1e\") @db.VarChar(7) // Hair front\n  col1d   String @default(\"#ffaa1e\") @db.VarChar(7) // Eyebrows\n  col3    String @default(\"#bb1111\") @db.VarChar(7) // Primary (includes eyes)\n  col2    String @default(\"#8ba3d7\") @db.VarChar(7) // Secondary\n  col2b   String @default(\"#7a73c8\") @db.VarChar(7) // Accent 1\n  col3b   String @default(\"#fae31f\") @db.VarChar(7) // Accent 2\n  col2a   String @default(\"#fff9ae\") @db.VarChar(7) // Accent 3\n  col4    String @default(\"#559399\") @db.VarChar(7) // Shirt\n  col4a   String @default(\"#7a73c8\") @db.VarChar(7) // Shoes accent ?\n  col4b   String @default(\"#0000ff\") @db.VarChar(7) // ??\n}\n\nenum WeaponName {\n  fan\n  keyboard\n  knife\n  leek\n  mug\n  sai\n  racquet\n  axe\n  bumps\n  flail\n  fryingPan\n  hatchet\n  mammothBone\n  morningStar\n  trombone\n  baton\n  halbard\n  lance\n  trident\n  whip\n  noodleBowl\n  piopio\n  shuriken\n  broadsword\n  scimitar\n  sword\n}\n\nenum SkillName {\n  herculeanStrength\n  felineAgility\n  lightningBolt\n  vitality\n  immortality\n  reconnaissance\n  weaponsMaster\n  martialArts\n  sixthSense\n  hostility\n  fistsOfFury\n  shield\n  armor\n  toughenedSkin\n  untouchable\n  sabotage\n  shock\n  bodybuilder\n  relentless\n  survival\n  leadSkeleton\n  balletShoes\n  determination\n  firstStrike\n  resistant\n  counterAttack\n  ironHead\n  thief\n  fierceBrute\n  tragicPotion\n  net\n  bomb\n  hammer\n  cryOfTheDamned\n  hypnosis\n  flashFlood\n  tamer\n  regeneration\n  chef\n  spy\n  saboteur\n  backup\n  hideaway\n  monk\n}\n\nenum PetName {\n  dog1\n  dog2\n  dog3\n  panther\n  bear\n}\n\nmodel Brute {\n  id                           Int                     @id @default(autoincrement())\n  name                         String                  @db.VarChar(255)\n  deletedAt                    DateTime?               @db.Timestamptz()\n  createdAt                    DateTime                @default(now()) @db.Timestamptz()\n  destinyPath                  DestinyChoiceSide[]     @default([])\n  previousDestinyPath          DestinyChoiceSide[]     @default([])\n  level                        Int                     @default(1)\n  xp                           Int                     @default(0)\n  hp                           Int                     @default(0)\n  enduranceStat                Int                     @default(0)\n  enduranceModifier            Float                   @default(1)\n  enduranceValue               Int                     @default(0)\n  strengthStat                 Int                     @default(0)\n  strengthModifier             Float                   @default(1)\n  strengthValue                Int                     @default(0)\n  agilityStat                  Int                     @default(0)\n  agilityModifier              Float                   @default(1)\n  agilityValue                 Int                     @default(0)\n  speedStat                    Int                     @default(0)\n  speedModifier                Float                   @default(1)\n  speedValue                   Int                     @default(0)\n  ranking                      Int                     @default(11)\n  gender                       Gender\n  user                         User?                   @relation(fields: [userId], references: [id])\n  userId                       String?                 @db.Uuid\n  body                         BruteBody?\n  colors                       BruteColors?\n  weapons                      WeaponName[]            @default([])\n  skills                       SkillName[]             @default([])\n  pets                         PetName[]               @default([])\n  master                       Brute?                  @relation(\"Master\", fields: [masterId], references: [id])\n  masterId                     Int?\n  pupils                       Brute[]                 @relation(\"Master\")\n  pupilsCount                  Int                     @default(0)\n  clan                         Clan?                   @relation(fields: [clanId], references: [id])\n  clanId                       Int?\n  registeredForTournament      Boolean                 @default(false)\n  nextTournamentDate           DateTime?               @db.Date\n  currentTournamentDate        DateTime?               @db.Date\n  currentTournamentStepWatched Int?                    @default(0)\n  lastFight                    DateTime?               @db.Date\n  fightsLeft                   Int                     @default(6)\n  victories                    Int                     @default(0)\n  fights                       Fight[]\n  fightsAsAdversary            Fight[]                 @relation(\"Adversary\")\n  logs                         Log[]\n  destinyChoices               DestinyChoice[]\n  tournaments                  Tournament[]\n  opponents                    Brute[]                 @relation(\"Opponents\")\n  opponentOf                   Brute[]                 @relation(\"Opponents\")\n  opponentsGeneratedAt         DateTime?               @db.Date\n  canRankUpSince               DateTime?               @db.Date\n  achievements                 Achievement[]\n  reports                      BruteReport[]\n  favorite                     Boolean                 @default(false)\n  titles                       Title[]\n  masterOfClan                 Clan?                   @relation(\"MasterOfClan\")\n  clanPosts                    ClanPost[]\n  wantToJoinClan               Clan?                   @relation(\"JoinRequests\", fields: [wantToJoinClanId], references: [id])\n  wantToJoinClanId             Int?\n  threads                      ClanThread[]\n  inventory                    BruteInventoryItem[]\n  tournamentAchievements       TournamentAchievement[]\n  tournamentXps                TournamentXp[]\n}\n\n// FIGHTS\nenum FighterType {\n  brute\n  pet\n}\n\nmodel Fight {\n  id             Int              @id @default(autoincrement())\n  date           DateTime         @default(now()) @db.Date\n  brute1         Brute            @relation(fields: [brute1Id], references: [id])\n  brute1Id       Int\n  brute2         Brute?           @relation(\"Adversary\", fields: [brute2Id], references: [id])\n  brute2Id       Int?\n  winner         String           @db.VarChar(255)\n  loser          String           @db.VarChar(255)\n  steps          String           @db.Text\n  fighters       String           @db.Text\n  logs           Log[]\n  tournament     Tournament?      @relation(fields: [tournamentId], references: [id])\n  tournamentId   Int?\n  TournamentStep TournamentStep[]\n  @@index([tournamentId, winner, brute1Id, brute2Id])\n}\n\n// LOGS\nenum LogType {\n  win\n  lose\n  child\n  childup\n  up\n  lvl\n  survive\n  tournament\n  tournamentXp\n}\n\nmodel Log {\n  id             Int      @id @default(autoincrement())\n  date           DateTime @default(now()) @db.Date\n  currentBrute   Brute    @relation(fields: [currentBruteId], references: [id])\n  currentBruteId Int\n  type           LogType\n  level          Int?\n  brute          String?  @db.VarChar(255)\n  fight          Fight?   @relation(fields: [fightId], references: [id])\n  fightId        Int?\n  xp             Int?\n}\n\n// LEVEL UP\nenum DestinyChoiceType {\n  skill\n  weapon\n  pet\n  stats\n}\n\nenum BruteStat {\n  endurance\n  strength\n  agility\n  speed\n}\n\nmodel DestinyChoice {\n  id         Int                 @id @default(autoincrement())\n  brute      Brute               @relation(fields: [bruteId], references: [id])\n  bruteId    Int\n  path       DestinyChoiceSide[]\n  type       DestinyChoiceType\n  skill      SkillName?\n  weapon     WeaponName?\n  pet        PetName?\n  stat1      BruteStat?\n  stat1Value Int?\n  stat2      BruteStat?\n  stat2Value Int?\n}\n\n// TOURNAMENTS\nenum TournamentType {\n  DAILY\n  GLOBAL\n  CUSTOM\n}\n\nmodel Tournament {\n  id           Int              @id @default(autoincrement())\n  date         DateTime         @db.Date\n  type         TournamentType   @default(DAILY)\n  participants Brute[]\n  steps        TournamentStep[]\n  rounds       Int\n  fights       Fight[]\n  @@index([type, date])\n}\n\nmodel TournamentStep {\n  id            Int        @id @default(autoincrement())\n  tournament    Tournament @relation(fields: [tournamentId], references: [id])\n  tournamentId  Int\n  step          Int\n  fight         Fight      @relation(fields: [fightId], references: [id])\n  fightId       Int\n  @@index([tournamentId, step])\n}\n\nmodel TournamentAchievement {\n  id               Int             @id @default(autoincrement())\n  date             DateTime        @db.Date\n  brute            Brute           @relation(fields: [bruteId], references: [id])\n  bruteId          Int\n  achievement      AchievementName\n  achievementCount Int\n}\n\nmodel TournamentGold {\n  id     Int      @id @default(autoincrement())\n  date   DateTime @db.Date\n  user   User     @relation(fields: [userId], references: [id])\n  userId String   @db.Uuid\n  gold   Int\n}\n\nmodel TournamentXp {\n  id      Int      @id @default(autoincrement())\n  date    DateTime @db.Date\n  brute   Brute    @relation(fields: [bruteId], references: [id])\n  bruteId Int\n  xp      Int\n}\n\n// ACHIEVEMENTS\nenum AchievementName {\n  // Fights\n  wins\n  defeats\n  flawless\n  winWith1HP\n  steal2Weapons\n  singleHitWin\n  combo3\n  combo4\n  combo5\n  counter5\n  evade10\n  block25\n  counter4b2b\n  reversal4b2b\n  block4b2b\n  evade4b2b\n  throw10b2b\n  disarm4\n  disarm8\n  damage50once\n  damage100once\n  hit20times\n  use10skills\n  kill3pets\n  maxDamage\n  // Skills use\n  saboteur\n  // Perks unlock\n  dog\n  panther\n  bear\n  panther_bear\n  felAg_fistsOfF\n  felAg_fistsOfF_untouch_relentless\n  vita_armor_toughened\n  herculStr_hammer_fierceBrute\n  shock\n  balletShoes_survival\n  cryOfTheDamned_hypnosis\n  shield_counterAttack\n  reconnaissance_monk\n  immortality\n  doubleBoost\n  tripleBoost\n  quadrupleBoost\n  regeneration_potion\n  bear_tamer\n  tripleDogs\n  fiveWeapons\n  tenWeapons\n  fifteenWeapons\n  twentyWeapons\n  twentyThreeWeapons\n  monk_sixthSense_whip\n  weaponsMaster_sharp_bodybuilder_heavy\n  hostility_counterWeapon\n  flashFlood_twelveWeapons\n  lightningBolt_firstStrike\n  herculeanStrength\n  felineAgility\n  lightningBolt\n  vitality\n  potion_chef\n  tamer_net\n  untouchable_balletShoes\n  survival_resistant\n  hideaway_spy\n  weaponsFast3\n  weaponsSharp3\n  weaponsHeavy3\n  weaponsLong3\n  weaponsThrown3\n  weaponsBlunt3\n  thor\n  // Stats\n  agility50\n  agility100\n  speed50\n  speed100\n  strength50\n  strength100\n  hp300\n  hp600\n  maxLevel\n  allAchievements\n  // Tournament\n  winTournamentAs20\n  winTournamentAs15\n  looseAgainst2\n  looseAgainst3\n  looseAgainst4\n  winAgainst2\n  winAgainst3\n  winAgainst4\n  winAsLower\n  win\n  // Ranks\n  rankUp10\n  rankUp9\n  rankUp8\n  rankUp7\n  rankUp6\n  rankUp5\n  rankUp4\n  rankUp3\n  rankUp2\n  rankUp1\n  rankUp0\n  // User\n  sacrifice\n  beta\n  bug\n}\n\nmodel Achievement {\n  id      Int             @id @default(autoincrement())\n  name    AchievementName\n  count   Int             @default(0)\n  brute   Brute?          @relation(fields: [bruteId], references: [id])\n  bruteId Int?\n  user    User?           @relation(fields: [userId], references: [id])\n  userId  String?         @db.Uuid\n  @@unique([name, bruteId])\n}\n\nmodel Title {\n  id     Int             @id @default(autoincrement())\n  name   AchievementName\n  count  Int             @default(1)\n  brutes Brute[]\n}\n\n// REPORTS\nenum BruteReportStatus {\n  pending\n  accepted\n  rejected\n}\n\nenum BruteReportReason {\n  name\n}\n\nmodel BruteReport {\n  id      Int               @id @default(autoincrement())\n  brute   Brute             @relation(fields: [bruteId], references: [id])\n  bruteId Int\n  users   User[]\n  reason  BruteReportReason @default(name)\n  count   Int               @default(1)\n  date    DateTime          @default(now()) @db.Date\n  status  BruteReportStatus @default(pending)\n}\n\n// SERVER STATE\nmodel ServerState {\n  id                    Int     @id @default(autoincrement())\n  ready                 Boolean @default(true)\n  globalTournamentValid Boolean @default(true)\n}\n\nmodel BannedWord {\n  id   Int    @id @default(autoincrement())\n  word String @db.VarChar(255)\n}\n\nmodel WorkerJob {\n  id      Int    @id @default(autoincrement())\n  worker  String @db.VarChar(255)\n  payload String @db.Text\n}\n\n// CLANS\nenum BossName {\n  GoldClaw\n  EmberFang\n}\n\nmodel Clan {\n  id           Int          @id @default(autoincrement())\n  name         String       @unique @db.VarChar(255)\n  limit        Int          @default(10)\n  points       Int          @default(0)\n  boss         BossName     @default(GoldClaw)\n  damageOnBoss Int          @default(0)\n  master       Brute        @relation(\"MasterOfClan\", fields: [masterId], references: [id])\n  masterId     Int          @unique\n  brutes       Brute[]\n  joinRequests Brute[]      @relation(\"JoinRequests\")\n  threads      ClanThread[]\n  @@index([name, points])\n}\n\nmodel ClanThread {\n  id        Int        @id @default(autoincrement())\n  clan      Clan       @relation(fields: [clanId], references: [id])\n  clanId    Int\n  creator   Brute      @relation(fields: [creatorId], references: [id])\n  creatorId Int\n  title     String     @db.VarChar(255)\n  locked    Boolean    @default(false)\n  pinned    Boolean    @default(false)\n  postCount Int        @default(1)\n  posts     ClanPost[]\n  createdAt DateTime   @default(now()) @db.Timestamp()\n  updatedAt DateTime   @default(now()) @db.Timestamp()\n}\n\nmodel ClanPost {\n  id       Int        @id @default(autoincrement())\n  thread   ClanThread @relation(fields: [threadId], references: [id])\n  threadId Int\n  author   Brute      @relation(fields: [authorId], references: [id])\n  authorId Int\n  date     DateTime   @default(now()) @db.Timestamp()\n  message  String     @db.Text\n}\n\n// Inventory\nenum InventoryItemType {\n  visualReset\n}\n\nmodel BruteInventoryItem {\n  id      Int               @id @default(autoincrement())\n  type    InventoryItemType\n  count   Int               @default(1)\n  brute   Brute             @relation(fields: [bruteId], references: [id])\n  bruteId Int\n\n  @@unique([type, bruteId])\n}\n",
  "inlineSchemaHash": "ab4a940294fc8672e5bfe27dc3995c743e9a547a2650a668b2004332991dad6e",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "../prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Lang\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connexionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backgroundMusic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentGolds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentGold\",\"relationName\":\"TournamentGoldToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteBody\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p7b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteColors\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col0c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#eaaca6\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1c\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col1d\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffaa1e\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#bb1111\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#8ba3d7\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col3b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fae31f\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col2a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#fff9ae\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#559399\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#7a73c8\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"col4b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#0000ff\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brute\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousDestinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ranking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":11,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteBody\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteColors\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapons\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WeaponName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SkillName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pets\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PetName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupils\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupilsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registeredForTournament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentStepWatched\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsLeft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":6,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"victories\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fights\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsAsAdversary\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"Adversary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyChoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoice\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournaments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentsGeneratedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canRankUpSince\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Title\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterOfClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[\"wantToJoinClanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantToJoinClanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteInventoryItem\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentAchievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentAchievement\",\"relationName\":\"BruteToTournamentAchievement\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentXps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentXp\",\"relationName\":\"BruteToTournamentXp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fight\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[\"brute1Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Adversary\",\"relationFromFields\":[\"brute2Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fighters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"FightToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"FightToTournament\",\"relationFromFields\":[\"tournamentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TournamentStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Log\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBrute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[\"currentBruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToLog\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DestinyChoice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceSide\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skill\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SkillName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pet\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tournament\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TournamentType\",\"default\":\"DAILY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rounds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fights\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentStep\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[\"tournamentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentAchievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentAchievement\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievement\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievementCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentGold\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TournamentGoldToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentXp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentXp\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Achievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"bruteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"bruteId\"]}],\"isGenerated\":false},\"Title\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteReport\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportReason\",\"default\":\"name\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServerState\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ready\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"globalTournamentValid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BannedWord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkerJob\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boss\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BossName\",\"default\":\"GoldClaw\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"damageOnBoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"MasterOfClan\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"JoinRequests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanThread\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"ClanToClanThread\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanThread\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanPost\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClanPost\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClanThread\",\"relationName\":\"ClanPostToClanThread\",\"relationFromFields\":[\"threadId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClanPost\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteInventoryItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InventoryItemType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteInventoryItem\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type\",\"bruteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type\",\"bruteId\"]}],\"isGenerated\":false}},\"enums\":{\"Lang\":{\"values\":[{\"name\":\"en\",\"dbName\":null},{\"name\":\"fr\",\"dbName\":null},{\"name\":\"de\",\"dbName\":null},{\"name\":\"es\",\"dbName\":null},{\"name\":\"ru\",\"dbName\":null},{\"name\":\"pt\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceSide\":{\"values\":[{\"name\":\"LEFT\",\"dbName\":\"0\"},{\"name\":\"RIGHT\",\"dbName\":\"1\"}],\"dbName\":null},\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"WeaponName\":{\"values\":[{\"name\":\"fan\",\"dbName\":null},{\"name\":\"keyboard\",\"dbName\":null},{\"name\":\"knife\",\"dbName\":null},{\"name\":\"leek\",\"dbName\":null},{\"name\":\"mug\",\"dbName\":null},{\"name\":\"sai\",\"dbName\":null},{\"name\":\"racquet\",\"dbName\":null},{\"name\":\"axe\",\"dbName\":null},{\"name\":\"bumps\",\"dbName\":null},{\"name\":\"flail\",\"dbName\":null},{\"name\":\"fryingPan\",\"dbName\":null},{\"name\":\"hatchet\",\"dbName\":null},{\"name\":\"mammothBone\",\"dbName\":null},{\"name\":\"morningStar\",\"dbName\":null},{\"name\":\"trombone\",\"dbName\":null},{\"name\":\"baton\",\"dbName\":null},{\"name\":\"halbard\",\"dbName\":null},{\"name\":\"lance\",\"dbName\":null},{\"name\":\"trident\",\"dbName\":null},{\"name\":\"whip\",\"dbName\":null},{\"name\":\"noodleBowl\",\"dbName\":null},{\"name\":\"piopio\",\"dbName\":null},{\"name\":\"shuriken\",\"dbName\":null},{\"name\":\"broadsword\",\"dbName\":null},{\"name\":\"scimitar\",\"dbName\":null},{\"name\":\"sword\",\"dbName\":null}],\"dbName\":null},\"SkillName\":{\"values\":[{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"reconnaissance\",\"dbName\":null},{\"name\":\"weaponsMaster\",\"dbName\":null},{\"name\":\"martialArts\",\"dbName\":null},{\"name\":\"sixthSense\",\"dbName\":null},{\"name\":\"hostility\",\"dbName\":null},{\"name\":\"fistsOfFury\",\"dbName\":null},{\"name\":\"shield\",\"dbName\":null},{\"name\":\"armor\",\"dbName\":null},{\"name\":\"toughenedSkin\",\"dbName\":null},{\"name\":\"untouchable\",\"dbName\":null},{\"name\":\"sabotage\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"bodybuilder\",\"dbName\":null},{\"name\":\"relentless\",\"dbName\":null},{\"name\":\"survival\",\"dbName\":null},{\"name\":\"leadSkeleton\",\"dbName\":null},{\"name\":\"balletShoes\",\"dbName\":null},{\"name\":\"determination\",\"dbName\":null},{\"name\":\"firstStrike\",\"dbName\":null},{\"name\":\"resistant\",\"dbName\":null},{\"name\":\"counterAttack\",\"dbName\":null},{\"name\":\"ironHead\",\"dbName\":null},{\"name\":\"thief\",\"dbName\":null},{\"name\":\"fierceBrute\",\"dbName\":null},{\"name\":\"tragicPotion\",\"dbName\":null},{\"name\":\"net\",\"dbName\":null},{\"name\":\"bomb\",\"dbName\":null},{\"name\":\"hammer\",\"dbName\":null},{\"name\":\"cryOfTheDamned\",\"dbName\":null},{\"name\":\"hypnosis\",\"dbName\":null},{\"name\":\"flashFlood\",\"dbName\":null},{\"name\":\"tamer\",\"dbName\":null},{\"name\":\"regeneration\",\"dbName\":null},{\"name\":\"chef\",\"dbName\":null},{\"name\":\"spy\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"backup\",\"dbName\":null},{\"name\":\"hideaway\",\"dbName\":null},{\"name\":\"monk\",\"dbName\":null}],\"dbName\":null},\"PetName\":{\"values\":[{\"name\":\"dog1\",\"dbName\":null},{\"name\":\"dog2\",\"dbName\":null},{\"name\":\"dog3\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null}],\"dbName\":null},\"FighterType\":{\"values\":[{\"name\":\"brute\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null}],\"dbName\":null},\"LogType\":{\"values\":[{\"name\":\"win\",\"dbName\":null},{\"name\":\"lose\",\"dbName\":null},{\"name\":\"child\",\"dbName\":null},{\"name\":\"childup\",\"dbName\":null},{\"name\":\"up\",\"dbName\":null},{\"name\":\"lvl\",\"dbName\":null},{\"name\":\"survive\",\"dbName\":null},{\"name\":\"tournament\",\"dbName\":null},{\"name\":\"tournamentXp\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceType\":{\"values\":[{\"name\":\"skill\",\"dbName\":null},{\"name\":\"weapon\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null},{\"name\":\"stats\",\"dbName\":null}],\"dbName\":null},\"BruteStat\":{\"values\":[{\"name\":\"endurance\",\"dbName\":null},{\"name\":\"strength\",\"dbName\":null},{\"name\":\"agility\",\"dbName\":null},{\"name\":\"speed\",\"dbName\":null}],\"dbName\":null},\"TournamentType\":{\"values\":[{\"name\":\"DAILY\",\"dbName\":null},{\"name\":\"GLOBAL\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"AchievementName\":{\"values\":[{\"name\":\"wins\",\"dbName\":null},{\"name\":\"defeats\",\"dbName\":null},{\"name\":\"flawless\",\"dbName\":null},{\"name\":\"winWith1HP\",\"dbName\":null},{\"name\":\"steal2Weapons\",\"dbName\":null},{\"name\":\"singleHitWin\",\"dbName\":null},{\"name\":\"combo3\",\"dbName\":null},{\"name\":\"combo4\",\"dbName\":null},{\"name\":\"combo5\",\"dbName\":null},{\"name\":\"counter5\",\"dbName\":null},{\"name\":\"evade10\",\"dbName\":null},{\"name\":\"block25\",\"dbName\":null},{\"name\":\"counter4b2b\",\"dbName\":null},{\"name\":\"reversal4b2b\",\"dbName\":null},{\"name\":\"block4b2b\",\"dbName\":null},{\"name\":\"evade4b2b\",\"dbName\":null},{\"name\":\"throw10b2b\",\"dbName\":null},{\"name\":\"disarm4\",\"dbName\":null},{\"name\":\"disarm8\",\"dbName\":null},{\"name\":\"damage50once\",\"dbName\":null},{\"name\":\"damage100once\",\"dbName\":null},{\"name\":\"hit20times\",\"dbName\":null},{\"name\":\"use10skills\",\"dbName\":null},{\"name\":\"kill3pets\",\"dbName\":null},{\"name\":\"maxDamage\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"dog\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null},{\"name\":\"panther_bear\",\"dbName\":null},{\"name\":\"felAg_fistsOfF\",\"dbName\":null},{\"name\":\"felAg_fistsOfF_untouch_relentless\",\"dbName\":null},{\"name\":\"vita_armor_toughened\",\"dbName\":null},{\"name\":\"herculStr_hammer_fierceBrute\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"balletShoes_survival\",\"dbName\":null},{\"name\":\"cryOfTheDamned_hypnosis\",\"dbName\":null},{\"name\":\"shield_counterAttack\",\"dbName\":null},{\"name\":\"reconnaissance_monk\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"doubleBoost\",\"dbName\":null},{\"name\":\"tripleBoost\",\"dbName\":null},{\"name\":\"quadrupleBoost\",\"dbName\":null},{\"name\":\"regeneration_potion\",\"dbName\":null},{\"name\":\"bear_tamer\",\"dbName\":null},{\"name\":\"tripleDogs\",\"dbName\":null},{\"name\":\"fiveWeapons\",\"dbName\":null},{\"name\":\"tenWeapons\",\"dbName\":null},{\"name\":\"fifteenWeapons\",\"dbName\":null},{\"name\":\"twentyWeapons\",\"dbName\":null},{\"name\":\"twentyThreeWeapons\",\"dbName\":null},{\"name\":\"monk_sixthSense_whip\",\"dbName\":null},{\"name\":\"weaponsMaster_sharp_bodybuilder_heavy\",\"dbName\":null},{\"name\":\"hostility_counterWeapon\",\"dbName\":null},{\"name\":\"flashFlood_twelveWeapons\",\"dbName\":null},{\"name\":\"lightningBolt_firstStrike\",\"dbName\":null},{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"potion_chef\",\"dbName\":null},{\"name\":\"tamer_net\",\"dbName\":null},{\"name\":\"untouchable_balletShoes\",\"dbName\":null},{\"name\":\"survival_resistant\",\"dbName\":null},{\"name\":\"hideaway_spy\",\"dbName\":null},{\"name\":\"weaponsFast3\",\"dbName\":null},{\"name\":\"weaponsSharp3\",\"dbName\":null},{\"name\":\"weaponsHeavy3\",\"dbName\":null},{\"name\":\"weaponsLong3\",\"dbName\":null},{\"name\":\"weaponsThrown3\",\"dbName\":null},{\"name\":\"weaponsBlunt3\",\"dbName\":null},{\"name\":\"thor\",\"dbName\":null},{\"name\":\"agility50\",\"dbName\":null},{\"name\":\"agility100\",\"dbName\":null},{\"name\":\"speed50\",\"dbName\":null},{\"name\":\"speed100\",\"dbName\":null},{\"name\":\"strength50\",\"dbName\":null},{\"name\":\"strength100\",\"dbName\":null},{\"name\":\"hp300\",\"dbName\":null},{\"name\":\"hp600\",\"dbName\":null},{\"name\":\"maxLevel\",\"dbName\":null},{\"name\":\"allAchievements\",\"dbName\":null},{\"name\":\"winTournamentAs20\",\"dbName\":null},{\"name\":\"winTournamentAs15\",\"dbName\":null},{\"name\":\"looseAgainst2\",\"dbName\":null},{\"name\":\"looseAgainst3\",\"dbName\":null},{\"name\":\"looseAgainst4\",\"dbName\":null},{\"name\":\"winAgainst2\",\"dbName\":null},{\"name\":\"winAgainst3\",\"dbName\":null},{\"name\":\"winAgainst4\",\"dbName\":null},{\"name\":\"winAsLower\",\"dbName\":null},{\"name\":\"win\",\"dbName\":null},{\"name\":\"rankUp10\",\"dbName\":null},{\"name\":\"rankUp9\",\"dbName\":null},{\"name\":\"rankUp8\",\"dbName\":null},{\"name\":\"rankUp7\",\"dbName\":null},{\"name\":\"rankUp6\",\"dbName\":null},{\"name\":\"rankUp5\",\"dbName\":null},{\"name\":\"rankUp4\",\"dbName\":null},{\"name\":\"rankUp3\",\"dbName\":null},{\"name\":\"rankUp2\",\"dbName\":null},{\"name\":\"rankUp1\",\"dbName\":null},{\"name\":\"rankUp0\",\"dbName\":null},{\"name\":\"sacrifice\",\"dbName\":null},{\"name\":\"beta\",\"dbName\":null},{\"name\":\"bug\",\"dbName\":null}],\"dbName\":null},\"BruteReportStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null}],\"dbName\":null},\"BruteReportReason\":{\"values\":[{\"name\":\"name\",\"dbName\":null}],\"dbName\":null},\"BossName\":{\"values\":[{\"name\":\"GoldClaw\",\"dbName\":null},{\"name\":\"EmberFang\",\"dbName\":null}],\"dbName\":null},\"InventoryItemType\":{\"values\":[{\"name\":\"visualReset\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "../prisma/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "../prisma/libquery_engine-debian-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "../prisma/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "../prisma/schema.prisma")
