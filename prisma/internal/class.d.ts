import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
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
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userLog`: Exposes CRUD operations for the **UserLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserLogs
      * const userLogs = await prisma.userLog.findMany()
      * ```
      */
    get userLog(): Prisma.UserLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.brute`: Exposes CRUD operations for the **Brute** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Brutes
      * const brutes = await prisma.brute.findMany()
      * ```
      */
    get brute(): Prisma.BruteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bruteStartingStats`: Exposes CRUD operations for the **BruteStartingStats** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BruteStartingStats
      * const bruteStartingStats = await prisma.bruteStartingStats.findMany()
      * ```
      */
    get bruteStartingStats(): Prisma.BruteStartingStatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.fight`: Exposes CRUD operations for the **Fight** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Fights
      * const fights = await prisma.fight.findMany()
      * ```
      */
    get fight(): Prisma.FightDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.log`: Exposes CRUD operations for the **Log** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Logs
      * const logs = await prisma.log.findMany()
      * ```
      */
    get log(): Prisma.LogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.destinyChoice`: Exposes CRUD operations for the **DestinyChoice** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DestinyChoices
      * const destinyChoices = await prisma.destinyChoice.findMany()
      * ```
      */
    get destinyChoice(): Prisma.DestinyChoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tournaments
      * const tournaments = await prisma.tournament.findMany()
      * ```
      */
    get tournament(): Prisma.TournamentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournamentAchievement`: Exposes CRUD operations for the **TournamentAchievement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TournamentAchievements
      * const tournamentAchievements = await prisma.tournamentAchievement.findMany()
      * ```
      */
    get tournamentAchievement(): Prisma.TournamentAchievementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournamentGold`: Exposes CRUD operations for the **TournamentGold** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TournamentGolds
      * const tournamentGolds = await prisma.tournamentGold.findMany()
      * ```
      */
    get tournamentGold(): Prisma.TournamentGoldDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournamentXp`: Exposes CRUD operations for the **TournamentXp** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TournamentXps
      * const tournamentXps = await prisma.tournamentXp.findMany()
      * ```
      */
    get tournamentXp(): Prisma.TournamentXpDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Achievements
      * const achievements = await prisma.achievement.findMany()
      * ```
      */
    get achievement(): Prisma.AchievementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bruteReport`: Exposes CRUD operations for the **BruteReport** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BruteReports
      * const bruteReports = await prisma.bruteReport.findMany()
      * ```
      */
    get bruteReport(): Prisma.BruteReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.serverState`: Exposes CRUD operations for the **ServerState** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ServerStates
      * const serverStates = await prisma.serverState.findMany()
      * ```
      */
    get serverState(): Prisma.ServerStateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bannedWord`: Exposes CRUD operations for the **BannedWord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BannedWords
      * const bannedWords = await prisma.bannedWord.findMany()
      * ```
      */
    get bannedWord(): Prisma.BannedWordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bannedIp`: Exposes CRUD operations for the **BannedIp** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BannedIps
      * const bannedIps = await prisma.bannedIp.findMany()
      * ```
      */
    get bannedIp(): Prisma.BannedIpDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bannedFingerprint`: Exposes CRUD operations for the **BannedFingerprint** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BannedFingerprints
      * const bannedFingerprints = await prisma.bannedFingerprint.findMany()
      * ```
      */
    get bannedFingerprint(): Prisma.BannedFingerprintDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.knownFingerprint`: Exposes CRUD operations for the **KnownFingerprint** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more KnownFingerprints
      * const knownFingerprints = await prisma.knownFingerprint.findMany()
      * ```
      */
    get knownFingerprint(): Prisma.KnownFingerprintDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clan`: Exposes CRUD operations for the **Clan** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Clans
      * const clans = await prisma.clan.findMany()
      * ```
      */
    get clan(): Prisma.ClanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clanThread`: Exposes CRUD operations for the **ClanThread** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ClanThreads
      * const clanThreads = await prisma.clanThread.findMany()
      * ```
      */
    get clanThread(): Prisma.ClanThreadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clanPost`: Exposes CRUD operations for the **ClanPost** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ClanPosts
      * const clanPosts = await prisma.clanPost.findMany()
      * ```
      */
    get clanPost(): Prisma.ClanPostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bossDamage`: Exposes CRUD operations for the **BossDamage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BossDamages
      * const bossDamages = await prisma.bossDamage.findMany()
      * ```
      */
    get bossDamage(): Prisma.BossDamageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clanWar`: Exposes CRUD operations for the **ClanWar** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ClanWars
      * const clanWars = await prisma.clanWar.findMany()
      * ```
      */
    get clanWar(): Prisma.ClanWarDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clanWarFighters`: Exposes CRUD operations for the **ClanWarFighters** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ClanWarFighters
      * const clanWarFighters = await prisma.clanWarFighters.findMany()
      * ```
      */
    get clanWarFighters(): Prisma.ClanWarFightersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InventoryItems
      * const inventoryItems = await prisma.inventoryItem.findMany()
      * ```
      */
    get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.release`: Exposes CRUD operations for the **Release** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Releases
      * const releases = await prisma.release.findMany()
      * ```
      */
    get release(): Prisma.ReleaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.event.findMany()
      * ```
      */
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.config`: Exposes CRUD operations for the **Config** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Configs
      * const configs = await prisma.config.findMany()
      * ```
      */
    get config(): Prisma.ConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
