import type { MultipleAccountCaseDetailResponse, MultipleAccountScore } from '@labrute/core';
import {
  Alert, Box, List, ListItem, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from '../Link';

const date = (value: Date | string) => new Date(value).toLocaleString();

const factorLabels: Record<MultipleAccountScore['factors'][number]['key'], string> = {
  'shared-browser': 'Accounts sharing one browser',
  'fingerprint-ip': 'Shared fingerprint and IP (anchor top-up)',
  'repeated-days': 'Accounts observed on at least 3 distinct days',
  'shared-visitor': 'Accounts sharing one visitor fingerprint in this browser',
  'multiple-networks': 'Accounts using this browser on at least 2 distinct IPs each',
  'account-switching': 'Accounts involved in at least 3 rapid browser account changes',
  'similar-user-names': 'Accounts with similar user names',
  'similar-brute-names': 'Accounts with similar brute names across different owners',
};

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
    <Typography variant="h6">
      Suspicion score: {detail.case.scoreEvidence
      ? `${detail.case.scoreEvidence.percentage}%` : 'Unavailable for this snapshot'}
    </Typography>
    {detail.case.scoreEvidence && <>
      <Typography variant="body2">
        Heuristic v{detail.case.scoreEvidence.version}, not a calibrated probability
        or proof of common ownership. Points reflect the proportion of accounts
        supporting each signal;
        a subgroup does not implicate everyone.
        Scores are capped at 95%. The score does not affect automatic sanctions.
      </Typography>
      {detail.case.scoreEvidence.factors.map((factor) => (
        <Typography key={factor.key} variant="body2">
          {factorLabels[factor.key]}: {factor.matchedAccounts}/{factor.totalAccounts} accounts,
          {' '}+{factor.points} points (maximum {factor.maxPoints}).
          {factor.examples?.map((example) => (
            <Box component="span" key={example} sx={{
              display: 'block',
              overflowWrap: 'anywhere',
            }}>
              {example}
            </Box>
          ))}
        </Typography>
      ))}
    </>}
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
