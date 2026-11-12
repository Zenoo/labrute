import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

// Ranking endpoints do not need a database connection or Discord client.
mock.module('../lib/context.js', {
  namedExports: {
    LOGGER: {
      log() {},
      error() {},
    },
    DISCORD: () => ({}),
  },
});

const { Brutes } = await import('../lib/controllers/Brutes.js');

for (const rank of [-1, 11]) {
  const rows = Array.from({ length: 50 }, (_, index) => ({
    position: index + 1,
    brute: {
      id: `brute-${index + 1}`,
      name: `Brute${index + 1}`,
    },
  }));

  for (const position of [1, 15, 16, 17, 18, 19, 40, 49, 50]) {
    test(`rank ${rank}, position ${position}: nearby rows do not repeat the top 15`, async () => {
      const prisma = {
        brute: { count: async () => rows.length },
        bruteRanking: {
          findFirst: async () => rows[position - 1],
          findMany: async ({ where }) => rows.filter((row) => (
            where.position.in
              ? where.position.in.includes(row.position)
              : row.position <= where.position.lte
          )),
        },
      };

      const req = {
        params: {
          name: `Brute${position}`,
          rank: String(rank),
        },
      };

      let top;
      let nearby;

      await Brutes.getForRank(prisma)(req, {
        send: (data) => {
          top = data;
        },
      });
      await Brutes.getNeighborsForRank(prisma)(req, {
        send: (data) => {
          nearby = data;
        },
      });

      const expectedPositions = position <= 15 ? [] : rows
        .filter((row) => row.position > 15 && Math.abs(row.position - position) <= 2)
        .map((row) => row.position);

      assert.deepEqual(nearby.nearbyBrutes, expectedPositions.map((p) => rows[p - 1].brute));
      assert.equal(nearby.position, position);

      const displayed = [...top.topBrutes, ...nearby.nearbyBrutes];

      assert.equal(new Set(displayed.map((brute) => brute.id)).size, displayed.length);

      // Match the row numbering used by RankingView, including the 16/17 boundary.
      nearby.nearbyBrutes.forEach((brute, index) => {
        const label = [16, 17].includes(position) ? 16 + index : position - 2 + index;

        assert.equal(brute.id, `brute-${label}`);
      });
    });
  }
}
