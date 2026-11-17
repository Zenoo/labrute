import { BruteReportWithNames } from '@labrute/core';
import { BruteReportStatus } from '@labrute/prisma';
import { Check, Close } from '@mui/icons-material';
import {
  Alert as MuiAlert, CircularProgress, Box, FormControl, FormControlLabel,
  FormLabel, IconButton,
  Paper, Radio, RadioGroup, Stack, TextField,
  Tooltip, Button,
} from '@mui/material';
import dayjs from 'dayjs';
import React, {
  Fragment, useCallback, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../components/Link';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid, useAdminGridModels } from '../../components/admin/AdminGrid';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const ReportAdminView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const Server = useServer();

  const [newBannedWord, setNewBannedWord] = React.useState('');
  const [reports, setReports] = React.useState<BruteReportWithNames[]>([]);
  const [refresh, setRefresh] = React.useState(0);
  const [pageCursors, setPageCursors] = React.useState<(string | null)[]>([null]);
  const [nextCursor, setNextCursor] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [failedPage, setFailedPage] = React.useState<(string | null)[] | null>(null);
  const [busyReports, setBusyReports] = React.useState<string[]>([]);
  const generation = useRef(0);
  const inFlight = useRef(false);
  const actions = useRef(new Set<string>());
  const [status, setStatus] = React.useState<BruteReportStatus>(BruteReportStatus.pending);
  const { user } = useAuth();

  const models = useAdminGridModels(() => setPageCursors([null]));
  const { query } = models;

  const loadReports = useCallback(async (targetPage: (string | null)[]) => {
    if (inFlight.current || (!user?.admin && !user?.moderator)) {
      return;
    }

    const requestGeneration = generation.current;

    inFlight.current = true;
    setLoading(true);
    setFailedPage(null);

    try {
      const cursor = targetPage[targetPage.length - 1] ?? null;
      const data = await Server.BruteReport.list(status, cursor, query);

      if (requestGeneration !== generation.current) {
        return;
      }

      setReports(data.reports);
      setPageCursors(targetPage);
      setNextCursor(data.nextCursor);
    } catch (error) {
      if (requestGeneration === generation.current) {
        setFailedPage(targetPage);
        catchError(Alert, error);
      }
    } finally {
      if (requestGeneration === generation.current) {
        inFlight.current = false;
        setLoading(false);
      }
    }
  }, [Alert, Server.BruteReport, status, query, user?.admin, user?.moderator]);

  useEffect(() => {
    setReports([]);
    setPageCursors([null]);
    setNextCursor(null);
    void loadReports([null]);

    return () => {
      // Ignore responses from the previous filter, including its loading state.
      generation.current += 1;
      inFlight.current = false;
    };
  }, [loadReports, refresh]);

  const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value as BruteReportStatus;

    if (next === BruteReportStatus.pending) {
      if (models.filterModel.items.some(({ field }) => field === 'handledAt')) {
        models.onFilterModelChange({
          items: models.filterModel.items.filter(({ field }) => field !== 'handledAt'),
        });
      }

      if (models.sortModel.some(({ field }) => field === 'handledAt')) {
        models.onSortModelChange(models.sortModel.filter(({ field }) => field !== 'handledAt'));
      }
    }

    setStatus(next);
  };

  const handleReport = (reportId: string, action: 'accept' | 'reject' | 'cancel') => async () => {
    if (inFlight.current || actions.current.has(reportId)) {
      return;
    }

    actions.current.add(reportId);
    setBusyReports((previous) => [...previous, reportId]);
    const actionGeneration = generation.current;

    try {
      await Server.BruteReport[action](reportId);

      if (actionGeneration === generation.current) {
        setReports((previous) => previous.filter((report) => report.id !== reportId));
      }

      const messages = {
        accept: 'reportAccepted',
        reject: 'reportRejected',
        cancel: 'reportCancelled',
      };

      Alert.open('success', t(messages[action]));
    } catch (error) {
      catchError(Alert, error);
    } finally {
      actions.current.delete(reportId);
      setBusyReports((previous) => previous.filter((id) => id !== reportId));
    }
  };

  const renderReportActions = (report: BruteReportWithNames) => {
    if (status === BruteReportStatus.pending) {
      return (
        <>
          <Tooltip title={t('accept')}>
            <IconButton aria-label={t('accept')} color="success" disabled={loading || busyReports.includes(report.id)} onClick={handleReport(report.id, 'accept')}>
              <Check />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('reject')}>
            <IconButton edge="end" aria-label={t('reject')} color="error" disabled={loading || busyReports.includes(report.id)} onClick={handleReport(report.id, 'reject')}>
              <Close />
            </IconButton>
          </Tooltip>
        </>
      );
    }

    if (status === BruteReportStatus.accepted) {
      return (
        <Tooltip title={t('cancel')}>
          <IconButton aria-label={t('cancel')} disabled={loading || busyReports.includes(report.id)} onClick={handleReport(report.id, 'cancel')}>
            <Close />
          </IconButton>
        </Tooltip>
      );
    }

    return null;
  };

  // Add banned word
  const addBannedWord = useCallback(() => {
    if (!user?.admin) {
      return;
    }

    if (!newBannedWord) {
      return;
    }

    Server.BruteReport.addBannedWord(newBannedWord).then(() => {
      Alert.open('success', 'Banned word added');
      setNewBannedWord('');
    }).catch(catchError(Alert));
  }, [Alert, newBannedWord, user, Server.BruteReport]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {(user?.admin || user?.moderator) ? (
          <Stack spacing={2}>
            {user.admin && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <TextField
                  label="Add a banned word"
                  value={newBannedWord}
                  onChange={(e) => setNewBannedWord(e.target.value)}
                  variant="standard"
                  fullWidth
                  size="small"
                  sx={{ mx: 2 }}
                />
                <Button color="success" disabled={!newBannedWord.trim()} onClick={addBannedWord}>Add</Button>
              </Box>
            )}
            <Button sx={{ alignSelf: 'flex-start' }} disabled={loading || busyReports.length > 0} onClick={() => setRefresh((previous) => previous + 1)}>Refresh reports</Button>
            <FormControl disabled={busyReports.length > 0}>
              <FormLabel>{t('status')}</FormLabel>
              <RadioGroup
                row
                value={status}
                onChange={changeStatus}
              >
                {Object.keys(BruteReportStatus).map((key) => (
                  <FormControlLabel key={key} value={key} control={<Radio />} label={t(key)} />
                ))}
              </RadioGroup>
            </FormControl>
            <AdminGrid
              label="Reports"
              models={models}
              rows={reports}
              rowKey={(report) => report.id}
              busy={loading}
              paging={{
                page: pageCursors.length - 1,
                hasNext: nextCursor !== null,
                onPageChange: (page) => {
                  if (busyReports.length || loading) {
                    return;
                  }

                  if (page === pageCursors.length && nextCursor !== null) {
                    void loadReports([...pageCursors, nextCursor]);
                  } else if (page === pageCursors.length - 2) {
                    void loadReports(pageCursors.slice(0, -1));
                  }
                },
              }}
              emptyMessage={loading || failedPage ? undefined : `No ${t(status).toLowerCase()} reports.`}
              columns={[
                {
                  field: 'bruteName',
                  heading: 'Reported brute',
                  render: (report) => {
                    const name = report.brute?.name ?? report.bruteName;

                    return <Link to={`/${name}`} target="_blank">{report.bruteName || name}</Link>;
                  },
                },
                {
                  field: 'count',
                  heading: 'Count',
                  kind: 'number' as const,
                  align: 'right',
                  render: (report) => report.count,
                },
                {
                  field: 'date',
                  heading: 'Reported on',
                  kind: 'date' as const,
                  render: (report) => dayjs.utc(report.date).format('DD/MM/YYYY'),
                },
                {
                  field: 'reportedBy',
                  heading: t('reportedBy'),
                  sortable: false,
                  filterable: false,
                  render: (report) => report.users.map((reporter, index) => (
                    <Fragment key={reporter.id}>
                      {index > 0 && ', '}
                      <Link to={`/user/${reporter.id}`} target="_blank">{reporter.name}</Link>
                    </Fragment>
                  )),
                },
                ...(status !== BruteReportStatus.pending ? [
                  {
                    field: 'handledAt',
                    heading: 'Handled on',
                    kind: 'date' as const,
                    render: (report: BruteReportWithNames) => (
                      report.handledAt ? dayjs.utc(report.handledAt).format('DD/MM/YYYY HH:mm') : t('unknown')
                    ),
                  },
                  {
                    field: 'handledBy',
                    heading: t('handledBy'),
                    sortable: false,
                    filterable: false,
                    render: (report: BruteReportWithNames) => (
                      report.handler
                        ? <Link to={`/user/${report.handler.id}`} target="_blank">{report.handler.name}</Link>
                        : t('unknown')
                    ),
                  },
                ] : []),
                ...(status !== BruteReportStatus.rejected ? [{
                  field: 'actions',
                  heading: 'Actions',
                  sortable: false,
                  filterable: false,
                  align: 'right' as const,
                  render: renderReportActions,
                }] : []),
              ]}
            />
            {loading && <CircularProgress size={24} aria-label="Loading reports" />}
            {failedPage && (
              <MuiAlert severity="error" action={(
                <Button color="inherit" disabled={busyReports.length > 0} onClick={() => void loadReports(failedPage)}>Retry</Button>
              )}>
                Reports could not be loaded.
              </MuiAlert>
            )}
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </AdminPage>
  );
};
