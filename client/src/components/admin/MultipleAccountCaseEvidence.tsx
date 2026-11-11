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
      The daily automatic policy uses the stated thresholds and excludes staff and approved pairs.
      A manual review stops remaining automatic actions; it does not ban accounts directly.
      Use account Unban to reverse a completed ban. Review affects this snapshot only;
      use shared-browser approvals or known-fingerprint exceptions for ongoing exceptions.
    </Alert>
    <Link to="/admin-panel/shared-browser">Manage shared-browser approvals</Link>
    {detail.case.signal === 'fingerprint-ip' && (
      <Link to="/admin-panel/known-fingerprints">Manage known fingerprint exceptions</Link>
    )}
    {detail.case.status === 'open' && detail.case.revision > 1 && (
      <Typography>Automatic processing is paused by a manual review.</Typography>
    )}
    {detail.case.automaticAt && <Typography>
      Automatically processed {date(detail.case.automaticAt)}: {detail.case.automaticNote}
    </Typography>}
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
    <Typography sx={{ overflowWrap: 'anywhere' }}>Appeal code: MC-{detail.case.appealCode}</Typography>
    <Typography variant="h6">Accounts in this snapshot</Typography>
    <List dense>
      {detail.users.map((user) => (
        <ListItem key={user.id} sx={{ display: 'block' }}>
          <Link to={`/admin-panel/user/${encodeURIComponent(user.id)}`} target="_blank">
            {user.name ?? 'Deleted account'} ({user.id}){user.bannedAt ? ' - currently banned' : ''}
          </Link>
          {user.automaticAction && <Typography variant="body2" sx={{ overflowWrap: 'anywhere' }}>
            Automatic policy v{user.automaticAction.policyVersion}: {user.automaticAction.status}
            {' '}({user.automaticAction.attempts} attempts). {user.automaticAction.reason}
          </Typography>}
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
