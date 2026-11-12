import type {
  MultipleAccountCaseDetailResponse, MultipleAccountCaseStatus, MultipleAccountReviewDecision,
  UserMultipleAccountsListResponse,
} from '@labrute/core';
import {
  Button, MenuItem, Paper, Stack, TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MultipleAccountCaseEvidence } from '../../components/admin/MultipleAccountCaseEvidence';
import { Page } from '../../components/Page';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { useNavigate, useSearchParams } from 'react-router';

const decisions: { value: MultipleAccountReviewDecision; label: string }[] = [
  {
    value: 'open',
    label: 'Open',
  },
  {
    value: 'needs-action',
    label: 'Needs action',
  },
  {
    value: 'dismissed',
    label: 'Dismissed',
  },
];

const filters = [...decisions, {
  value: 'processed',
  label: 'Automatically processed',
},
{
  value: 'all',
  label: 'All cases',
}];

export const MultipleAccountsView = () => {
  const Alert = useAlert();
  const { user: admin } = useAuth();
  const Server = useServer();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const linkedCase = searchParams.get('case');
  const [appealCode, setAppealCode] = useState('');
  const [status, setStatus] = useState<MultipleAccountCaseStatus>(linkedCase ? 'all' : 'open');
  const [cursors, setCursors] = useState<(string | undefined)[]>([undefined]);

  const [list, setList] = useState<UserMultipleAccountsListResponse>({
    cases: [],
    nextCursor: null,
  });

  const [selected, setSelected] = useState<string | null>(null);
  const [offsets, setOffsets] = useState([0]);
  const [detail, setDetail] = useState<MultipleAccountCaseDetailResponse | null>(null);
  const [decision, setDecision] = useState<MultipleAccountReviewDecision>('open');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [listFailed, setListFailed] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const cursor = cursors[cursors.length - 1];
  const offset = offsets[offsets.length - 1] ?? 0;

  useEffect(() => {
    if (linkedCase && (/^[a-f0-9]{64}$/.test(linkedCase)
      || /^MC-[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(linkedCase))) {
      setSelected(linkedCase);
      setOffsets([0]);
      setReason('');
    }
  }, [linkedCase]);

  useEffect(() => {
    if (!admin?.admin) {
      setList({
        cases: [],
        nextCursor: null,
      });
      setSelected(null);

      return undefined;
    }

    let active = true;

    setLoading(true);
    setListFailed(false);
    setList({
      cases: [],
      nextCursor: null,
    });

    Server.User.multipleAccounts(status, cursor).then((data) => {
      if (active) {
        setList(data);
      }
    }).catch((error) => {
      if (active) {
        setListFailed(true);
        catchError(Alert)(error);
      }
    })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [admin?.admin, Server.User, Alert, status, cursor, refresh]);

  useEffect(() => {
    setDetail(null);

    if (!admin?.admin || !selected) {
      return undefined;
    }

    let active = true;

    setDetailLoading(true);

    Server.User.multipleAccountCase(selected, offset).then((data) => {
      if (active) {
        setDetail(data);
        setDecision(decisions.some((item) => item.value === data.case.status)
          ? data.case.status as MultipleAccountReviewDecision : 'open');
      }
    }).catch((error) => {
      if (active) {
        catchError(Alert)(error);
      }
    })
      .finally(() => {
        if (active) {
          setDetailLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [admin?.admin, selected, offset, refresh, Server.User, Alert]);

  const review = async () => {
    if (!admin?.admin || !selected || !detail || saving || !reason.trim()) {
      return;
    }

    setSaving(true);

    try {
      await Server.User.reviewMultipleAccountCase(detail.case.id, {
        revision: detail.case.revision,
        decision,
        reason,
      });
      setReason('');
    } catch (error) {
      catchError(Alert)(error);
    } finally {
      setSaving(false);
      setRefresh((value) => value + 1);
    }
  };

  return (
    <Page headerUrl="/">
      <Paper sx={{
        mx: 4,
        p: 2,
      }}>
        <Stack spacing={2}>
          <Typography variant="h4">Multiple-account review cases</Typography>
          <Stack component="form" direction="row" spacing={1} onSubmit={(event) => {
            event.preventDefault();

            const code = appealCode.trim();
            const account = /^USER-([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})$/i.exec(code);

            if (account) {
              navigate(`/admin-panel/user/${account[1]?.toLowerCase()}`);

              return;
            }

            if (!/^MC-[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(code)) {
              Alert.open('error', 'Enter the complete MC- or USER- appeal code.');

              return;
            }

            setOffsets([0]);
            setReason('');
            setStatus('all');
            setSearchParams({ case: code });
            setRefresh((value) => value + 1);
          }}>
            <TextField label="Ban appeal code" value={appealCode} disabled={saving}
              inputProps={{ maxLength: 100 }}
              onChange={(event) => setAppealCode(event.target.value)} />
            <Button type="submit" disabled={saving || !appealCode.trim()}>Find appeal</Button>
          </Stack>
          <Typography>
            Daily observation snapshots.
          </Typography>
          <TextField select label="Case status" value={status} disabled={saving} onChange={(event) => {
            setStatus(event.target.value as MultipleAccountCaseStatus);
            setCursors([undefined]);
            setSelected(null);
            setReason('');
          }}>
            {filters.map((item) => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))}
          </TextField>
          {loading && <Typography>Loading cases...</Typography>}
          {listFailed && <Button onClick={() => setRefresh((value) => value + 1)}>
            Unable to load cases. Retry
          </Button>}
          {!loading && !listFailed && !list.cases.length && (
            <Typography>No cases in this status.</Typography>
          )}
          {list.cases.map((item) => (
            <Button key={item.id} variant={selected === item.id ? 'contained' : 'outlined'}
              disabled={saving}
              onClick={() => {
                setSelected(item.id);
                setOffsets([0]);
                setReason('');
              }}>
              {item.signal} - {item.accountCount} accounts
              {' - '}{new Date(item.detectedAt).toLocaleString()}
            </Button>
          ))}
          <Stack direction="row" spacing={1}>
            <Button disabled={loading || saving || cursors.length === 1}
              onClick={() => setCursors((values) => values.slice(0, -1))}>Previous cases</Button>
            <Button disabled={loading || saving || !list.nextCursor} onClick={() => {
              if (list.nextCursor) {
                setCursors((values) => [...values, list.nextCursor ?? undefined]);
              }
            }}>Next cases</Button>
          </Stack>
          {selected && !detail && (detailLoading
            ? <Typography>Loading evidence...</Typography>
            : <Button onClick={() => setRefresh((value) => value + 1)}>Retry evidence</Button>)}
          {detail && <>
            <MultipleAccountCaseEvidence detail={detail} />
            <Stack direction="row" spacing={1}>
              <Button disabled={saving || offsets.length === 1}
                onClick={() => setOffsets((values) => values.slice(0, -1))}>
                Previous accounts
              </Button>
              <Button disabled={saving || detail.nextAccountOffset === null} onClick={() => {
                const nextOffset = detail.nextAccountOffset;

                if (nextOffset !== null) {
                  setOffsets((values) => [...values, nextOffset]);
                }
              }}>Next accounts</Button>
            </Stack>
            <TextField select label="Review decision" value={decision} disabled={saving}
              onChange={(event) => setDecision(event.target.value as MultipleAccountReviewDecision)}
            >
              {decisions.map((item) => (
                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
              ))}
            </TextField>
            <TextField label="Review reason" multiline value={reason} disabled={saving}
              inputProps={{ maxLength: 500 }} onChange={(event) => setReason(event.target.value)} />
            <Button variant="contained" disabled={saving || !reason.trim()} onClick={review}>Save review</Button>
          </>}
        </Stack>
      </Paper>
    </Page>
  );
};
