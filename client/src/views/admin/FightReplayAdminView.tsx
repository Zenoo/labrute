import { Fighter, FightGetResponse } from '@labrute/core';
import {
  Alert as MuiAlert, Box, Paper, Stack, TextField
} from '@mui/material';
import React, {
  useCallback, useMemo, useState
} from 'react';
import { FightComponent } from '../../components/Arena/FightComponent';
import { FantasyButton } from '../../components/FantasyButton';
import { Page } from '../../components/Page';
import { Text } from '../../components/Text';

const getReplayFighterIds = (fighters: Fighter[]): [string | null, string | null] => {
  const bruteIds = fighters.filter((f) => !f.master).map((f) => f.id);

  return [bruteIds[0] ?? null, bruteIds[1] ?? null];
};

const normalizeFightPayload = (payload: unknown): FightGetResponse => {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid JSON payload.');
  }

  const source = payload as Record<string, unknown>;

  const { fighters, steps } = source;

  if (!fighters || !steps) {
    throw new Error('The JSON must contain both "fighters" and "steps" fields.');
  }

  let parsedFighters: Fighter[];

  try {
    parsedFighters = JSON.parse(fighters as string) as Fighter[];
  } catch {
    throw new Error('Invalid "fighters" field. Expected valid JSON.');
  }

  if (!Array.isArray(parsedFighters) || parsedFighters.length < 2) {
    throw new Error('The "fighters" field must be an array with at least two fighters.');
  }

  try {
    const parsedSteps = JSON.parse(steps as string) as unknown[];
    if (!Array.isArray(parsedSteps)) {
      throw new Error();
    }
  } catch {
    throw new Error('Invalid "steps" field. Expected an array of fight steps.');
  }

  const [fighter1Id, fighter2Id] = getReplayFighterIds(parsedFighters);

  const brute1Id = typeof source.brute1Id === 'string' ? source.brute1Id : fighter1Id;
  const brute2Id = typeof source.brute2Id === 'string' ? source.brute2Id : fighter2Id;

  if (!brute1Id || !brute2Id) {
    throw new Error('Unable to infer brute ids. Include "brute1Id" and "brute2Id" in the payload.');
  }

  return {
    ...(source as FightGetResponse),
    id: typeof source.id === 'string' && source.id.length > 0
      ? source.id
      : `local-replay-${Date.now()}`,
    fighters: fighters as string,
    steps: steps as string,
    brute1Id,
    brute2Id,
    favoritedBy: Array.isArray(source.favoritedBy)
      ? source.favoritedBy as FightGetResponse['favoritedBy']
      : [],
  };
};

export const FightReplayAdminView = () => {
  const [json, setJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [fight, setFight] = useState<FightGetResponse | null>(null);

  const canReplay = useMemo(() => json.trim().length > 0, [json]);

  const onReplay = useCallback(() => {
    try {
      const payload = JSON.parse(json);
      const normalizedFight = normalizeFightPayload(payload);

      setFight(normalizedFight);
      setError(null);
    } catch (e) {
      setFight(null);
      setError(e instanceof Error ? e.message : 'Unable to parse replay payload.');
    }
  }, [json]);

  const onClear = useCallback(() => {
    setFight(null);
    setError(null);
    setJson('');
  }, []);

  return (
    <Page headerUrl="/admin-panel">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Fight Replay</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2}>
          <Text bold>
            Paste a fight JSON payload, then click Replay to render it locally.
          </Text>

          <TextField
            multiline
            minRows={10}
            maxRows={24}
            value={json}
            onChange={(event) => setJson(event.target.value)}
            placeholder="Paste fight JSON here"
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <FantasyButton color="success" onClick={onReplay} disabled={!canReplay}>Replay</FantasyButton>
            <FantasyButton color="warning" onClick={onClear}>Clear</FantasyButton>
          </Box>

          {error && (
            <MuiAlert severity="error" variant="filled">
              <Text>{error}</Text>
            </MuiAlert>
          )}

          {fight && (
            <Box sx={{ pt: 1 }}>
              <FightComponent fight={fight} />
            </Box>
          )}
        </Stack>
      </Paper>
    </Page>
  );
};
