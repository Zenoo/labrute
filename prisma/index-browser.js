
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AchievementScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  count: 'count',
  bruteId: 'bruteId',
  userId: 'userId'
});

exports.Prisma.BruteBodyScalarFieldEnum = makeEnum({
  id: 'id',
  bruteId: 'bruteId',
  longHair: 'longHair',
  lowerRightArm: 'lowerRightArm',
  rightHand: 'rightHand',
  upperRightArm: 'upperRightArm',
  rightShoulder: 'rightShoulder',
  rightFoot: 'rightFoot',
  lowerRightLeg: 'lowerRightLeg',
  upperRightLeg: 'upperRightLeg',
  leftFoot: 'leftFoot',
  lowerLeftLeg: 'lowerLeftLeg',
  pelvis: 'pelvis',
  upperLeftLeg: 'upperLeftLeg',
  tummy: 'tummy',
  torso: 'torso',
  head: 'head',
  leftHand: 'leftHand',
  upperLeftArm: 'upperLeftArm',
  lowerLeftArm: 'lowerLeftArm',
  leftShoulder: 'leftShoulder'
});

exports.Prisma.BruteColorsScalarFieldEnum = makeEnum({
  id: 'id',
  bruteId: 'bruteId',
  skinColor: 'skinColor',
  skinShade: 'skinShade',
  hairColor: 'hairColor',
  hairShade: 'hairShade',
  primaryColor: 'primaryColor',
  primaryShade: 'primaryShade',
  secondaryColor: 'secondaryColor',
  secondaryShade: 'secondaryShade',
  accentColor: 'accentColor',
  accentShade: 'accentShade'
});

exports.Prisma.BruteScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  destinyPath: 'destinyPath',
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
  canRankUpSince: 'canRankUpSince'
});

exports.Prisma.BruteSpritesheetScalarFieldEnum = makeEnum({
  id: 'id',
  bruteId: 'bruteId',
  image: 'image',
  json: 'json'
});

exports.Prisma.ClanScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.DestinyChoiceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.FightScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  brute1Id: 'brute1Id',
  brute2Id: 'brute2Id',
  winner: 'winner',
  loser: 'loser',
  steps: 'steps',
  fighters: 'fighters'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.LogScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  currentBruteId: 'currentBruteId',
  type: 'type',
  level: 'level',
  brute: 'brute',
  fightId: 'fightId',
  xp: 'xp'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TournamentEarningScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  points: 'points',
  achievement: 'achievement',
  achievementCount: 'achievementCount'
});

exports.Prisma.TournamentScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  type: 'type'
});

exports.Prisma.TournamentStepScalarFieldEnum = makeEnum({
  id: 'id',
  tournamentId: 'tournamentId',
  step: 'step',
  fightId: 'fightId',
  xpDistributed: 'xpDistributed'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  lang: 'lang',
  name: 'name',
  admin: 'admin',
  connexionToken: 'connexionToken',
  bruteLimit: 'bruteLimit',
  sacrificePoints: 'sacrificePoints'
});
exports.AchievementName = makeEnum({
  wins: 'wins',
  defeats: 'defeats',
  flawless: 'flawless',
  winWith1HP: 'winWith1HP',
  steal2Weapons: 'steal2Weapons',
  singleHitWin: 'singleHitWin',
  combo3: 'combo3',
  combo4: 'combo4',
  combo5: 'combo5',
  counter4b2b: 'counter4b2b',
  reversal4b2b: 'reversal4b2b',
  block4b2b: 'block4b2b',
  evade4b2b: 'evade4b2b',
  disarm4: 'disarm4',
  damage100once: 'damage100once',
  hit20times: 'hit20times',
  use10skills: 'use10skills',
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
  agility50: 'agility50',
  agility100: 'agility100',
  speed50: 'speed50',
  speed100: 'speed100',
  strength50: 'strength50',
  strength100: 'strength100',
  hp300: 'hp300',
  hp600: 'hp600',
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
  beta: 'beta'
});

exports.BruteStat = makeEnum({
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
});

exports.DestinyChoiceSide = makeEnum({
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
});

exports.DestinyChoiceType = makeEnum({
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
});

exports.Gender = makeEnum({
  male: 'male',
  female: 'female'
});

exports.Lang = makeEnum({
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es'
});

exports.LogType = makeEnum({
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  survive: 'survive',
  tournament: 'tournament',
  tournamentXp: 'tournamentXp'
});

exports.PetName = makeEnum({
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
});

exports.SkillName = makeEnum({
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
});

exports.TournamentType = makeEnum({
  DAILY: 'DAILY',
  GLOBAL: 'GLOBAL',
  CUSTOM: 'CUSTOM'
});

exports.WeaponName = makeEnum({
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
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  BruteBody: 'BruteBody',
  BruteColors: 'BruteColors',
  Brute: 'Brute',
  BruteSpritesheet: 'BruteSpritesheet',
  Clan: 'Clan',
  Fight: 'Fight',
  Log: 'Log',
  DestinyChoice: 'DestinyChoice',
  Tournament: 'Tournament',
  TournamentStep: 'TournamentStep',
  TournamentEarning: 'TournamentEarning',
  Achievement: 'Achievement'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
