import { BruteReportWithNames } from '@labrute/core';
import { BruteReportStatus } from '@labrute/prisma';
import { Check, Close } from '@mui/icons-material';
import { Box, FormControl, FormControlLabel, FormLabel, IconButton, List, ListItem, ListItemText, Paper, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import moment from 'moment';
import FantasyButton from '../components/FantasyButton';
import Link from '../components/Link';

const ReportAdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [newBanndedWord, setNewBannedWord] = React.useState('');
  const [reports, setReports] = React.useState<BruteReportWithNames[]>([]);
  const [page, setPage] = React.useState(0);
  const [lastPage, setLastPage] = React.useState(false);
  const [status, setStatus] = React.useState<BruteReportStatus>(BruteReportStatus.pending);
  const { user } = useAuth();

  // Trigger reports fetch when status or page changes (debounced)
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!user?.admin && !user?.moderator) return;

      Server.BruteReport.list(status, page).then((data) => {
        setReports((prev) => prev.concat(
          // Filter out reports already in the list (solves possible desync if report created between requests)
          data.filter((report) => !prev.find((prevReport) => prevReport.id === report.id))
        ));

        // Set last page
        setLastPage(data.length < 20);
      }).catch(catchError(Alert));
    }, 200);

    return () => clearTimeout(handler);
  }, [user, status, Alert, page]);

  // Change status
  const changeStatus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setReports([]);
    setStatus(e.target.value as BruteReportStatus);
  }, []);

  // Accept report
  const acceptReport = useCallback((reportId: string) => () => {
    Server.BruteReport.accept(reportId).then(() => {
      setReports((r) => r.filter((report) => report.id !== reportId));

      Alert.open('success', t('reportAccepted'));
    }).catch(catchError(Alert));
  }, [Alert, t]);

  // Reject report
  const rejectReport = useCallback((reportId: string) => () => {
    Server.BruteReport.reject(reportId).then(() => {
      setReports((r) => r.filter((report) => report.id !== reportId));

      Alert.open('success', t('reportRejected'));
    }).catch(catchError(Alert));
  }, [Alert, t]);

  // Add banned word
  const addBannedWord = useCallback(() => {
    if (!user?.admin) return;
    if (!newBanndedWord) return;
    Server.BruteReport.addBannedWord(newBanndedWord).then(() => {
      Alert.open('success', 'Banned word added');
    }).catch(catchError(Alert));
  }, [Alert, newBanndedWord, user]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Reports</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {(user?.admin || user?.moderator) ? (
          <Stack spacing={2}>
            {user.admin && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  label="Add a banned word"
                  value={newBanndedWord}
                  onChange={(e) => setNewBannedWord(e.target.value)}
                  variant="standard"
                  fullWidth
                  size="small"
                  sx={{ mx: 2 }}
                />
                <FantasyButton color="success" onClick={addBannedWord}>Add</FantasyButton>
              </Box>
            )}
            <FormControl>
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
            {/* Report list */}
            <List dense>
              {reports.map((report) => (
                <ListItem
                  key={report.id}
                  secondaryAction={status === BruteReportStatus.pending ? (
                    <>
                      <Tooltip title={t('accept')}>
                        <IconButton onClick={acceptReport(report.id)}>
                          <Check />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t('reject')}>
                        <IconButton edge="end" onClick={rejectReport(report.id)}>
                          <Close />
                        </IconButton>
                      </Tooltip>
                    </>
                  ) : null}
                >
                  <ListItemText
                    primary={(
                      <Text body2>({report.count}) <Link to={`/${report.brute.name}`} target="_blank">{report.brute.name}</Link></Text>
                    )}
                    secondary={(
                      <>
                        <Text body2 component="span" display="block">
                          [{moment.utc(report.date).format('DD/MM/YYYY')}] {t('reportedBy')} {report.users.map<React.ReactNode>((u) => (<Link key={u.id} to={`/user/${u.id}`} target="_blank">{u.name}</Link>)).reduce((prev, curr) => [prev, ', ', curr])}
                        </Text>
                        {status !== BruteReportStatus.pending && (
                          <Text body2 component="span" display="block">
                            [{moment.utc(report.handledAt ?? '1970-01-01').format('DD/MM/YYYY HH:mm')}] {t('handledBy')} <Link to={`/user/${report.handler?.id}`} target="_blank">{report.handler?.name ?? t('unknown')}</Link>
                          </Text>
                        )}
                      </>
                    )}
                  />
                </ListItem>
              ))}
            </List>
            {!lastPage && (
              <Box>
                <FantasyButton
                  color="success"
                  onClick={() => setPage((prev) => prev + 1)}
                  sx={{ mx: 'auto', mt: 3 }}
                >
                  {t('showMore')}
                </FantasyButton>
              </Box>
            )}
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </Page>
  );
};

export default ReportAdminView;
