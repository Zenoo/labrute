import type {
  MultipleAccountCaseDetailResponse, MultipleAccountCaseStatus, MultipleAccountReviewDecision,
  UserMultipleAccountsListResponse,
} from '@labrute/core';
import { parseAppealCode } from '@labrute/core';
import {
  Button, MenuItem, Paper, Stack, TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MultipleAccountCaseEvidence } from '../../components/admin/MultipleAccountCaseEvidence';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid, useAdminGridModels } from '../../components/admin/AdminGrid';
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
  const appealingAccount = searchParams.get('account') ?? undefined;
  const [appealCode, setAppealCode] = useState('');
  const [resolvingAppeal, setResolvingAppeal] = useState(false);
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

  const models = useAdminGridModels(() => setCursors([undefined]));
  const { query } = models;
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

    Server.User.multipleAccounts(status, cursor, undefined, query).then((data) => {
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
  }, [admin?.admin, Server.User, Alert, status, cursor, query, refresh]);

  useEffect(() => {
    setDetail(null);

    if (!admin?.admin || !selected) {
      return undefined;
    }

    let active = true;

    setDetailLoading(true);

    Server.User.multipleAccountCase(selected, offset, appealingAccount).then((data) => {
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
  }, [admin?.admin, selected, offset, appealingAccount, refresh, Server.User, Alert]);

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
    <AdminPage>
      <Paper sx={{
        mx: 0,
        p: 2,
      }}>
        <Stack spacing={2}>
          <Typography variant="h4">Multiple-account review cases</Typography>
          <Stack component="form" direction="row" spacing={1} onSubmit={async (event) => {
            event.preventDefault();

            let parsed = parseAppealCode(appealCode);

            if (resolvingAppeal || saving) {
              return;
            }

            if (parsed?.reference !== undefined) {
              setResolvingAppeal(true);

              try {
                parsed = await Server.User.resolveAppealCode(appealCode.trim());
              } catch (error) {
                catchError(Alert)(error);

                return;
              } finally {
                setResolvingAppeal(false);
              }
            }

            if (parsed?.userId && !parsed.caseCode) {
              navigate(`/admin-panel/user/${parsed.userId}`);

              return;
            }

            if (!parsed?.caseCode) {
              Alert.open('error', 'Enter an AP-, MC- or USER- appeal code.');

              return;
            }

            setOffsets([0]);
            setReason('');
            setStatus('all');
            setCursors([undefined]);
            setSearchParams({
              case: parsed.caseCode,
              ...(parsed.userId ? { account: parsed.userId } : {}),
            });
            setRefresh((value) => value + 1);
          }}>
            <TextField label="Ban appeal code" value={appealCode} disabled={saving || resolvingAppeal}
              inputProps={{ maxLength: 100 }}
              onChange={(event) => setAppealCode(event.target.value)} />
            <Button type="submit" disabled={saving || resolvingAppeal || !appealCode.trim()}>
              Find appeal
            </Button>
          </Stack>
          <Typography>
            Daily observation snapshots.
          </Typography>
          <TextField select label="Case status" value={status} disabled={saving || resolvingAppeal} onChange={(event) => {
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
          <AdminGrid
            label="Multiple-account cases"
            models={models}
            rows={list.cases}
            rowKey={(item) => item.id}
            busy={loading}
            paging={{
              page: cursors.length - 1,
              pageSize: 25,
              hasNext: list.nextCursor !== null,
              onPageChange: (page) => {
                if (loading || saving) {
                  return;
                }

                if (page === cursors.length - 2) {
                  setCursors((values) => values.slice(0, -1));
                } else if (page === cursors.length && list.nextCursor) {
                  const { nextCursor } = list;

                  setCursors((values) => [...values, nextCursor]);
                }
              },
            }}
            emptyMessage={loading || listFailed ? undefined : 'No cases in this status.'}
            columns={[
              {
                field: 'signal',
                heading: 'Signal',
                render: (item) => item.signal,
              },
              {
                field: 'accountCount',
                heading: 'Accounts',
                kind: 'number' as const,
                align: 'right',
                render: (item) => item.accountCount,
              },
              {
                field: 'scoreEvidence',
                heading: 'Suspicion',
                sortable: false,
                filterable: false,
                render: (item) => item.scoreEvidence ? `${item.scoreEvidence.percentage}% suspicion` : 'Score unavailable',
              },
              {
                field: 'detectedAt',
                heading: 'Detected on',
                kind: 'date' as const,
                render: (item) => new Date(item.detectedAt).toLocaleString(),
              },
              {
                field: 'actions',
                heading: 'Actions',
                sortable: false,
                filterable: false,
                align: 'right',
                render: (item) => (
                  <Button variant={selected === item.id ? 'contained' : 'outlined'}
                    aria-pressed={selected === item.id}
                    disabled={saving || resolvingAppeal}
                    onClick={() => {
                      setSearchParams({ case: item.id });
                      setSelected(item.id);
                      setOffsets([0]);
                      setReason('');
                    }}>
                    Review case
                  </Button>
                ),
              },
            ]}
          />
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
    </AdminPage>
  );
};
