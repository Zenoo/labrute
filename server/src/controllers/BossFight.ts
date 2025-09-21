import {
  bosses,
  BossFightMessage,
  BossFightPlayerAction,
  DetailedFight,
  isUuid,
  randomBetween,
  StepType,
  weightedRandom,
} from '@labrute/core';
import { BossFightStatus, PrismaClient } from '@labrute/prisma';
import { Request } from 'express';
import { IncomingMessage } from 'http';
import WebSocket from 'ws';
import { auth } from '../utils/auth.js';
import { fighterArrives, playFighterTurn } from '../utils/fight/fightMethods.js';
import { getFighters } from '../utils/fight/getFighters.js';
import { translate } from '../utils/translate.js';

// Store connected brutes per clan-fight
const bossFightConnections: Record<string, {
  state: Omit<DetailedFight, 'initialFighters'> & {
    defendingBrutes: string[];
  },
  sockets: Set<WebSocket>,
}> = {};

const sendMessage = (wsList: Set<WebSocket> | WebSocket[], message: BossFightMessage) => {
  wsList.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  });
};

export const bossFightWs = (prisma: PrismaClient) => async (
  ws: WebSocket,
  req: Request & IncomingMessage,
) => {
  try {
    // Extract params
    const { id: clanId, fightId, bruteId } = req.params;

    // Authenticate user
    const user = await auth(prisma, req);

    if (!clanId || !fightId || !bruteId || !isUuid(clanId)
      || !isUuid(fightId) || !isUuid(bruteId)) {
      ws.close(400, translate('missingParameters', user));
      return;
    }

    // Check brute ownership
    const brute = await prisma.brute.findFirst({
      where: {
        id: bruteId,
        userId: user.id,
        deletedAt: null,
        clanId,
      },
    });

    if (!brute) {
      ws.close(403, translate('bruteNotFound', user));
      return;
    }

    // Check fight exists for this clan
    const fight = await prisma.bossFight.findFirst({
      where: {
        id: fightId,
        clanId,
      },
      select: { id: true },
    });

    if (!fight) {
      ws.close(403, translate('fightNotFound', user));
      return;
    }

    // Initialize if not present
    if (!bossFightConnections[fightId]) {
      throw new Error(`Fight ${fightId} not initialized`);
    }

    // Send current state
    sendMessage([ws], {
      state: bossFightConnections[fightId].state,
    });

    // Add brute and socket
    const isNewBrute = !bossFightConnections[fightId].state.fighters.some((f) => f.id === bruteId);
    if (isNewBrute) {
      const fighters = getFighters({
        team1: { brutes: [brute], backups: [], bosses: [] },
        team2: { brutes: [], backups: [], bosses: [] },
        modifiers: [],
      });

      if (!fighters[0]) {
        throw new Error(`No fighters found for brute ${bruteId}`);
      }

      bossFightConnections[fightId].state.fighters.push(fighters[0]);

      // Send new brute to all connected clients
      sendMessage(bossFightConnections[fightId].sockets, {
        newBrute: fighters[0],
      });
    }
    bossFightConnections[fightId].sockets.add(ws);

    // Handle player actions
    ws.on('message', (data: WebSocket.Data) => {
      try {
        const message: BossFightPlayerAction = JSON.parse(data.toString());

        if (!bossFightConnections[fightId]) {
          ws.close(400, translate('fightNotFound', user));
          return;
        }

        // Find the fighter
        const fighter = bossFightConnections[fightId]?.state.fighters
          .find((f) => f.id === message.id);
        if (!fighter) {
          ws.close(404, translate('fighterNotFound', user));
          return;
        }

        switch (message.type) {
          case 'attack': {
            // Prevent attacking if the fighter is defending
            if (bossFightConnections[fightId].state.defendingBrutes
              .includes(fighter.id)) {
              ws.close(403, translate('fighterDefending', user));
              return;
            }

            // Process attack

            // Reset arrivesAtInitiative to trigger arrival animation
            fighter.arrivesAtInitiative = 1;

            // Set fighter as first
            bossFightConnections[fightId].state.fighters
              .sort((a, b) => (a.id === fighter.id ? -1 : b.id === fighter.id ? 1 : 0));

            // Play fighter turn
            playFighterTurn(bossFightConnections[fightId].state);

            // Make the brute leave
            bossFightConnections[fightId].state.steps.push({
              a: StepType.Leave,
              f: fighter.index,
            });
            break;
          }
          case 'defend': {
            // Prevent attacking if the fighter is defending
            if (bossFightConnections[fightId].state.defendingBrutes
              .includes(fighter.id)) {
              ws.close(403, translate('fighterDefending', user));
              return;
            }

            // Remove arrivesAtInitiative to allow getting targeted
            fighter.arrivesAtInitiative = undefined;

            // Add arrivesAtInitiative to clan object to prevent it from being targeted
            const clanObject = bossFightConnections[fightId].state.fighters
              .find((f) => f.type === 'object' && f.name === 'clan');

            if (!clanObject) {
              ws.close(404, translate('clanObjectNotFound', user));
              return;
            }
            clanObject.arrivesAtInitiative = -1;

            // Field the brute
            fighterArrives(bossFightConnections[fightId].state, fighter);
            break;
          }
          default:
            ws.close(400, translate('invalidAction', user));
        }
      } catch (error) {
        ws.close(400, `Invalid message: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    });

    // Handle disconnect
    ws.on('close', () => {
      if (!bossFightConnections[fightId]) return;

      bossFightConnections[fightId].sockets.delete(ws);
    });

    // Handle errors
    ws.on('error', (error: Error) => {
      ws.close(500, error.message);
    });
  } catch {
    ws.close();
  }
};

const sleep = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export const startBossFight = async (prisma: PrismaClient, fightId: string) => {
  const randomBoss = weightedRandom(bosses);

  // Initialize fight state
  bossFightConnections[fightId] = {
    state: {
      modifiers: [],
      fighters: getFighters({
        team1: {
          brutes: [],
          backups: [],
          bosses: [],
          objects: [{
            type: 'clan',
            hp: 1000,
            maxHp: 1000,
          }],
        },
        team2: {
          brutes: [],
          backups: [],
          bosses: [{
            ...randomBoss,
            startHP: randomBoss.hp,
          }],
        },
        modifiers: [],
      }),
      steps: [],
      initiative: 0,
      winner: null,
      loser: null,
      overtime: false,
      defendingBrutes: [],
    },
    sockets: new Set<WebSocket>(),
  };

  const clan = bossFightConnections[fightId].state.fighters.find((f) => f.type === 'object');
  if (!clan) {
    throw new Error(`Clan not found in fight ${fightId}`);
  }
  const boss = bossFightConnections[fightId].state.fighters.find((f) => f.type === 'boss');
  if (!boss) {
    throw new Error(`Boss not found in fight ${fightId}`);
  }

  while (boss.hp > 0 && clan.hp > 0) {
    // Wait 10-30 seconds between each boss action
    await sleep(randomBetween(10000, 30000));

    // Order fighters (boss always goes first)
    bossFightConnections[fightId].state.fighters.sort((a, b) => (a.type === 'boss' ? -1 : b.type === 'boss' ? 1 : 0));

    // Set current initiative to first fighter
    bossFightConnections[fightId].state.initiative = bossFightConnections[fightId]
      .state.fighters[0]?.initiative ?? 0;

    const lastStepIndex = bossFightConnections[fightId].state.steps.length;

    // Play boss turn
    playFighterTurn(bossFightConnections[fightId].state);

    const newSteps = bossFightConnections[fightId].state.steps.slice(lastStepIndex);

    // Broadcast new steps to all connected clients
    sendMessage(bossFightConnections[fightId].sockets, {
      newSteps,
    });

    // Remove arrivesAtInitiative from clan object to allow it to be targeted again
    clan.arrivesAtInitiative = undefined;
  }

  // Fight ended, determine result
  const won = boss.hp <= 0;
  let reward = 0;

  if (won) {
    reward = Math.floor(clan.maxHp / 10);
  }

  // Broadcast end message
  sendMessage(bossFightConnections[fightId].sockets, {
    end: {
      won,
      reward,
    },
  });

  // Clean up WebSocket connections
  bossFightConnections[fightId].sockets.forEach((socket) => {
    socket.close();
  });

  // Clean up fight state
  delete bossFightConnections[fightId];

  // Update database with fight result
  await prisma.bossFight.update({
    where: { id: fightId },
    data: {
      status: won ? BossFightStatus.WON : BossFightStatus.LOST,
      reward,
      steps: JSON.stringify(bossFightConnections[fightId].state.steps),
      fighters: JSON.stringify(bossFightConnections[fightId].state.fighters),
    },
  });
};
