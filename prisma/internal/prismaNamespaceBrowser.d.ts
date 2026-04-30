import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly UserLog: "UserLog";
    readonly Brute: "Brute";
    readonly BruteStartingStats: "BruteStartingStats";
    readonly Fight: "Fight";
    readonly Log: "Log";
    readonly DestinyChoice: "DestinyChoice";
    readonly Tournament: "Tournament";
    readonly TournamentAchievement: "TournamentAchievement";
    readonly TournamentGold: "TournamentGold";
    readonly TournamentXp: "TournamentXp";
    readonly Achievement: "Achievement";
    readonly BruteReport: "BruteReport";
    readonly ServerState: "ServerState";
    readonly BannedWord: "BannedWord";
    readonly BannedIp: "BannedIp";
    readonly BannedFingerprint: "BannedFingerprint";
    readonly KnownFingerprint: "KnownFingerprint";
    readonly Clan: "Clan";
    readonly ClanThread: "ClanThread";
    readonly ClanPost: "ClanPost";
    readonly BossDamage: "BossDamage";
    readonly ClanWar: "ClanWar";
    readonly ClanWarFighters: "ClanWarFighters";
    readonly InventoryItem: "InventoryItem";
    readonly Release: "Release";
    readonly Event: "Event";
    readonly Notification: "Notification";
    readonly Config: "Config";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly lang: "lang";
    readonly name: "name";
    readonly admin: "admin";
    readonly moderator: "moderator";
    readonly connexionToken: "connexionToken";
    readonly bruteLimit: "bruteLimit";
    readonly gold: "gold";
    readonly fightSpeed: "fightSpeed";
    readonly backgroundMusic: "backgroundMusic";
    readonly dinorpgDone: "dinorpgDone";
    readonly ips: "ips";
    readonly fingerprints: "fingerprints";
    readonly createdAt: "createdAt";
    readonly bannedAt: "bannedAt";
    readonly banReason: "banReason";
    readonly displayVersusPage: "displayVersusPage";
    readonly displayOpponentDetails: "displayOpponentDetails";
    readonly transferedBrutesCount: "transferedBrutesCount";
    readonly lastSeen: "lastSeen";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RelationLoadStrategy: {
    readonly query: "query";
    readonly join: "join";
};
export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy];
export declare const UserLogScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly userId: "userId";
    readonly type: "type";
    readonly bruteId: "bruteId";
    readonly gold: "gold";
    readonly oldName: "oldName";
    readonly targetUserId: "targetUserId";
};
export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum];
export declare const BruteScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly willBeDeletedAt: "willBeDeletedAt";
    readonly deletionReason: "deletionReason";
    readonly destinyPath: "destinyPath";
    readonly previousDestinyPath: "previousDestinyPath";
    readonly level: "level";
    readonly xp: "xp";
    readonly hp: "hp";
    readonly enduranceStat: "enduranceStat";
    readonly enduranceModifier: "enduranceModifier";
    readonly enduranceValue: "enduranceValue";
    readonly strengthStat: "strengthStat";
    readonly strengthModifier: "strengthModifier";
    readonly strengthValue: "strengthValue";
    readonly agilityStat: "agilityStat";
    readonly agilityModifier: "agilityModifier";
    readonly agilityValue: "agilityValue";
    readonly speedStat: "speedStat";
    readonly speedModifier: "speedModifier";
    readonly speedValue: "speedValue";
    readonly ranking: "ranking";
    readonly gender: "gender";
    readonly userId: "userId";
    readonly body: "body";
    readonly colors: "colors";
    readonly weapons: "weapons";
    readonly skills: "skills";
    readonly pets: "pets";
    readonly ascensions: "ascensions";
    readonly ascendedWeapons: "ascendedWeapons";
    readonly ascendedSkills: "ascendedSkills";
    readonly ascendedPets: "ascendedPets";
    readonly masterId: "masterId";
    readonly pupilsCount: "pupilsCount";
    readonly clanId: "clanId";
    readonly registeredForTournament: "registeredForTournament";
    readonly nextTournamentDate: "nextTournamentDate";
    readonly currentTournamentDate: "currentTournamentDate";
    readonly currentTournamentStepWatched: "currentTournamentStepWatched";
    readonly globalTournamentWatchedDate: "globalTournamentWatchedDate";
    readonly globalTournamentRoundWatched: "globalTournamentRoundWatched";
    readonly eventTournamentWatchedDate: "eventTournamentWatchedDate";
    readonly eventTournamentRoundWatched: "eventTournamentRoundWatched";
    readonly lastFight: "lastFight";
    readonly fightsLeft: "fightsLeft";
    readonly victories: "victories";
    readonly losses: "losses";
    readonly opponentsGeneratedAt: "opponentsGeneratedAt";
    readonly canRankUpSince: "canRankUpSince";
    readonly favorite: "favorite";
    readonly wantToJoinClanId: "wantToJoinClanId";
    readonly tournamentWins: "tournamentWins";
    readonly eventId: "eventId";
    readonly resets: "resets";
};
export type BruteScalarFieldEnum = (typeof BruteScalarFieldEnum)[keyof typeof BruteScalarFieldEnum];
export declare const BruteStartingStatsScalarFieldEnum: {
    readonly id: "id";
    readonly endurance: "endurance";
    readonly strength: "strength";
    readonly agility: "agility";
    readonly speed: "speed";
    readonly bruteId: "bruteId";
};
export type BruteStartingStatsScalarFieldEnum = (typeof BruteStartingStatsScalarFieldEnum)[keyof typeof BruteStartingStatsScalarFieldEnum];
export declare const FightScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly brute1Id: "brute1Id";
    readonly brute2Id: "brute2Id";
    readonly winnerId: "winnerId";
    readonly loserId: "loserId";
    readonly winner: "winner";
    readonly loser: "loser";
    readonly steps: "steps";
    readonly fighters: "fighters";
    readonly tournamentId: "tournamentId";
    readonly tournamentStep: "tournamentStep";
    readonly modifiers: "modifiers";
    readonly background: "background";
    readonly clanWarId: "clanWarId";
    readonly favoriteCount: "favoriteCount";
};
export type FightScalarFieldEnum = (typeof FightScalarFieldEnum)[keyof typeof FightScalarFieldEnum];
export declare const LogScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly currentBruteId: "currentBruteId";
    readonly type: "type";
    readonly level: "level";
    readonly brute: "brute";
    readonly fightId: "fightId";
    readonly xp: "xp";
    readonly gold: "gold";
    readonly template: "template";
    readonly destinyChoiceId: "destinyChoiceId";
};
export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum];
export declare const DestinyChoiceScalarFieldEnum: {
    readonly id: "id";
    readonly bruteId: "bruteId";
    readonly path: "path";
    readonly type: "type";
    readonly skill: "skill";
    readonly weapon: "weapon";
    readonly pet: "pet";
    readonly originalSkill: "originalSkill";
    readonly originalWeapon: "originalWeapon";
    readonly originalPet: "originalPet";
    readonly stat1: "stat1";
    readonly stat1Value: "stat1Value";
    readonly stat2: "stat2";
    readonly stat2Value: "stat2Value";
};
export type DestinyChoiceScalarFieldEnum = (typeof DestinyChoiceScalarFieldEnum)[keyof typeof DestinyChoiceScalarFieldEnum];
export declare const TournamentScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly type: "type";
    readonly rounds: "rounds";
    readonly eventId: "eventId";
};
export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum];
export declare const TournamentAchievementScalarFieldEnum: {
    readonly id: "id";
    readonly bruteId: "bruteId";
    readonly date: "date";
    readonly achievement: "achievement";
    readonly achievementCount: "achievementCount";
};
export type TournamentAchievementScalarFieldEnum = (typeof TournamentAchievementScalarFieldEnum)[keyof typeof TournamentAchievementScalarFieldEnum];
export declare const TournamentGoldScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly userId: "userId";
    readonly gold: "gold";
};
export type TournamentGoldScalarFieldEnum = (typeof TournamentGoldScalarFieldEnum)[keyof typeof TournamentGoldScalarFieldEnum];
export declare const TournamentXpScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly bruteId: "bruteId";
    readonly xp: "xp";
};
export type TournamentXpScalarFieldEnum = (typeof TournamentXpScalarFieldEnum)[keyof typeof TournamentXpScalarFieldEnum];
export declare const AchievementScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly count: "count";
    readonly bruteId: "bruteId";
    readonly userId: "userId";
};
export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];
export declare const BruteReportScalarFieldEnum: {
    readonly id: "id";
    readonly bruteId: "bruteId";
    readonly bruteName: "bruteName";
    readonly reason: "reason";
    readonly count: "count";
    readonly date: "date";
    readonly status: "status";
    readonly handlerId: "handlerId";
    readonly handledAt: "handledAt";
};
export type BruteReportScalarFieldEnum = (typeof BruteReportScalarFieldEnum)[keyof typeof BruteReportScalarFieldEnum];
export declare const ServerStateScalarFieldEnum: {
    readonly id: "id";
    readonly globalTournamentValid: "globalTournamentValid";
    readonly activeModifiers: "activeModifiers";
    readonly modifiersEndAt: "modifiersEndAt";
    readonly nextModifiers: "nextModifiers";
};
export type ServerStateScalarFieldEnum = (typeof ServerStateScalarFieldEnum)[keyof typeof ServerStateScalarFieldEnum];
export declare const BannedWordScalarFieldEnum: {
    readonly id: "id";
    readonly word: "word";
};
export type BannedWordScalarFieldEnum = (typeof BannedWordScalarFieldEnum)[keyof typeof BannedWordScalarFieldEnum];
export declare const BannedIpScalarFieldEnum: {
    readonly id: "id";
};
export type BannedIpScalarFieldEnum = (typeof BannedIpScalarFieldEnum)[keyof typeof BannedIpScalarFieldEnum];
export declare const BannedFingerprintScalarFieldEnum: {
    readonly id: "id";
};
export type BannedFingerprintScalarFieldEnum = (typeof BannedFingerprintScalarFieldEnum)[keyof typeof BannedFingerprintScalarFieldEnum];
export declare const KnownFingerprintScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type KnownFingerprintScalarFieldEnum = (typeof KnownFingerprintScalarFieldEnum)[keyof typeof KnownFingerprintScalarFieldEnum];
export declare const ClanScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly deletedAt: "deletedAt";
    readonly limit: "limit";
    readonly points: "points";
    readonly elo: "elo";
    readonly boss: "boss";
    readonly damageOnBoss: "damageOnBoss";
    readonly masterId: "masterId";
    readonly participateInClanWar: "participateInClanWar";
};
export type ClanScalarFieldEnum = (typeof ClanScalarFieldEnum)[keyof typeof ClanScalarFieldEnum];
export declare const ClanThreadScalarFieldEnum: {
    readonly id: "id";
    readonly clanId: "clanId";
    readonly creatorId: "creatorId";
    readonly title: "title";
    readonly locked: "locked";
    readonly pinned: "pinned";
    readonly postCount: "postCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClanThreadScalarFieldEnum = (typeof ClanThreadScalarFieldEnum)[keyof typeof ClanThreadScalarFieldEnum];
export declare const ClanPostScalarFieldEnum: {
    readonly id: "id";
    readonly threadId: "threadId";
    readonly authorId: "authorId";
    readonly date: "date";
    readonly message: "message";
};
export type ClanPostScalarFieldEnum = (typeof ClanPostScalarFieldEnum)[keyof typeof ClanPostScalarFieldEnum];
export declare const BossDamageScalarFieldEnum: {
    readonly id: "id";
    readonly bruteId: "bruteId";
    readonly clanId: "clanId";
    readonly damage: "damage";
};
export type BossDamageScalarFieldEnum = (typeof BossDamageScalarFieldEnum)[keyof typeof BossDamageScalarFieldEnum];
export declare const ClanWarScalarFieldEnum: {
    readonly id: "id";
    readonly duration: "duration";
    readonly type: "type";
    readonly date: "date";
    readonly status: "status";
    readonly attackerId: "attackerId";
    readonly attackerEloChange: "attackerEloChange";
    readonly attackerWins: "attackerWins";
    readonly defenderId: "defenderId";
    readonly defenderEloChange: "defenderEloChange";
    readonly defenderWins: "defenderWins";
    readonly winnerId: "winnerId";
};
export type ClanWarScalarFieldEnum = (typeof ClanWarScalarFieldEnum)[keyof typeof ClanWarScalarFieldEnum];
export declare const ClanWarFightersScalarFieldEnum: {
    readonly id: "id";
    readonly clanWarId: "clanWarId";
    readonly day: "day";
};
export type ClanWarFightersScalarFieldEnum = (typeof ClanWarFightersScalarFieldEnum)[keyof typeof ClanWarFightersScalarFieldEnum];
export declare const InventoryItemScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly count: "count";
    readonly bruteId: "bruteId";
    readonly userId: "userId";
};
export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum];
export declare const ReleaseScalarFieldEnum: {
    readonly version: "version";
    readonly date: "date";
};
export type ReleaseScalarFieldEnum = (typeof ReleaseScalarFieldEnum)[keyof typeof ReleaseScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly type: "type";
    readonly maxLevel: "maxLevel";
    readonly maxRound: "maxRound";
    readonly status: "status";
    readonly winnerId: "winnerId";
    readonly finishedAt: "finishedAt";
    readonly sortedBrutes: "sortedBrutes";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly message: "message";
    readonly severity: "severity";
    readonly link: "link";
    readonly read: "read";
    readonly date: "date";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const ConfigScalarFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly updatedAt: "updatedAt";
};
export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
