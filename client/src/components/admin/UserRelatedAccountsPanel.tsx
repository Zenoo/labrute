import type { UserRelatedAccountsResponse } from '@labrute/core';
import {
  Alert, Button, Paper, Stack, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useServer } from '../../hooks/useServer';
import { useAlert } from '../../hooks/useAlert';
import { catchError } from '../../utils/catchError';
import { Link } from '../Link';

export const UserRelatedAccountsPanel = ({ userId }: { userId: string }) => {
  const Server = useServer();
  const AlertMessage = useAlert();
  const [enabled, setEnabled] = useState(false);
  const [pages, setPages] = useState<(string | undefined)[]>([undefined]);
  const [data, setData] = useState<UserRelatedAccountsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const cursor = pages[pages.length - 1];

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    let active = true;

    setLoading(true);
    setFailed(false);
    setData(null);

    Server.User.relatedAccounts(userId, cursor).then((result) => {
      if (active) {
        setData(result);
      }
    }).catch((error) => {
      if (active) {
        setFailed(true);
        catchError(AlertMessage)(error);
      }
    }).finally(() => {
      if (active) {
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [enabled, userId, cursor, refresh, Server.User, AlertMessage]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Historical account links</Typography>
        <Alert severity="info">
          Leads from stored browser IDs, fingerprints and IPs, including banned accounts
          and retained observations. A shared identifier does not prove common ownership or explain
          the original ban. Historical identifiers have no reliable dates or pairings; no score is
          reconstructed. Approved households and shared networks may also appear.
        </Alert>
        <Button disabled={loading} onClick={() => {
          setEnabled(true);
          setPages([undefined]);
          setRefresh((value) => value + 1);
        }}>{enabled ? 'Refresh related accounts' : 'Check related accounts'}</Button>
        {loading && <Typography>Loading historical account links...</Typography>}
        {failed && <Typography>
          Could not load historical links. Use Refresh related accounts to retry.
        </Typography>}
        {data && <>
          <Typography>
            Retained identifiers: {data.identifierCounts.browsers} browsers,
            {' '}{data.identifierCounts.fingerprints} fingerprints, {data.identifierCounts.ips} IPs.
          </Typography>
          {data.accounts.length === 0 && <Typography>
            No related accounts found in the retained identifiers. Missing or cleared historical
            records cannot be recovered here; this does not establish that the account was unique.
          </Typography>}
          {data.accounts.map((account) => (
            <Stack key={account.id} spacing={1} sx={{ overflowWrap: 'anywhere' }}>
              <Link to={`/admin-panel/user/${account.id}`}>
                {account.name} ({account.id})
              </Link>
              <Typography variant="body2">
                {account.bannedAt
                  ? `Banned ${new Date(account.bannedAt).toLocaleString()}: ${account.banReason ?? 'Reason not recorded'}`
                  : 'Not currently banned'}
              </Typography>
              {[
                {
                  label: 'Browser IDs',
                  count: account.browserCount,
                  values: account.sharedBrowserIds,
                },
                {
                  label: 'Fingerprints',
                  count: account.fingerprintCount,
                  values: account.sharedFingerprints,
                },
                {
                  label: 'IPs',
                  count: account.ipCount,
                  values: account.sharedIps,
                },
              ].map((channel) => (
                channel.count > 0 && <Typography key={channel.label} variant="body2">
                  {channel.label} ({channel.count}): {channel.values.join(', ')}
                  {channel.count > 10 ? ' (first 10 shown)' : ''}
                </Typography>
              ))}
            </Stack>
          ))}
          <Stack direction="row" spacing={1}>
            <Button disabled={loading || pages.length === 1}
              onClick={() => setPages((values) => values.slice(0, -1))}>
              Previous related accounts
            </Button>
            <Button disabled={loading || !data.nextCursor} onClick={() => {
              if (data.nextCursor) {
                setPages((values) => [...values, data.nextCursor ?? undefined]);
              }
            }}>Next related accounts</Button>
          </Stack>
        </>}
      </Stack>
    </Paper>
  );
};
