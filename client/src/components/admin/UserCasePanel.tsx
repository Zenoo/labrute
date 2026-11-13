import type { UserMultipleAccountsListResponse } from '@labrute/core';
import {
  Button, Paper, Stack, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useServer } from '../../hooks/useServer';
import { useAlert } from '../../hooks/useAlert';
import { catchError } from '../../utils/catchError';
import { Link } from '../Link';

export const UserCasePanel = ({ userId }: { userId: string }) => {
  const Server = useServer();
  const Alert = useAlert();

  const [pages, setPages] = useState<(string | undefined)[]>([undefined]);
  const [data, setData] = useState<UserMultipleAccountsListResponse | null>(null);
  const [failed, setFailed] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const cursor = pages[pages.length - 1];

  useEffect(() => {
    let active = true;

    setData(null);
    setFailed(false);

    Server.User.multipleAccounts('all', cursor, userId).then((result) => {
      if (active) {
        setData(result);
      }
    }).catch((error) => {
      if (active) {
        setFailed(true);
        catchError(Alert)(error);
      }
    });

    return () => {
      active = false;
    };
  }, [Server.User, Alert, cursor, userId, refresh]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Multiple-account cases and automatic actions</Typography>

        {!data && !failed && <Typography>Loading cases...</Typography>}

        {failed && <Button onClick={() => setRefresh((value) => value + 1)}>Retry cases</Button>}

        {data?.cases.length === 0 && <Typography>No recorded cases for this account.</Typography>}

        {data?.cases.map((row) => (
          <Stack key={row.id} spacing={1}>
            <Link to={`/admin-panel/multiple-accounts?case=${row.id}`}>
              {row.signal} - {row.accountCount} accounts - {row.status}
              {' - '}{row.scoreEvidence ? `${row.scoreEvidence.percentage}% suspicion` : 'Score unavailable'}
            </Link>
            <Typography variant="body2">
              Appeal code: MC-{row.appealCode}
            </Typography>
            <Typography variant="body2">
              Evidence: {new Date(row.firstSeen).toLocaleString()}
              {' - '}{new Date(row.lastSeen).toLocaleString()}
            </Typography>
            {row.accountAction && <Typography sx={{ overflowWrap: 'anywhere' }}>
              Automatic policy v{row.accountAction.policyVersion}: {row.accountAction.status}
              {' '}({row.accountAction.attempts} attempts, {new Date(row.accountAction.updatedAt).toLocaleString()}).
              {' '}{row.accountAction.reason}
            </Typography>}
            {row.automaticNote && <Typography variant="body2">{row.automaticNote}</Typography>}
          </Stack>
        ))}
        <Stack direction="row" spacing={1}>
          <Button disabled={!data || pages.length === 1}
            onClick={() => setPages((values) => values.slice(0, -1))}>Previous cases</Button>
          <Button disabled={!data?.nextCursor} onClick={() => {
            const next = data?.nextCursor;

            if (next) {
              setPages((values) => [...values, next]);
            }
          }}>Next cases</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
