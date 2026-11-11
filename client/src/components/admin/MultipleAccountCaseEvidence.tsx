import type { MultipleAccountCaseDetailResponse } from '@labrute/core';
import {
  Alert, Box, List, ListItem, Stack, Typography
} from '@mui/material';
import React from 'react';
import { Link } from '../Link';

const date = (value: Date | string) => new Date(value).toLocaleString();

export const MultipleAccountCaseEvidence = ({ detail }: {
  detail: MultipleAccountCaseDetailResponse
}) => (
  <Stack spacing={2}>
    <Alert severity="info">
      Uncalibrated signal: shared devices and networks can belong to different people.
      Reviewing this case does not ban accounts or restrict identifiers.
    </Alert>
    <Typography>
      Rule {detail.case.signal}, version {detail.case.ruleVersion}:
      {' '}{detail.case.accountCount} non-exempt accounts
      {' '}(threshold: more than {detail.case.threshold}). Status: {detail.case.status}.
    </Typography>
    <Typography>
      Evidence window: {date(detail.case.windowStart)} - {date(detail.case.windowEnd)}
    </Typography>
    <Typography>
      First observed: {date(detail.case.firstSeen)}. Last observed: {date(detail.case.lastSeen)}.
    </Typography>
    <Box sx={{ overflowWrap: 'anywhere' }}>
      {detail.case.browserId && <Typography>Browser: {detail.case.browserId}</Typography>}
      {detail.case.fingerprint && <Typography>Fingerprint: {detail.case.fingerprint}</Typography>}
      {detail.case.ip && <Typography>IP: {detail.case.ip}</Typography>}
    </Box>
    <Typography variant="h6">Accounts in this snapshot</Typography>
    <List dense>
      {detail.users.map((user) => (
        <ListItem key={user.id}>
          <Link to={`/user/${encodeURIComponent(user.id)}`} target="_blank">
            {user.name ?? 'Deleted account'} ({user.id}){user.bannedAt ? ' - currently banned' : ''}
          </Link>
        </ListItem>
      ))}
    </List>
    <Typography variant="h6">
      Exempt account/browser pairs excluded at detection: {detail.case.excludedCount}
    </Typography>
    <Typography variant="body2">
      Active approvals at detection are excluded before counting. These snapshot the decisions then,
      and may differ from current approvals.
    </Typography>
    {detail.exemptions.map((entry) => (
      <Typography key={`${entry.userId}:${entry.browserId}`} sx={{ overflowWrap: 'anywhere' }}>
        {entry.userId} / {entry.browserId}: {entry.reason} (approved {date(entry.createdAt)})
      </Typography>
    ))}
    {detail.case.excludedCount > detail.exemptions.length && (
      <Typography>Showing the first 100 excluded pairs.</Typography>
    )}
    <Typography variant="h6">Latest 25 review decisions</Typography>
    {detail.reviews.length === 0 && <Typography>No review decisions yet.</Typography>}
    {detail.reviews.map((review) => (
      <Typography key={review.id} sx={{ overflowWrap: 'anywhere' }}>
        {date(review.createdAt)} — {review.reviewerId}: {review.decision}. {review.reason}
      </Typography>
    ))}
  </Stack>
);
