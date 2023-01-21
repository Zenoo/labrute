
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  lang: Lang
  name: string
  admin: boolean
  connexionToken: string
  bruteLimit: number
  sacrificePoints: number
}

/**
 * Model BruteBody
 * 
 */
export type BruteBody = {
  id: number
  bruteId: number
  longHair: number
  lowerRightArm: number
  rightHand: number
  upperRightArm: number
  rightShoulder: number
  rightFoot: number
  lowerRightLeg: number
  upperRightLeg: number
  leftFoot: number
  lowerLeftLeg: number
  pelvis: number
  upperLeftLeg: number
  tummy: number
  torso: number
  head: number
  leftHand: number
  upperLeftArm: number
  lowerLeftArm: number
  leftShoulder: number
}

/**
 * Model BruteColors
 * 
 */
export type BruteColors = {
  id: number
  bruteId: number
  skinColor: string
  skinShade: string
  hairColor: string
  hairShade: string
  primaryColor: string
  primaryShade: string
  secondaryColor: string
  secondaryShade: string
  accentColor: string
  accentShade: string
}

/**
 * Model Brute
 * 
 */
export type Brute = {
  id: number
  name: string
  deleted: boolean
  spritesheet: Buffer | null
  spritesheetJson: Prisma.JsonValue | null
  destinyPath: DestinyChoiceSide[]
  level: number
  xp: number
  hp: number
  enduranceStat: number
  enduranceModifier: number
  enduranceValue: number
  strengthStat: number
  strengthModifier: number
  strengthValue: number
  agilityStat: number
  agilityModifier: number
  agilityValue: number
  speedStat: number
  speedModifier: number
  speedValue: number
  ranking: number
  gender: Gender
  userId: string | null
  weapons: WeaponName[]
  skills: SkillName[]
  pets: PetName[]
  masterId: number | null
  pupilsCount: number
  clanId: number | null
  tournament: Date | null
  lastFight: Date | null
  fightsLeft: number
  victories: number
}

/**
 * Model Clan
 * 
 */
export type Clan = {
  id: number
  name: string
}

/**
 * Model Fight
 * 
 */
export type Fight = {
  id: number
  date: Date
  brute1Id: number
  brute2Id: number
  winner: string
  loser: string
  steps: Prisma.JsonValue
  fighters: Prisma.JsonValue
}

/**
 * Model Log
 * 
 */
export type Log = {
  id: number
  date: Date
  currentBruteId: number
  type: LogType
  level: number | null
  brute: string | null
  fightId: number | null
  xp: number | null
}

/**
 * Model DestinyChoice
 * 
 */
export type DestinyChoice = {
  id: number
  bruteId: number
  path: DestinyChoiceSide[]
  type: DestinyChoiceType
  skill: SkillName | null
  weapon: WeaponName | null
  pet: PetName | null
  stat1: BruteStat | null
  stat1Value: number | null
  stat2: BruteStat | null
  stat2Value: number | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const BruteStat: {
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
};

export type BruteStat = (typeof BruteStat)[keyof typeof BruteStat]


export const DestinyChoiceSide: {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

export type DestinyChoiceSide = (typeof DestinyChoiceSide)[keyof typeof DestinyChoiceSide]


export const DestinyChoiceType: {
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
};

export type DestinyChoiceType = (typeof DestinyChoiceType)[keyof typeof DestinyChoiceType]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Lang: {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es'
};

export type Lang = (typeof Lang)[keyof typeof Lang]


export const LogType: {
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  survive: 'survive'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const PetName: {
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
};

export type PetName = (typeof PetName)[keyof typeof PetName]


export const SkillName: {
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

export type SkillName = (typeof SkillName)[keyof typeof SkillName]


export const WeaponName: {
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

export type WeaponName = (typeof WeaponName)[keyof typeof WeaponName]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.bruteBody`: Exposes CRUD operations for the **BruteBody** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BruteBodies
    * const bruteBodies = await prisma.bruteBody.findMany()
    * ```
    */
  get bruteBody(): Prisma.BruteBodyDelegate<GlobalReject>;

  /**
   * `prisma.bruteColors`: Exposes CRUD operations for the **BruteColors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BruteColors
    * const bruteColors = await prisma.bruteColors.findMany()
    * ```
    */
  get bruteColors(): Prisma.BruteColorsDelegate<GlobalReject>;

  /**
   * `prisma.brute`: Exposes CRUD operations for the **Brute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brutes
    * const brutes = await prisma.brute.findMany()
    * ```
    */
  get brute(): Prisma.BruteDelegate<GlobalReject>;

  /**
   * `prisma.clan`: Exposes CRUD operations for the **Clan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clans
    * const clans = await prisma.clan.findMany()
    * ```
    */
  get clan(): Prisma.ClanDelegate<GlobalReject>;

  /**
   * `prisma.fight`: Exposes CRUD operations for the **Fight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fights
    * const fights = await prisma.fight.findMany()
    * ```
    */
  get fight(): Prisma.FightDelegate<GlobalReject>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<GlobalReject>;

  /**
   * `prisma.destinyChoice`: Exposes CRUD operations for the **DestinyChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinyChoices
    * const destinyChoices = await prisma.destinyChoice.findMany()
    * ```
    */
  get destinyChoice(): Prisma.DestinyChoiceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    BruteBody: 'BruteBody',
    BruteColors: 'BruteColors',
    Brute: 'Brute',
    Clan: 'Clan',
    Fight: 'Fight',
    Log: 'Log',
    DestinyChoice: 'DestinyChoice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    brutes: number
  }

  export type UserCountOutputTypeSelect = {
    brutes?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BruteCountOutputType
   */


  export type BruteCountOutputType = {
    pupils: number
    fights: number
    fightsAsAdversary: number
    logs: number
    destinyChoices: number
  }

  export type BruteCountOutputTypeSelect = {
    pupils?: boolean
    fights?: boolean
    fightsAsAdversary?: boolean
    logs?: boolean
    destinyChoices?: boolean
  }

  export type BruteCountOutputTypeGetPayload<S extends boolean | null | undefined | BruteCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BruteCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BruteCountOutputTypeArgs)
    ? BruteCountOutputType 
    : S extends { select: any } & (BruteCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BruteCountOutputType ? BruteCountOutputType[P] : never
  } 
      : BruteCountOutputType




  // Custom InputTypes

  /**
   * BruteCountOutputType without action
   */
  export type BruteCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BruteCountOutputType
     */
    select?: BruteCountOutputTypeSelect | null
  }



  /**
   * Count Type ClanCountOutputType
   */


  export type ClanCountOutputType = {
    brutes: number
  }

  export type ClanCountOutputTypeSelect = {
    brutes?: boolean
  }

  export type ClanCountOutputTypeGetPayload<S extends boolean | null | undefined | ClanCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClanCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClanCountOutputTypeArgs)
    ? ClanCountOutputType 
    : S extends { select: any } & (ClanCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClanCountOutputType ? ClanCountOutputType[P] : never
  } 
      : ClanCountOutputType




  // Custom InputTypes

  /**
   * ClanCountOutputType without action
   */
  export type ClanCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClanCountOutputType
     */
    select?: ClanCountOutputTypeSelect | null
  }



  /**
   * Count Type FightCountOutputType
   */


  export type FightCountOutputType = {
    logs: number
  }

  export type FightCountOutputTypeSelect = {
    logs?: boolean
  }

  export type FightCountOutputTypeGetPayload<S extends boolean | null | undefined | FightCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FightCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FightCountOutputTypeArgs)
    ? FightCountOutputType 
    : S extends { select: any } & (FightCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FightCountOutputType ? FightCountOutputType[P] : never
  } 
      : FightCountOutputType




  // Custom InputTypes

  /**
   * FightCountOutputType without action
   */
  export type FightCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FightCountOutputType
     */
    select?: FightCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    bruteLimit: number | null
    sacrificePoints: number | null
  }

  export type UserSumAggregateOutputType = {
    bruteLimit: number | null
    sacrificePoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    lang: Lang | null
    name: string | null
    admin: boolean | null
    connexionToken: string | null
    bruteLimit: number | null
    sacrificePoints: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    lang: Lang | null
    name: string | null
    admin: boolean | null
    connexionToken: string | null
    bruteLimit: number | null
    sacrificePoints: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lang: number
    name: number
    admin: number
    connexionToken: number
    bruteLimit: number
    sacrificePoints: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    bruteLimit?: true
    sacrificePoints?: true
  }

  export type UserSumAggregateInputType = {
    bruteLimit?: true
    sacrificePoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    admin?: true
    connexionToken?: true
    bruteLimit?: true
    sacrificePoints?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    admin?: true
    connexionToken?: true
    bruteLimit?: true
    sacrificePoints?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    admin?: true
    connexionToken?: true
    bruteLimit?: true
    sacrificePoints?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    lang: Lang
    name: string
    admin: boolean
    connexionToken: string
    bruteLimit: number
    sacrificePoints: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    lang?: boolean
    name?: boolean
    admin?: boolean
    connexionToken?: boolean
    bruteLimit?: boolean
    sacrificePoints?: boolean
    brutes?: boolean | User$brutesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    brutes?: boolean | User$brutesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brutes' ? Array < BruteGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brutes' ? Array < BruteGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brutes<T extends User$brutesArgs= {}>(args?: Subset<T, User$brutesArgs>): PrismaPromise<Array<BruteGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.brutes
   */
  export type User$brutesArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    where?: BruteWhereInput
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    cursor?: BruteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BruteScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model BruteBody
   */


  export type AggregateBruteBody = {
    _count: BruteBodyCountAggregateOutputType | null
    _avg: BruteBodyAvgAggregateOutputType | null
    _sum: BruteBodySumAggregateOutputType | null
    _min: BruteBodyMinAggregateOutputType | null
    _max: BruteBodyMaxAggregateOutputType | null
  }

  export type BruteBodyAvgAggregateOutputType = {
    id: number | null
    bruteId: number | null
    longHair: number | null
    lowerRightArm: number | null
    rightHand: number | null
    upperRightArm: number | null
    rightShoulder: number | null
    rightFoot: number | null
    lowerRightLeg: number | null
    upperRightLeg: number | null
    leftFoot: number | null
    lowerLeftLeg: number | null
    pelvis: number | null
    upperLeftLeg: number | null
    tummy: number | null
    torso: number | null
    head: number | null
    leftHand: number | null
    upperLeftArm: number | null
    lowerLeftArm: number | null
    leftShoulder: number | null
  }

  export type BruteBodySumAggregateOutputType = {
    id: number | null
    bruteId: number | null
    longHair: number | null
    lowerRightArm: number | null
    rightHand: number | null
    upperRightArm: number | null
    rightShoulder: number | null
    rightFoot: number | null
    lowerRightLeg: number | null
    upperRightLeg: number | null
    leftFoot: number | null
    lowerLeftLeg: number | null
    pelvis: number | null
    upperLeftLeg: number | null
    tummy: number | null
    torso: number | null
    head: number | null
    leftHand: number | null
    upperLeftArm: number | null
    lowerLeftArm: number | null
    leftShoulder: number | null
  }

  export type BruteBodyMinAggregateOutputType = {
    id: number | null
    bruteId: number | null
    longHair: number | null
    lowerRightArm: number | null
    rightHand: number | null
    upperRightArm: number | null
    rightShoulder: number | null
    rightFoot: number | null
    lowerRightLeg: number | null
    upperRightLeg: number | null
    leftFoot: number | null
    lowerLeftLeg: number | null
    pelvis: number | null
    upperLeftLeg: number | null
    tummy: number | null
    torso: number | null
    head: number | null
    leftHand: number | null
    upperLeftArm: number | null
    lowerLeftArm: number | null
    leftShoulder: number | null
  }

  export type BruteBodyMaxAggregateOutputType = {
    id: number | null
    bruteId: number | null
    longHair: number | null
    lowerRightArm: number | null
    rightHand: number | null
    upperRightArm: number | null
    rightShoulder: number | null
    rightFoot: number | null
    lowerRightLeg: number | null
    upperRightLeg: number | null
    leftFoot: number | null
    lowerLeftLeg: number | null
    pelvis: number | null
    upperLeftLeg: number | null
    tummy: number | null
    torso: number | null
    head: number | null
    leftHand: number | null
    upperLeftArm: number | null
    lowerLeftArm: number | null
    leftShoulder: number | null
  }

  export type BruteBodyCountAggregateOutputType = {
    id: number
    bruteId: number
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
    _all: number
  }


  export type BruteBodyAvgAggregateInputType = {
    id?: true
    bruteId?: true
    longHair?: true
    lowerRightArm?: true
    rightHand?: true
    upperRightArm?: true
    rightShoulder?: true
    rightFoot?: true
    lowerRightLeg?: true
    upperRightLeg?: true
    leftFoot?: true
    lowerLeftLeg?: true
    pelvis?: true
    upperLeftLeg?: true
    tummy?: true
    torso?: true
    head?: true
    leftHand?: true
    upperLeftArm?: true
    lowerLeftArm?: true
    leftShoulder?: true
  }

  export type BruteBodySumAggregateInputType = {
    id?: true
    bruteId?: true
    longHair?: true
    lowerRightArm?: true
    rightHand?: true
    upperRightArm?: true
    rightShoulder?: true
    rightFoot?: true
    lowerRightLeg?: true
    upperRightLeg?: true
    leftFoot?: true
    lowerLeftLeg?: true
    pelvis?: true
    upperLeftLeg?: true
    tummy?: true
    torso?: true
    head?: true
    leftHand?: true
    upperLeftArm?: true
    lowerLeftArm?: true
    leftShoulder?: true
  }

  export type BruteBodyMinAggregateInputType = {
    id?: true
    bruteId?: true
    longHair?: true
    lowerRightArm?: true
    rightHand?: true
    upperRightArm?: true
    rightShoulder?: true
    rightFoot?: true
    lowerRightLeg?: true
    upperRightLeg?: true
    leftFoot?: true
    lowerLeftLeg?: true
    pelvis?: true
    upperLeftLeg?: true
    tummy?: true
    torso?: true
    head?: true
    leftHand?: true
    upperLeftArm?: true
    lowerLeftArm?: true
    leftShoulder?: true
  }

  export type BruteBodyMaxAggregateInputType = {
    id?: true
    bruteId?: true
    longHair?: true
    lowerRightArm?: true
    rightHand?: true
    upperRightArm?: true
    rightShoulder?: true
    rightFoot?: true
    lowerRightLeg?: true
    upperRightLeg?: true
    leftFoot?: true
    lowerLeftLeg?: true
    pelvis?: true
    upperLeftLeg?: true
    tummy?: true
    torso?: true
    head?: true
    leftHand?: true
    upperLeftArm?: true
    lowerLeftArm?: true
    leftShoulder?: true
  }

  export type BruteBodyCountAggregateInputType = {
    id?: true
    bruteId?: true
    longHair?: true
    lowerRightArm?: true
    rightHand?: true
    upperRightArm?: true
    rightShoulder?: true
    rightFoot?: true
    lowerRightLeg?: true
    upperRightLeg?: true
    leftFoot?: true
    lowerLeftLeg?: true
    pelvis?: true
    upperLeftLeg?: true
    tummy?: true
    torso?: true
    head?: true
    leftHand?: true
    upperLeftArm?: true
    lowerLeftArm?: true
    leftShoulder?: true
    _all?: true
  }

  export type BruteBodyAggregateArgs = {
    /**
     * Filter which BruteBody to aggregate.
     */
    where?: BruteBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteBodies to fetch.
     */
    orderBy?: Enumerable<BruteBodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BruteBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BruteBodies
    **/
    _count?: true | BruteBodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BruteBodyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BruteBodySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BruteBodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BruteBodyMaxAggregateInputType
  }

  export type GetBruteBodyAggregateType<T extends BruteBodyAggregateArgs> = {
        [P in keyof T & keyof AggregateBruteBody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBruteBody[P]>
      : GetScalarType<T[P], AggregateBruteBody[P]>
  }




  export type BruteBodyGroupByArgs = {
    where?: BruteBodyWhereInput
    orderBy?: Enumerable<BruteBodyOrderByWithAggregationInput>
    by: BruteBodyScalarFieldEnum[]
    having?: BruteBodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BruteBodyCountAggregateInputType | true
    _avg?: BruteBodyAvgAggregateInputType
    _sum?: BruteBodySumAggregateInputType
    _min?: BruteBodyMinAggregateInputType
    _max?: BruteBodyMaxAggregateInputType
  }


  export type BruteBodyGroupByOutputType = {
    id: number
    bruteId: number
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
    _count: BruteBodyCountAggregateOutputType | null
    _avg: BruteBodyAvgAggregateOutputType | null
    _sum: BruteBodySumAggregateOutputType | null
    _min: BruteBodyMinAggregateOutputType | null
    _max: BruteBodyMaxAggregateOutputType | null
  }

  type GetBruteBodyGroupByPayload<T extends BruteBodyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BruteBodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BruteBodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BruteBodyGroupByOutputType[P]>
            : GetScalarType<T[P], BruteBodyGroupByOutputType[P]>
        }
      >
    >


  export type BruteBodySelect = {
    id?: boolean
    brute?: boolean | BruteArgs
    bruteId?: boolean
    longHair?: boolean
    lowerRightArm?: boolean
    rightHand?: boolean
    upperRightArm?: boolean
    rightShoulder?: boolean
    rightFoot?: boolean
    lowerRightLeg?: boolean
    upperRightLeg?: boolean
    leftFoot?: boolean
    lowerLeftLeg?: boolean
    pelvis?: boolean
    upperLeftLeg?: boolean
    tummy?: boolean
    torso?: boolean
    head?: boolean
    leftHand?: boolean
    upperLeftArm?: boolean
    lowerLeftArm?: boolean
    leftShoulder?: boolean
  }


  export type BruteBodyInclude = {
    brute?: boolean | BruteArgs
  }

  export type BruteBodyGetPayload<S extends boolean | null | undefined | BruteBodyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BruteBody :
    S extends undefined ? never :
    S extends { include: any } & (BruteBodyArgs | BruteBodyFindManyArgs)
    ? BruteBody  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brute' ? BruteGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BruteBodyArgs | BruteBodyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brute' ? BruteGetPayload<S['select'][P]> :  P extends keyof BruteBody ? BruteBody[P] : never
  } 
      : BruteBody


  type BruteBodyCountArgs = 
    Omit<BruteBodyFindManyArgs, 'select' | 'include'> & {
      select?: BruteBodyCountAggregateInputType | true
    }

  export interface BruteBodyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BruteBody that matches the filter.
     * @param {BruteBodyFindUniqueArgs} args - Arguments to find a BruteBody
     * @example
     * // Get one BruteBody
     * const bruteBody = await prisma.bruteBody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BruteBodyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BruteBodyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BruteBody'> extends True ? Prisma__BruteBodyClient<BruteBodyGetPayload<T>> : Prisma__BruteBodyClient<BruteBodyGetPayload<T> | null, null>

    /**
     * Find one BruteBody that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BruteBodyFindUniqueOrThrowArgs} args - Arguments to find a BruteBody
     * @example
     * // Get one BruteBody
     * const bruteBody = await prisma.bruteBody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BruteBodyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BruteBodyFindUniqueOrThrowArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Find the first BruteBody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyFindFirstArgs} args - Arguments to find a BruteBody
     * @example
     * // Get one BruteBody
     * const bruteBody = await prisma.bruteBody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BruteBodyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BruteBodyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BruteBody'> extends True ? Prisma__BruteBodyClient<BruteBodyGetPayload<T>> : Prisma__BruteBodyClient<BruteBodyGetPayload<T> | null, null>

    /**
     * Find the first BruteBody that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyFindFirstOrThrowArgs} args - Arguments to find a BruteBody
     * @example
     * // Get one BruteBody
     * const bruteBody = await prisma.bruteBody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BruteBodyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BruteBodyFindFirstOrThrowArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Find zero or more BruteBodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BruteBodies
     * const bruteBodies = await prisma.bruteBody.findMany()
     * 
     * // Get first 10 BruteBodies
     * const bruteBodies = await prisma.bruteBody.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bruteBodyWithIdOnly = await prisma.bruteBody.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BruteBodyFindManyArgs>(
      args?: SelectSubset<T, BruteBodyFindManyArgs>
    ): PrismaPromise<Array<BruteBodyGetPayload<T>>>

    /**
     * Create a BruteBody.
     * @param {BruteBodyCreateArgs} args - Arguments to create a BruteBody.
     * @example
     * // Create one BruteBody
     * const BruteBody = await prisma.bruteBody.create({
     *   data: {
     *     // ... data to create a BruteBody
     *   }
     * })
     * 
    **/
    create<T extends BruteBodyCreateArgs>(
      args: SelectSubset<T, BruteBodyCreateArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Create many BruteBodies.
     *     @param {BruteBodyCreateManyArgs} args - Arguments to create many BruteBodies.
     *     @example
     *     // Create many BruteBodies
     *     const bruteBody = await prisma.bruteBody.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BruteBodyCreateManyArgs>(
      args?: SelectSubset<T, BruteBodyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BruteBody.
     * @param {BruteBodyDeleteArgs} args - Arguments to delete one BruteBody.
     * @example
     * // Delete one BruteBody
     * const BruteBody = await prisma.bruteBody.delete({
     *   where: {
     *     // ... filter to delete one BruteBody
     *   }
     * })
     * 
    **/
    delete<T extends BruteBodyDeleteArgs>(
      args: SelectSubset<T, BruteBodyDeleteArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Update one BruteBody.
     * @param {BruteBodyUpdateArgs} args - Arguments to update one BruteBody.
     * @example
     * // Update one BruteBody
     * const bruteBody = await prisma.bruteBody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BruteBodyUpdateArgs>(
      args: SelectSubset<T, BruteBodyUpdateArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Delete zero or more BruteBodies.
     * @param {BruteBodyDeleteManyArgs} args - Arguments to filter BruteBodies to delete.
     * @example
     * // Delete a few BruteBodies
     * const { count } = await prisma.bruteBody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BruteBodyDeleteManyArgs>(
      args?: SelectSubset<T, BruteBodyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BruteBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BruteBodies
     * const bruteBody = await prisma.bruteBody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BruteBodyUpdateManyArgs>(
      args: SelectSubset<T, BruteBodyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BruteBody.
     * @param {BruteBodyUpsertArgs} args - Arguments to update or create a BruteBody.
     * @example
     * // Update or create a BruteBody
     * const bruteBody = await prisma.bruteBody.upsert({
     *   create: {
     *     // ... data to create a BruteBody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BruteBody we want to update
     *   }
     * })
    **/
    upsert<T extends BruteBodyUpsertArgs>(
      args: SelectSubset<T, BruteBodyUpsertArgs>
    ): Prisma__BruteBodyClient<BruteBodyGetPayload<T>>

    /**
     * Count the number of BruteBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyCountArgs} args - Arguments to filter BruteBodies to count.
     * @example
     * // Count the number of BruteBodies
     * const count = await prisma.bruteBody.count({
     *   where: {
     *     // ... the filter for the BruteBodies we want to count
     *   }
     * })
    **/
    count<T extends BruteBodyCountArgs>(
      args?: Subset<T, BruteBodyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BruteBodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BruteBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BruteBodyAggregateArgs>(args: Subset<T, BruteBodyAggregateArgs>): PrismaPromise<GetBruteBodyAggregateType<T>>

    /**
     * Group by BruteBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteBodyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BruteBodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BruteBodyGroupByArgs['orderBy'] }
        : { orderBy?: BruteBodyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BruteBodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteBodyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BruteBody.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BruteBodyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brute<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BruteBody base type for findUnique actions
   */
  export type BruteBodyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter, which BruteBody to fetch.
     */
    where: BruteBodyWhereUniqueInput
  }

  /**
   * BruteBody findUnique
   */
  export interface BruteBodyFindUniqueArgs extends BruteBodyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BruteBody findUniqueOrThrow
   */
  export type BruteBodyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter, which BruteBody to fetch.
     */
    where: BruteBodyWhereUniqueInput
  }


  /**
   * BruteBody base type for findFirst actions
   */
  export type BruteBodyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter, which BruteBody to fetch.
     */
    where?: BruteBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteBodies to fetch.
     */
    orderBy?: Enumerable<BruteBodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteBodies.
     */
    cursor?: BruteBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteBodies.
     */
    distinct?: Enumerable<BruteBodyScalarFieldEnum>
  }

  /**
   * BruteBody findFirst
   */
  export interface BruteBodyFindFirstArgs extends BruteBodyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BruteBody findFirstOrThrow
   */
  export type BruteBodyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter, which BruteBody to fetch.
     */
    where?: BruteBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteBodies to fetch.
     */
    orderBy?: Enumerable<BruteBodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteBodies.
     */
    cursor?: BruteBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteBodies.
     */
    distinct?: Enumerable<BruteBodyScalarFieldEnum>
  }


  /**
   * BruteBody findMany
   */
  export type BruteBodyFindManyArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter, which BruteBodies to fetch.
     */
    where?: BruteBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteBodies to fetch.
     */
    orderBy?: Enumerable<BruteBodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BruteBodies.
     */
    cursor?: BruteBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteBodies.
     */
    skip?: number
    distinct?: Enumerable<BruteBodyScalarFieldEnum>
  }


  /**
   * BruteBody create
   */
  export type BruteBodyCreateArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * The data needed to create a BruteBody.
     */
    data: XOR<BruteBodyCreateInput, BruteBodyUncheckedCreateInput>
  }


  /**
   * BruteBody createMany
   */
  export type BruteBodyCreateManyArgs = {
    /**
     * The data used to create many BruteBodies.
     */
    data: Enumerable<BruteBodyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BruteBody update
   */
  export type BruteBodyUpdateArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * The data needed to update a BruteBody.
     */
    data: XOR<BruteBodyUpdateInput, BruteBodyUncheckedUpdateInput>
    /**
     * Choose, which BruteBody to update.
     */
    where: BruteBodyWhereUniqueInput
  }


  /**
   * BruteBody updateMany
   */
  export type BruteBodyUpdateManyArgs = {
    /**
     * The data used to update BruteBodies.
     */
    data: XOR<BruteBodyUpdateManyMutationInput, BruteBodyUncheckedUpdateManyInput>
    /**
     * Filter which BruteBodies to update
     */
    where?: BruteBodyWhereInput
  }


  /**
   * BruteBody upsert
   */
  export type BruteBodyUpsertArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * The filter to search for the BruteBody to update in case it exists.
     */
    where: BruteBodyWhereUniqueInput
    /**
     * In case the BruteBody found by the `where` argument doesn't exist, create a new BruteBody with this data.
     */
    create: XOR<BruteBodyCreateInput, BruteBodyUncheckedCreateInput>
    /**
     * In case the BruteBody was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BruteBodyUpdateInput, BruteBodyUncheckedUpdateInput>
  }


  /**
   * BruteBody delete
   */
  export type BruteBodyDeleteArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
    /**
     * Filter which BruteBody to delete.
     */
    where: BruteBodyWhereUniqueInput
  }


  /**
   * BruteBody deleteMany
   */
  export type BruteBodyDeleteManyArgs = {
    /**
     * Filter which BruteBodies to delete
     */
    where?: BruteBodyWhereInput
  }


  /**
   * BruteBody without action
   */
  export type BruteBodyArgs = {
    /**
     * Select specific fields to fetch from the BruteBody
     */
    select?: BruteBodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteBodyInclude | null
  }



  /**
   * Model BruteColors
   */


  export type AggregateBruteColors = {
    _count: BruteColorsCountAggregateOutputType | null
    _avg: BruteColorsAvgAggregateOutputType | null
    _sum: BruteColorsSumAggregateOutputType | null
    _min: BruteColorsMinAggregateOutputType | null
    _max: BruteColorsMaxAggregateOutputType | null
  }

  export type BruteColorsAvgAggregateOutputType = {
    id: number | null
    bruteId: number | null
  }

  export type BruteColorsSumAggregateOutputType = {
    id: number | null
    bruteId: number | null
  }

  export type BruteColorsMinAggregateOutputType = {
    id: number | null
    bruteId: number | null
    skinColor: string | null
    skinShade: string | null
    hairColor: string | null
    hairShade: string | null
    primaryColor: string | null
    primaryShade: string | null
    secondaryColor: string | null
    secondaryShade: string | null
    accentColor: string | null
    accentShade: string | null
  }

  export type BruteColorsMaxAggregateOutputType = {
    id: number | null
    bruteId: number | null
    skinColor: string | null
    skinShade: string | null
    hairColor: string | null
    hairShade: string | null
    primaryColor: string | null
    primaryShade: string | null
    secondaryColor: string | null
    secondaryShade: string | null
    accentColor: string | null
    accentShade: string | null
  }

  export type BruteColorsCountAggregateOutputType = {
    id: number
    bruteId: number
    skinColor: number
    skinShade: number
    hairColor: number
    hairShade: number
    primaryColor: number
    primaryShade: number
    secondaryColor: number
    secondaryShade: number
    accentColor: number
    accentShade: number
    _all: number
  }


  export type BruteColorsAvgAggregateInputType = {
    id?: true
    bruteId?: true
  }

  export type BruteColorsSumAggregateInputType = {
    id?: true
    bruteId?: true
  }

  export type BruteColorsMinAggregateInputType = {
    id?: true
    bruteId?: true
    skinColor?: true
    skinShade?: true
    hairColor?: true
    hairShade?: true
    primaryColor?: true
    primaryShade?: true
    secondaryColor?: true
    secondaryShade?: true
    accentColor?: true
    accentShade?: true
  }

  export type BruteColorsMaxAggregateInputType = {
    id?: true
    bruteId?: true
    skinColor?: true
    skinShade?: true
    hairColor?: true
    hairShade?: true
    primaryColor?: true
    primaryShade?: true
    secondaryColor?: true
    secondaryShade?: true
    accentColor?: true
    accentShade?: true
  }

  export type BruteColorsCountAggregateInputType = {
    id?: true
    bruteId?: true
    skinColor?: true
    skinShade?: true
    hairColor?: true
    hairShade?: true
    primaryColor?: true
    primaryShade?: true
    secondaryColor?: true
    secondaryShade?: true
    accentColor?: true
    accentShade?: true
    _all?: true
  }

  export type BruteColorsAggregateArgs = {
    /**
     * Filter which BruteColors to aggregate.
     */
    where?: BruteColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteColors to fetch.
     */
    orderBy?: Enumerable<BruteColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BruteColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BruteColors
    **/
    _count?: true | BruteColorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BruteColorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BruteColorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BruteColorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BruteColorsMaxAggregateInputType
  }

  export type GetBruteColorsAggregateType<T extends BruteColorsAggregateArgs> = {
        [P in keyof T & keyof AggregateBruteColors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBruteColors[P]>
      : GetScalarType<T[P], AggregateBruteColors[P]>
  }




  export type BruteColorsGroupByArgs = {
    where?: BruteColorsWhereInput
    orderBy?: Enumerable<BruteColorsOrderByWithAggregationInput>
    by: BruteColorsScalarFieldEnum[]
    having?: BruteColorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BruteColorsCountAggregateInputType | true
    _avg?: BruteColorsAvgAggregateInputType
    _sum?: BruteColorsSumAggregateInputType
    _min?: BruteColorsMinAggregateInputType
    _max?: BruteColorsMaxAggregateInputType
  }


  export type BruteColorsGroupByOutputType = {
    id: number
    bruteId: number
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
    _count: BruteColorsCountAggregateOutputType | null
    _avg: BruteColorsAvgAggregateOutputType | null
    _sum: BruteColorsSumAggregateOutputType | null
    _min: BruteColorsMinAggregateOutputType | null
    _max: BruteColorsMaxAggregateOutputType | null
  }

  type GetBruteColorsGroupByPayload<T extends BruteColorsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BruteColorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BruteColorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BruteColorsGroupByOutputType[P]>
            : GetScalarType<T[P], BruteColorsGroupByOutputType[P]>
        }
      >
    >


  export type BruteColorsSelect = {
    id?: boolean
    brute?: boolean | BruteArgs
    bruteId?: boolean
    skinColor?: boolean
    skinShade?: boolean
    hairColor?: boolean
    hairShade?: boolean
    primaryColor?: boolean
    primaryShade?: boolean
    secondaryColor?: boolean
    secondaryShade?: boolean
    accentColor?: boolean
    accentShade?: boolean
  }


  export type BruteColorsInclude = {
    brute?: boolean | BruteArgs
  }

  export type BruteColorsGetPayload<S extends boolean | null | undefined | BruteColorsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BruteColors :
    S extends undefined ? never :
    S extends { include: any } & (BruteColorsArgs | BruteColorsFindManyArgs)
    ? BruteColors  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brute' ? BruteGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BruteColorsArgs | BruteColorsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brute' ? BruteGetPayload<S['select'][P]> :  P extends keyof BruteColors ? BruteColors[P] : never
  } 
      : BruteColors


  type BruteColorsCountArgs = 
    Omit<BruteColorsFindManyArgs, 'select' | 'include'> & {
      select?: BruteColorsCountAggregateInputType | true
    }

  export interface BruteColorsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BruteColors that matches the filter.
     * @param {BruteColorsFindUniqueArgs} args - Arguments to find a BruteColors
     * @example
     * // Get one BruteColors
     * const bruteColors = await prisma.bruteColors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BruteColorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BruteColorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BruteColors'> extends True ? Prisma__BruteColorsClient<BruteColorsGetPayload<T>> : Prisma__BruteColorsClient<BruteColorsGetPayload<T> | null, null>

    /**
     * Find one BruteColors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BruteColorsFindUniqueOrThrowArgs} args - Arguments to find a BruteColors
     * @example
     * // Get one BruteColors
     * const bruteColors = await prisma.bruteColors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BruteColorsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BruteColorsFindUniqueOrThrowArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Find the first BruteColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsFindFirstArgs} args - Arguments to find a BruteColors
     * @example
     * // Get one BruteColors
     * const bruteColors = await prisma.bruteColors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BruteColorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BruteColorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BruteColors'> extends True ? Prisma__BruteColorsClient<BruteColorsGetPayload<T>> : Prisma__BruteColorsClient<BruteColorsGetPayload<T> | null, null>

    /**
     * Find the first BruteColors that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsFindFirstOrThrowArgs} args - Arguments to find a BruteColors
     * @example
     * // Get one BruteColors
     * const bruteColors = await prisma.bruteColors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BruteColorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BruteColorsFindFirstOrThrowArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Find zero or more BruteColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BruteColors
     * const bruteColors = await prisma.bruteColors.findMany()
     * 
     * // Get first 10 BruteColors
     * const bruteColors = await prisma.bruteColors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bruteColorsWithIdOnly = await prisma.bruteColors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BruteColorsFindManyArgs>(
      args?: SelectSubset<T, BruteColorsFindManyArgs>
    ): PrismaPromise<Array<BruteColorsGetPayload<T>>>

    /**
     * Create a BruteColors.
     * @param {BruteColorsCreateArgs} args - Arguments to create a BruteColors.
     * @example
     * // Create one BruteColors
     * const BruteColors = await prisma.bruteColors.create({
     *   data: {
     *     // ... data to create a BruteColors
     *   }
     * })
     * 
    **/
    create<T extends BruteColorsCreateArgs>(
      args: SelectSubset<T, BruteColorsCreateArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Create many BruteColors.
     *     @param {BruteColorsCreateManyArgs} args - Arguments to create many BruteColors.
     *     @example
     *     // Create many BruteColors
     *     const bruteColors = await prisma.bruteColors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BruteColorsCreateManyArgs>(
      args?: SelectSubset<T, BruteColorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BruteColors.
     * @param {BruteColorsDeleteArgs} args - Arguments to delete one BruteColors.
     * @example
     * // Delete one BruteColors
     * const BruteColors = await prisma.bruteColors.delete({
     *   where: {
     *     // ... filter to delete one BruteColors
     *   }
     * })
     * 
    **/
    delete<T extends BruteColorsDeleteArgs>(
      args: SelectSubset<T, BruteColorsDeleteArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Update one BruteColors.
     * @param {BruteColorsUpdateArgs} args - Arguments to update one BruteColors.
     * @example
     * // Update one BruteColors
     * const bruteColors = await prisma.bruteColors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BruteColorsUpdateArgs>(
      args: SelectSubset<T, BruteColorsUpdateArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Delete zero or more BruteColors.
     * @param {BruteColorsDeleteManyArgs} args - Arguments to filter BruteColors to delete.
     * @example
     * // Delete a few BruteColors
     * const { count } = await prisma.bruteColors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BruteColorsDeleteManyArgs>(
      args?: SelectSubset<T, BruteColorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BruteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BruteColors
     * const bruteColors = await prisma.bruteColors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BruteColorsUpdateManyArgs>(
      args: SelectSubset<T, BruteColorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BruteColors.
     * @param {BruteColorsUpsertArgs} args - Arguments to update or create a BruteColors.
     * @example
     * // Update or create a BruteColors
     * const bruteColors = await prisma.bruteColors.upsert({
     *   create: {
     *     // ... data to create a BruteColors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BruteColors we want to update
     *   }
     * })
    **/
    upsert<T extends BruteColorsUpsertArgs>(
      args: SelectSubset<T, BruteColorsUpsertArgs>
    ): Prisma__BruteColorsClient<BruteColorsGetPayload<T>>

    /**
     * Count the number of BruteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsCountArgs} args - Arguments to filter BruteColors to count.
     * @example
     * // Count the number of BruteColors
     * const count = await prisma.bruteColors.count({
     *   where: {
     *     // ... the filter for the BruteColors we want to count
     *   }
     * })
    **/
    count<T extends BruteColorsCountArgs>(
      args?: Subset<T, BruteColorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BruteColorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BruteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BruteColorsAggregateArgs>(args: Subset<T, BruteColorsAggregateArgs>): PrismaPromise<GetBruteColorsAggregateType<T>>

    /**
     * Group by BruteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteColorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BruteColorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BruteColorsGroupByArgs['orderBy'] }
        : { orderBy?: BruteColorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BruteColorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteColorsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BruteColors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BruteColorsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brute<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BruteColors base type for findUnique actions
   */
  export type BruteColorsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter, which BruteColors to fetch.
     */
    where: BruteColorsWhereUniqueInput
  }

  /**
   * BruteColors findUnique
   */
  export interface BruteColorsFindUniqueArgs extends BruteColorsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BruteColors findUniqueOrThrow
   */
  export type BruteColorsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter, which BruteColors to fetch.
     */
    where: BruteColorsWhereUniqueInput
  }


  /**
   * BruteColors base type for findFirst actions
   */
  export type BruteColorsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter, which BruteColors to fetch.
     */
    where?: BruteColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteColors to fetch.
     */
    orderBy?: Enumerable<BruteColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteColors.
     */
    cursor?: BruteColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteColors.
     */
    distinct?: Enumerable<BruteColorsScalarFieldEnum>
  }

  /**
   * BruteColors findFirst
   */
  export interface BruteColorsFindFirstArgs extends BruteColorsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BruteColors findFirstOrThrow
   */
  export type BruteColorsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter, which BruteColors to fetch.
     */
    where?: BruteColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteColors to fetch.
     */
    orderBy?: Enumerable<BruteColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteColors.
     */
    cursor?: BruteColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteColors.
     */
    distinct?: Enumerable<BruteColorsScalarFieldEnum>
  }


  /**
   * BruteColors findMany
   */
  export type BruteColorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter, which BruteColors to fetch.
     */
    where?: BruteColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteColors to fetch.
     */
    orderBy?: Enumerable<BruteColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BruteColors.
     */
    cursor?: BruteColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteColors.
     */
    skip?: number
    distinct?: Enumerable<BruteColorsScalarFieldEnum>
  }


  /**
   * BruteColors create
   */
  export type BruteColorsCreateArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * The data needed to create a BruteColors.
     */
    data: XOR<BruteColorsCreateInput, BruteColorsUncheckedCreateInput>
  }


  /**
   * BruteColors createMany
   */
  export type BruteColorsCreateManyArgs = {
    /**
     * The data used to create many BruteColors.
     */
    data: Enumerable<BruteColorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BruteColors update
   */
  export type BruteColorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * The data needed to update a BruteColors.
     */
    data: XOR<BruteColorsUpdateInput, BruteColorsUncheckedUpdateInput>
    /**
     * Choose, which BruteColors to update.
     */
    where: BruteColorsWhereUniqueInput
  }


  /**
   * BruteColors updateMany
   */
  export type BruteColorsUpdateManyArgs = {
    /**
     * The data used to update BruteColors.
     */
    data: XOR<BruteColorsUpdateManyMutationInput, BruteColorsUncheckedUpdateManyInput>
    /**
     * Filter which BruteColors to update
     */
    where?: BruteColorsWhereInput
  }


  /**
   * BruteColors upsert
   */
  export type BruteColorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * The filter to search for the BruteColors to update in case it exists.
     */
    where: BruteColorsWhereUniqueInput
    /**
     * In case the BruteColors found by the `where` argument doesn't exist, create a new BruteColors with this data.
     */
    create: XOR<BruteColorsCreateInput, BruteColorsUncheckedCreateInput>
    /**
     * In case the BruteColors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BruteColorsUpdateInput, BruteColorsUncheckedUpdateInput>
  }


  /**
   * BruteColors delete
   */
  export type BruteColorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
    /**
     * Filter which BruteColors to delete.
     */
    where: BruteColorsWhereUniqueInput
  }


  /**
   * BruteColors deleteMany
   */
  export type BruteColorsDeleteManyArgs = {
    /**
     * Filter which BruteColors to delete
     */
    where?: BruteColorsWhereInput
  }


  /**
   * BruteColors without action
   */
  export type BruteColorsArgs = {
    /**
     * Select specific fields to fetch from the BruteColors
     */
    select?: BruteColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteColorsInclude | null
  }



  /**
   * Model Brute
   */


  export type AggregateBrute = {
    _count: BruteCountAggregateOutputType | null
    _avg: BruteAvgAggregateOutputType | null
    _sum: BruteSumAggregateOutputType | null
    _min: BruteMinAggregateOutputType | null
    _max: BruteMaxAggregateOutputType | null
  }

  export type BruteAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    hp: number | null
    enduranceStat: number | null
    enduranceModifier: number | null
    enduranceValue: number | null
    strengthStat: number | null
    strengthModifier: number | null
    strengthValue: number | null
    agilityStat: number | null
    agilityModifier: number | null
    agilityValue: number | null
    speedStat: number | null
    speedModifier: number | null
    speedValue: number | null
    ranking: number | null
    masterId: number | null
    pupilsCount: number | null
    clanId: number | null
    fightsLeft: number | null
    victories: number | null
  }

  export type BruteSumAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    hp: number | null
    enduranceStat: number | null
    enduranceModifier: number | null
    enduranceValue: number | null
    strengthStat: number | null
    strengthModifier: number | null
    strengthValue: number | null
    agilityStat: number | null
    agilityModifier: number | null
    agilityValue: number | null
    speedStat: number | null
    speedModifier: number | null
    speedValue: number | null
    ranking: number | null
    masterId: number | null
    pupilsCount: number | null
    clanId: number | null
    fightsLeft: number | null
    victories: number | null
  }

  export type BruteMinAggregateOutputType = {
    id: number | null
    name: string | null
    deleted: boolean | null
    spritesheet: Buffer | null
    level: number | null
    xp: number | null
    hp: number | null
    enduranceStat: number | null
    enduranceModifier: number | null
    enduranceValue: number | null
    strengthStat: number | null
    strengthModifier: number | null
    strengthValue: number | null
    agilityStat: number | null
    agilityModifier: number | null
    agilityValue: number | null
    speedStat: number | null
    speedModifier: number | null
    speedValue: number | null
    ranking: number | null
    gender: Gender | null
    userId: string | null
    masterId: number | null
    pupilsCount: number | null
    clanId: number | null
    tournament: Date | null
    lastFight: Date | null
    fightsLeft: number | null
    victories: number | null
  }

  export type BruteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deleted: boolean | null
    spritesheet: Buffer | null
    level: number | null
    xp: number | null
    hp: number | null
    enduranceStat: number | null
    enduranceModifier: number | null
    enduranceValue: number | null
    strengthStat: number | null
    strengthModifier: number | null
    strengthValue: number | null
    agilityStat: number | null
    agilityModifier: number | null
    agilityValue: number | null
    speedStat: number | null
    speedModifier: number | null
    speedValue: number | null
    ranking: number | null
    gender: Gender | null
    userId: string | null
    masterId: number | null
    pupilsCount: number | null
    clanId: number | null
    tournament: Date | null
    lastFight: Date | null
    fightsLeft: number | null
    victories: number | null
  }

  export type BruteCountAggregateOutputType = {
    id: number
    name: number
    deleted: number
    spritesheet: number
    spritesheetJson: number
    destinyPath: number
    level: number
    xp: number
    hp: number
    enduranceStat: number
    enduranceModifier: number
    enduranceValue: number
    strengthStat: number
    strengthModifier: number
    strengthValue: number
    agilityStat: number
    agilityModifier: number
    agilityValue: number
    speedStat: number
    speedModifier: number
    speedValue: number
    ranking: number
    gender: number
    userId: number
    weapons: number
    skills: number
    pets: number
    masterId: number
    pupilsCount: number
    clanId: number
    tournament: number
    lastFight: number
    fightsLeft: number
    victories: number
    _all: number
  }


  export type BruteAvgAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    hp?: true
    enduranceStat?: true
    enduranceModifier?: true
    enduranceValue?: true
    strengthStat?: true
    strengthModifier?: true
    strengthValue?: true
    agilityStat?: true
    agilityModifier?: true
    agilityValue?: true
    speedStat?: true
    speedModifier?: true
    speedValue?: true
    ranking?: true
    masterId?: true
    pupilsCount?: true
    clanId?: true
    fightsLeft?: true
    victories?: true
  }

  export type BruteSumAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    hp?: true
    enduranceStat?: true
    enduranceModifier?: true
    enduranceValue?: true
    strengthStat?: true
    strengthModifier?: true
    strengthValue?: true
    agilityStat?: true
    agilityModifier?: true
    agilityValue?: true
    speedStat?: true
    speedModifier?: true
    speedValue?: true
    ranking?: true
    masterId?: true
    pupilsCount?: true
    clanId?: true
    fightsLeft?: true
    victories?: true
  }

  export type BruteMinAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    spritesheet?: true
    level?: true
    xp?: true
    hp?: true
    enduranceStat?: true
    enduranceModifier?: true
    enduranceValue?: true
    strengthStat?: true
    strengthModifier?: true
    strengthValue?: true
    agilityStat?: true
    agilityModifier?: true
    agilityValue?: true
    speedStat?: true
    speedModifier?: true
    speedValue?: true
    ranking?: true
    gender?: true
    userId?: true
    masterId?: true
    pupilsCount?: true
    clanId?: true
    tournament?: true
    lastFight?: true
    fightsLeft?: true
    victories?: true
  }

  export type BruteMaxAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    spritesheet?: true
    level?: true
    xp?: true
    hp?: true
    enduranceStat?: true
    enduranceModifier?: true
    enduranceValue?: true
    strengthStat?: true
    strengthModifier?: true
    strengthValue?: true
    agilityStat?: true
    agilityModifier?: true
    agilityValue?: true
    speedStat?: true
    speedModifier?: true
    speedValue?: true
    ranking?: true
    gender?: true
    userId?: true
    masterId?: true
    pupilsCount?: true
    clanId?: true
    tournament?: true
    lastFight?: true
    fightsLeft?: true
    victories?: true
  }

  export type BruteCountAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    spritesheet?: true
    spritesheetJson?: true
    destinyPath?: true
    level?: true
    xp?: true
    hp?: true
    enduranceStat?: true
    enduranceModifier?: true
    enduranceValue?: true
    strengthStat?: true
    strengthModifier?: true
    strengthValue?: true
    agilityStat?: true
    agilityModifier?: true
    agilityValue?: true
    speedStat?: true
    speedModifier?: true
    speedValue?: true
    ranking?: true
    gender?: true
    userId?: true
    weapons?: true
    skills?: true
    pets?: true
    masterId?: true
    pupilsCount?: true
    clanId?: true
    tournament?: true
    lastFight?: true
    fightsLeft?: true
    victories?: true
    _all?: true
  }

  export type BruteAggregateArgs = {
    /**
     * Filter which Brute to aggregate.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brutes
    **/
    _count?: true | BruteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BruteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BruteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BruteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BruteMaxAggregateInputType
  }

  export type GetBruteAggregateType<T extends BruteAggregateArgs> = {
        [P in keyof T & keyof AggregateBrute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrute[P]>
      : GetScalarType<T[P], AggregateBrute[P]>
  }




  export type BruteGroupByArgs = {
    where?: BruteWhereInput
    orderBy?: Enumerable<BruteOrderByWithAggregationInput>
    by: BruteScalarFieldEnum[]
    having?: BruteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BruteCountAggregateInputType | true
    _avg?: BruteAvgAggregateInputType
    _sum?: BruteSumAggregateInputType
    _min?: BruteMinAggregateInputType
    _max?: BruteMaxAggregateInputType
  }


  export type BruteGroupByOutputType = {
    id: number
    name: string
    deleted: boolean
    spritesheet: Buffer | null
    spritesheetJson: JsonValue | null
    destinyPath: DestinyChoiceSide[]
    level: number
    xp: number
    hp: number
    enduranceStat: number
    enduranceModifier: number
    enduranceValue: number
    strengthStat: number
    strengthModifier: number
    strengthValue: number
    agilityStat: number
    agilityModifier: number
    agilityValue: number
    speedStat: number
    speedModifier: number
    speedValue: number
    ranking: number
    gender: Gender
    userId: string | null
    weapons: WeaponName[]
    skills: SkillName[]
    pets: PetName[]
    masterId: number | null
    pupilsCount: number
    clanId: number | null
    tournament: Date | null
    lastFight: Date | null
    fightsLeft: number
    victories: number
    _count: BruteCountAggregateOutputType | null
    _avg: BruteAvgAggregateOutputType | null
    _sum: BruteSumAggregateOutputType | null
    _min: BruteMinAggregateOutputType | null
    _max: BruteMaxAggregateOutputType | null
  }

  type GetBruteGroupByPayload<T extends BruteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BruteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BruteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BruteGroupByOutputType[P]>
            : GetScalarType<T[P], BruteGroupByOutputType[P]>
        }
      >
    >


  export type BruteSelect = {
    id?: boolean
    name?: boolean
    deleted?: boolean
    spritesheet?: boolean
    spritesheetJson?: boolean
    destinyPath?: boolean
    level?: boolean
    xp?: boolean
    hp?: boolean
    enduranceStat?: boolean
    enduranceModifier?: boolean
    enduranceValue?: boolean
    strengthStat?: boolean
    strengthModifier?: boolean
    strengthValue?: boolean
    agilityStat?: boolean
    agilityModifier?: boolean
    agilityValue?: boolean
    speedStat?: boolean
    speedModifier?: boolean
    speedValue?: boolean
    ranking?: boolean
    gender?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    body?: boolean | BruteBodyArgs
    colors?: boolean | BruteColorsArgs
    weapons?: boolean
    skills?: boolean
    pets?: boolean
    master?: boolean | BruteArgs
    masterId?: boolean
    pupils?: boolean | Brute$pupilsArgs
    pupilsCount?: boolean
    clan?: boolean | ClanArgs
    clanId?: boolean
    tournament?: boolean
    lastFight?: boolean
    fightsLeft?: boolean
    victories?: boolean
    fights?: boolean | Brute$fightsArgs
    fightsAsAdversary?: boolean | Brute$fightsAsAdversaryArgs
    logs?: boolean | Brute$logsArgs
    destinyChoices?: boolean | Brute$destinyChoicesArgs
    _count?: boolean | BruteCountOutputTypeArgs
  }


  export type BruteInclude = {
    user?: boolean | UserArgs
    body?: boolean | BruteBodyArgs
    colors?: boolean | BruteColorsArgs
    master?: boolean | BruteArgs
    pupils?: boolean | Brute$pupilsArgs
    clan?: boolean | ClanArgs
    fights?: boolean | Brute$fightsArgs
    fightsAsAdversary?: boolean | Brute$fightsAsAdversaryArgs
    logs?: boolean | Brute$logsArgs
    destinyChoices?: boolean | Brute$destinyChoicesArgs
    _count?: boolean | BruteCountOutputTypeArgs
  }

  export type BruteGetPayload<S extends boolean | null | undefined | BruteArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Brute :
    S extends undefined ? never :
    S extends { include: any } & (BruteArgs | BruteFindManyArgs)
    ? Brute  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'body' ? BruteBodyGetPayload<S['include'][P]> | null :
        P extends 'colors' ? BruteColorsGetPayload<S['include'][P]> | null :
        P extends 'master' ? BruteGetPayload<S['include'][P]> | null :
        P extends 'pupils' ? Array < BruteGetPayload<S['include'][P]>>  :
        P extends 'clan' ? ClanGetPayload<S['include'][P]> | null :
        P extends 'fights' ? Array < FightGetPayload<S['include'][P]>>  :
        P extends 'fightsAsAdversary' ? Array < FightGetPayload<S['include'][P]>>  :
        P extends 'logs' ? Array < LogGetPayload<S['include'][P]>>  :
        P extends 'destinyChoices' ? Array < DestinyChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? BruteCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BruteArgs | BruteFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'body' ? BruteBodyGetPayload<S['select'][P]> | null :
        P extends 'colors' ? BruteColorsGetPayload<S['select'][P]> | null :
        P extends 'master' ? BruteGetPayload<S['select'][P]> | null :
        P extends 'pupils' ? Array < BruteGetPayload<S['select'][P]>>  :
        P extends 'clan' ? ClanGetPayload<S['select'][P]> | null :
        P extends 'fights' ? Array < FightGetPayload<S['select'][P]>>  :
        P extends 'fightsAsAdversary' ? Array < FightGetPayload<S['select'][P]>>  :
        P extends 'logs' ? Array < LogGetPayload<S['select'][P]>>  :
        P extends 'destinyChoices' ? Array < DestinyChoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? BruteCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Brute ? Brute[P] : never
  } 
      : Brute


  type BruteCountArgs = 
    Omit<BruteFindManyArgs, 'select' | 'include'> & {
      select?: BruteCountAggregateInputType | true
    }

  export interface BruteDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Brute that matches the filter.
     * @param {BruteFindUniqueArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BruteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BruteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Brute'> extends True ? Prisma__BruteClient<BruteGetPayload<T>> : Prisma__BruteClient<BruteGetPayload<T> | null, null>

    /**
     * Find one Brute that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BruteFindUniqueOrThrowArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BruteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BruteFindUniqueOrThrowArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Find the first Brute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindFirstArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BruteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BruteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Brute'> extends True ? Prisma__BruteClient<BruteGetPayload<T>> : Prisma__BruteClient<BruteGetPayload<T> | null, null>

    /**
     * Find the first Brute that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindFirstOrThrowArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BruteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BruteFindFirstOrThrowArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Find zero or more Brutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brutes
     * const brutes = await prisma.brute.findMany()
     * 
     * // Get first 10 Brutes
     * const brutes = await prisma.brute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bruteWithIdOnly = await prisma.brute.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BruteFindManyArgs>(
      args?: SelectSubset<T, BruteFindManyArgs>
    ): PrismaPromise<Array<BruteGetPayload<T>>>

    /**
     * Create a Brute.
     * @param {BruteCreateArgs} args - Arguments to create a Brute.
     * @example
     * // Create one Brute
     * const Brute = await prisma.brute.create({
     *   data: {
     *     // ... data to create a Brute
     *   }
     * })
     * 
    **/
    create<T extends BruteCreateArgs>(
      args: SelectSubset<T, BruteCreateArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Create many Brutes.
     *     @param {BruteCreateManyArgs} args - Arguments to create many Brutes.
     *     @example
     *     // Create many Brutes
     *     const brute = await prisma.brute.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BruteCreateManyArgs>(
      args?: SelectSubset<T, BruteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Brute.
     * @param {BruteDeleteArgs} args - Arguments to delete one Brute.
     * @example
     * // Delete one Brute
     * const Brute = await prisma.brute.delete({
     *   where: {
     *     // ... filter to delete one Brute
     *   }
     * })
     * 
    **/
    delete<T extends BruteDeleteArgs>(
      args: SelectSubset<T, BruteDeleteArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Update one Brute.
     * @param {BruteUpdateArgs} args - Arguments to update one Brute.
     * @example
     * // Update one Brute
     * const brute = await prisma.brute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BruteUpdateArgs>(
      args: SelectSubset<T, BruteUpdateArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Delete zero or more Brutes.
     * @param {BruteDeleteManyArgs} args - Arguments to filter Brutes to delete.
     * @example
     * // Delete a few Brutes
     * const { count } = await prisma.brute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BruteDeleteManyArgs>(
      args?: SelectSubset<T, BruteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brutes
     * const brute = await prisma.brute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BruteUpdateManyArgs>(
      args: SelectSubset<T, BruteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Brute.
     * @param {BruteUpsertArgs} args - Arguments to update or create a Brute.
     * @example
     * // Update or create a Brute
     * const brute = await prisma.brute.upsert({
     *   create: {
     *     // ... data to create a Brute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brute we want to update
     *   }
     * })
    **/
    upsert<T extends BruteUpsertArgs>(
      args: SelectSubset<T, BruteUpsertArgs>
    ): Prisma__BruteClient<BruteGetPayload<T>>

    /**
     * Count the number of Brutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteCountArgs} args - Arguments to filter Brutes to count.
     * @example
     * // Count the number of Brutes
     * const count = await prisma.brute.count({
     *   where: {
     *     // ... the filter for the Brutes we want to count
     *   }
     * })
    **/
    count<T extends BruteCountArgs>(
      args?: Subset<T, BruteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BruteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BruteAggregateArgs>(args: Subset<T, BruteAggregateArgs>): PrismaPromise<GetBruteAggregateType<T>>

    /**
     * Group by Brute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BruteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BruteGroupByArgs['orderBy'] }
        : { orderBy?: BruteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BruteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Brute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BruteClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    body<T extends BruteBodyArgs= {}>(args?: Subset<T, BruteBodyArgs>): Prisma__BruteBodyClient<BruteBodyGetPayload<T> | Null>;

    colors<T extends BruteColorsArgs= {}>(args?: Subset<T, BruteColorsArgs>): Prisma__BruteColorsClient<BruteColorsGetPayload<T> | Null>;

    master<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    pupils<T extends Brute$pupilsArgs= {}>(args?: Subset<T, Brute$pupilsArgs>): PrismaPromise<Array<BruteGetPayload<T>>| Null>;

    clan<T extends ClanArgs= {}>(args?: Subset<T, ClanArgs>): Prisma__ClanClient<ClanGetPayload<T> | Null>;

    fights<T extends Brute$fightsArgs= {}>(args?: Subset<T, Brute$fightsArgs>): PrismaPromise<Array<FightGetPayload<T>>| Null>;

    fightsAsAdversary<T extends Brute$fightsAsAdversaryArgs= {}>(args?: Subset<T, Brute$fightsAsAdversaryArgs>): PrismaPromise<Array<FightGetPayload<T>>| Null>;

    logs<T extends Brute$logsArgs= {}>(args?: Subset<T, Brute$logsArgs>): PrismaPromise<Array<LogGetPayload<T>>| Null>;

    destinyChoices<T extends Brute$destinyChoicesArgs= {}>(args?: Subset<T, Brute$destinyChoicesArgs>): PrismaPromise<Array<DestinyChoiceGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Brute base type for findUnique actions
   */
  export type BruteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter, which Brute to fetch.
     */
    where: BruteWhereUniqueInput
  }

  /**
   * Brute findUnique
   */
  export interface BruteFindUniqueArgs extends BruteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brute findUniqueOrThrow
   */
  export type BruteFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter, which Brute to fetch.
     */
    where: BruteWhereUniqueInput
  }


  /**
   * Brute base type for findFirst actions
   */
  export type BruteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter, which Brute to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brutes.
     */
    distinct?: Enumerable<BruteScalarFieldEnum>
  }

  /**
   * Brute findFirst
   */
  export interface BruteFindFirstArgs extends BruteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brute findFirstOrThrow
   */
  export type BruteFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter, which Brute to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brutes.
     */
    distinct?: Enumerable<BruteScalarFieldEnum>
  }


  /**
   * Brute findMany
   */
  export type BruteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter, which Brutes to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    distinct?: Enumerable<BruteScalarFieldEnum>
  }


  /**
   * Brute create
   */
  export type BruteCreateArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * The data needed to create a Brute.
     */
    data: XOR<BruteCreateInput, BruteUncheckedCreateInput>
  }


  /**
   * Brute createMany
   */
  export type BruteCreateManyArgs = {
    /**
     * The data used to create many Brutes.
     */
    data: Enumerable<BruteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Brute update
   */
  export type BruteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * The data needed to update a Brute.
     */
    data: XOR<BruteUpdateInput, BruteUncheckedUpdateInput>
    /**
     * Choose, which Brute to update.
     */
    where: BruteWhereUniqueInput
  }


  /**
   * Brute updateMany
   */
  export type BruteUpdateManyArgs = {
    /**
     * The data used to update Brutes.
     */
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyInput>
    /**
     * Filter which Brutes to update
     */
    where?: BruteWhereInput
  }


  /**
   * Brute upsert
   */
  export type BruteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * The filter to search for the Brute to update in case it exists.
     */
    where: BruteWhereUniqueInput
    /**
     * In case the Brute found by the `where` argument doesn't exist, create a new Brute with this data.
     */
    create: XOR<BruteCreateInput, BruteUncheckedCreateInput>
    /**
     * In case the Brute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BruteUpdateInput, BruteUncheckedUpdateInput>
  }


  /**
   * Brute delete
   */
  export type BruteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    /**
     * Filter which Brute to delete.
     */
    where: BruteWhereUniqueInput
  }


  /**
   * Brute deleteMany
   */
  export type BruteDeleteManyArgs = {
    /**
     * Filter which Brutes to delete
     */
    where?: BruteWhereInput
  }


  /**
   * Brute.pupils
   */
  export type Brute$pupilsArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    where?: BruteWhereInput
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    cursor?: BruteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BruteScalarFieldEnum>
  }


  /**
   * Brute.fights
   */
  export type Brute$fightsArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    where?: FightWhereInput
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FightScalarFieldEnum>
  }


  /**
   * Brute.fightsAsAdversary
   */
  export type Brute$fightsAsAdversaryArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    where?: FightWhereInput
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FightScalarFieldEnum>
  }


  /**
   * Brute.logs
   */
  export type Brute$logsArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    where?: LogWhereInput
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Brute.destinyChoices
   */
  export type Brute$destinyChoicesArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    where?: DestinyChoiceWhereInput
    orderBy?: Enumerable<DestinyChoiceOrderByWithRelationInput>
    cursor?: DestinyChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DestinyChoiceScalarFieldEnum>
  }


  /**
   * Brute without action
   */
  export type BruteArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
  }



  /**
   * Model Clan
   */


  export type AggregateClan = {
    _count: ClanCountAggregateOutputType | null
    _avg: ClanAvgAggregateOutputType | null
    _sum: ClanSumAggregateOutputType | null
    _min: ClanMinAggregateOutputType | null
    _max: ClanMaxAggregateOutputType | null
  }

  export type ClanAvgAggregateOutputType = {
    id: number | null
  }

  export type ClanSumAggregateOutputType = {
    id: number | null
  }

  export type ClanMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClanMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClanCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClanAvgAggregateInputType = {
    id?: true
  }

  export type ClanSumAggregateInputType = {
    id?: true
  }

  export type ClanMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClanMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClanCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClanAggregateArgs = {
    /**
     * Filter which Clan to aggregate.
     */
    where?: ClanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clans to fetch.
     */
    orderBy?: Enumerable<ClanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clans
    **/
    _count?: true | ClanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClanMaxAggregateInputType
  }

  export type GetClanAggregateType<T extends ClanAggregateArgs> = {
        [P in keyof T & keyof AggregateClan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClan[P]>
      : GetScalarType<T[P], AggregateClan[P]>
  }




  export type ClanGroupByArgs = {
    where?: ClanWhereInput
    orderBy?: Enumerable<ClanOrderByWithAggregationInput>
    by: ClanScalarFieldEnum[]
    having?: ClanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClanCountAggregateInputType | true
    _avg?: ClanAvgAggregateInputType
    _sum?: ClanSumAggregateInputType
    _min?: ClanMinAggregateInputType
    _max?: ClanMaxAggregateInputType
  }


  export type ClanGroupByOutputType = {
    id: number
    name: string
    _count: ClanCountAggregateOutputType | null
    _avg: ClanAvgAggregateOutputType | null
    _sum: ClanSumAggregateOutputType | null
    _min: ClanMinAggregateOutputType | null
    _max: ClanMaxAggregateOutputType | null
  }

  type GetClanGroupByPayload<T extends ClanGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClanGroupByOutputType[P]>
            : GetScalarType<T[P], ClanGroupByOutputType[P]>
        }
      >
    >


  export type ClanSelect = {
    id?: boolean
    name?: boolean
    brutes?: boolean | Clan$brutesArgs
    _count?: boolean | ClanCountOutputTypeArgs
  }


  export type ClanInclude = {
    brutes?: boolean | Clan$brutesArgs
    _count?: boolean | ClanCountOutputTypeArgs
  }

  export type ClanGetPayload<S extends boolean | null | undefined | ClanArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Clan :
    S extends undefined ? never :
    S extends { include: any } & (ClanArgs | ClanFindManyArgs)
    ? Clan  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brutes' ? Array < BruteGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClanCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClanArgs | ClanFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brutes' ? Array < BruteGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClanCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Clan ? Clan[P] : never
  } 
      : Clan


  type ClanCountArgs = 
    Omit<ClanFindManyArgs, 'select' | 'include'> & {
      select?: ClanCountAggregateInputType | true
    }

  export interface ClanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Clan that matches the filter.
     * @param {ClanFindUniqueArgs} args - Arguments to find a Clan
     * @example
     * // Get one Clan
     * const clan = await prisma.clan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Clan'> extends True ? Prisma__ClanClient<ClanGetPayload<T>> : Prisma__ClanClient<ClanGetPayload<T> | null, null>

    /**
     * Find one Clan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClanFindUniqueOrThrowArgs} args - Arguments to find a Clan
     * @example
     * // Get one Clan
     * const clan = await prisma.clan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClanFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClanFindUniqueOrThrowArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Find the first Clan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanFindFirstArgs} args - Arguments to find a Clan
     * @example
     * // Get one Clan
     * const clan = await prisma.clan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Clan'> extends True ? Prisma__ClanClient<ClanGetPayload<T>> : Prisma__ClanClient<ClanGetPayload<T> | null, null>

    /**
     * Find the first Clan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanFindFirstOrThrowArgs} args - Arguments to find a Clan
     * @example
     * // Get one Clan
     * const clan = await prisma.clan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClanFindFirstOrThrowArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Find zero or more Clans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clans
     * const clans = await prisma.clan.findMany()
     * 
     * // Get first 10 Clans
     * const clans = await prisma.clan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clanWithIdOnly = await prisma.clan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClanFindManyArgs>(
      args?: SelectSubset<T, ClanFindManyArgs>
    ): PrismaPromise<Array<ClanGetPayload<T>>>

    /**
     * Create a Clan.
     * @param {ClanCreateArgs} args - Arguments to create a Clan.
     * @example
     * // Create one Clan
     * const Clan = await prisma.clan.create({
     *   data: {
     *     // ... data to create a Clan
     *   }
     * })
     * 
    **/
    create<T extends ClanCreateArgs>(
      args: SelectSubset<T, ClanCreateArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Create many Clans.
     *     @param {ClanCreateManyArgs} args - Arguments to create many Clans.
     *     @example
     *     // Create many Clans
     *     const clan = await prisma.clan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClanCreateManyArgs>(
      args?: SelectSubset<T, ClanCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Clan.
     * @param {ClanDeleteArgs} args - Arguments to delete one Clan.
     * @example
     * // Delete one Clan
     * const Clan = await prisma.clan.delete({
     *   where: {
     *     // ... filter to delete one Clan
     *   }
     * })
     * 
    **/
    delete<T extends ClanDeleteArgs>(
      args: SelectSubset<T, ClanDeleteArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Update one Clan.
     * @param {ClanUpdateArgs} args - Arguments to update one Clan.
     * @example
     * // Update one Clan
     * const clan = await prisma.clan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClanUpdateArgs>(
      args: SelectSubset<T, ClanUpdateArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Delete zero or more Clans.
     * @param {ClanDeleteManyArgs} args - Arguments to filter Clans to delete.
     * @example
     * // Delete a few Clans
     * const { count } = await prisma.clan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClanDeleteManyArgs>(
      args?: SelectSubset<T, ClanDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clans
     * const clan = await prisma.clan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClanUpdateManyArgs>(
      args: SelectSubset<T, ClanUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Clan.
     * @param {ClanUpsertArgs} args - Arguments to update or create a Clan.
     * @example
     * // Update or create a Clan
     * const clan = await prisma.clan.upsert({
     *   create: {
     *     // ... data to create a Clan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clan we want to update
     *   }
     * })
    **/
    upsert<T extends ClanUpsertArgs>(
      args: SelectSubset<T, ClanUpsertArgs>
    ): Prisma__ClanClient<ClanGetPayload<T>>

    /**
     * Count the number of Clans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanCountArgs} args - Arguments to filter Clans to count.
     * @example
     * // Count the number of Clans
     * const count = await prisma.clan.count({
     *   where: {
     *     // ... the filter for the Clans we want to count
     *   }
     * })
    **/
    count<T extends ClanCountArgs>(
      args?: Subset<T, ClanCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClanAggregateArgs>(args: Subset<T, ClanAggregateArgs>): PrismaPromise<GetClanAggregateType<T>>

    /**
     * Group by Clan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClanGroupByArgs['orderBy'] }
        : { orderBy?: ClanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClanGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Clan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClanClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brutes<T extends Clan$brutesArgs= {}>(args?: Subset<T, Clan$brutesArgs>): PrismaPromise<Array<BruteGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Clan base type for findUnique actions
   */
  export type ClanFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter, which Clan to fetch.
     */
    where: ClanWhereUniqueInput
  }

  /**
   * Clan findUnique
   */
  export interface ClanFindUniqueArgs extends ClanFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clan findUniqueOrThrow
   */
  export type ClanFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter, which Clan to fetch.
     */
    where: ClanWhereUniqueInput
  }


  /**
   * Clan base type for findFirst actions
   */
  export type ClanFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter, which Clan to fetch.
     */
    where?: ClanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clans to fetch.
     */
    orderBy?: Enumerable<ClanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clans.
     */
    cursor?: ClanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clans.
     */
    distinct?: Enumerable<ClanScalarFieldEnum>
  }

  /**
   * Clan findFirst
   */
  export interface ClanFindFirstArgs extends ClanFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clan findFirstOrThrow
   */
  export type ClanFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter, which Clan to fetch.
     */
    where?: ClanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clans to fetch.
     */
    orderBy?: Enumerable<ClanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clans.
     */
    cursor?: ClanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clans.
     */
    distinct?: Enumerable<ClanScalarFieldEnum>
  }


  /**
   * Clan findMany
   */
  export type ClanFindManyArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter, which Clans to fetch.
     */
    where?: ClanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clans to fetch.
     */
    orderBy?: Enumerable<ClanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clans.
     */
    cursor?: ClanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clans.
     */
    skip?: number
    distinct?: Enumerable<ClanScalarFieldEnum>
  }


  /**
   * Clan create
   */
  export type ClanCreateArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * The data needed to create a Clan.
     */
    data: XOR<ClanCreateInput, ClanUncheckedCreateInput>
  }


  /**
   * Clan createMany
   */
  export type ClanCreateManyArgs = {
    /**
     * The data used to create many Clans.
     */
    data: Enumerable<ClanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Clan update
   */
  export type ClanUpdateArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * The data needed to update a Clan.
     */
    data: XOR<ClanUpdateInput, ClanUncheckedUpdateInput>
    /**
     * Choose, which Clan to update.
     */
    where: ClanWhereUniqueInput
  }


  /**
   * Clan updateMany
   */
  export type ClanUpdateManyArgs = {
    /**
     * The data used to update Clans.
     */
    data: XOR<ClanUpdateManyMutationInput, ClanUncheckedUpdateManyInput>
    /**
     * Filter which Clans to update
     */
    where?: ClanWhereInput
  }


  /**
   * Clan upsert
   */
  export type ClanUpsertArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * The filter to search for the Clan to update in case it exists.
     */
    where: ClanWhereUniqueInput
    /**
     * In case the Clan found by the `where` argument doesn't exist, create a new Clan with this data.
     */
    create: XOR<ClanCreateInput, ClanUncheckedCreateInput>
    /**
     * In case the Clan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClanUpdateInput, ClanUncheckedUpdateInput>
  }


  /**
   * Clan delete
   */
  export type ClanDeleteArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
    /**
     * Filter which Clan to delete.
     */
    where: ClanWhereUniqueInput
  }


  /**
   * Clan deleteMany
   */
  export type ClanDeleteManyArgs = {
    /**
     * Filter which Clans to delete
     */
    where?: ClanWhereInput
  }


  /**
   * Clan.brutes
   */
  export type Clan$brutesArgs = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BruteInclude | null
    where?: BruteWhereInput
    orderBy?: Enumerable<BruteOrderByWithRelationInput>
    cursor?: BruteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BruteScalarFieldEnum>
  }


  /**
   * Clan without action
   */
  export type ClanArgs = {
    /**
     * Select specific fields to fetch from the Clan
     */
    select?: ClanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClanInclude | null
  }



  /**
   * Model Fight
   */


  export type AggregateFight = {
    _count: FightCountAggregateOutputType | null
    _avg: FightAvgAggregateOutputType | null
    _sum: FightSumAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  export type FightAvgAggregateOutputType = {
    id: number | null
    brute1Id: number | null
    brute2Id: number | null
  }

  export type FightSumAggregateOutputType = {
    id: number | null
    brute1Id: number | null
    brute2Id: number | null
  }

  export type FightMinAggregateOutputType = {
    id: number | null
    date: Date | null
    brute1Id: number | null
    brute2Id: number | null
    winner: string | null
    loser: string | null
  }

  export type FightMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    brute1Id: number | null
    brute2Id: number | null
    winner: string | null
    loser: string | null
  }

  export type FightCountAggregateOutputType = {
    id: number
    date: number
    brute1Id: number
    brute2Id: number
    winner: number
    loser: number
    steps: number
    fighters: number
    _all: number
  }


  export type FightAvgAggregateInputType = {
    id?: true
    brute1Id?: true
    brute2Id?: true
  }

  export type FightSumAggregateInputType = {
    id?: true
    brute1Id?: true
    brute2Id?: true
  }

  export type FightMinAggregateInputType = {
    id?: true
    date?: true
    brute1Id?: true
    brute2Id?: true
    winner?: true
    loser?: true
  }

  export type FightMaxAggregateInputType = {
    id?: true
    date?: true
    brute1Id?: true
    brute2Id?: true
    winner?: true
    loser?: true
  }

  export type FightCountAggregateInputType = {
    id?: true
    date?: true
    brute1Id?: true
    brute2Id?: true
    winner?: true
    loser?: true
    steps?: true
    fighters?: true
    _all?: true
  }

  export type FightAggregateArgs = {
    /**
     * Filter which Fight to aggregate.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fights
    **/
    _count?: true | FightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightMaxAggregateInputType
  }

  export type GetFightAggregateType<T extends FightAggregateArgs> = {
        [P in keyof T & keyof AggregateFight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFight[P]>
      : GetScalarType<T[P], AggregateFight[P]>
  }




  export type FightGroupByArgs = {
    where?: FightWhereInput
    orderBy?: Enumerable<FightOrderByWithAggregationInput>
    by: FightScalarFieldEnum[]
    having?: FightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightCountAggregateInputType | true
    _avg?: FightAvgAggregateInputType
    _sum?: FightSumAggregateInputType
    _min?: FightMinAggregateInputType
    _max?: FightMaxAggregateInputType
  }


  export type FightGroupByOutputType = {
    id: number
    date: Date
    brute1Id: number
    brute2Id: number
    winner: string
    loser: string
    steps: JsonValue
    fighters: JsonValue
    _count: FightCountAggregateOutputType | null
    _avg: FightAvgAggregateOutputType | null
    _sum: FightSumAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  type GetFightGroupByPayload<T extends FightGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightGroupByOutputType[P]>
            : GetScalarType<T[P], FightGroupByOutputType[P]>
        }
      >
    >


  export type FightSelect = {
    id?: boolean
    date?: boolean
    brute1?: boolean | BruteArgs
    brute1Id?: boolean
    brute2?: boolean | BruteArgs
    brute2Id?: boolean
    winner?: boolean
    loser?: boolean
    steps?: boolean
    fighters?: boolean
    logs?: boolean | Fight$logsArgs
    _count?: boolean | FightCountOutputTypeArgs
  }


  export type FightInclude = {
    brute1?: boolean | BruteArgs
    brute2?: boolean | BruteArgs
    logs?: boolean | Fight$logsArgs
    _count?: boolean | FightCountOutputTypeArgs
  }

  export type FightGetPayload<S extends boolean | null | undefined | FightArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Fight :
    S extends undefined ? never :
    S extends { include: any } & (FightArgs | FightFindManyArgs)
    ? Fight  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brute1' ? BruteGetPayload<S['include'][P]> :
        P extends 'brute2' ? BruteGetPayload<S['include'][P]> :
        P extends 'logs' ? Array < LogGetPayload<S['include'][P]>>  :
        P extends '_count' ? FightCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FightArgs | FightFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brute1' ? BruteGetPayload<S['select'][P]> :
        P extends 'brute2' ? BruteGetPayload<S['select'][P]> :
        P extends 'logs' ? Array < LogGetPayload<S['select'][P]>>  :
        P extends '_count' ? FightCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Fight ? Fight[P] : never
  } 
      : Fight


  type FightCountArgs = 
    Omit<FightFindManyArgs, 'select' | 'include'> & {
      select?: FightCountAggregateInputType | true
    }

  export interface FightDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Fight that matches the filter.
     * @param {FightFindUniqueArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FightFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FightFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Fight'> extends True ? Prisma__FightClient<FightGetPayload<T>> : Prisma__FightClient<FightGetPayload<T> | null, null>

    /**
     * Find one Fight that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FightFindUniqueOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FightFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FightFindUniqueOrThrowArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Find the first Fight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FightFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FightFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Fight'> extends True ? Prisma__FightClient<FightGetPayload<T>> : Prisma__FightClient<FightGetPayload<T> | null, null>

    /**
     * Find the first Fight that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FightFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FightFindFirstOrThrowArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Find zero or more Fights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fights
     * const fights = await prisma.fight.findMany()
     * 
     * // Get first 10 Fights
     * const fights = await prisma.fight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightWithIdOnly = await prisma.fight.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FightFindManyArgs>(
      args?: SelectSubset<T, FightFindManyArgs>
    ): PrismaPromise<Array<FightGetPayload<T>>>

    /**
     * Create a Fight.
     * @param {FightCreateArgs} args - Arguments to create a Fight.
     * @example
     * // Create one Fight
     * const Fight = await prisma.fight.create({
     *   data: {
     *     // ... data to create a Fight
     *   }
     * })
     * 
    **/
    create<T extends FightCreateArgs>(
      args: SelectSubset<T, FightCreateArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Create many Fights.
     *     @param {FightCreateManyArgs} args - Arguments to create many Fights.
     *     @example
     *     // Create many Fights
     *     const fight = await prisma.fight.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FightCreateManyArgs>(
      args?: SelectSubset<T, FightCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Fight.
     * @param {FightDeleteArgs} args - Arguments to delete one Fight.
     * @example
     * // Delete one Fight
     * const Fight = await prisma.fight.delete({
     *   where: {
     *     // ... filter to delete one Fight
     *   }
     * })
     * 
    **/
    delete<T extends FightDeleteArgs>(
      args: SelectSubset<T, FightDeleteArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Update one Fight.
     * @param {FightUpdateArgs} args - Arguments to update one Fight.
     * @example
     * // Update one Fight
     * const fight = await prisma.fight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FightUpdateArgs>(
      args: SelectSubset<T, FightUpdateArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Delete zero or more Fights.
     * @param {FightDeleteManyArgs} args - Arguments to filter Fights to delete.
     * @example
     * // Delete a few Fights
     * const { count } = await prisma.fight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FightDeleteManyArgs>(
      args?: SelectSubset<T, FightDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FightUpdateManyArgs>(
      args: SelectSubset<T, FightUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Fight.
     * @param {FightUpsertArgs} args - Arguments to update or create a Fight.
     * @example
     * // Update or create a Fight
     * const fight = await prisma.fight.upsert({
     *   create: {
     *     // ... data to create a Fight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fight we want to update
     *   }
     * })
    **/
    upsert<T extends FightUpsertArgs>(
      args: SelectSubset<T, FightUpsertArgs>
    ): Prisma__FightClient<FightGetPayload<T>>

    /**
     * Count the number of Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightCountArgs} args - Arguments to filter Fights to count.
     * @example
     * // Count the number of Fights
     * const count = await prisma.fight.count({
     *   where: {
     *     // ... the filter for the Fights we want to count
     *   }
     * })
    **/
    count<T extends FightCountArgs>(
      args?: Subset<T, FightCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FightAggregateArgs>(args: Subset<T, FightAggregateArgs>): PrismaPromise<GetFightAggregateType<T>>

    /**
     * Group by Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightGroupByArgs['orderBy'] }
        : { orderBy?: FightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Fight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FightClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brute1<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    brute2<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    logs<T extends Fight$logsArgs= {}>(args?: Subset<T, Fight$logsArgs>): PrismaPromise<Array<LogGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Fight base type for findUnique actions
   */
  export type FightFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
  }

  /**
   * Fight findUnique
   */
  export interface FightFindUniqueArgs extends FightFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fight findUniqueOrThrow
   */
  export type FightFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
  }


  /**
   * Fight base type for findFirst actions
   */
  export type FightFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: Enumerable<FightScalarFieldEnum>
  }

  /**
   * Fight findFirst
   */
  export interface FightFindFirstArgs extends FightFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fight findFirstOrThrow
   */
  export type FightFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: Enumerable<FightScalarFieldEnum>
  }


  /**
   * Fight findMany
   */
  export type FightFindManyArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter, which Fights to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: Enumerable<FightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    distinct?: Enumerable<FightScalarFieldEnum>
  }


  /**
   * Fight create
   */
  export type FightCreateArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * The data needed to create a Fight.
     */
    data: XOR<FightCreateInput, FightUncheckedCreateInput>
  }


  /**
   * Fight createMany
   */
  export type FightCreateManyArgs = {
    /**
     * The data used to create many Fights.
     */
    data: Enumerable<FightCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Fight update
   */
  export type FightUpdateArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * The data needed to update a Fight.
     */
    data: XOR<FightUpdateInput, FightUncheckedUpdateInput>
    /**
     * Choose, which Fight to update.
     */
    where: FightWhereUniqueInput
  }


  /**
   * Fight updateMany
   */
  export type FightUpdateManyArgs = {
    /**
     * The data used to update Fights.
     */
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyInput>
    /**
     * Filter which Fights to update
     */
    where?: FightWhereInput
  }


  /**
   * Fight upsert
   */
  export type FightUpsertArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * The filter to search for the Fight to update in case it exists.
     */
    where: FightWhereUniqueInput
    /**
     * In case the Fight found by the `where` argument doesn't exist, create a new Fight with this data.
     */
    create: XOR<FightCreateInput, FightUncheckedCreateInput>
    /**
     * In case the Fight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightUpdateInput, FightUncheckedUpdateInput>
  }


  /**
   * Fight delete
   */
  export type FightDeleteArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
    /**
     * Filter which Fight to delete.
     */
    where: FightWhereUniqueInput
  }


  /**
   * Fight deleteMany
   */
  export type FightDeleteManyArgs = {
    /**
     * Filter which Fights to delete
     */
    where?: FightWhereInput
  }


  /**
   * Fight.logs
   */
  export type Fight$logsArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    where?: LogWhereInput
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Fight without action
   */
  export type FightArgs = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FightInclude | null
  }



  /**
   * Model Log
   */


  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    currentBruteId: number | null
    level: number | null
    fightId: number | null
    xp: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    currentBruteId: number | null
    level: number | null
    fightId: number | null
    xp: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    date: Date | null
    currentBruteId: number | null
    type: LogType | null
    level: number | null
    brute: string | null
    fightId: number | null
    xp: number | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    currentBruteId: number | null
    type: LogType | null
    level: number | null
    brute: string | null
    fightId: number | null
    xp: number | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    date: number
    currentBruteId: number
    type: number
    level: number
    brute: number
    fightId: number
    xp: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    currentBruteId?: true
    level?: true
    fightId?: true
    xp?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    currentBruteId?: true
    level?: true
    fightId?: true
    xp?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    date?: true
    currentBruteId?: true
    type?: true
    level?: true
    brute?: true
    fightId?: true
    xp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    date?: true
    currentBruteId?: true
    type?: true
    level?: true
    brute?: true
    fightId?: true
    xp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    date?: true
    currentBruteId?: true
    type?: true
    level?: true
    brute?: true
    fightId?: true
    xp?: true
    _all?: true
  }

  export type LogAggregateArgs = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs = {
    where?: LogWhereInput
    orderBy?: Enumerable<LogOrderByWithAggregationInput>
    by: LogScalarFieldEnum[]
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }


  export type LogGroupByOutputType = {
    id: number
    date: Date
    currentBruteId: number
    type: LogType
    level: number | null
    brute: string | null
    fightId: number | null
    xp: number | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect = {
    id?: boolean
    date?: boolean
    currentBrute?: boolean | BruteArgs
    currentBruteId?: boolean
    type?: boolean
    level?: boolean
    brute?: boolean
    fight?: boolean | FightArgs
    fightId?: boolean
    xp?: boolean
  }


  export type LogInclude = {
    currentBrute?: boolean | BruteArgs
    fight?: boolean | FightArgs
  }

  export type LogGetPayload<S extends boolean | null | undefined | LogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log :
    S extends undefined ? never :
    S extends { include: any } & (LogArgs | LogFindManyArgs)
    ? Log  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'currentBrute' ? BruteGetPayload<S['include'][P]> :
        P extends 'fight' ? FightGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (LogArgs | LogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'currentBrute' ? BruteGetPayload<S['select'][P]> :
        P extends 'fight' ? FightGetPayload<S['select'][P]> | null :  P extends keyof Log ? Log[P] : never
  } 
      : Log


  type LogCountArgs = 
    Omit<LogFindManyArgs, 'select' | 'include'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log'> extends True ? Prisma__LogClient<LogGetPayload<T>> : Prisma__LogClient<LogGetPayload<T> | null, null>

    /**
     * Find one Log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LogFindUniqueOrThrowArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log'> extends True ? Prisma__LogClient<LogGetPayload<T>> : Prisma__LogClient<LogGetPayload<T> | null, null>

    /**
     * Find the first Log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LogFindFirstOrThrowArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogFindManyArgs>(
      args?: SelectSubset<T, LogFindManyArgs>
    ): PrismaPromise<Array<LogGetPayload<T>>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends LogCreateArgs>(
      args: SelectSubset<T, LogCreateArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Create many Logs.
     *     @param {LogCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogCreateManyArgs>(
      args?: SelectSubset<T, LogCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends LogDeleteArgs>(
      args: SelectSubset<T, LogDeleteArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogUpdateArgs>(
      args: SelectSubset<T, LogUpdateArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogDeleteManyArgs>(
      args?: SelectSubset<T, LogDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogUpdateManyArgs>(
      args: SelectSubset<T, LogUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends LogUpsertArgs>(
      args: SelectSubset<T, LogUpsertArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LogClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    currentBrute<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    fight<T extends FightArgs= {}>(args?: Subset<T, FightArgs>): Prisma__FightClient<FightGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Log base type for findUnique actions
   */
  export type LogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUnique
   */
  export interface LogFindUniqueArgs extends LogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log base type for findFirst actions
   */
  export type LogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: Enumerable<LogScalarFieldEnum>
  }

  /**
   * Log findFirst
   */
  export interface LogFindFirstArgs extends LogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Log findMany
   */
  export type LogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Log create
   */
  export type LogCreateArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }


  /**
   * Log createMany
   */
  export type LogCreateManyArgs = {
    /**
     * The data used to create many Logs.
     */
    data: Enumerable<LogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log update
   */
  export type LogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }


  /**
   * Log upsert
   */
  export type LogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }


  /**
   * Log delete
   */
  export type LogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }


  /**
   * Log without action
   */
  export type LogArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogInclude | null
  }



  /**
   * Model DestinyChoice
   */


  export type AggregateDestinyChoice = {
    _count: DestinyChoiceCountAggregateOutputType | null
    _avg: DestinyChoiceAvgAggregateOutputType | null
    _sum: DestinyChoiceSumAggregateOutputType | null
    _min: DestinyChoiceMinAggregateOutputType | null
    _max: DestinyChoiceMaxAggregateOutputType | null
  }

  export type DestinyChoiceAvgAggregateOutputType = {
    id: number | null
    bruteId: number | null
    stat1Value: number | null
    stat2Value: number | null
  }

  export type DestinyChoiceSumAggregateOutputType = {
    id: number | null
    bruteId: number | null
    stat1Value: number | null
    stat2Value: number | null
  }

  export type DestinyChoiceMinAggregateOutputType = {
    id: number | null
    bruteId: number | null
    type: DestinyChoiceType | null
    skill: SkillName | null
    weapon: WeaponName | null
    pet: PetName | null
    stat1: BruteStat | null
    stat1Value: number | null
    stat2: BruteStat | null
    stat2Value: number | null
  }

  export type DestinyChoiceMaxAggregateOutputType = {
    id: number | null
    bruteId: number | null
    type: DestinyChoiceType | null
    skill: SkillName | null
    weapon: WeaponName | null
    pet: PetName | null
    stat1: BruteStat | null
    stat1Value: number | null
    stat2: BruteStat | null
    stat2Value: number | null
  }

  export type DestinyChoiceCountAggregateOutputType = {
    id: number
    bruteId: number
    path: number
    type: number
    skill: number
    weapon: number
    pet: number
    stat1: number
    stat1Value: number
    stat2: number
    stat2Value: number
    _all: number
  }


  export type DestinyChoiceAvgAggregateInputType = {
    id?: true
    bruteId?: true
    stat1Value?: true
    stat2Value?: true
  }

  export type DestinyChoiceSumAggregateInputType = {
    id?: true
    bruteId?: true
    stat1Value?: true
    stat2Value?: true
  }

  export type DestinyChoiceMinAggregateInputType = {
    id?: true
    bruteId?: true
    type?: true
    skill?: true
    weapon?: true
    pet?: true
    stat1?: true
    stat1Value?: true
    stat2?: true
    stat2Value?: true
  }

  export type DestinyChoiceMaxAggregateInputType = {
    id?: true
    bruteId?: true
    type?: true
    skill?: true
    weapon?: true
    pet?: true
    stat1?: true
    stat1Value?: true
    stat2?: true
    stat2Value?: true
  }

  export type DestinyChoiceCountAggregateInputType = {
    id?: true
    bruteId?: true
    path?: true
    type?: true
    skill?: true
    weapon?: true
    pet?: true
    stat1?: true
    stat1Value?: true
    stat2?: true
    stat2Value?: true
    _all?: true
  }

  export type DestinyChoiceAggregateArgs = {
    /**
     * Filter which DestinyChoice to aggregate.
     */
    where?: DestinyChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Enumerable<DestinyChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinyChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinyChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinyChoices
    **/
    _count?: true | DestinyChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinyChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinyChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinyChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinyChoiceMaxAggregateInputType
  }

  export type GetDestinyChoiceAggregateType<T extends DestinyChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinyChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinyChoice[P]>
      : GetScalarType<T[P], AggregateDestinyChoice[P]>
  }




  export type DestinyChoiceGroupByArgs = {
    where?: DestinyChoiceWhereInput
    orderBy?: Enumerable<DestinyChoiceOrderByWithAggregationInput>
    by: DestinyChoiceScalarFieldEnum[]
    having?: DestinyChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinyChoiceCountAggregateInputType | true
    _avg?: DestinyChoiceAvgAggregateInputType
    _sum?: DestinyChoiceSumAggregateInputType
    _min?: DestinyChoiceMinAggregateInputType
    _max?: DestinyChoiceMaxAggregateInputType
  }


  export type DestinyChoiceGroupByOutputType = {
    id: number
    bruteId: number
    path: DestinyChoiceSide[]
    type: DestinyChoiceType
    skill: SkillName | null
    weapon: WeaponName | null
    pet: PetName | null
    stat1: BruteStat | null
    stat1Value: number | null
    stat2: BruteStat | null
    stat2Value: number | null
    _count: DestinyChoiceCountAggregateOutputType | null
    _avg: DestinyChoiceAvgAggregateOutputType | null
    _sum: DestinyChoiceSumAggregateOutputType | null
    _min: DestinyChoiceMinAggregateOutputType | null
    _max: DestinyChoiceMaxAggregateOutputType | null
  }

  type GetDestinyChoiceGroupByPayload<T extends DestinyChoiceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DestinyChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinyChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinyChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], DestinyChoiceGroupByOutputType[P]>
        }
      >
    >


  export type DestinyChoiceSelect = {
    id?: boolean
    brute?: boolean | BruteArgs
    bruteId?: boolean
    path?: boolean
    type?: boolean
    skill?: boolean
    weapon?: boolean
    pet?: boolean
    stat1?: boolean
    stat1Value?: boolean
    stat2?: boolean
    stat2Value?: boolean
  }


  export type DestinyChoiceInclude = {
    brute?: boolean | BruteArgs
  }

  export type DestinyChoiceGetPayload<S extends boolean | null | undefined | DestinyChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DestinyChoice :
    S extends undefined ? never :
    S extends { include: any } & (DestinyChoiceArgs | DestinyChoiceFindManyArgs)
    ? DestinyChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brute' ? BruteGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DestinyChoiceArgs | DestinyChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brute' ? BruteGetPayload<S['select'][P]> :  P extends keyof DestinyChoice ? DestinyChoice[P] : never
  } 
      : DestinyChoice


  type DestinyChoiceCountArgs = 
    Omit<DestinyChoiceFindManyArgs, 'select' | 'include'> & {
      select?: DestinyChoiceCountAggregateInputType | true
    }

  export interface DestinyChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DestinyChoice that matches the filter.
     * @param {DestinyChoiceFindUniqueArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DestinyChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DestinyChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DestinyChoice'> extends True ? Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>> : Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T> | null, null>

    /**
     * Find one DestinyChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DestinyChoiceFindUniqueOrThrowArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DestinyChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DestinyChoiceFindUniqueOrThrowArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Find the first DestinyChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindFirstArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DestinyChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DestinyChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DestinyChoice'> extends True ? Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>> : Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T> | null, null>

    /**
     * Find the first DestinyChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindFirstOrThrowArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DestinyChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DestinyChoiceFindFirstOrThrowArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Find zero or more DestinyChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinyChoices
     * const destinyChoices = await prisma.destinyChoice.findMany()
     * 
     * // Get first 10 DestinyChoices
     * const destinyChoices = await prisma.destinyChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinyChoiceWithIdOnly = await prisma.destinyChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DestinyChoiceFindManyArgs>(
      args?: SelectSubset<T, DestinyChoiceFindManyArgs>
    ): PrismaPromise<Array<DestinyChoiceGetPayload<T>>>

    /**
     * Create a DestinyChoice.
     * @param {DestinyChoiceCreateArgs} args - Arguments to create a DestinyChoice.
     * @example
     * // Create one DestinyChoice
     * const DestinyChoice = await prisma.destinyChoice.create({
     *   data: {
     *     // ... data to create a DestinyChoice
     *   }
     * })
     * 
    **/
    create<T extends DestinyChoiceCreateArgs>(
      args: SelectSubset<T, DestinyChoiceCreateArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Create many DestinyChoices.
     *     @param {DestinyChoiceCreateManyArgs} args - Arguments to create many DestinyChoices.
     *     @example
     *     // Create many DestinyChoices
     *     const destinyChoice = await prisma.destinyChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DestinyChoiceCreateManyArgs>(
      args?: SelectSubset<T, DestinyChoiceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DestinyChoice.
     * @param {DestinyChoiceDeleteArgs} args - Arguments to delete one DestinyChoice.
     * @example
     * // Delete one DestinyChoice
     * const DestinyChoice = await prisma.destinyChoice.delete({
     *   where: {
     *     // ... filter to delete one DestinyChoice
     *   }
     * })
     * 
    **/
    delete<T extends DestinyChoiceDeleteArgs>(
      args: SelectSubset<T, DestinyChoiceDeleteArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Update one DestinyChoice.
     * @param {DestinyChoiceUpdateArgs} args - Arguments to update one DestinyChoice.
     * @example
     * // Update one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DestinyChoiceUpdateArgs>(
      args: SelectSubset<T, DestinyChoiceUpdateArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Delete zero or more DestinyChoices.
     * @param {DestinyChoiceDeleteManyArgs} args - Arguments to filter DestinyChoices to delete.
     * @example
     * // Delete a few DestinyChoices
     * const { count } = await prisma.destinyChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DestinyChoiceDeleteManyArgs>(
      args?: SelectSubset<T, DestinyChoiceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinyChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinyChoices
     * const destinyChoice = await prisma.destinyChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DestinyChoiceUpdateManyArgs>(
      args: SelectSubset<T, DestinyChoiceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DestinyChoice.
     * @param {DestinyChoiceUpsertArgs} args - Arguments to update or create a DestinyChoice.
     * @example
     * // Update or create a DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.upsert({
     *   create: {
     *     // ... data to create a DestinyChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinyChoice we want to update
     *   }
     * })
    **/
    upsert<T extends DestinyChoiceUpsertArgs>(
      args: SelectSubset<T, DestinyChoiceUpsertArgs>
    ): Prisma__DestinyChoiceClient<DestinyChoiceGetPayload<T>>

    /**
     * Count the number of DestinyChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceCountArgs} args - Arguments to filter DestinyChoices to count.
     * @example
     * // Count the number of DestinyChoices
     * const count = await prisma.destinyChoice.count({
     *   where: {
     *     // ... the filter for the DestinyChoices we want to count
     *   }
     * })
    **/
    count<T extends DestinyChoiceCountArgs>(
      args?: Subset<T, DestinyChoiceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinyChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinyChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinyChoiceAggregateArgs>(args: Subset<T, DestinyChoiceAggregateArgs>): PrismaPromise<GetDestinyChoiceAggregateType<T>>

    /**
     * Group by DestinyChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinyChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinyChoiceGroupByArgs['orderBy'] }
        : { orderBy?: DestinyChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinyChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinyChoiceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinyChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DestinyChoiceClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brute<T extends BruteArgs= {}>(args?: Subset<T, BruteArgs>): Prisma__BruteClient<BruteGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DestinyChoice base type for findUnique actions
   */
  export type DestinyChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where: DestinyChoiceWhereUniqueInput
  }

  /**
   * DestinyChoice findUnique
   */
  export interface DestinyChoiceFindUniqueArgs extends DestinyChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DestinyChoice findUniqueOrThrow
   */
  export type DestinyChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where: DestinyChoiceWhereUniqueInput
  }


  /**
   * DestinyChoice base type for findFirst actions
   */
  export type DestinyChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where?: DestinyChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Enumerable<DestinyChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinyChoices.
     */
    cursor?: DestinyChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinyChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinyChoices.
     */
    distinct?: Enumerable<DestinyChoiceScalarFieldEnum>
  }

  /**
   * DestinyChoice findFirst
   */
  export interface DestinyChoiceFindFirstArgs extends DestinyChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DestinyChoice findFirstOrThrow
   */
  export type DestinyChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where?: DestinyChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Enumerable<DestinyChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinyChoices.
     */
    cursor?: DestinyChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinyChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinyChoices.
     */
    distinct?: Enumerable<DestinyChoiceScalarFieldEnum>
  }


  /**
   * DestinyChoice findMany
   */
  export type DestinyChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter, which DestinyChoices to fetch.
     */
    where?: DestinyChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Enumerable<DestinyChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinyChoices.
     */
    cursor?: DestinyChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinyChoices.
     */
    skip?: number
    distinct?: Enumerable<DestinyChoiceScalarFieldEnum>
  }


  /**
   * DestinyChoice create
   */
  export type DestinyChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * The data needed to create a DestinyChoice.
     */
    data: XOR<DestinyChoiceCreateInput, DestinyChoiceUncheckedCreateInput>
  }


  /**
   * DestinyChoice createMany
   */
  export type DestinyChoiceCreateManyArgs = {
    /**
     * The data used to create many DestinyChoices.
     */
    data: Enumerable<DestinyChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DestinyChoice update
   */
  export type DestinyChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * The data needed to update a DestinyChoice.
     */
    data: XOR<DestinyChoiceUpdateInput, DestinyChoiceUncheckedUpdateInput>
    /**
     * Choose, which DestinyChoice to update.
     */
    where: DestinyChoiceWhereUniqueInput
  }


  /**
   * DestinyChoice updateMany
   */
  export type DestinyChoiceUpdateManyArgs = {
    /**
     * The data used to update DestinyChoices.
     */
    data: XOR<DestinyChoiceUpdateManyMutationInput, DestinyChoiceUncheckedUpdateManyInput>
    /**
     * Filter which DestinyChoices to update
     */
    where?: DestinyChoiceWhereInput
  }


  /**
   * DestinyChoice upsert
   */
  export type DestinyChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * The filter to search for the DestinyChoice to update in case it exists.
     */
    where: DestinyChoiceWhereUniqueInput
    /**
     * In case the DestinyChoice found by the `where` argument doesn't exist, create a new DestinyChoice with this data.
     */
    create: XOR<DestinyChoiceCreateInput, DestinyChoiceUncheckedCreateInput>
    /**
     * In case the DestinyChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinyChoiceUpdateInput, DestinyChoiceUncheckedUpdateInput>
  }


  /**
   * DestinyChoice delete
   */
  export type DestinyChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
    /**
     * Filter which DestinyChoice to delete.
     */
    where: DestinyChoiceWhereUniqueInput
  }


  /**
   * DestinyChoice deleteMany
   */
  export type DestinyChoiceDeleteManyArgs = {
    /**
     * Filter which DestinyChoices to delete
     */
    where?: DestinyChoiceWhereInput
  }


  /**
   * DestinyChoice without action
   */
  export type DestinyChoiceArgs = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: DestinyChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinyChoiceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BruteBodyScalarFieldEnum: {
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
  };

  export type BruteBodyScalarFieldEnum = (typeof BruteBodyScalarFieldEnum)[keyof typeof BruteBodyScalarFieldEnum]


  export const BruteColorsScalarFieldEnum: {
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
  };

  export type BruteColorsScalarFieldEnum = (typeof BruteColorsScalarFieldEnum)[keyof typeof BruteColorsScalarFieldEnum]


  export const BruteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deleted: 'deleted',
    spritesheet: 'spritesheet',
    spritesheetJson: 'spritesheetJson',
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
    tournament: 'tournament',
    lastFight: 'lastFight',
    fightsLeft: 'fightsLeft',
    victories: 'victories'
  };

  export type BruteScalarFieldEnum = (typeof BruteScalarFieldEnum)[keyof typeof BruteScalarFieldEnum]


  export const ClanScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClanScalarFieldEnum = (typeof ClanScalarFieldEnum)[keyof typeof ClanScalarFieldEnum]


  export const DestinyChoiceScalarFieldEnum: {
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

  export type DestinyChoiceScalarFieldEnum = (typeof DestinyChoiceScalarFieldEnum)[keyof typeof DestinyChoiceScalarFieldEnum]


  export const FightScalarFieldEnum: {
    id: 'id',
    date: 'date',
    brute1Id: 'brute1Id',
    brute2Id: 'brute2Id',
    winner: 'winner',
    loser: 'loser',
    steps: 'steps',
    fighters: 'fighters'
  };

  export type FightScalarFieldEnum = (typeof FightScalarFieldEnum)[keyof typeof FightScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    currentBruteId: 'currentBruteId',
    type: 'type',
    level: 'level',
    brute: 'brute',
    fightId: 'fightId',
    xp: 'xp'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    name: 'name',
    admin: 'admin',
    connexionToken: 'connexionToken',
    bruteLimit: 'bruteLimit',
    sacrificePoints: 'sacrificePoints'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: UuidFilter | string
    lang?: EnumLangFilter | Lang
    name?: StringFilter | string
    admin?: BoolFilter | boolean
    connexionToken?: UuidFilter | string
    bruteLimit?: IntFilter | number
    sacrificePoints?: IntFilter | number
    brutes?: BruteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
    brutes?: BruteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    lang?: EnumLangWithAggregatesFilter | Lang
    name?: StringWithAggregatesFilter | string
    admin?: BoolWithAggregatesFilter | boolean
    connexionToken?: UuidWithAggregatesFilter | string
    bruteLimit?: IntWithAggregatesFilter | number
    sacrificePoints?: IntWithAggregatesFilter | number
  }

  export type BruteBodyWhereInput = {
    AND?: Enumerable<BruteBodyWhereInput>
    OR?: Enumerable<BruteBodyWhereInput>
    NOT?: Enumerable<BruteBodyWhereInput>
    id?: IntFilter | number
    brute?: XOR<BruteRelationFilter, BruteWhereInput>
    bruteId?: IntFilter | number
    longHair?: IntFilter | number
    lowerRightArm?: IntFilter | number
    rightHand?: IntFilter | number
    upperRightArm?: IntFilter | number
    rightShoulder?: IntFilter | number
    rightFoot?: IntFilter | number
    lowerRightLeg?: IntFilter | number
    upperRightLeg?: IntFilter | number
    leftFoot?: IntFilter | number
    lowerLeftLeg?: IntFilter | number
    pelvis?: IntFilter | number
    upperLeftLeg?: IntFilter | number
    tummy?: IntFilter | number
    torso?: IntFilter | number
    head?: IntFilter | number
    leftHand?: IntFilter | number
    upperLeftArm?: IntFilter | number
    lowerLeftArm?: IntFilter | number
    leftShoulder?: IntFilter | number
  }

  export type BruteBodyOrderByWithRelationInput = {
    id?: SortOrder
    brute?: BruteOrderByWithRelationInput
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteBodyWhereUniqueInput = {
    id?: number
    bruteId?: number
  }

  export type BruteBodyOrderByWithAggregationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
    _count?: BruteBodyCountOrderByAggregateInput
    _avg?: BruteBodyAvgOrderByAggregateInput
    _max?: BruteBodyMaxOrderByAggregateInput
    _min?: BruteBodyMinOrderByAggregateInput
    _sum?: BruteBodySumOrderByAggregateInput
  }

  export type BruteBodyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BruteBodyScalarWhereWithAggregatesInput>
    OR?: Enumerable<BruteBodyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BruteBodyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bruteId?: IntWithAggregatesFilter | number
    longHair?: IntWithAggregatesFilter | number
    lowerRightArm?: IntWithAggregatesFilter | number
    rightHand?: IntWithAggregatesFilter | number
    upperRightArm?: IntWithAggregatesFilter | number
    rightShoulder?: IntWithAggregatesFilter | number
    rightFoot?: IntWithAggregatesFilter | number
    lowerRightLeg?: IntWithAggregatesFilter | number
    upperRightLeg?: IntWithAggregatesFilter | number
    leftFoot?: IntWithAggregatesFilter | number
    lowerLeftLeg?: IntWithAggregatesFilter | number
    pelvis?: IntWithAggregatesFilter | number
    upperLeftLeg?: IntWithAggregatesFilter | number
    tummy?: IntWithAggregatesFilter | number
    torso?: IntWithAggregatesFilter | number
    head?: IntWithAggregatesFilter | number
    leftHand?: IntWithAggregatesFilter | number
    upperLeftArm?: IntWithAggregatesFilter | number
    lowerLeftArm?: IntWithAggregatesFilter | number
    leftShoulder?: IntWithAggregatesFilter | number
  }

  export type BruteColorsWhereInput = {
    AND?: Enumerable<BruteColorsWhereInput>
    OR?: Enumerable<BruteColorsWhereInput>
    NOT?: Enumerable<BruteColorsWhereInput>
    id?: IntFilter | number
    brute?: XOR<BruteRelationFilter, BruteWhereInput>
    bruteId?: IntFilter | number
    skinColor?: StringFilter | string
    skinShade?: StringFilter | string
    hairColor?: StringFilter | string
    hairShade?: StringFilter | string
    primaryColor?: StringFilter | string
    primaryShade?: StringFilter | string
    secondaryColor?: StringFilter | string
    secondaryShade?: StringFilter | string
    accentColor?: StringFilter | string
    accentShade?: StringFilter | string
  }

  export type BruteColorsOrderByWithRelationInput = {
    id?: SortOrder
    brute?: BruteOrderByWithRelationInput
    bruteId?: SortOrder
    skinColor?: SortOrder
    skinShade?: SortOrder
    hairColor?: SortOrder
    hairShade?: SortOrder
    primaryColor?: SortOrder
    primaryShade?: SortOrder
    secondaryColor?: SortOrder
    secondaryShade?: SortOrder
    accentColor?: SortOrder
    accentShade?: SortOrder
  }

  export type BruteColorsWhereUniqueInput = {
    id?: number
    bruteId?: number
  }

  export type BruteColorsOrderByWithAggregationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    skinColor?: SortOrder
    skinShade?: SortOrder
    hairColor?: SortOrder
    hairShade?: SortOrder
    primaryColor?: SortOrder
    primaryShade?: SortOrder
    secondaryColor?: SortOrder
    secondaryShade?: SortOrder
    accentColor?: SortOrder
    accentShade?: SortOrder
    _count?: BruteColorsCountOrderByAggregateInput
    _avg?: BruteColorsAvgOrderByAggregateInput
    _max?: BruteColorsMaxOrderByAggregateInput
    _min?: BruteColorsMinOrderByAggregateInput
    _sum?: BruteColorsSumOrderByAggregateInput
  }

  export type BruteColorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BruteColorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BruteColorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BruteColorsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bruteId?: IntWithAggregatesFilter | number
    skinColor?: StringWithAggregatesFilter | string
    skinShade?: StringWithAggregatesFilter | string
    hairColor?: StringWithAggregatesFilter | string
    hairShade?: StringWithAggregatesFilter | string
    primaryColor?: StringWithAggregatesFilter | string
    primaryShade?: StringWithAggregatesFilter | string
    secondaryColor?: StringWithAggregatesFilter | string
    secondaryShade?: StringWithAggregatesFilter | string
    accentColor?: StringWithAggregatesFilter | string
    accentShade?: StringWithAggregatesFilter | string
  }

  export type BruteWhereInput = {
    AND?: Enumerable<BruteWhereInput>
    OR?: Enumerable<BruteWhereInput>
    NOT?: Enumerable<BruteWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    deleted?: BoolFilter | boolean
    spritesheet?: BytesNullableFilter | Buffer | null
    spritesheetJson?: JsonNullableFilter
    destinyPath?: EnumDestinyChoiceSideNullableListFilter
    level?: IntFilter | number
    xp?: IntFilter | number
    hp?: IntFilter | number
    enduranceStat?: IntFilter | number
    enduranceModifier?: FloatFilter | number
    enduranceValue?: IntFilter | number
    strengthStat?: IntFilter | number
    strengthModifier?: FloatFilter | number
    strengthValue?: IntFilter | number
    agilityStat?: IntFilter | number
    agilityModifier?: FloatFilter | number
    agilityValue?: IntFilter | number
    speedStat?: IntFilter | number
    speedModifier?: FloatFilter | number
    speedValue?: IntFilter | number
    ranking?: IntFilter | number
    gender?: EnumGenderFilter | Gender
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: UuidNullableFilter | string | null
    body?: XOR<BruteBodyRelationFilter, BruteBodyWhereInput> | null
    colors?: XOR<BruteColorsRelationFilter, BruteColorsWhereInput> | null
    weapons?: EnumWeaponNameNullableListFilter
    skills?: EnumSkillNameNullableListFilter
    pets?: EnumPetNameNullableListFilter
    master?: XOR<BruteRelationFilter, BruteWhereInput> | null
    masterId?: IntNullableFilter | number | null
    pupils?: BruteListRelationFilter
    pupilsCount?: IntFilter | number
    clan?: XOR<ClanRelationFilter, ClanWhereInput> | null
    clanId?: IntNullableFilter | number | null
    tournament?: DateTimeNullableFilter | Date | string | null
    lastFight?: DateTimeNullableFilter | Date | string | null
    fightsLeft?: IntFilter | number
    victories?: IntFilter | number
    fights?: FightListRelationFilter
    fightsAsAdversary?: FightListRelationFilter
    logs?: LogListRelationFilter
    destinyChoices?: DestinyChoiceListRelationFilter
  }

  export type BruteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    spritesheet?: SortOrder
    spritesheetJson?: SortOrder
    destinyPath?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    gender?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    body?: BruteBodyOrderByWithRelationInput
    colors?: BruteColorsOrderByWithRelationInput
    weapons?: SortOrder
    skills?: SortOrder
    pets?: SortOrder
    master?: BruteOrderByWithRelationInput
    masterId?: SortOrder
    pupils?: BruteOrderByRelationAggregateInput
    pupilsCount?: SortOrder
    clan?: ClanOrderByWithRelationInput
    clanId?: SortOrder
    tournament?: SortOrder
    lastFight?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
    fights?: FightOrderByRelationAggregateInput
    fightsAsAdversary?: FightOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
    destinyChoices?: DestinyChoiceOrderByRelationAggregateInput
  }

  export type BruteWhereUniqueInput = {
    id?: number
  }

  export type BruteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    spritesheet?: SortOrder
    spritesheetJson?: SortOrder
    destinyPath?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    weapons?: SortOrder
    skills?: SortOrder
    pets?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    tournament?: SortOrder
    lastFight?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
    _count?: BruteCountOrderByAggregateInput
    _avg?: BruteAvgOrderByAggregateInput
    _max?: BruteMaxOrderByAggregateInput
    _min?: BruteMinOrderByAggregateInput
    _sum?: BruteSumOrderByAggregateInput
  }

  export type BruteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BruteScalarWhereWithAggregatesInput>
    OR?: Enumerable<BruteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BruteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    deleted?: BoolWithAggregatesFilter | boolean
    spritesheet?: BytesNullableWithAggregatesFilter | Buffer | null
    spritesheetJson?: JsonNullableWithAggregatesFilter
    destinyPath?: EnumDestinyChoiceSideNullableListFilter
    level?: IntWithAggregatesFilter | number
    xp?: IntWithAggregatesFilter | number
    hp?: IntWithAggregatesFilter | number
    enduranceStat?: IntWithAggregatesFilter | number
    enduranceModifier?: FloatWithAggregatesFilter | number
    enduranceValue?: IntWithAggregatesFilter | number
    strengthStat?: IntWithAggregatesFilter | number
    strengthModifier?: FloatWithAggregatesFilter | number
    strengthValue?: IntWithAggregatesFilter | number
    agilityStat?: IntWithAggregatesFilter | number
    agilityModifier?: FloatWithAggregatesFilter | number
    agilityValue?: IntWithAggregatesFilter | number
    speedStat?: IntWithAggregatesFilter | number
    speedModifier?: FloatWithAggregatesFilter | number
    speedValue?: IntWithAggregatesFilter | number
    ranking?: IntWithAggregatesFilter | number
    gender?: EnumGenderWithAggregatesFilter | Gender
    userId?: UuidNullableWithAggregatesFilter | string | null
    weapons?: EnumWeaponNameNullableListFilter
    skills?: EnumSkillNameNullableListFilter
    pets?: EnumPetNameNullableListFilter
    masterId?: IntNullableWithAggregatesFilter | number | null
    pupilsCount?: IntWithAggregatesFilter | number
    clanId?: IntNullableWithAggregatesFilter | number | null
    tournament?: DateTimeNullableWithAggregatesFilter | Date | string | null
    lastFight?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fightsLeft?: IntWithAggregatesFilter | number
    victories?: IntWithAggregatesFilter | number
  }

  export type ClanWhereInput = {
    AND?: Enumerable<ClanWhereInput>
    OR?: Enumerable<ClanWhereInput>
    NOT?: Enumerable<ClanWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    brutes?: BruteListRelationFilter
  }

  export type ClanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brutes?: BruteOrderByRelationAggregateInput
  }

  export type ClanWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ClanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ClanCountOrderByAggregateInput
    _avg?: ClanAvgOrderByAggregateInput
    _max?: ClanMaxOrderByAggregateInput
    _min?: ClanMinOrderByAggregateInput
    _sum?: ClanSumOrderByAggregateInput
  }

  export type ClanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClanScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClanScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type FightWhereInput = {
    AND?: Enumerable<FightWhereInput>
    OR?: Enumerable<FightWhereInput>
    NOT?: Enumerable<FightWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    brute1?: XOR<BruteRelationFilter, BruteWhereInput>
    brute1Id?: IntFilter | number
    brute2?: XOR<BruteRelationFilter, BruteWhereInput>
    brute2Id?: IntFilter | number
    winner?: StringFilter | string
    loser?: StringFilter | string
    steps?: JsonFilter
    fighters?: JsonFilter
    logs?: LogListRelationFilter
  }

  export type FightOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    brute1?: BruteOrderByWithRelationInput
    brute1Id?: SortOrder
    brute2?: BruteOrderByWithRelationInput
    brute2Id?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    steps?: SortOrder
    fighters?: SortOrder
    logs?: LogOrderByRelationAggregateInput
  }

  export type FightWhereUniqueInput = {
    id?: number
  }

  export type FightOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    steps?: SortOrder
    fighters?: SortOrder
    _count?: FightCountOrderByAggregateInput
    _avg?: FightAvgOrderByAggregateInput
    _max?: FightMaxOrderByAggregateInput
    _min?: FightMinOrderByAggregateInput
    _sum?: FightSumOrderByAggregateInput
  }

  export type FightScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FightScalarWhereWithAggregatesInput>
    OR?: Enumerable<FightScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FightScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    brute1Id?: IntWithAggregatesFilter | number
    brute2Id?: IntWithAggregatesFilter | number
    winner?: StringWithAggregatesFilter | string
    loser?: StringWithAggregatesFilter | string
    steps?: JsonWithAggregatesFilter
    fighters?: JsonWithAggregatesFilter
  }

  export type LogWhereInput = {
    AND?: Enumerable<LogWhereInput>
    OR?: Enumerable<LogWhereInput>
    NOT?: Enumerable<LogWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    currentBrute?: XOR<BruteRelationFilter, BruteWhereInput>
    currentBruteId?: IntFilter | number
    type?: EnumLogTypeFilter | LogType
    level?: IntNullableFilter | number | null
    brute?: StringNullableFilter | string | null
    fight?: XOR<FightRelationFilter, FightWhereInput> | null
    fightId?: IntNullableFilter | number | null
    xp?: IntNullableFilter | number | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    currentBrute?: BruteOrderByWithRelationInput
    currentBruteId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    brute?: SortOrder
    fight?: FightOrderByWithRelationInput
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type LogWhereUniqueInput = {
    id?: number
  }

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    currentBruteId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    brute?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LogScalarWhereWithAggregatesInput>
    OR?: Enumerable<LogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    currentBruteId?: IntWithAggregatesFilter | number
    type?: EnumLogTypeWithAggregatesFilter | LogType
    level?: IntNullableWithAggregatesFilter | number | null
    brute?: StringNullableWithAggregatesFilter | string | null
    fightId?: IntNullableWithAggregatesFilter | number | null
    xp?: IntNullableWithAggregatesFilter | number | null
  }

  export type DestinyChoiceWhereInput = {
    AND?: Enumerable<DestinyChoiceWhereInput>
    OR?: Enumerable<DestinyChoiceWhereInput>
    NOT?: Enumerable<DestinyChoiceWhereInput>
    id?: IntFilter | number
    brute?: XOR<BruteRelationFilter, BruteWhereInput>
    bruteId?: IntFilter | number
    path?: EnumDestinyChoiceSideNullableListFilter
    type?: EnumDestinyChoiceTypeFilter | DestinyChoiceType
    skill?: EnumSkillNameNullableFilter | SkillName | null
    weapon?: EnumWeaponNameNullableFilter | WeaponName | null
    pet?: EnumPetNameNullableFilter | PetName | null
    stat1?: EnumBruteStatNullableFilter | BruteStat | null
    stat1Value?: IntNullableFilter | number | null
    stat2?: EnumBruteStatNullableFilter | BruteStat | null
    stat2Value?: IntNullableFilter | number | null
  }

  export type DestinyChoiceOrderByWithRelationInput = {
    id?: SortOrder
    brute?: BruteOrderByWithRelationInput
    bruteId?: SortOrder
    path?: SortOrder
    type?: SortOrder
    skill?: SortOrder
    weapon?: SortOrder
    pet?: SortOrder
    stat1?: SortOrder
    stat1Value?: SortOrder
    stat2?: SortOrder
    stat2Value?: SortOrder
  }

  export type DestinyChoiceWhereUniqueInput = {
    id?: number
  }

  export type DestinyChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    path?: SortOrder
    type?: SortOrder
    skill?: SortOrder
    weapon?: SortOrder
    pet?: SortOrder
    stat1?: SortOrder
    stat1Value?: SortOrder
    stat2?: SortOrder
    stat2Value?: SortOrder
    _count?: DestinyChoiceCountOrderByAggregateInput
    _avg?: DestinyChoiceAvgOrderByAggregateInput
    _max?: DestinyChoiceMaxOrderByAggregateInput
    _min?: DestinyChoiceMinOrderByAggregateInput
    _sum?: DestinyChoiceSumOrderByAggregateInput
  }

  export type DestinyChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DestinyChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<DestinyChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DestinyChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bruteId?: IntWithAggregatesFilter | number
    path?: EnumDestinyChoiceSideNullableListFilter
    type?: EnumDestinyChoiceTypeWithAggregatesFilter | DestinyChoiceType
    skill?: EnumSkillNameNullableWithAggregatesFilter | SkillName | null
    weapon?: EnumWeaponNameNullableWithAggregatesFilter | WeaponName | null
    pet?: EnumPetNameNullableWithAggregatesFilter | PetName | null
    stat1?: EnumBruteStatNullableWithAggregatesFilter | BruteStat | null
    stat1Value?: IntNullableWithAggregatesFilter | number | null
    stat2?: EnumBruteStatNullableWithAggregatesFilter | BruteStat | null
    stat2Value?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCreateInput = {
    id: string
    lang?: Lang
    name: string
    admin?: boolean
    connexionToken: string
    bruteLimit?: number
    sacrificePoints?: number
    brutes?: BruteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    lang?: Lang
    name: string
    admin?: boolean
    connexionToken: string
    bruteLimit?: number
    sacrificePoints?: number
    brutes?: BruteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
    brutes?: BruteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
    brutes?: BruteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    lang?: Lang
    name: string
    admin?: boolean
    connexionToken: string
    bruteLimit?: number
    sacrificePoints?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyCreateInput = {
    brute: BruteCreateNestedOneWithoutBodyInput
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
  }

  export type BruteBodyUncheckedCreateInput = {
    id?: number
    bruteId: number
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
  }

  export type BruteBodyUpdateInput = {
    brute?: BruteUpdateOneRequiredWithoutBodyNestedInput
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyCreateManyInput = {
    id?: number
    bruteId: number
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
  }

  export type BruteBodyUpdateManyMutationInput = {
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteColorsCreateInput = {
    brute: BruteCreateNestedOneWithoutColorsInput
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
  }

  export type BruteColorsUncheckedCreateInput = {
    id?: number
    bruteId: number
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
  }

  export type BruteColorsUpdateInput = {
    brute?: BruteUpdateOneRequiredWithoutColorsNestedInput
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteColorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteColorsCreateManyInput = {
    id?: number
    bruteId: number
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
  }

  export type BruteColorsUpdateManyMutationInput = {
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteColorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteCreateInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteCreateManyInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
  }

  export type BruteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    pupilsCount?: IntFieldUpdateOperationsInput | number
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
  }

  export type BruteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
  }

  export type ClanCreateInput = {
    name: string
    brutes?: BruteCreateNestedManyWithoutClanInput
  }

  export type ClanUncheckedCreateInput = {
    id?: number
    name: string
    brutes?: BruteUncheckedCreateNestedManyWithoutClanInput
  }

  export type ClanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brutes?: BruteUpdateManyWithoutClanNestedInput
  }

  export type ClanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brutes?: BruteUncheckedUpdateManyWithoutClanNestedInput
  }

  export type ClanCreateManyInput = {
    id?: number
    name: string
  }

  export type ClanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightCreateInput = {
    date?: Date | string
    brute1: BruteCreateNestedOneWithoutFightsInput
    brute2: BruteCreateNestedOneWithoutFightsAsAdversaryInput
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogCreateNestedManyWithoutFightInput
  }

  export type FightUncheckedCreateInput = {
    id?: number
    date?: Date | string
    brute1Id: number
    brute2Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedCreateNestedManyWithoutFightInput
  }

  export type FightUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1?: BruteUpdateOneRequiredWithoutFightsNestedInput
    brute2?: BruteUpdateOneRequiredWithoutFightsAsAdversaryNestedInput
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUpdateManyWithoutFightNestedInput
  }

  export type FightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1Id?: IntFieldUpdateOperationsInput | number
    brute2Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedUpdateManyWithoutFightNestedInput
  }

  export type FightCreateManyInput = {
    id?: number
    date?: Date | string
    brute1Id: number
    brute2Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
  }

  export type FightUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type FightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1Id?: IntFieldUpdateOperationsInput | number
    brute2Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type LogCreateInput = {
    date?: Date | string
    currentBrute: BruteCreateNestedOneWithoutLogsInput
    type: LogType
    level?: number | null
    brute?: string | null
    fight?: FightCreateNestedOneWithoutLogsInput
    xp?: number | null
  }

  export type LogUncheckedCreateInput = {
    id?: number
    date?: Date | string
    currentBruteId: number
    type: LogType
    level?: number | null
    brute?: string | null
    fightId?: number | null
    xp?: number | null
  }

  export type LogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBrute?: BruteUpdateOneRequiredWithoutLogsNestedInput
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fight?: FightUpdateOneWithoutLogsNestedInput
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBruteId?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fightId?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogCreateManyInput = {
    id?: number
    date?: Date | string
    currentBruteId: number
    type: LogType
    level?: number | null
    brute?: string | null
    fightId?: number | null
    xp?: number | null
  }

  export type LogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBruteId?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fightId?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceCreateInput = {
    brute: BruteCreateNestedOneWithoutDestinyChoicesInput
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type DestinyChoiceUncheckedCreateInput = {
    id?: number
    bruteId: number
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type DestinyChoiceUpdateInput = {
    brute?: BruteUpdateOneRequiredWithoutDestinyChoicesNestedInput
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceCreateManyInput = {
    id?: number
    bruteId: number
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type DestinyChoiceUpdateManyMutationInput = {
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bruteId?: IntFieldUpdateOperationsInput | number
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type EnumLangFilter = {
    equals?: Lang
    in?: Enumerable<Lang>
    notIn?: Enumerable<Lang>
    not?: NestedEnumLangFilter | Lang
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BruteListRelationFilter = {
    every?: BruteWhereInput
    some?: BruteWhereInput
    none?: BruteWhereInput
  }

  export type BruteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    bruteLimit?: SortOrder
    sacrificePoints?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumLangWithAggregatesFilter = {
    equals?: Lang
    in?: Enumerable<Lang>
    notIn?: Enumerable<Lang>
    not?: NestedEnumLangWithAggregatesFilter | Lang
    _count?: NestedIntFilter
    _min?: NestedEnumLangFilter
    _max?: NestedEnumLangFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BruteRelationFilter = {
    is?: BruteWhereInput
    isNot?: BruteWhereInput
  }

  export type BruteBodyCountOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteBodyAvgOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteBodyMaxOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteBodyMinOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteBodySumOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    longHair?: SortOrder
    lowerRightArm?: SortOrder
    rightHand?: SortOrder
    upperRightArm?: SortOrder
    rightShoulder?: SortOrder
    rightFoot?: SortOrder
    lowerRightLeg?: SortOrder
    upperRightLeg?: SortOrder
    leftFoot?: SortOrder
    lowerLeftLeg?: SortOrder
    pelvis?: SortOrder
    upperLeftLeg?: SortOrder
    tummy?: SortOrder
    torso?: SortOrder
    head?: SortOrder
    leftHand?: SortOrder
    upperLeftArm?: SortOrder
    lowerLeftArm?: SortOrder
    leftShoulder?: SortOrder
  }

  export type BruteColorsCountOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    skinColor?: SortOrder
    skinShade?: SortOrder
    hairColor?: SortOrder
    hairShade?: SortOrder
    primaryColor?: SortOrder
    primaryShade?: SortOrder
    secondaryColor?: SortOrder
    secondaryShade?: SortOrder
    accentColor?: SortOrder
    accentShade?: SortOrder
  }

  export type BruteColorsAvgOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
  }

  export type BruteColorsMaxOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    skinColor?: SortOrder
    skinShade?: SortOrder
    hairColor?: SortOrder
    hairShade?: SortOrder
    primaryColor?: SortOrder
    primaryShade?: SortOrder
    secondaryColor?: SortOrder
    secondaryShade?: SortOrder
    accentColor?: SortOrder
    accentShade?: SortOrder
  }

  export type BruteColorsMinOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    skinColor?: SortOrder
    skinShade?: SortOrder
    hairColor?: SortOrder
    hairShade?: SortOrder
    primaryColor?: SortOrder
    primaryShade?: SortOrder
    secondaryColor?: SortOrder
    secondaryShade?: SortOrder
    accentColor?: SortOrder
    accentShade?: SortOrder
  }

  export type BruteColorsSumOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type EnumDestinyChoiceSideNullableListFilter = {
    equals?: Enumerable<DestinyChoiceSide> | null
    has?: DestinyChoiceSide | null
    hasEvery?: Enumerable<DestinyChoiceSide>
    hasSome?: Enumerable<DestinyChoiceSide>
    isEmpty?: boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type EnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type BruteBodyRelationFilter = {
    is?: BruteBodyWhereInput | null
    isNot?: BruteBodyWhereInput | null
  }

  export type BruteColorsRelationFilter = {
    is?: BruteColorsWhereInput | null
    isNot?: BruteColorsWhereInput | null
  }

  export type EnumWeaponNameNullableListFilter = {
    equals?: Enumerable<WeaponName> | null
    has?: WeaponName | null
    hasEvery?: Enumerable<WeaponName>
    hasSome?: Enumerable<WeaponName>
    isEmpty?: boolean
  }

  export type EnumSkillNameNullableListFilter = {
    equals?: Enumerable<SkillName> | null
    has?: SkillName | null
    hasEvery?: Enumerable<SkillName>
    hasSome?: Enumerable<SkillName>
    isEmpty?: boolean
  }

  export type EnumPetNameNullableListFilter = {
    equals?: Enumerable<PetName> | null
    has?: PetName | null
    hasEvery?: Enumerable<PetName>
    hasSome?: Enumerable<PetName>
    isEmpty?: boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ClanRelationFilter = {
    is?: ClanWhereInput | null
    isNot?: ClanWhereInput | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type FightListRelationFilter = {
    every?: FightWhereInput
    some?: FightWhereInput
    none?: FightWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type DestinyChoiceListRelationFilter = {
    every?: DestinyChoiceWhereInput
    some?: DestinyChoiceWhereInput
    none?: DestinyChoiceWhereInput
  }

  export type FightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinyChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BruteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    spritesheet?: SortOrder
    spritesheetJson?: SortOrder
    destinyPath?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    weapons?: SortOrder
    skills?: SortOrder
    pets?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    tournament?: SortOrder
    lastFight?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
  }

  export type BruteAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
  }

  export type BruteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    spritesheet?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    tournament?: SortOrder
    lastFight?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
  }

  export type BruteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    spritesheet?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    tournament?: SortOrder
    lastFight?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
  }

  export type BruteSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    hp?: SortOrder
    enduranceStat?: SortOrder
    enduranceModifier?: SortOrder
    enduranceValue?: SortOrder
    strengthStat?: SortOrder
    strengthModifier?: SortOrder
    strengthValue?: SortOrder
    agilityStat?: SortOrder
    agilityModifier?: SortOrder
    agilityValue?: SortOrder
    speedStat?: SortOrder
    speedModifier?: SortOrder
    speedValue?: SortOrder
    ranking?: SortOrder
    masterId?: SortOrder
    pupilsCount?: SortOrder
    clanId?: SortOrder
    fightsLeft?: SortOrder
    victories?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ClanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type FightCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    steps?: SortOrder
    fighters?: SortOrder
  }

  export type FightAvgOrderByAggregateInput = {
    id?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
  }

  export type FightMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
  }

  export type FightMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
  }

  export type FightSumOrderByAggregateInput = {
    id?: SortOrder
    brute1Id?: SortOrder
    brute2Id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type EnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FightRelationFilter = {
    is?: FightWhereInput | null
    isNot?: FightWhereInput | null
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    currentBruteId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    brute?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    currentBruteId?: SortOrder
    level?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    currentBruteId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    brute?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    currentBruteId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    brute?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    currentBruteId?: SortOrder
    level?: SortOrder
    fightId?: SortOrder
    xp?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumDestinyChoiceTypeFilter = {
    equals?: DestinyChoiceType
    in?: Enumerable<DestinyChoiceType>
    notIn?: Enumerable<DestinyChoiceType>
    not?: NestedEnumDestinyChoiceTypeFilter | DestinyChoiceType
  }

  export type EnumSkillNameNullableFilter = {
    equals?: SkillName | null
    in?: Enumerable<SkillName> | null
    notIn?: Enumerable<SkillName> | null
    not?: NestedEnumSkillNameNullableFilter | SkillName | null
  }

  export type EnumWeaponNameNullableFilter = {
    equals?: WeaponName | null
    in?: Enumerable<WeaponName> | null
    notIn?: Enumerable<WeaponName> | null
    not?: NestedEnumWeaponNameNullableFilter | WeaponName | null
  }

  export type EnumPetNameNullableFilter = {
    equals?: PetName | null
    in?: Enumerable<PetName> | null
    notIn?: Enumerable<PetName> | null
    not?: NestedEnumPetNameNullableFilter | PetName | null
  }

  export type EnumBruteStatNullableFilter = {
    equals?: BruteStat | null
    in?: Enumerable<BruteStat> | null
    notIn?: Enumerable<BruteStat> | null
    not?: NestedEnumBruteStatNullableFilter | BruteStat | null
  }

  export type DestinyChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    path?: SortOrder
    type?: SortOrder
    skill?: SortOrder
    weapon?: SortOrder
    pet?: SortOrder
    stat1?: SortOrder
    stat1Value?: SortOrder
    stat2?: SortOrder
    stat2Value?: SortOrder
  }

  export type DestinyChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    stat1Value?: SortOrder
    stat2Value?: SortOrder
  }

  export type DestinyChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    type?: SortOrder
    skill?: SortOrder
    weapon?: SortOrder
    pet?: SortOrder
    stat1?: SortOrder
    stat1Value?: SortOrder
    stat2?: SortOrder
    stat2Value?: SortOrder
  }

  export type DestinyChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    type?: SortOrder
    skill?: SortOrder
    weapon?: SortOrder
    pet?: SortOrder
    stat1?: SortOrder
    stat1Value?: SortOrder
    stat2?: SortOrder
    stat2Value?: SortOrder
  }

  export type DestinyChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    stat1Value?: SortOrder
    stat2Value?: SortOrder
  }

  export type EnumDestinyChoiceTypeWithAggregatesFilter = {
    equals?: DestinyChoiceType
    in?: Enumerable<DestinyChoiceType>
    notIn?: Enumerable<DestinyChoiceType>
    not?: NestedEnumDestinyChoiceTypeWithAggregatesFilter | DestinyChoiceType
    _count?: NestedIntFilter
    _min?: NestedEnumDestinyChoiceTypeFilter
    _max?: NestedEnumDestinyChoiceTypeFilter
  }

  export type EnumSkillNameNullableWithAggregatesFilter = {
    equals?: SkillName | null
    in?: Enumerable<SkillName> | null
    notIn?: Enumerable<SkillName> | null
    not?: NestedEnumSkillNameNullableWithAggregatesFilter | SkillName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumSkillNameNullableFilter
    _max?: NestedEnumSkillNameNullableFilter
  }

  export type EnumWeaponNameNullableWithAggregatesFilter = {
    equals?: WeaponName | null
    in?: Enumerable<WeaponName> | null
    notIn?: Enumerable<WeaponName> | null
    not?: NestedEnumWeaponNameNullableWithAggregatesFilter | WeaponName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumWeaponNameNullableFilter
    _max?: NestedEnumWeaponNameNullableFilter
  }

  export type EnumPetNameNullableWithAggregatesFilter = {
    equals?: PetName | null
    in?: Enumerable<PetName> | null
    notIn?: Enumerable<PetName> | null
    not?: NestedEnumPetNameNullableWithAggregatesFilter | PetName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPetNameNullableFilter
    _max?: NestedEnumPetNameNullableFilter
  }

  export type EnumBruteStatNullableWithAggregatesFilter = {
    equals?: BruteStat | null
    in?: Enumerable<BruteStat> | null
    notIn?: Enumerable<BruteStat> | null
    not?: NestedEnumBruteStatNullableWithAggregatesFilter | BruteStat | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumBruteStatNullableFilter
    _max?: NestedEnumBruteStatNullableFilter
  }

  export type BruteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BruteCreateWithoutUserInput>, Enumerable<BruteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutUserInput>
    createMany?: BruteCreateManyUserInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type BruteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BruteCreateWithoutUserInput>, Enumerable<BruteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutUserInput>
    createMany?: BruteCreateManyUserInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLangFieldUpdateOperationsInput = {
    set?: Lang
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BruteUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutUserInput>, Enumerable<BruteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BruteCreateManyUserInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type BruteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutUserInput>, Enumerable<BruteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BruteCreateManyUserInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type BruteCreateNestedOneWithoutBodyInput = {
    create?: XOR<BruteCreateWithoutBodyInput, BruteUncheckedCreateWithoutBodyInput>
    connectOrCreate?: BruteCreateOrConnectWithoutBodyInput
    connect?: BruteWhereUniqueInput
  }

  export type BruteUpdateOneRequiredWithoutBodyNestedInput = {
    create?: XOR<BruteCreateWithoutBodyInput, BruteUncheckedCreateWithoutBodyInput>
    connectOrCreate?: BruteCreateOrConnectWithoutBodyInput
    upsert?: BruteUpsertWithoutBodyInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutBodyInput, BruteUncheckedUpdateWithoutBodyInput>
  }

  export type BruteCreateNestedOneWithoutColorsInput = {
    create?: XOR<BruteCreateWithoutColorsInput, BruteUncheckedCreateWithoutColorsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutColorsInput
    connect?: BruteWhereUniqueInput
  }

  export type BruteUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<BruteCreateWithoutColorsInput, BruteUncheckedCreateWithoutColorsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutColorsInput
    upsert?: BruteUpsertWithoutColorsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutColorsInput, BruteUncheckedUpdateWithoutColorsInput>
  }

  export type BruteCreatedestinyPathInput = {
    set: Enumerable<DestinyChoiceSide>
  }

  export type UserCreateNestedOneWithoutBrutesInput = {
    create?: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrutesInput
    connect?: UserWhereUniqueInput
  }

  export type BruteBodyCreateNestedOneWithoutBruteInput = {
    create?: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteBodyCreateOrConnectWithoutBruteInput
    connect?: BruteBodyWhereUniqueInput
  }

  export type BruteColorsCreateNestedOneWithoutBruteInput = {
    create?: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteColorsCreateOrConnectWithoutBruteInput
    connect?: BruteColorsWhereUniqueInput
  }

  export type BruteCreateweaponsInput = {
    set: Enumerable<WeaponName>
  }

  export type BruteCreateskillsInput = {
    set: Enumerable<SkillName>
  }

  export type BruteCreatepetsInput = {
    set: Enumerable<PetName>
  }

  export type BruteCreateNestedOneWithoutPupilsInput = {
    create?: XOR<BruteCreateWithoutPupilsInput, BruteUncheckedCreateWithoutPupilsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutPupilsInput
    connect?: BruteWhereUniqueInput
  }

  export type BruteCreateNestedManyWithoutMasterInput = {
    create?: XOR<Enumerable<BruteCreateWithoutMasterInput>, Enumerable<BruteUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutMasterInput>
    createMany?: BruteCreateManyMasterInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type ClanCreateNestedOneWithoutBrutesInput = {
    create?: XOR<ClanCreateWithoutBrutesInput, ClanUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: ClanCreateOrConnectWithoutBrutesInput
    connect?: ClanWhereUniqueInput
  }

  export type FightCreateNestedManyWithoutBrute1Input = {
    create?: XOR<Enumerable<FightCreateWithoutBrute1Input>, Enumerable<FightUncheckedCreateWithoutBrute1Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute1Input>
    createMany?: FightCreateManyBrute1InputEnvelope
    connect?: Enumerable<FightWhereUniqueInput>
  }

  export type FightCreateNestedManyWithoutBrute2Input = {
    create?: XOR<Enumerable<FightCreateWithoutBrute2Input>, Enumerable<FightUncheckedCreateWithoutBrute2Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute2Input>
    createMany?: FightCreateManyBrute2InputEnvelope
    connect?: Enumerable<FightWhereUniqueInput>
  }

  export type LogCreateNestedManyWithoutCurrentBruteInput = {
    create?: XOR<Enumerable<LogCreateWithoutCurrentBruteInput>, Enumerable<LogUncheckedCreateWithoutCurrentBruteInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutCurrentBruteInput>
    createMany?: LogCreateManyCurrentBruteInputEnvelope
    connect?: Enumerable<LogWhereUniqueInput>
  }

  export type DestinyChoiceCreateNestedManyWithoutBruteInput = {
    create?: XOR<Enumerable<DestinyChoiceCreateWithoutBruteInput>, Enumerable<DestinyChoiceUncheckedCreateWithoutBruteInput>>
    connectOrCreate?: Enumerable<DestinyChoiceCreateOrConnectWithoutBruteInput>
    createMany?: DestinyChoiceCreateManyBruteInputEnvelope
    connect?: Enumerable<DestinyChoiceWhereUniqueInput>
  }

  export type BruteBodyUncheckedCreateNestedOneWithoutBruteInput = {
    create?: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteBodyCreateOrConnectWithoutBruteInput
    connect?: BruteBodyWhereUniqueInput
  }

  export type BruteColorsUncheckedCreateNestedOneWithoutBruteInput = {
    create?: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteColorsCreateOrConnectWithoutBruteInput
    connect?: BruteColorsWhereUniqueInput
  }

  export type BruteUncheckedCreateNestedManyWithoutMasterInput = {
    create?: XOR<Enumerable<BruteCreateWithoutMasterInput>, Enumerable<BruteUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutMasterInput>
    createMany?: BruteCreateManyMasterInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type FightUncheckedCreateNestedManyWithoutBrute1Input = {
    create?: XOR<Enumerable<FightCreateWithoutBrute1Input>, Enumerable<FightUncheckedCreateWithoutBrute1Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute1Input>
    createMany?: FightCreateManyBrute1InputEnvelope
    connect?: Enumerable<FightWhereUniqueInput>
  }

  export type FightUncheckedCreateNestedManyWithoutBrute2Input = {
    create?: XOR<Enumerable<FightCreateWithoutBrute2Input>, Enumerable<FightUncheckedCreateWithoutBrute2Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute2Input>
    createMany?: FightCreateManyBrute2InputEnvelope
    connect?: Enumerable<FightWhereUniqueInput>
  }

  export type LogUncheckedCreateNestedManyWithoutCurrentBruteInput = {
    create?: XOR<Enumerable<LogCreateWithoutCurrentBruteInput>, Enumerable<LogUncheckedCreateWithoutCurrentBruteInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutCurrentBruteInput>
    createMany?: LogCreateManyCurrentBruteInputEnvelope
    connect?: Enumerable<LogWhereUniqueInput>
  }

  export type DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput = {
    create?: XOR<Enumerable<DestinyChoiceCreateWithoutBruteInput>, Enumerable<DestinyChoiceUncheckedCreateWithoutBruteInput>>
    connectOrCreate?: Enumerable<DestinyChoiceCreateOrConnectWithoutBruteInput>
    createMany?: DestinyChoiceCreateManyBruteInputEnvelope
    connect?: Enumerable<DestinyChoiceWhereUniqueInput>
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type BruteUpdatedestinyPathInput = {
    set?: Enumerable<DestinyChoiceSide>
    push?: Enumerable<DestinyChoiceSide>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: Gender
  }

  export type UserUpdateOneWithoutBrutesNestedInput = {
    create?: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrutesInput
    upsert?: UserUpsertWithoutBrutesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBrutesInput, UserUncheckedUpdateWithoutBrutesInput>
  }

  export type BruteBodyUpdateOneWithoutBruteNestedInput = {
    create?: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteBodyCreateOrConnectWithoutBruteInput
    upsert?: BruteBodyUpsertWithoutBruteInput
    disconnect?: boolean
    delete?: boolean
    connect?: BruteBodyWhereUniqueInput
    update?: XOR<BruteBodyUpdateWithoutBruteInput, BruteBodyUncheckedUpdateWithoutBruteInput>
  }

  export type BruteColorsUpdateOneWithoutBruteNestedInput = {
    create?: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteColorsCreateOrConnectWithoutBruteInput
    upsert?: BruteColorsUpsertWithoutBruteInput
    disconnect?: boolean
    delete?: boolean
    connect?: BruteColorsWhereUniqueInput
    update?: XOR<BruteColorsUpdateWithoutBruteInput, BruteColorsUncheckedUpdateWithoutBruteInput>
  }

  export type BruteUpdateweaponsInput = {
    set?: Enumerable<WeaponName>
    push?: Enumerable<WeaponName>
  }

  export type BruteUpdateskillsInput = {
    set?: Enumerable<SkillName>
    push?: Enumerable<SkillName>
  }

  export type BruteUpdatepetsInput = {
    set?: Enumerable<PetName>
    push?: Enumerable<PetName>
  }

  export type BruteUpdateOneWithoutPupilsNestedInput = {
    create?: XOR<BruteCreateWithoutPupilsInput, BruteUncheckedCreateWithoutPupilsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutPupilsInput
    upsert?: BruteUpsertWithoutPupilsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutPupilsInput, BruteUncheckedUpdateWithoutPupilsInput>
  }

  export type BruteUpdateManyWithoutMasterNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutMasterInput>, Enumerable<BruteUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutMasterInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutMasterInput>
    createMany?: BruteCreateManyMasterInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutMasterInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutMasterInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type ClanUpdateOneWithoutBrutesNestedInput = {
    create?: XOR<ClanCreateWithoutBrutesInput, ClanUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: ClanCreateOrConnectWithoutBrutesInput
    upsert?: ClanUpsertWithoutBrutesInput
    disconnect?: boolean
    delete?: boolean
    connect?: ClanWhereUniqueInput
    update?: XOR<ClanUpdateWithoutBrutesInput, ClanUncheckedUpdateWithoutBrutesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FightUpdateManyWithoutBrute1NestedInput = {
    create?: XOR<Enumerable<FightCreateWithoutBrute1Input>, Enumerable<FightUncheckedCreateWithoutBrute1Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute1Input>
    upsert?: Enumerable<FightUpsertWithWhereUniqueWithoutBrute1Input>
    createMany?: FightCreateManyBrute1InputEnvelope
    set?: Enumerable<FightWhereUniqueInput>
    disconnect?: Enumerable<FightWhereUniqueInput>
    delete?: Enumerable<FightWhereUniqueInput>
    connect?: Enumerable<FightWhereUniqueInput>
    update?: Enumerable<FightUpdateWithWhereUniqueWithoutBrute1Input>
    updateMany?: Enumerable<FightUpdateManyWithWhereWithoutBrute1Input>
    deleteMany?: Enumerable<FightScalarWhereInput>
  }

  export type FightUpdateManyWithoutBrute2NestedInput = {
    create?: XOR<Enumerable<FightCreateWithoutBrute2Input>, Enumerable<FightUncheckedCreateWithoutBrute2Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute2Input>
    upsert?: Enumerable<FightUpsertWithWhereUniqueWithoutBrute2Input>
    createMany?: FightCreateManyBrute2InputEnvelope
    set?: Enumerable<FightWhereUniqueInput>
    disconnect?: Enumerable<FightWhereUniqueInput>
    delete?: Enumerable<FightWhereUniqueInput>
    connect?: Enumerable<FightWhereUniqueInput>
    update?: Enumerable<FightUpdateWithWhereUniqueWithoutBrute2Input>
    updateMany?: Enumerable<FightUpdateManyWithWhereWithoutBrute2Input>
    deleteMany?: Enumerable<FightScalarWhereInput>
  }

  export type LogUpdateManyWithoutCurrentBruteNestedInput = {
    create?: XOR<Enumerable<LogCreateWithoutCurrentBruteInput>, Enumerable<LogUncheckedCreateWithoutCurrentBruteInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutCurrentBruteInput>
    upsert?: Enumerable<LogUpsertWithWhereUniqueWithoutCurrentBruteInput>
    createMany?: LogCreateManyCurrentBruteInputEnvelope
    set?: Enumerable<LogWhereUniqueInput>
    disconnect?: Enumerable<LogWhereUniqueInput>
    delete?: Enumerable<LogWhereUniqueInput>
    connect?: Enumerable<LogWhereUniqueInput>
    update?: Enumerable<LogUpdateWithWhereUniqueWithoutCurrentBruteInput>
    updateMany?: Enumerable<LogUpdateManyWithWhereWithoutCurrentBruteInput>
    deleteMany?: Enumerable<LogScalarWhereInput>
  }

  export type DestinyChoiceUpdateManyWithoutBruteNestedInput = {
    create?: XOR<Enumerable<DestinyChoiceCreateWithoutBruteInput>, Enumerable<DestinyChoiceUncheckedCreateWithoutBruteInput>>
    connectOrCreate?: Enumerable<DestinyChoiceCreateOrConnectWithoutBruteInput>
    upsert?: Enumerable<DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput>
    createMany?: DestinyChoiceCreateManyBruteInputEnvelope
    set?: Enumerable<DestinyChoiceWhereUniqueInput>
    disconnect?: Enumerable<DestinyChoiceWhereUniqueInput>
    delete?: Enumerable<DestinyChoiceWhereUniqueInput>
    connect?: Enumerable<DestinyChoiceWhereUniqueInput>
    update?: Enumerable<DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput>
    updateMany?: Enumerable<DestinyChoiceUpdateManyWithWhereWithoutBruteInput>
    deleteMany?: Enumerable<DestinyChoiceScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BruteBodyUncheckedUpdateOneWithoutBruteNestedInput = {
    create?: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteBodyCreateOrConnectWithoutBruteInput
    upsert?: BruteBodyUpsertWithoutBruteInput
    disconnect?: boolean
    delete?: boolean
    connect?: BruteBodyWhereUniqueInput
    update?: XOR<BruteBodyUpdateWithoutBruteInput, BruteBodyUncheckedUpdateWithoutBruteInput>
  }

  export type BruteColorsUncheckedUpdateOneWithoutBruteNestedInput = {
    create?: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
    connectOrCreate?: BruteColorsCreateOrConnectWithoutBruteInput
    upsert?: BruteColorsUpsertWithoutBruteInput
    disconnect?: boolean
    delete?: boolean
    connect?: BruteColorsWhereUniqueInput
    update?: XOR<BruteColorsUpdateWithoutBruteInput, BruteColorsUncheckedUpdateWithoutBruteInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BruteUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutMasterInput>, Enumerable<BruteUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutMasterInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutMasterInput>
    createMany?: BruteCreateManyMasterInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutMasterInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutMasterInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type FightUncheckedUpdateManyWithoutBrute1NestedInput = {
    create?: XOR<Enumerable<FightCreateWithoutBrute1Input>, Enumerable<FightUncheckedCreateWithoutBrute1Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute1Input>
    upsert?: Enumerable<FightUpsertWithWhereUniqueWithoutBrute1Input>
    createMany?: FightCreateManyBrute1InputEnvelope
    set?: Enumerable<FightWhereUniqueInput>
    disconnect?: Enumerable<FightWhereUniqueInput>
    delete?: Enumerable<FightWhereUniqueInput>
    connect?: Enumerable<FightWhereUniqueInput>
    update?: Enumerable<FightUpdateWithWhereUniqueWithoutBrute1Input>
    updateMany?: Enumerable<FightUpdateManyWithWhereWithoutBrute1Input>
    deleteMany?: Enumerable<FightScalarWhereInput>
  }

  export type FightUncheckedUpdateManyWithoutBrute2NestedInput = {
    create?: XOR<Enumerable<FightCreateWithoutBrute2Input>, Enumerable<FightUncheckedCreateWithoutBrute2Input>>
    connectOrCreate?: Enumerable<FightCreateOrConnectWithoutBrute2Input>
    upsert?: Enumerable<FightUpsertWithWhereUniqueWithoutBrute2Input>
    createMany?: FightCreateManyBrute2InputEnvelope
    set?: Enumerable<FightWhereUniqueInput>
    disconnect?: Enumerable<FightWhereUniqueInput>
    delete?: Enumerable<FightWhereUniqueInput>
    connect?: Enumerable<FightWhereUniqueInput>
    update?: Enumerable<FightUpdateWithWhereUniqueWithoutBrute2Input>
    updateMany?: Enumerable<FightUpdateManyWithWhereWithoutBrute2Input>
    deleteMany?: Enumerable<FightScalarWhereInput>
  }

  export type LogUncheckedUpdateManyWithoutCurrentBruteNestedInput = {
    create?: XOR<Enumerable<LogCreateWithoutCurrentBruteInput>, Enumerable<LogUncheckedCreateWithoutCurrentBruteInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutCurrentBruteInput>
    upsert?: Enumerable<LogUpsertWithWhereUniqueWithoutCurrentBruteInput>
    createMany?: LogCreateManyCurrentBruteInputEnvelope
    set?: Enumerable<LogWhereUniqueInput>
    disconnect?: Enumerable<LogWhereUniqueInput>
    delete?: Enumerable<LogWhereUniqueInput>
    connect?: Enumerable<LogWhereUniqueInput>
    update?: Enumerable<LogUpdateWithWhereUniqueWithoutCurrentBruteInput>
    updateMany?: Enumerable<LogUpdateManyWithWhereWithoutCurrentBruteInput>
    deleteMany?: Enumerable<LogScalarWhereInput>
  }

  export type DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: XOR<Enumerable<DestinyChoiceCreateWithoutBruteInput>, Enumerable<DestinyChoiceUncheckedCreateWithoutBruteInput>>
    connectOrCreate?: Enumerable<DestinyChoiceCreateOrConnectWithoutBruteInput>
    upsert?: Enumerable<DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput>
    createMany?: DestinyChoiceCreateManyBruteInputEnvelope
    set?: Enumerable<DestinyChoiceWhereUniqueInput>
    disconnect?: Enumerable<DestinyChoiceWhereUniqueInput>
    delete?: Enumerable<DestinyChoiceWhereUniqueInput>
    connect?: Enumerable<DestinyChoiceWhereUniqueInput>
    update?: Enumerable<DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput>
    updateMany?: Enumerable<DestinyChoiceUpdateManyWithWhereWithoutBruteInput>
    deleteMany?: Enumerable<DestinyChoiceScalarWhereInput>
  }

  export type BruteCreateNestedManyWithoutClanInput = {
    create?: XOR<Enumerable<BruteCreateWithoutClanInput>, Enumerable<BruteUncheckedCreateWithoutClanInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutClanInput>
    createMany?: BruteCreateManyClanInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type BruteUncheckedCreateNestedManyWithoutClanInput = {
    create?: XOR<Enumerable<BruteCreateWithoutClanInput>, Enumerable<BruteUncheckedCreateWithoutClanInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutClanInput>
    createMany?: BruteCreateManyClanInputEnvelope
    connect?: Enumerable<BruteWhereUniqueInput>
  }

  export type BruteUpdateManyWithoutClanNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutClanInput>, Enumerable<BruteUncheckedCreateWithoutClanInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutClanInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutClanInput>
    createMany?: BruteCreateManyClanInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutClanInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutClanInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type BruteUncheckedUpdateManyWithoutClanNestedInput = {
    create?: XOR<Enumerable<BruteCreateWithoutClanInput>, Enumerable<BruteUncheckedCreateWithoutClanInput>>
    connectOrCreate?: Enumerable<BruteCreateOrConnectWithoutClanInput>
    upsert?: Enumerable<BruteUpsertWithWhereUniqueWithoutClanInput>
    createMany?: BruteCreateManyClanInputEnvelope
    set?: Enumerable<BruteWhereUniqueInput>
    disconnect?: Enumerable<BruteWhereUniqueInput>
    delete?: Enumerable<BruteWhereUniqueInput>
    connect?: Enumerable<BruteWhereUniqueInput>
    update?: Enumerable<BruteUpdateWithWhereUniqueWithoutClanInput>
    updateMany?: Enumerable<BruteUpdateManyWithWhereWithoutClanInput>
    deleteMany?: Enumerable<BruteScalarWhereInput>
  }

  export type BruteCreateNestedOneWithoutFightsInput = {
    create?: XOR<BruteCreateWithoutFightsInput, BruteUncheckedCreateWithoutFightsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutFightsInput
    connect?: BruteWhereUniqueInput
  }

  export type BruteCreateNestedOneWithoutFightsAsAdversaryInput = {
    create?: XOR<BruteCreateWithoutFightsAsAdversaryInput, BruteUncheckedCreateWithoutFightsAsAdversaryInput>
    connectOrCreate?: BruteCreateOrConnectWithoutFightsAsAdversaryInput
    connect?: BruteWhereUniqueInput
  }

  export type LogCreateNestedManyWithoutFightInput = {
    create?: XOR<Enumerable<LogCreateWithoutFightInput>, Enumerable<LogUncheckedCreateWithoutFightInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutFightInput>
    createMany?: LogCreateManyFightInputEnvelope
    connect?: Enumerable<LogWhereUniqueInput>
  }

  export type LogUncheckedCreateNestedManyWithoutFightInput = {
    create?: XOR<Enumerable<LogCreateWithoutFightInput>, Enumerable<LogUncheckedCreateWithoutFightInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutFightInput>
    createMany?: LogCreateManyFightInputEnvelope
    connect?: Enumerable<LogWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BruteUpdateOneRequiredWithoutFightsNestedInput = {
    create?: XOR<BruteCreateWithoutFightsInput, BruteUncheckedCreateWithoutFightsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutFightsInput
    upsert?: BruteUpsertWithoutFightsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutFightsInput, BruteUncheckedUpdateWithoutFightsInput>
  }

  export type BruteUpdateOneRequiredWithoutFightsAsAdversaryNestedInput = {
    create?: XOR<BruteCreateWithoutFightsAsAdversaryInput, BruteUncheckedCreateWithoutFightsAsAdversaryInput>
    connectOrCreate?: BruteCreateOrConnectWithoutFightsAsAdversaryInput
    upsert?: BruteUpsertWithoutFightsAsAdversaryInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutFightsAsAdversaryInput, BruteUncheckedUpdateWithoutFightsAsAdversaryInput>
  }

  export type LogUpdateManyWithoutFightNestedInput = {
    create?: XOR<Enumerable<LogCreateWithoutFightInput>, Enumerable<LogUncheckedCreateWithoutFightInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutFightInput>
    upsert?: Enumerable<LogUpsertWithWhereUniqueWithoutFightInput>
    createMany?: LogCreateManyFightInputEnvelope
    set?: Enumerable<LogWhereUniqueInput>
    disconnect?: Enumerable<LogWhereUniqueInput>
    delete?: Enumerable<LogWhereUniqueInput>
    connect?: Enumerable<LogWhereUniqueInput>
    update?: Enumerable<LogUpdateWithWhereUniqueWithoutFightInput>
    updateMany?: Enumerable<LogUpdateManyWithWhereWithoutFightInput>
    deleteMany?: Enumerable<LogScalarWhereInput>
  }

  export type LogUncheckedUpdateManyWithoutFightNestedInput = {
    create?: XOR<Enumerable<LogCreateWithoutFightInput>, Enumerable<LogUncheckedCreateWithoutFightInput>>
    connectOrCreate?: Enumerable<LogCreateOrConnectWithoutFightInput>
    upsert?: Enumerable<LogUpsertWithWhereUniqueWithoutFightInput>
    createMany?: LogCreateManyFightInputEnvelope
    set?: Enumerable<LogWhereUniqueInput>
    disconnect?: Enumerable<LogWhereUniqueInput>
    delete?: Enumerable<LogWhereUniqueInput>
    connect?: Enumerable<LogWhereUniqueInput>
    update?: Enumerable<LogUpdateWithWhereUniqueWithoutFightInput>
    updateMany?: Enumerable<LogUpdateManyWithWhereWithoutFightInput>
    deleteMany?: Enumerable<LogScalarWhereInput>
  }

  export type BruteCreateNestedOneWithoutLogsInput = {
    create?: XOR<BruteCreateWithoutLogsInput, BruteUncheckedCreateWithoutLogsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutLogsInput
    connect?: BruteWhereUniqueInput
  }

  export type FightCreateNestedOneWithoutLogsInput = {
    create?: XOR<FightCreateWithoutLogsInput, FightUncheckedCreateWithoutLogsInput>
    connectOrCreate?: FightCreateOrConnectWithoutLogsInput
    connect?: FightWhereUniqueInput
  }

  export type BruteUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<BruteCreateWithoutLogsInput, BruteUncheckedCreateWithoutLogsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutLogsInput
    upsert?: BruteUpsertWithoutLogsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutLogsInput, BruteUncheckedUpdateWithoutLogsInput>
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: LogType
  }

  export type FightUpdateOneWithoutLogsNestedInput = {
    create?: XOR<FightCreateWithoutLogsInput, FightUncheckedCreateWithoutLogsInput>
    connectOrCreate?: FightCreateOrConnectWithoutLogsInput
    upsert?: FightUpsertWithoutLogsInput
    disconnect?: boolean
    delete?: boolean
    connect?: FightWhereUniqueInput
    update?: XOR<FightUpdateWithoutLogsInput, FightUncheckedUpdateWithoutLogsInput>
  }

  export type BruteCreateNestedOneWithoutDestinyChoicesInput = {
    create?: XOR<BruteCreateWithoutDestinyChoicesInput, BruteUncheckedCreateWithoutDestinyChoicesInput>
    connectOrCreate?: BruteCreateOrConnectWithoutDestinyChoicesInput
    connect?: BruteWhereUniqueInput
  }

  export type DestinyChoiceCreatepathInput = {
    set: Enumerable<DestinyChoiceSide>
  }

  export type BruteUpdateOneRequiredWithoutDestinyChoicesNestedInput = {
    create?: XOR<BruteCreateWithoutDestinyChoicesInput, BruteUncheckedCreateWithoutDestinyChoicesInput>
    connectOrCreate?: BruteCreateOrConnectWithoutDestinyChoicesInput
    upsert?: BruteUpsertWithoutDestinyChoicesInput
    connect?: BruteWhereUniqueInput
    update?: XOR<BruteUpdateWithoutDestinyChoicesInput, BruteUncheckedUpdateWithoutDestinyChoicesInput>
  }

  export type DestinyChoiceUpdatepathInput = {
    set?: Enumerable<DestinyChoiceSide>
    push?: Enumerable<DestinyChoiceSide>
  }

  export type EnumDestinyChoiceTypeFieldUpdateOperationsInput = {
    set?: DestinyChoiceType
  }

  export type NullableEnumSkillNameFieldUpdateOperationsInput = {
    set?: SkillName | null
  }

  export type NullableEnumWeaponNameFieldUpdateOperationsInput = {
    set?: WeaponName | null
  }

  export type NullableEnumPetNameFieldUpdateOperationsInput = {
    set?: PetName | null
  }

  export type NullableEnumBruteStatFieldUpdateOperationsInput = {
    set?: BruteStat | null
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedEnumLangFilter = {
    equals?: Lang
    in?: Enumerable<Lang>
    notIn?: Enumerable<Lang>
    not?: NestedEnumLangFilter | Lang
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumLangWithAggregatesFilter = {
    equals?: Lang
    in?: Enumerable<Lang>
    notIn?: Enumerable<Lang>
    not?: NestedEnumLangWithAggregatesFilter | Lang
    _count?: NestedIntFilter
    _min?: NestedEnumLangFilter
    _max?: NestedEnumLangFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedEnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumDestinyChoiceTypeFilter = {
    equals?: DestinyChoiceType
    in?: Enumerable<DestinyChoiceType>
    notIn?: Enumerable<DestinyChoiceType>
    not?: NestedEnumDestinyChoiceTypeFilter | DestinyChoiceType
  }

  export type NestedEnumSkillNameNullableFilter = {
    equals?: SkillName | null
    in?: Enumerable<SkillName> | null
    notIn?: Enumerable<SkillName> | null
    not?: NestedEnumSkillNameNullableFilter | SkillName | null
  }

  export type NestedEnumWeaponNameNullableFilter = {
    equals?: WeaponName | null
    in?: Enumerable<WeaponName> | null
    notIn?: Enumerable<WeaponName> | null
    not?: NestedEnumWeaponNameNullableFilter | WeaponName | null
  }

  export type NestedEnumPetNameNullableFilter = {
    equals?: PetName | null
    in?: Enumerable<PetName> | null
    notIn?: Enumerable<PetName> | null
    not?: NestedEnumPetNameNullableFilter | PetName | null
  }

  export type NestedEnumBruteStatNullableFilter = {
    equals?: BruteStat | null
    in?: Enumerable<BruteStat> | null
    notIn?: Enumerable<BruteStat> | null
    not?: NestedEnumBruteStatNullableFilter | BruteStat | null
  }

  export type NestedEnumDestinyChoiceTypeWithAggregatesFilter = {
    equals?: DestinyChoiceType
    in?: Enumerable<DestinyChoiceType>
    notIn?: Enumerable<DestinyChoiceType>
    not?: NestedEnumDestinyChoiceTypeWithAggregatesFilter | DestinyChoiceType
    _count?: NestedIntFilter
    _min?: NestedEnumDestinyChoiceTypeFilter
    _max?: NestedEnumDestinyChoiceTypeFilter
  }

  export type NestedEnumSkillNameNullableWithAggregatesFilter = {
    equals?: SkillName | null
    in?: Enumerable<SkillName> | null
    notIn?: Enumerable<SkillName> | null
    not?: NestedEnumSkillNameNullableWithAggregatesFilter | SkillName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumSkillNameNullableFilter
    _max?: NestedEnumSkillNameNullableFilter
  }

  export type NestedEnumWeaponNameNullableWithAggregatesFilter = {
    equals?: WeaponName | null
    in?: Enumerable<WeaponName> | null
    notIn?: Enumerable<WeaponName> | null
    not?: NestedEnumWeaponNameNullableWithAggregatesFilter | WeaponName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumWeaponNameNullableFilter
    _max?: NestedEnumWeaponNameNullableFilter
  }

  export type NestedEnumPetNameNullableWithAggregatesFilter = {
    equals?: PetName | null
    in?: Enumerable<PetName> | null
    notIn?: Enumerable<PetName> | null
    not?: NestedEnumPetNameNullableWithAggregatesFilter | PetName | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPetNameNullableFilter
    _max?: NestedEnumPetNameNullableFilter
  }

  export type NestedEnumBruteStatNullableWithAggregatesFilter = {
    equals?: BruteStat | null
    in?: Enumerable<BruteStat> | null
    notIn?: Enumerable<BruteStat> | null
    not?: NestedEnumBruteStatNullableWithAggregatesFilter | BruteStat | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumBruteStatNullableFilter
    _max?: NestedEnumBruteStatNullableFilter
  }

  export type BruteCreateWithoutUserInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutUserInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput>
  }

  export type BruteCreateManyUserInputEnvelope = {
    data: Enumerable<BruteCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BruteUpsertWithWhereUniqueWithoutUserInput = {
    where: BruteWhereUniqueInput
    update: XOR<BruteUpdateWithoutUserInput, BruteUncheckedUpdateWithoutUserInput>
    create: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput>
  }

  export type BruteUpdateWithWhereUniqueWithoutUserInput = {
    where: BruteWhereUniqueInput
    data: XOR<BruteUpdateWithoutUserInput, BruteUncheckedUpdateWithoutUserInput>
  }

  export type BruteUpdateManyWithWhereWithoutUserInput = {
    where: BruteScalarWhereInput
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyWithoutBrutesInput>
  }

  export type BruteScalarWhereInput = {
    AND?: Enumerable<BruteScalarWhereInput>
    OR?: Enumerable<BruteScalarWhereInput>
    NOT?: Enumerable<BruteScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    deleted?: BoolFilter | boolean
    spritesheet?: BytesNullableFilter | Buffer | null
    spritesheetJson?: JsonNullableFilter
    destinyPath?: EnumDestinyChoiceSideNullableListFilter
    level?: IntFilter | number
    xp?: IntFilter | number
    hp?: IntFilter | number
    enduranceStat?: IntFilter | number
    enduranceModifier?: FloatFilter | number
    enduranceValue?: IntFilter | number
    strengthStat?: IntFilter | number
    strengthModifier?: FloatFilter | number
    strengthValue?: IntFilter | number
    agilityStat?: IntFilter | number
    agilityModifier?: FloatFilter | number
    agilityValue?: IntFilter | number
    speedStat?: IntFilter | number
    speedModifier?: FloatFilter | number
    speedValue?: IntFilter | number
    ranking?: IntFilter | number
    gender?: EnumGenderFilter | Gender
    userId?: UuidNullableFilter | string | null
    weapons?: EnumWeaponNameNullableListFilter
    skills?: EnumSkillNameNullableListFilter
    pets?: EnumPetNameNullableListFilter
    masterId?: IntNullableFilter | number | null
    pupilsCount?: IntFilter | number
    clanId?: IntNullableFilter | number | null
    tournament?: DateTimeNullableFilter | Date | string | null
    lastFight?: DateTimeNullableFilter | Date | string | null
    fightsLeft?: IntFilter | number
    victories?: IntFilter | number
  }

  export type BruteCreateWithoutBodyInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutBodyInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutBodyInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutBodyInput, BruteUncheckedCreateWithoutBodyInput>
  }

  export type BruteUpsertWithoutBodyInput = {
    update: XOR<BruteUpdateWithoutBodyInput, BruteUncheckedUpdateWithoutBodyInput>
    create: XOR<BruteCreateWithoutBodyInput, BruteUncheckedCreateWithoutBodyInput>
  }

  export type BruteUpdateWithoutBodyInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutBodyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteCreateWithoutColorsInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutColorsInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutColorsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutColorsInput, BruteUncheckedCreateWithoutColorsInput>
  }

  export type BruteUpsertWithoutColorsInput = {
    update: XOR<BruteUpdateWithoutColorsInput, BruteUncheckedUpdateWithoutColorsInput>
    create: XOR<BruteCreateWithoutColorsInput, BruteUncheckedCreateWithoutColorsInput>
  }

  export type BruteUpdateWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type UserCreateWithoutBrutesInput = {
    id: string
    lang?: Lang
    name: string
    admin?: boolean
    connexionToken: string
    bruteLimit?: number
    sacrificePoints?: number
  }

  export type UserUncheckedCreateWithoutBrutesInput = {
    id: string
    lang?: Lang
    name: string
    admin?: boolean
    connexionToken: string
    bruteLimit?: number
    sacrificePoints?: number
  }

  export type UserCreateOrConnectWithoutBrutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
  }

  export type BruteBodyCreateWithoutBruteInput = {
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
  }

  export type BruteBodyUncheckedCreateWithoutBruteInput = {
    id?: number
    longHair: number
    lowerRightArm: number
    rightHand: number
    upperRightArm: number
    rightShoulder: number
    rightFoot: number
    lowerRightLeg: number
    upperRightLeg: number
    leftFoot: number
    lowerLeftLeg: number
    pelvis: number
    upperLeftLeg: number
    tummy: number
    torso: number
    head: number
    leftHand: number
    upperLeftArm: number
    lowerLeftArm: number
    leftShoulder: number
  }

  export type BruteBodyCreateOrConnectWithoutBruteInput = {
    where: BruteBodyWhereUniqueInput
    create: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
  }

  export type BruteColorsCreateWithoutBruteInput = {
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
  }

  export type BruteColorsUncheckedCreateWithoutBruteInput = {
    id?: number
    skinColor: string
    skinShade: string
    hairColor: string
    hairShade: string
    primaryColor: string
    primaryShade: string
    secondaryColor: string
    secondaryShade: string
    accentColor: string
    accentShade: string
  }

  export type BruteColorsCreateOrConnectWithoutBruteInput = {
    where: BruteColorsWhereUniqueInput
    create: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
  }

  export type BruteCreateWithoutPupilsInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutPupilsInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutPupilsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutPupilsInput, BruteUncheckedCreateWithoutPupilsInput>
  }

  export type BruteCreateWithoutMasterInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutMasterInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutMasterInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutMasterInput, BruteUncheckedCreateWithoutMasterInput>
  }

  export type BruteCreateManyMasterInputEnvelope = {
    data: Enumerable<BruteCreateManyMasterInput>
    skipDuplicates?: boolean
  }

  export type ClanCreateWithoutBrutesInput = {
    name: string
  }

  export type ClanUncheckedCreateWithoutBrutesInput = {
    id?: number
    name: string
  }

  export type ClanCreateOrConnectWithoutBrutesInput = {
    where: ClanWhereUniqueInput
    create: XOR<ClanCreateWithoutBrutesInput, ClanUncheckedCreateWithoutBrutesInput>
  }

  export type FightCreateWithoutBrute1Input = {
    date?: Date | string
    brute2: BruteCreateNestedOneWithoutFightsAsAdversaryInput
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogCreateNestedManyWithoutFightInput
  }

  export type FightUncheckedCreateWithoutBrute1Input = {
    id?: number
    date?: Date | string
    brute2Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedCreateNestedManyWithoutFightInput
  }

  export type FightCreateOrConnectWithoutBrute1Input = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutBrute1Input, FightUncheckedCreateWithoutBrute1Input>
  }

  export type FightCreateManyBrute1InputEnvelope = {
    data: Enumerable<FightCreateManyBrute1Input>
    skipDuplicates?: boolean
  }

  export type FightCreateWithoutBrute2Input = {
    date?: Date | string
    brute1: BruteCreateNestedOneWithoutFightsInput
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogCreateNestedManyWithoutFightInput
  }

  export type FightUncheckedCreateWithoutBrute2Input = {
    id?: number
    date?: Date | string
    brute1Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedCreateNestedManyWithoutFightInput
  }

  export type FightCreateOrConnectWithoutBrute2Input = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutBrute2Input, FightUncheckedCreateWithoutBrute2Input>
  }

  export type FightCreateManyBrute2InputEnvelope = {
    data: Enumerable<FightCreateManyBrute2Input>
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutCurrentBruteInput = {
    date?: Date | string
    type: LogType
    level?: number | null
    brute?: string | null
    fight?: FightCreateNestedOneWithoutLogsInput
    xp?: number | null
  }

  export type LogUncheckedCreateWithoutCurrentBruteInput = {
    id?: number
    date?: Date | string
    type: LogType
    level?: number | null
    brute?: string | null
    fightId?: number | null
    xp?: number | null
  }

  export type LogCreateOrConnectWithoutCurrentBruteInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutCurrentBruteInput, LogUncheckedCreateWithoutCurrentBruteInput>
  }

  export type LogCreateManyCurrentBruteInputEnvelope = {
    data: Enumerable<LogCreateManyCurrentBruteInput>
    skipDuplicates?: boolean
  }

  export type DestinyChoiceCreateWithoutBruteInput = {
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type DestinyChoiceUncheckedCreateWithoutBruteInput = {
    id?: number
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type DestinyChoiceCreateOrConnectWithoutBruteInput = {
    where: DestinyChoiceWhereUniqueInput
    create: XOR<DestinyChoiceCreateWithoutBruteInput, DestinyChoiceUncheckedCreateWithoutBruteInput>
  }

  export type DestinyChoiceCreateManyBruteInputEnvelope = {
    data: Enumerable<DestinyChoiceCreateManyBruteInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBrutesInput = {
    update: XOR<UserUpdateWithoutBrutesInput, UserUncheckedUpdateWithoutBrutesInput>
    create: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
  }

  export type UserUpdateWithoutBrutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutBrutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    name?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    bruteLimit?: IntFieldUpdateOperationsInput | number
    sacrificePoints?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyUpsertWithoutBruteInput = {
    update: XOR<BruteBodyUpdateWithoutBruteInput, BruteBodyUncheckedUpdateWithoutBruteInput>
    create: XOR<BruteBodyCreateWithoutBruteInput, BruteBodyUncheckedCreateWithoutBruteInput>
  }

  export type BruteBodyUpdateWithoutBruteInput = {
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteBodyUncheckedUpdateWithoutBruteInput = {
    id?: IntFieldUpdateOperationsInput | number
    longHair?: IntFieldUpdateOperationsInput | number
    lowerRightArm?: IntFieldUpdateOperationsInput | number
    rightHand?: IntFieldUpdateOperationsInput | number
    upperRightArm?: IntFieldUpdateOperationsInput | number
    rightShoulder?: IntFieldUpdateOperationsInput | number
    rightFoot?: IntFieldUpdateOperationsInput | number
    lowerRightLeg?: IntFieldUpdateOperationsInput | number
    upperRightLeg?: IntFieldUpdateOperationsInput | number
    leftFoot?: IntFieldUpdateOperationsInput | number
    lowerLeftLeg?: IntFieldUpdateOperationsInput | number
    pelvis?: IntFieldUpdateOperationsInput | number
    upperLeftLeg?: IntFieldUpdateOperationsInput | number
    tummy?: IntFieldUpdateOperationsInput | number
    torso?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    leftHand?: IntFieldUpdateOperationsInput | number
    upperLeftArm?: IntFieldUpdateOperationsInput | number
    lowerLeftArm?: IntFieldUpdateOperationsInput | number
    leftShoulder?: IntFieldUpdateOperationsInput | number
  }

  export type BruteColorsUpsertWithoutBruteInput = {
    update: XOR<BruteColorsUpdateWithoutBruteInput, BruteColorsUncheckedUpdateWithoutBruteInput>
    create: XOR<BruteColorsCreateWithoutBruteInput, BruteColorsUncheckedCreateWithoutBruteInput>
  }

  export type BruteColorsUpdateWithoutBruteInput = {
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteColorsUncheckedUpdateWithoutBruteInput = {
    id?: IntFieldUpdateOperationsInput | number
    skinColor?: StringFieldUpdateOperationsInput | string
    skinShade?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    hairShade?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    primaryShade?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    secondaryShade?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    accentShade?: StringFieldUpdateOperationsInput | string
  }

  export type BruteUpsertWithoutPupilsInput = {
    update: XOR<BruteUpdateWithoutPupilsInput, BruteUncheckedUpdateWithoutPupilsInput>
    create: XOR<BruteCreateWithoutPupilsInput, BruteUncheckedCreateWithoutPupilsInput>
  }

  export type BruteUpdateWithoutPupilsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutPupilsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteUpsertWithWhereUniqueWithoutMasterInput = {
    where: BruteWhereUniqueInput
    update: XOR<BruteUpdateWithoutMasterInput, BruteUncheckedUpdateWithoutMasterInput>
    create: XOR<BruteCreateWithoutMasterInput, BruteUncheckedCreateWithoutMasterInput>
  }

  export type BruteUpdateWithWhereUniqueWithoutMasterInput = {
    where: BruteWhereUniqueInput
    data: XOR<BruteUpdateWithoutMasterInput, BruteUncheckedUpdateWithoutMasterInput>
  }

  export type BruteUpdateManyWithWhereWithoutMasterInput = {
    where: BruteScalarWhereInput
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyWithoutPupilsInput>
  }

  export type ClanUpsertWithoutBrutesInput = {
    update: XOR<ClanUpdateWithoutBrutesInput, ClanUncheckedUpdateWithoutBrutesInput>
    create: XOR<ClanCreateWithoutBrutesInput, ClanUncheckedCreateWithoutBrutesInput>
  }

  export type ClanUpdateWithoutBrutesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClanUncheckedUpdateWithoutBrutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightUpsertWithWhereUniqueWithoutBrute1Input = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutBrute1Input, FightUncheckedUpdateWithoutBrute1Input>
    create: XOR<FightCreateWithoutBrute1Input, FightUncheckedCreateWithoutBrute1Input>
  }

  export type FightUpdateWithWhereUniqueWithoutBrute1Input = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutBrute1Input, FightUncheckedUpdateWithoutBrute1Input>
  }

  export type FightUpdateManyWithWhereWithoutBrute1Input = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutFightsInput>
  }

  export type FightScalarWhereInput = {
    AND?: Enumerable<FightScalarWhereInput>
    OR?: Enumerable<FightScalarWhereInput>
    NOT?: Enumerable<FightScalarWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    brute1Id?: IntFilter | number
    brute2Id?: IntFilter | number
    winner?: StringFilter | string
    loser?: StringFilter | string
    steps?: JsonFilter
    fighters?: JsonFilter
  }

  export type FightUpsertWithWhereUniqueWithoutBrute2Input = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutBrute2Input, FightUncheckedUpdateWithoutBrute2Input>
    create: XOR<FightCreateWithoutBrute2Input, FightUncheckedCreateWithoutBrute2Input>
  }

  export type FightUpdateWithWhereUniqueWithoutBrute2Input = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutBrute2Input, FightUncheckedUpdateWithoutBrute2Input>
  }

  export type FightUpdateManyWithWhereWithoutBrute2Input = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutFightsAsAdversaryInput>
  }

  export type LogUpsertWithWhereUniqueWithoutCurrentBruteInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutCurrentBruteInput, LogUncheckedUpdateWithoutCurrentBruteInput>
    create: XOR<LogCreateWithoutCurrentBruteInput, LogUncheckedCreateWithoutCurrentBruteInput>
  }

  export type LogUpdateWithWhereUniqueWithoutCurrentBruteInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutCurrentBruteInput, LogUncheckedUpdateWithoutCurrentBruteInput>
  }

  export type LogUpdateManyWithWhereWithoutCurrentBruteInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutLogsInput>
  }

  export type LogScalarWhereInput = {
    AND?: Enumerable<LogScalarWhereInput>
    OR?: Enumerable<LogScalarWhereInput>
    NOT?: Enumerable<LogScalarWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    currentBruteId?: IntFilter | number
    type?: EnumLogTypeFilter | LogType
    level?: IntNullableFilter | number | null
    brute?: StringNullableFilter | string | null
    fightId?: IntNullableFilter | number | null
    xp?: IntNullableFilter | number | null
  }

  export type DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput = {
    where: DestinyChoiceWhereUniqueInput
    update: XOR<DestinyChoiceUpdateWithoutBruteInput, DestinyChoiceUncheckedUpdateWithoutBruteInput>
    create: XOR<DestinyChoiceCreateWithoutBruteInput, DestinyChoiceUncheckedCreateWithoutBruteInput>
  }

  export type DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput = {
    where: DestinyChoiceWhereUniqueInput
    data: XOR<DestinyChoiceUpdateWithoutBruteInput, DestinyChoiceUncheckedUpdateWithoutBruteInput>
  }

  export type DestinyChoiceUpdateManyWithWhereWithoutBruteInput = {
    where: DestinyChoiceScalarWhereInput
    data: XOR<DestinyChoiceUpdateManyMutationInput, DestinyChoiceUncheckedUpdateManyWithoutDestinyChoicesInput>
  }

  export type DestinyChoiceScalarWhereInput = {
    AND?: Enumerable<DestinyChoiceScalarWhereInput>
    OR?: Enumerable<DestinyChoiceScalarWhereInput>
    NOT?: Enumerable<DestinyChoiceScalarWhereInput>
    id?: IntFilter | number
    bruteId?: IntFilter | number
    path?: EnumDestinyChoiceSideNullableListFilter
    type?: EnumDestinyChoiceTypeFilter | DestinyChoiceType
    skill?: EnumSkillNameNullableFilter | SkillName | null
    weapon?: EnumWeaponNameNullableFilter | WeaponName | null
    pet?: EnumPetNameNullableFilter | PetName | null
    stat1?: EnumBruteStatNullableFilter | BruteStat | null
    stat1Value?: IntNullableFilter | number | null
    stat2?: EnumBruteStatNullableFilter | BruteStat | null
    stat2Value?: IntNullableFilter | number | null
  }

  export type BruteCreateWithoutClanInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutClanInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutClanInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutClanInput, BruteUncheckedCreateWithoutClanInput>
  }

  export type BruteCreateManyClanInputEnvelope = {
    data: Enumerable<BruteCreateManyClanInput>
    skipDuplicates?: boolean
  }

  export type BruteUpsertWithWhereUniqueWithoutClanInput = {
    where: BruteWhereUniqueInput
    update: XOR<BruteUpdateWithoutClanInput, BruteUncheckedUpdateWithoutClanInput>
    create: XOR<BruteCreateWithoutClanInput, BruteUncheckedCreateWithoutClanInput>
  }

  export type BruteUpdateWithWhereUniqueWithoutClanInput = {
    where: BruteWhereUniqueInput
    data: XOR<BruteUpdateWithoutClanInput, BruteUncheckedUpdateWithoutClanInput>
  }

  export type BruteUpdateManyWithWhereWithoutClanInput = {
    where: BruteScalarWhereInput
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyWithoutBrutesInput>
  }

  export type BruteCreateWithoutFightsInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutFightsInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutFightsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutFightsInput, BruteUncheckedCreateWithoutFightsInput>
  }

  export type BruteCreateWithoutFightsAsAdversaryInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutFightsAsAdversaryInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutFightsAsAdversaryInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutFightsAsAdversaryInput, BruteUncheckedCreateWithoutFightsAsAdversaryInput>
  }

  export type LogCreateWithoutFightInput = {
    date?: Date | string
    currentBrute: BruteCreateNestedOneWithoutLogsInput
    type: LogType
    level?: number | null
    brute?: string | null
    xp?: number | null
  }

  export type LogUncheckedCreateWithoutFightInput = {
    id?: number
    date?: Date | string
    currentBruteId: number
    type: LogType
    level?: number | null
    brute?: string | null
    xp?: number | null
  }

  export type LogCreateOrConnectWithoutFightInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutFightInput, LogUncheckedCreateWithoutFightInput>
  }

  export type LogCreateManyFightInputEnvelope = {
    data: Enumerable<LogCreateManyFightInput>
    skipDuplicates?: boolean
  }

  export type BruteUpsertWithoutFightsInput = {
    update: XOR<BruteUpdateWithoutFightsInput, BruteUncheckedUpdateWithoutFightsInput>
    create: XOR<BruteCreateWithoutFightsInput, BruteUncheckedCreateWithoutFightsInput>
  }

  export type BruteUpdateWithoutFightsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutFightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteUpsertWithoutFightsAsAdversaryInput = {
    update: XOR<BruteUpdateWithoutFightsAsAdversaryInput, BruteUncheckedUpdateWithoutFightsAsAdversaryInput>
    create: XOR<BruteCreateWithoutFightsAsAdversaryInput, BruteUncheckedCreateWithoutFightsAsAdversaryInput>
  }

  export type BruteUpdateWithoutFightsAsAdversaryInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutFightsAsAdversaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type LogUpsertWithWhereUniqueWithoutFightInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutFightInput, LogUncheckedUpdateWithoutFightInput>
    create: XOR<LogCreateWithoutFightInput, LogUncheckedCreateWithoutFightInput>
  }

  export type LogUpdateWithWhereUniqueWithoutFightInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutFightInput, LogUncheckedUpdateWithoutFightInput>
  }

  export type LogUpdateManyWithWhereWithoutFightInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutLogsInput>
  }

  export type BruteCreateWithoutLogsInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    destinyChoices?: DestinyChoiceCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    destinyChoices?: DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutLogsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutLogsInput, BruteUncheckedCreateWithoutLogsInput>
  }

  export type FightCreateWithoutLogsInput = {
    date?: Date | string
    brute1: BruteCreateNestedOneWithoutFightsInput
    brute2: BruteCreateNestedOneWithoutFightsAsAdversaryInput
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
  }

  export type FightUncheckedCreateWithoutLogsInput = {
    id?: number
    date?: Date | string
    brute1Id: number
    brute2Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
  }

  export type FightCreateOrConnectWithoutLogsInput = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutLogsInput, FightUncheckedCreateWithoutLogsInput>
  }

  export type BruteUpsertWithoutLogsInput = {
    update: XOR<BruteUpdateWithoutLogsInput, BruteUncheckedUpdateWithoutLogsInput>
    create: XOR<BruteCreateWithoutLogsInput, BruteUncheckedCreateWithoutLogsInput>
  }

  export type BruteUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type FightUpsertWithoutLogsInput = {
    update: XOR<FightUpdateWithoutLogsInput, FightUncheckedUpdateWithoutLogsInput>
    create: XOR<FightCreateWithoutLogsInput, FightUncheckedCreateWithoutLogsInput>
  }

  export type FightUpdateWithoutLogsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1?: BruteUpdateOneRequiredWithoutFightsNestedInput
    brute2?: BruteUpdateOneRequiredWithoutFightsAsAdversaryNestedInput
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type FightUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1Id?: IntFieldUpdateOperationsInput | number
    brute2Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type BruteCreateWithoutDestinyChoicesInput = {
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    user?: UserCreateNestedOneWithoutBrutesInput
    body?: BruteBodyCreateNestedOneWithoutBruteInput
    colors?: BruteColorsCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    master?: BruteCreateNestedOneWithoutPupilsInput
    pupils?: BruteCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clan?: ClanCreateNestedOneWithoutBrutesInput
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightCreateNestedManyWithoutBrute2Input
    logs?: LogCreateNestedManyWithoutCurrentBruteInput
  }

  export type BruteUncheckedCreateWithoutDestinyChoicesInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    body?: BruteBodyUncheckedCreateNestedOneWithoutBruteInput
    colors?: BruteColorsUncheckedCreateNestedOneWithoutBruteInput
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupils?: BruteUncheckedCreateNestedManyWithoutMasterInput
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
    fights?: FightUncheckedCreateNestedManyWithoutBrute1Input
    fightsAsAdversary?: FightUncheckedCreateNestedManyWithoutBrute2Input
    logs?: LogUncheckedCreateNestedManyWithoutCurrentBruteInput
  }

  export type BruteCreateOrConnectWithoutDestinyChoicesInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutDestinyChoicesInput, BruteUncheckedCreateWithoutDestinyChoicesInput>
  }

  export type BruteUpsertWithoutDestinyChoicesInput = {
    update: XOR<BruteUpdateWithoutDestinyChoicesInput, BruteUncheckedUpdateWithoutDestinyChoicesInput>
    create: XOR<BruteCreateWithoutDestinyChoicesInput, BruteUncheckedCreateWithoutDestinyChoicesInput>
  }

  export type BruteUpdateWithoutDestinyChoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutDestinyChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
  }

  export type BruteCreateManyUserInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
  }

  export type BruteUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateManyWithoutBrutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
  }

  export type BruteCreateManyMasterInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    pupilsCount?: number
    clanId?: number | null
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
  }

  export type FightCreateManyBrute1Input = {
    id?: number
    date?: Date | string
    brute2Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
  }

  export type FightCreateManyBrute2Input = {
    id?: number
    date?: Date | string
    brute1Id: number
    winner: string
    loser: string
    steps: JsonNullValueInput | InputJsonValue
    fighters: JsonNullValueInput | InputJsonValue
  }

  export type LogCreateManyCurrentBruteInput = {
    id?: number
    date?: Date | string
    type: LogType
    level?: number | null
    brute?: string | null
    fightId?: number | null
    xp?: number | null
  }

  export type DestinyChoiceCreateManyBruteInput = {
    id?: number
    path?: DestinyChoiceCreatepathInput | Enumerable<DestinyChoiceSide>
    type: DestinyChoiceType
    skill?: SkillName | null
    weapon?: WeaponName | null
    pet?: PetName | null
    stat1?: BruteStat | null
    stat1Value?: number | null
    stat2?: BruteStat | null
    stat2Value?: number | null
  }

  export type BruteUpdateWithoutMasterInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clan?: ClanUpdateOneWithoutBrutesNestedInput
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutMasterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateManyWithoutPupilsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    pupilsCount?: IntFieldUpdateOperationsInput | number
    clanId?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
  }

  export type FightUpdateWithoutBrute1Input = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute2?: BruteUpdateOneRequiredWithoutFightsAsAdversaryNestedInput
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUpdateManyWithoutFightNestedInput
  }

  export type FightUncheckedUpdateWithoutBrute1Input = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute2Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedUpdateManyWithoutFightNestedInput
  }

  export type FightUncheckedUpdateManyWithoutFightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute2Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type FightUpdateWithoutBrute2Input = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1?: BruteUpdateOneRequiredWithoutFightsNestedInput
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUpdateManyWithoutFightNestedInput
  }

  export type FightUncheckedUpdateWithoutBrute2Input = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
    logs?: LogUncheckedUpdateManyWithoutFightNestedInput
  }

  export type FightUncheckedUpdateManyWithoutFightsAsAdversaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brute1Id?: IntFieldUpdateOperationsInput | number
    winner?: StringFieldUpdateOperationsInput | string
    loser?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    fighters?: JsonNullValueInput | InputJsonValue
  }

  export type LogUpdateWithoutCurrentBruteInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fight?: FightUpdateOneWithoutLogsNestedInput
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogUncheckedUpdateWithoutCurrentBruteInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fightId?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogUncheckedUpdateManyWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    fightId?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceUpdateWithoutBruteInput = {
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceUncheckedUpdateWithoutBruteInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DestinyChoiceUncheckedUpdateManyWithoutDestinyChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: DestinyChoiceUpdatepathInput | Enumerable<DestinyChoiceSide>
    type?: EnumDestinyChoiceTypeFieldUpdateOperationsInput | DestinyChoiceType
    skill?: NullableEnumSkillNameFieldUpdateOperationsInput | SkillName | null
    weapon?: NullableEnumWeaponNameFieldUpdateOperationsInput | WeaponName | null
    pet?: NullableEnumPetNameFieldUpdateOperationsInput | PetName | null
    stat1?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat1Value?: NullableIntFieldUpdateOperationsInput | number | null
    stat2?: NullableEnumBruteStatFieldUpdateOperationsInput | BruteStat | null
    stat2Value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BruteCreateManyClanInput = {
    id?: number
    name: string
    deleted?: boolean
    spritesheet?: Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteCreatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: number
    xp?: number
    hp?: number
    enduranceStat?: number
    enduranceModifier?: number
    enduranceValue?: number
    strengthStat?: number
    strengthModifier?: number
    strengthValue?: number
    agilityStat?: number
    agilityModifier?: number
    agilityValue?: number
    speedStat?: number
    speedModifier?: number
    speedValue?: number
    ranking?: number
    gender: Gender
    userId?: string | null
    weapons?: BruteCreateweaponsInput | Enumerable<WeaponName>
    skills?: BruteCreateskillsInput | Enumerable<SkillName>
    pets?: BruteCreatepetsInput | Enumerable<PetName>
    masterId?: number | null
    pupilsCount?: number
    tournament?: Date | string | null
    lastFight?: Date | string | null
    fightsLeft?: number
    victories?: number
  }

  export type BruteUpdateWithoutClanInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    user?: UserUpdateOneWithoutBrutesNestedInput
    body?: BruteBodyUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    master?: BruteUpdateOneWithoutPupilsNestedInput
    pupils?: BruteUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUpdateManyWithoutBrute2NestedInput
    logs?: LogUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutClanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    spritesheet?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    spritesheetJson?: NullableJsonNullValueInput | InputJsonValue
    destinyPath?: BruteUpdatedestinyPathInput | Enumerable<DestinyChoiceSide>
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    enduranceStat?: IntFieldUpdateOperationsInput | number
    enduranceModifier?: FloatFieldUpdateOperationsInput | number
    enduranceValue?: IntFieldUpdateOperationsInput | number
    strengthStat?: IntFieldUpdateOperationsInput | number
    strengthModifier?: FloatFieldUpdateOperationsInput | number
    strengthValue?: IntFieldUpdateOperationsInput | number
    agilityStat?: IntFieldUpdateOperationsInput | number
    agilityModifier?: FloatFieldUpdateOperationsInput | number
    agilityValue?: IntFieldUpdateOperationsInput | number
    speedStat?: IntFieldUpdateOperationsInput | number
    speedModifier?: FloatFieldUpdateOperationsInput | number
    speedValue?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: BruteBodyUncheckedUpdateOneWithoutBruteNestedInput
    colors?: BruteColorsUncheckedUpdateOneWithoutBruteNestedInput
    weapons?: BruteUpdateweaponsInput | Enumerable<WeaponName>
    skills?: BruteUpdateskillsInput | Enumerable<SkillName>
    pets?: BruteUpdatepetsInput | Enumerable<PetName>
    masterId?: NullableIntFieldUpdateOperationsInput | number | null
    pupils?: BruteUncheckedUpdateManyWithoutMasterNestedInput
    pupilsCount?: IntFieldUpdateOperationsInput | number
    tournament?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFight?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fightsLeft?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    fights?: FightUncheckedUpdateManyWithoutBrute1NestedInput
    fightsAsAdversary?: FightUncheckedUpdateManyWithoutBrute2NestedInput
    logs?: LogUncheckedUpdateManyWithoutCurrentBruteNestedInput
    destinyChoices?: DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type LogCreateManyFightInput = {
    id?: number
    date?: Date | string
    currentBruteId: number
    type: LogType
    level?: number | null
    brute?: string | null
    xp?: number | null
  }

  export type LogUpdateWithoutFightInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBrute?: BruteUpdateOneRequiredWithoutLogsNestedInput
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogUncheckedUpdateWithoutFightInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    currentBruteId?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    level?: NullableIntFieldUpdateOperationsInput | number | null
    brute?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}