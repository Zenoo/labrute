import {
  ARENA_OPPONENTS_COUNT, getCalculatedBrute, getXPNeeded,
} from '@labrute/core';
import {
  AchievementName, BossName, Brute, BruteReportStatus, ClanPermission, ClanWarStatus, ClanWarType,
  DestinyChoiceType, EventStatus, FightModifier, InventoryItemType, Lang, LogType,
  NotificationSeverity, PetName, Prisma, PrismaClient, SkillName, StatsGranularity,
  TournamentType, UserLogType, WeaponName,
} from '@labrute/prisma';
import { createHash, randomUUID } from 'node:crypto';
import Cryptr from 'cryptr';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import { generateBot } from '../utils/brute/generateBot.js';
import { createPlayableBrute } from './progression.js';
import type { generateFight } from '../utils/fight/generateFight.js';

dayjs.extend(utc);

export const SEED_MARKER = 'development-seed-v1';

const requiredAt = <T>(items: T[], index: number): T => {
  const value = items[index];

  if (value === undefined) {
    throw new Error(`Missing seed fixture at index ${index}`);
  }

  return value;
};

export const seedId = (label: string) => {
  const hash = createHash('sha256').update(`labrute-dev:${label}`).digest('hex');

  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
};

export const seedWorld = async (
  db: Prisma.TransactionClient,
  simulationClient: PrismaClient,
  simulate: typeof generateFight,
  userId = seedId('admin'),
  now = new Date(),
) => {
  const day = (offset = 0) => {
    const date = new Date(now);

    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() + offset);

    return date;
  };

  // Preserve a real local login's identity while granting access to every debugging screen.
  const admin = await db.user.upsert({
    where: { id: userId },
    update: {
      admin: true,
      moderator: true,
      gold: 100000,
      bruteLimit: 100,
      termsAccepted: true,
    },
    create: {
      id: userId,
      connexionToken: randomUUID(),
      name: 'Dev Admin',
      admin: true,
      moderator: true,
      gold: 100000,
      bruteLimit: 100,
      termsAccepted: true,
    },
  });

  // Separate accounts exercise permission, language, ban, and preference branches in the UI.
  const users = [admin];

  for (const [index, lang] of Object.values(Lang).entries()) {
    users.push(await db.user.create({
      data: {
        id: seedId(`user-${lang}`),
        connexionToken: randomUUID(),
        name: `Dev ${lang}`,
        lang,
        gold: index * 100,
        termsAccepted: index !== 0,
        moderator: index === 1,
        bannedAt: index === 2 ? day(-2) : null,
        banReason: index === 2 ? 'Development banned account' : null,
        banAppealCode: index === 2 ? seedId('appeal') : null,
        lastSeen: day(-index),
        createdAt: day(-100),
        fightSpeed: index % 4 + 1,
        displayOpponentDetails: index % 2 === 0,
        alwaysDisplayScrubber: index % 2 === 0,
        displayVersusPage: index % 2 !== 0,
        backgroundMusic: index % 2 === 0,
        transferedBrutesCount: index,
      },
    }));
  }

  // Track main brutes for later clan, tournament, and reward links; bots stay outside this list.
  const brutes: Brute[] = [];

  const playable = async (
    name: string, level: number, extra: Partial<Prisma.BruteCreateInput> = {},
  ) => {
    const retained = {
      ascendedSkills: Array.isArray(extra.ascendedSkills) ? extra.ascendedSkills : [],
      ascendedWeapons: Array.isArray(extra.ascendedWeapons) ? extra.ascendedWeapons : [],
      ascendedPets: Array.isArray(extra.ascendedPets) ? extra.ascendedPets : [],
    };

    const brute = await db.brute.create({
      data: {
        ...createPlayableBrute(name, level, extra.gender, undefined, retained),
        ...extra,
        name,
        id: seedId(name),
        user: { connect: { id: admin.id } },
        createdAt: day(-60),
      },
    });

    brutes.push(brute);

    return brute;
  };

  // Every displayed rank, with a playable destiny and real stats rather than inflated raw values.
  for (let rank = 11; rank >= 0; rank--) {
    await playable(`DevRank${rank}`, 1 + (11 - rank) * 5, {
      gender: rank % 2 === 0 ? 'female' : 'male',
      ranking: rank,
      canRankUpSince: rank === 10 ? day(-1) : null,
      victories: (11 - rank) * 20,
      losses: 11 - rank,
      registeredForTournament: rank === 11,
      nextTournamentDate: rank === 11 ? day(1) : null,
    });
  }

  const novice = requiredAt(brutes, 0);
  const veteran = requiredAt(brutes, brutes.length - 1);

  await playable('DevLevelReady', 10, {
    gender: 'male',
    xp: getXPNeeded(11),
  });
  await playable('DevExhausted', 10, {
    gender: 'female',
    lastFight: day(),
    fightsLeft: 0,
  });
  await playable('DevRefreshed', 10, {
    gender: 'male',
    lastFight: day(-1),
    fightsLeft: 0,
  });
  await playable('DevAscended', 35, {
    gender: 'female',
    ascensions: 3,
    resets: 2,
    previousDestinyPath: ['LEFT', 'RIGHT'],
    ascendedSkills: ['shield'],
    ascendedWeapons: ['knife'],
    ascendedPets: ['dog1'],
    favorite: true,
    tournamentWins: 10,
  });
  await playable('DevDeleted', 5, {
    gender: 'male',
    deletedAt: day(-1),
    deletionReason: 'Development sacrifice',
  });
  await playable('DevScheduled', 5, {
    gender: 'female',
    willBeDeletedAt: day(7),
    deletionReason: 'Development moderation',
  });
  await db.brute.update({
    where: { id: novice.id },
    data: {
      masterId: veteran.id,
    },
  });
  await db.brute.update({
    where: { id: veteran.id },
    data: { pupilsCount: 1 },
  });

  for (const user of users.slice(1)) {
    await db.brute.create({
      data: {
        ...createPlayableBrute(`DevPlayer${user.lang}`, 10),
        id: seedId(`player-${user.lang}`),
        user: { connect: { id: user.id } },
      },
    });
  }

  // Named perk specimens make every perk and tier easy to locate in Studio/cell pages.
  for (const [type, names] of [
    ['skill', Object.values(SkillName)], ['weapon', Object.values(WeaponName)],
    ['pet', Object.values(PetName)],
  ] as const) {
    for (const perk of names) {
      // Later dogs need earlier dogs first; their specimens therefore need extra levels.
      let level = 3;

      if (perk === 'dog2') {
        level = 4;
      } else if (perk === 'dog3') {
        level = 5;
      }

      await db.brute.create({
        data: {
          ...createPlayableBrute(`Dev${perk}`, level, undefined, {
            type,
            name: perk,
          }),
          id: seedId(`perk-${perk}`),
          user: { connect: { id: requiredAt(users, 1).id } },
        },
      });
    }
  }

  // Six choices at each level through 200; same level coverage as the production bot seed.
  const bots: Prisma.BruteCreateManyInput[] = [];

  for (let level = 1; level <= 200; level++) {
    for (let index = 0; index < ARENA_OPPONENTS_COUNT; index++) {
      const generated = generateBot(level, `DevBot${level}x${index}`);

      // generateBot returns scalar fields only, despite its broader Prisma create-input type.
      bots.push({
        ...generated,
        id: seedId(`bot-${level}-${index}`),
      } as Prisma.BruteCreateManyInput);
    }
  }

  for (let offset = 0; offset < bots.length; offset += 100) {
    await db.brute.createMany({ data: bots.slice(offset, offset + 100) });
  }

  await db.brute.update({
    where: { id: novice.id },
    data: {
      opponents: { connect: bots.slice(0, ARENA_OPPONENTS_COUNT).map((bot) => ({ id: bot.id })) },
      opponentsGeneratedAt: day(),
    },
  });
  await db.user.update({
    where: { id: admin.id },
    data: {
      following: { connect: [{ id: veteran.id }, { id: novice.id }] },
    },
  });

  // Every boss gets a clan with a usable roster, delegated permissions, and forum history.
  const clans = [];

  for (const [index, boss] of Object.values(BossName).entries()) {
    const master = requiredAt(brutes, index + 2);

    const clan = await db.clan.create({
      data: {
        id: seedId(`clan-${index}`),
        name: `Dev Clan ${index + 1}`,
        boss,
        masterId: master.id,
        points: 1000 * index,
        elo: 1000 + 100 * index,
        participateInClanWar: true,
        limit: 20,
      },
    });

    clans.push(clan);

    const role = await db.clanRole.create({
      data: {
        clanId: clan.id,
        name: 'Officer',
        permissions: Object.values(ClanPermission),
      },
    });

    await db.clanRole.create({
      data: {
        clanId: clan.id,
        name: 'Member',
        permissions: [],
      },
    });
    await db.brute.update({
      where: { id: master.id },
      data: { clanId: clan.id },
    });
    await db.brute.update({
      where: { id: requiredAt(brutes, index + 5).id },
      data: {
        clanId: clan.id,
        clanRoleId: role.id,
      },
    });
    await db.bossDamage.create({
      data: {
        clanId: clan.id,
        bruteId: master.id,
        damage: 250,
      },
    });
    await db.clan.update({
      where: { id: clan.id },
      data: { damageOnBoss: 250 },
    });

    for (const [threadIndex, flags] of [
      {
        pinned: true,
        locked: false,
      }, {
        pinned: false,
        locked: true,
      },
      {
        pinned: false,
        locked: false,
      },
    ].entries()) {
      await db.clanThread.create({
        data: {
          clanId: clan.id,
          creatorId: master.id,
          title: `Development topic ${threadIndex + 1}`,
          ...flags,
          postCount: 2,
          posts: {
            create: [
              {
                authorId: master.id,
                message: 'Welcome to the development clan!\nA multiline post.',
              },
              {
                authorId: requiredAt(brutes, index + 5).id,
                message: 'A reply with **formatting** and emoji 👋.',
              },
            ],
          },
        },
      });
    }
  }

  await db.clan.create({
    data: {
      name: 'Dev Deleted Clan',
      deletedAt: day(-1),
    },
  });
  await db.brute.update({
    where: { id: novice.id },
    data: {
      wantToJoinClanId: requiredAt(clans, 0).id,
    },
  });
  // Keep a war at each lifecycle stage so selection, fighting, and reward screens are available.
  const wars = [];

  for (const [index, status] of Object.values(ClanWarStatus).entries()) {
    const war = await db.clanWar.create({
      data: {
        attackerId: requiredAt(clans, 0).id,
        defenderId: requiredAt(clans, 1).id,
        status,
        type: index % 2 === 0 ? ClanWarType.official : ClanWarType.friendly,
        date: day(status === 'pending' ? 1 : -7),
        attackerWins: status === 'finished' ? 4 : 0,
        defenderWins: status === 'finished' ? 3 : 0,
        winnerId: status === 'finished' ? requiredAt(clans, 0).id : null,
        attackerEloChange: status === 'finished' ? 10 : 0,
        defenderEloChange: status === 'finished' ? -10 : 0,
        fighters: {
          create: {
            day: 1,
            attackers: {
              connect: [
                { id: requiredAt(brutes, 2).id }, { id: requiredAt(brutes, 5).id },
              ],
            },
            defenders: {
              connect: [
                { id: requiredAt(brutes, 3).id }, { id: requiredAt(brutes, 6).id },
              ],
            },
          },
        },
      },
    });

    wars.push(war);
  }

  // Fight JSON comes from the actual simulator and can be replayed by the client.
  const fight = async (
    left: Brute, right: Brute, extra: Partial<Prisma.FightCreateInput> = {},
    modifiers: FightModifier[] = [],
  ) => {
    const mods = Object.fromEntries(modifiers.map((modifier) => [modifier, true]));
    const leftTeam = extra.clanWar ? [left, requiredAt(brutes, 5)] : [left];
    const rightTeam = extra.clanWar ? [right, requiredAt(brutes, 6)] : [right];

    const { data } = await simulate({
      prisma: simulationClient,
      team1: { brutes: leftTeam.map((brute) => getCalculatedBrute(brute, mods)) },
      team2: { brutes: rightTeam.map((brute) => getCalculatedBrute(brute, mods)) },
      modifiers: mods,
      backups: false,
      achievements: false,
      clanWar: !!extra.clanWar,
      tournament: extra.tournament ? 'finals' : undefined,
    });

    return db.fight.create({
      data: {
        ...extra,
        ...data,
        date: extra.date ?? day(-1),
        modifiers,
      },
    });
  };

  const arenaFight = await fight(novice, requiredAt(brutes, 1));

  await db.fight.update({
    where: { id: arenaFight.id },
    data: {
      favoritedBy: { connect: { id: admin.id } },
      favoriteCount: 1,
    },
  });

  for (const modifier of Object.values(FightModifier)) {
    await fight(requiredAt(brutes, 4), requiredAt(brutes, 5), undefined, [modifier]);
  }

  // Daily brackets use the client's fixed 64-entry layout; other formats support smaller brackets.
  for (const type of Object.values(TournamentType)) {
    if (type === 'BATTLE_ROYALE') {
      continue;
    }

    const entrants = type === 'DAILY' ? [novice, ...await db.brute.findMany({
      where: { id: { in: bots.slice(0, 63).map((bot) => bot.id ?? '') } },
      orderBy: { name: 'asc' },
    })] : [novice, requiredAt(brutes, 1)];

    const tournament = await db.tournament.create({
      data: {
        type,
        date: day(-1),
        rounds: type === 'DAILY' ? 6 : 1,
        participants: { connect: entrants.map((brute) => ({ id: brute.id })) },
      },
    });

    let remaining = entrants;
    let step = 1;

    while (remaining.length > 1) {
      const winners: Brute[] = [];

      for (let index = 0; index < remaining.length; index += 2) {
        const left = requiredAt(remaining, index);
        const right = requiredAt(remaining, index + 1);

        const match = await fight(left, right, {
          tournamentStep: step++,
          tournament: { connect: { id: tournament.id } },
        });

        winners.push(match.winnerId === left.id ? left : right);
      }

      remaining = winners;
    }

    if (type === 'DAILY') {
      await db.brute.update({
        where: { id: novice.id },
        data: {
          currentTournamentDate: day(-1),
          currentTournamentStepWatched: 0,
        },
      });
    }
  }

  // Event brutes are independent from regular progression and occupy the special event rank.
  for (const status of Object.values(EventStatus)) {
    const event = await db.event.create({
      data: {
        status,
        date: day(status === 'starting' ? 1 : -1),
        maxLevel: 20,
        maxRound: 10,
        finishedAt: status === 'finished' ? day() : null,
      },
    });

    const left = await playable(`DevEvent${status}A`, 20, {
      gender: 'male',
      event: { connect: { id: event.id } },
      ranking: -1,
    });

    const right = await playable(`DevEvent${status}B`, 20, {
      gender: 'female',
      event: { connect: { id: event.id } },
      ranking: -1,
    });

    if (status !== 'starting') {
      const tournament = await db.tournament.create({
        data: {
          type: 'BATTLE_ROYALE',
          date: day(-1),
          rounds: 1,
          eventId: event.id,
          participants: { connect: [{ id: left.id }, { id: right.id }] },
        },
      });

      const final = await fight(left, right, {
        tournamentStep: 1,
        tournament: { connect: { id: tournament.id } },
      });

      await db.event.update({
        where: { id: event.id },
        data: {
          sortedBrutes: [final.winnerId ?? left.id, final.loserId ?? right.id],
          winnerId: status === 'finished' ? final.winnerId : null,
        },
      });
    }
  }

  await fight(requiredAt(brutes, 2), requiredAt(brutes, 3), {
    clanWar: { connect: { id: requiredAt(wars, 3).id } },
  });

  for (const brute of brutes.filter((entry) => !entry.deletedAt)) {
    await db.bruteRanking.create({
      data: {
        bruteId: brute.id,
        ranking: brute.ranking,
        position: brutes.filter((entry) => entry.ranking === brute.ranking)
          .findIndex((entry) => entry.id === brute.id) + 1,
      },
    });
  }

  // Populate achievement catalogs and pending rewards separately from the simulated fight results.
  for (const [index, name] of Object.values(AchievementName).entries()) {
    await db.achievement.createMany({
      data: [
        {
          name,
          count: index + 1,
          bruteId: veteran.id,
        },
        {
          name,
          count: index + 1,
          userId: admin.id,
        },
      ],
    });
  }

  await db.tournamentAchievement.create({
    data: {
      bruteId: novice.id,
      date: day(-1),
      achievement: 'wins',
      achievementCount: 1,
    },
  });
  await db.tournamentXp.create({
    data: {
      bruteId: novice.id,
      date: day(-1),
      xp: 5,
    },
  });
  await db.tournamentGold.create({
    data: {
      userId: admin.id,
      date: day(-1),
      gold: 100,
    },
  });

  // Both ownership scopes and empty stacks are needed to exercise purchase/consume boundaries.
  for (const type of Object.values(InventoryItemType)) {
    await db.inventoryItem.upsert({
      where: {
        type_userId: {
          type,
          userId: admin.id,
        },
      },
      create: {
        userId: admin.id,
        type,
        count: 10,
      },
      update: { count: 10 },
    });
    await db.inventoryItem.createMany({
      data: [
        {
          bruteId: novice.id,
          type,
          count: 10,
        },
        {
          bruteId: veteran.id,
          type,
          count: 0,
        },
      ],
    });
  }

  await db.unlockedColors.create({
    data: {
      bruteId: novice.id,
      bodyPart: 'col1',
      colors: ['FF0000', '00FF00', '0000FF'],
    },
  });

  // Include each feed template without relying on a scheduled job to produce the corresponding log.
  for (const type of Object.values(LogType)) {
    const choice = await db.destinyChoice.findFirst({ where: { bruteId: novice.id } });

    await db.log.create({
      data: {
        currentBruteId: novice.id,
        type,
        date: now,
        level: novice.level,
        xp: 1,
        gold: 10,
        brute: veteran.name,
        fightId: ['win', 'lose', 'bossFight'].includes(type) ? arenaFight.id : null,
        destinyChoiceId: type === 'up' || type === 'lvl' ? choice?.id : null,
        template: type === 'win' || type === 'lose' ? '1' : null,
      },
    });
  }

  for (const type of Object.values(UserLogType)) {
    await db.userLog.create({
      data: {
        userId: admin.id,
        type,
        bruteId: novice.id,
        gold: 10,
        oldName: 'DevOldName',
        targetUserId: requiredAt(users, 1).id,
        date: now,
      },
    });
  }

  for (const status of Object.values(BruteReportStatus)) {
    await db.bruteReport.create({
      data: {
        bruteId: novice.id,
        bruteName: novice.name,
        status,
        count: 2,
        users: { connect: [{ id: admin.id }, { id: requiredAt(users, 1).id }] },
        handlerId: status === 'pending' ? null : admin.id,
        handledAt: status === 'pending' ? null : now,
      },
    });
  }

  for (const severity of Object.values(NotificationSeverity)) {
    for (const read of [true, false]) {
      await db.notification.create({
        data: {
          userId: admin.id,
          message: `Development ${severity} notification`,
          severity,
          read,
          link: `/${novice.name}/cell`,
        },
      });
    }
  }

  // Chart histories plus every aggregation and level-up choice category.
  const stats = {
    fights: 6,
    wins: 4,
    losses: 2,
    xpGained: 8,
    tournamentFights: 1,
    clanWarFights: 1,
    clanBossDamage: 250,
    clanBossFights: 1,
  };

  for (let offset = -30; offset <= 0; offset++) {
    const date = day(offset);

    await db.bruteStats.create({
      data: {
        bruteId: novice.id,
        date,
        day: date.getUTCDay(),
        granularity: 'daily',
        ...stats,
      },
    });

    const userStats = {
      day: date.getUTCDay(),
      ...stats,
      goldWon: 10,
      goldLost: 5,
      connectedDays: 1,
      createdBrutes: offset === -30 ? 1 : 0,
    };

    await db.userStats.upsert({
      where: {
        date_granularity_userId: {
          date,
          granularity: 'daily',
          userId: admin.id,
        },
      },
      create: {
        ...userStats,
        userId: admin.id,
        date,
        granularity: 'daily',
      },
      update: userStats,
    });
  }

  for (const granularity of Object.values(StatsGranularity)) {
    const date = granularity === 'allTime' ? new Date('9999-12-31T00:00:00Z') : day();

    if (granularity === 'monthly') {
      date.setUTCDate(1);
    }

    if (granularity === 'yearly') {
      date.setUTCMonth(0, 1);
    }

    if (granularity !== 'daily') {
      await db.bruteStats.create({
        data: {
          bruteId: novice.id,
          date,
          granularity,
          ...stats,
        },
      });
      await db.userStats.create({
        data: {
          userId: admin.id,
          date,
          granularity,
          ...stats,
          goldWon: 310,
          goldLost: 155,
        },
      });
    }

    for (const choiceType of Object.values(DestinyChoiceType)) {
      const choice = {
        skill: 'shield',
        weapon: 'knife',
        pet: 'dog1',
        stats: 'strength',
      }[choiceType];

      const data = {
        date,
        granularity,
        choiceType,
        choice,
        offered: 10,
        picked: 5,
      };

      await db.userLevelUpStat.create({
        data: {
          ...data,
          userId: admin.id,
        },
      });
      await db.bruteLevelUpStat.create({
        data: {
          ...data,
          bruteId: novice.id,
        },
      });
    }
  }

  // Use synthetic identifiers and documentation IPs so no real device receives a restriction.
  const browserId = seedId('shared-browser');
  const fingerprint = `v2:${'a'.repeat(32)}:none`;

  await db.sharedBrowser.create({
    data: {
      id: browserId,
      description: 'Development household',
      users: { connect: [{ id: requiredAt(users, 1).id }, { id: requiredAt(users, 2).id }] },
    },
  });
  await db.sharedBrowserExemption.create({
    data: {
      browserId,
      userId: requiredAt(users, 1).id,
      createdBy: admin.id,
      reason: 'Development household approval',
    },
  });
  await db.knownFingerprint.create({
    data: {
      id: fingerprint,
      description: 'Development known device',
    },
  });
  await db.bannedFingerprint.create({ data: { id: `v2:${'b'.repeat(32)}:none` } });
  await db.bannedBrowser.create({ data: { id: seedId('banned-browser') } });
  await db.bannedIp.create({ data: { id: '192.0.2.99' } });
  await db.bannedWord.create({ data: { word: 'devbannedword' } });

  for (const user of users.slice(1)) {
    await db.user.update({
      where: { id: user.id },
      data: {
        ips: ['192.0.2.10'],
        fingerprints: [fingerprint],
        browserIds: [browserId],
      },
    });
    await db.accountObservation.create({
      data: {
        id: createHash('sha256').update(user.id).digest('hex'),
        userId: user.id,
        browserId,
        fingerprint,
        visitorId: 'c'.repeat(32),
        ip: '192.0.2.10',
        ja3Hash: 'd'.repeat(64),
        ja4Hash: 'e'.repeat(64),
        observedDay: day(),
        firstSeen: day(),
        lastSeen: now,
      },
    });
  }

  // Evidence snapshots and reviews are durable records, independent of current account restrictions.
  for (const status of ['open', 'dismissed', 'needs-action']) {
    const caseId = createHash('sha256').update(status).digest('hex');

    await db.multipleAccountCase.create({
      data: {
        id: caseId,
        ruleVersion: 1,
        signal: 'browser',
        browserId,
        userIds: users.slice(1).map((user) => user.id),
        accountCount: users.length - 1,
        threshold: 3,
        confidence: 'uncalibrated',
        firstSeen: day(-3),
        lastSeen: now,
        windowStart: day(-7),
        windowEnd: now,
        detectedAt: now,
        exemptions: [],
        excludedCount: 0,
        status,
        revision: status === 'open' ? 1 : 2,
        reviews: status === 'open' ? undefined : {
          create: {
            revision: 1,
            reviewerId: admin.id,
            decision: status,
            reason: 'Development review',
          },
        },
        actions: {
          create: ['pending', 'failed', 'banned', 'skipped'].map((action, index) => ({
            userId: requiredAt(users, index + 1).id,
            policyVersion: 1,
            status: action,
            reason: 'Development automatic action',
            attempts: index,
          })),
        },
      },
    });
  }

  await db.securityAction.create({
    data: {
      subjectType: 'shared-browser',
      subjectId: browserId,
      userId: requiredAt(users, 1).id,
      action: 'grant',
      actorId: admin.id,
      reason: 'Development audit history',
    },
  });
  const state = await db.serverState.findFirst();

  const stateData = {
    globalTournamentValid: true,
    activeModifiers: [],
    nextModifiers: [FightModifier.doubleAgility],
    modifiersEndAt: day(1),
    bruteRankingsUpdatedAt: day(),
  };

  if (state) {
    await db.serverState.update({
      where: { id: state.id },
      data: stateData,
    });
  } else {
    await db.serverState.create({ data: stateData });
  }

  await db.release.upsert({
    where: { version: '0.0.0-dev-seed' },
    create: { version: '0.0.0-dev-seed' },
    update: {},
  });

  // Startup decrypts every Config value, including our marker; plaintext would break the next boot.
  const secret = await db.config.upsert({
    where: { key: 'CRYPTR_SECRET' },
    create: {
      key: 'CRYPTR_SECRET',
      value: 'dev',
    },
    update: {},
  });

  await db.config.create({
    data: {
      key: SEED_MARKER,
      value: new Cryptr(secret.value).encrypt(JSON.stringify({
        userId,
        at: now,
      })),
    },
  });

  return {
    adminId: admin.id,
    arenaFightId: arenaFight.id,
    brutes: brutes.length,
    bots: bots.length,
  };
};
