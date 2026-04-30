import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserLog
 *
 */
export type UserLog = Prisma.UserLogModel;
/**
 * Model Brute
 *
 */
export type Brute = Prisma.BruteModel;
/**
 * Model BruteStartingStats
 *
 */
export type BruteStartingStats = Prisma.BruteStartingStatsModel;
/**
 * Model Fight
 *
 */
export type Fight = Prisma.FightModel;
/**
 * Model Log
 *
 */
export type Log = Prisma.LogModel;
/**
 * Model DestinyChoice
 *
 */
export type DestinyChoice = Prisma.DestinyChoiceModel;
/**
 * Model Tournament
 *
 */
export type Tournament = Prisma.TournamentModel;
/**
 * Model TournamentAchievement
 *
 */
export type TournamentAchievement = Prisma.TournamentAchievementModel;
/**
 * Model TournamentGold
 *
 */
export type TournamentGold = Prisma.TournamentGoldModel;
/**
 * Model TournamentXp
 *
 */
export type TournamentXp = Prisma.TournamentXpModel;
/**
 * Model Achievement
 *
 */
export type Achievement = Prisma.AchievementModel;
/**
 * Model BruteReport
 *
 */
export type BruteReport = Prisma.BruteReportModel;
/**
 * Model ServerState
 *
 */
export type ServerState = Prisma.ServerStateModel;
/**
 * Model BannedWord
 *
 */
export type BannedWord = Prisma.BannedWordModel;
/**
 * Model BannedIp
 *
 */
export type BannedIp = Prisma.BannedIpModel;
/**
 * Model BannedFingerprint
 *
 */
export type BannedFingerprint = Prisma.BannedFingerprintModel;
/**
 * Model KnownFingerprint
 *
 */
export type KnownFingerprint = Prisma.KnownFingerprintModel;
/**
 * Model Clan
 *
 */
export type Clan = Prisma.ClanModel;
/**
 * Model ClanThread
 *
 */
export type ClanThread = Prisma.ClanThreadModel;
/**
 * Model ClanPost
 *
 */
export type ClanPost = Prisma.ClanPostModel;
/**
 * Model BossDamage
 *
 */
export type BossDamage = Prisma.BossDamageModel;
/**
 * Model ClanWar
 *
 */
export type ClanWar = Prisma.ClanWarModel;
/**
 * Model ClanWarFighters
 *
 */
export type ClanWarFighters = Prisma.ClanWarFightersModel;
/**
 * Model InventoryItem
 *
 */
export type InventoryItem = Prisma.InventoryItemModel;
/**
 * Model Release
 *
 */
export type Release = Prisma.ReleaseModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model Config
 *
 */
export type Config = Prisma.ConfigModel;
