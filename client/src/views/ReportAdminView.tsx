import { BruteReportWithNames } from '@labrute/core';
import { BruteReportStatus } from '@labrute/prisma';
import { Check, Close } from '@mui/icons-material';
import { FormControl, FormControlLabel, FormLabel, IconButton, List, ListItem, ListItemText, Paper, Radio, RadioGroup, Stack } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import moment from 'moment';

const ReportAdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [reports, setReports] = React.useState<BruteReportWithNames[]>([]);
  const [status, setStatus] = React.useState<BruteReportStatus>(BruteReportStatus.pending);
  const { user: admin } = useAuth();

  // Trigger reports fetch when status changes
  useEffect(() => {
    if (!admin?.admin) return;

    Server.BruteReport.list(status).then((data) => {
      setReports(data);
    }).catch(catchError(Alert));
  }, [admin, status, Alert]);

  // Change status
  const changeStatus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as BruteReportStatus);
  }, []);

  // Accept report
  const acceptReport = useCallback((reportId: number) => () => {
    Server.BruteReport.accept(reportId).then(() => {
      setReports((r) => r.filter((report) => report.id !== reportId));

      Alert.open('success', 'Brute deleted');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Reject report
  const rejectReport = useCallback((reportId: number) => () => {
    Server.BruteReport.reject(reportId).then(() => {
      setReports((r) => r.filter((report) => report.id !== reportId));

      Alert.open('success', 'Brute report rejected');
    }).catch(catchError(Alert));
  }, [Alert]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <RadioGroup
                row
                value={status}
                onChange={changeStatus}
              >
                {Object.keys(BruteReportStatus).map((key) => (
                  <FormControlLabel key={key} value={key} control={<Radio />} label={key} sx={{ textTransform: 'capitalize' }} />
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
                      <IconButton onClick={acceptReport(report.id)}>
                        <Check />
                      </IconButton>
                      <IconButton edge="end" onClick={rejectReport(report.id)}>
                        <Close />
                      </IconButton>
                    </>
                  ) : null}
                >
                  <ListItemText
                    primary={`(${report.count}) ${report.brute.name}`}
                    secondary={`${moment.utc(report.date).format('DD/MM/YYYY')}, by ${report.users.map((user) => user.name).join(', ')}`}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </Page>
  );
};

export default ReportAdminView;
