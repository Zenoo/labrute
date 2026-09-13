import { UserStatsGetResponse } from '@labrute/core';
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Paper,
  useTheme,
} from '@mui/material';
import { HeatmapRect } from '@visx/heatmap';
import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useMemo, useState
} from 'react';
import { useParams } from 'react-router';
import { Page } from '../components/Page.js';
import { Text } from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import { useServer } from '../hooks/useServer.js';
import { catchError } from '../utils/catchError.js';
import { useTranslation } from 'react-i18next';
import { Loader } from '../components/Loader.js';
import { BruteRender } from '../components/Brute/Body/BruteRender.js';
import { StatsGranularity } from '@labrute/prisma';

// TODO

type ActivityBin = {
  count: number;
  date: string;
};

type ActivityColumn = {
  bins: ActivityBin[];
};

type HeatmapMetric = 'xpGained' | 'fights' | 'wins' | 'losses';

const CELL_SIZE = 14;
const CELL_GAP = 3;
const WEEKDAY_LABEL_ROWS = [1, 3, 5];
const LEFT_LABEL_SPACE = 30;
const TOP_LABEL_SPACE = 20;
const METRIC_OPTIONS: HeatmapMetric[] = ['xpGained', 'fights', 'wins', 'losses'];

export const StatsView = () => {
  const { userId } = useParams();
  const Server = useServer();
  const Alert = useAlert();
  const { t } = useTranslation('stats');
  const theme = useTheme();

  const [granularity, setGranularity] = useState<StatsGranularity>(StatsGranularity.allTime);
  const [date, setDate] = useState<string>();
  const [stats, setStats] = useState<UserStatsGetResponse | null>(null);
  const [brute, setBrute] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [metric, setMetric] = useState<HeatmapMetric>('xpGained');

  const getMetricValue = useCallback((entry: NonNullable<UserStatsGetResponse['daily']>[number]) => {
    switch (metric) {
      case 'wins':
        return entry.wins;
      case 'losses':
        return entry.losses;
      case 'xpGained':
        return entry.xpGained;
      case 'fights':
      default:
        return entry.fights;
    }
  }, [metric]);

  const metricLabel = useMemo(() => {
    switch (metric) {
      case 'wins':
        return t('wins');
      case 'losses':
        return t('defeats');
      case 'xpGained':
        return t('experience');
      case 'fights':
      default:
        return t('fights');
    }
  }, [metric, t]);

  const {
    activityColumns,
    maxCount,
    heatmapWidth,
    heatmapHeight,
    monthLabels,
    weekdayLabels,
  } = useMemo(() => {
    const today = dayjs.utc().startOf('day');
    const activityStart = today.subtract(364, 'day');
    const gridStart = activityStart.subtract(activityStart.day(), 'day');
    const totalDays = today.diff(gridStart, 'day') + 1;
    const computedWeekCount = Math.ceil(totalDays / 7);

    const dailyCountsByDate = new Map<string, number>((stats?.daily ?? []).map((entry) => [
      dayjs.utc(entry.date).format('YYYY-MM-DD'),
      getMetricValue(entry),
    ]));

    const computedColumns: ActivityColumn[] = Array.from({
      length: computedWeekCount
    }, (_, weekIndex) => {
      const weekStart = gridStart.add(weekIndex * 7, 'day');

      return {
        bins: Array.from({ length: 7 }, (__, dayIndex) => {
          const date = weekStart.add(dayIndex, 'day');
          const dateKey = date.format('YYYY-MM-DD');
          const inRange = !date.isBefore(activityStart) && !date.isAfter(today);

          return {
            date: dateKey,
            count: inRange ? (dailyCountsByDate.get(dateKey) ?? 0) : 0,
          };
        }),
      };
    });

    const computedMaxCount = Math.max(
      ...computedColumns.flatMap((column) => column.bins.map((bin) => bin.count)),
      0,
    );

    const labels: { x: number; label: string }[] = [];
    for (let i = 0; i < 12; i += 1) {
      const monthStart = today.startOf('year').add(i, 'month').startOf('month');
      if (monthStart.isBefore(activityStart) || monthStart.isAfter(today)) {
        continue;
      }

      const weekIndex = Math.floor(monthStart.diff(gridStart, 'day') / 7);
      labels.push({
        x: LEFT_LABEL_SPACE + (weekIndex * CELL_SIZE),
        label: monthStart.format('MMM'),
      });
    }

    const computedWeekdayLabels = WEEKDAY_LABEL_ROWS.map((row) => ({
      y: TOP_LABEL_SPACE + (row * CELL_SIZE) + (CELL_SIZE / 2) + 1,
      label: dayjs.utc().day(row).format('dd'),
    }));

    return {
      activityColumns: computedColumns,
      maxCount: computedMaxCount,
      heatmapWidth: LEFT_LABEL_SPACE + (computedWeekCount * CELL_SIZE),
      heatmapHeight: TOP_LABEL_SPACE + (7 * CELL_SIZE),
      monthLabels: labels,
      weekdayLabels: computedWeekdayLabels,
    };
  }, [getMetricValue, stats?.daily]);

  const activityColors = useMemo(() => (theme.palette.mode === 'dark'
    ? ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']), [theme.palette.mode]);

  const colorScale = useCallback((countValue: number | { valueOf(): number }) => {
    const count = Number(countValue?.valueOf?.() ?? countValue);

    if (count <= 0) {
      return activityColors[0];
    }

    if (maxCount <= 1) {
      return activityColors[4];
    }

    const ratio = count / maxCount;

    if (ratio <= 0.25) return activityColors[1];
    if (ratio <= 0.5) return activityColors[2];
    if (ratio <= 0.75) return activityColors[3];

    return activityColors[4];
  }, [activityColors, maxCount]);

  const setTarget = useCallback((target?: string) => () => {
    setBrute(target ?? null);
  }, []);

  const setMetricTarget = useCallback((target: HeatmapMetric) => () => {
    setMetric(target);
  }, []);

  const metricButtons = useMemo(() => METRIC_OPTIONS.map((m) => ({
    metric: m,
    label: m === 'fights'
      ? t('fights')
      : m === 'wins'
        ? t('wins', { ns: 'achievement' })
        : m === 'losses'
          ? t('defeats', { ns: 'achievement' })
          : t('experience', { ns: 'ranking' }),
  })), [t]);

  useEffect(() => {
    if (!userId) {
      return;
    }

    setLoading(true);
    Server.User.getStats({
      userId,
      granularity,
      date,
      bruteId: brute ?? undefined,
    })
      .then(setStats)
      .catch(catchError(Alert))
      .finally(() => {
        setLoading(false);
      });
  }, [Alert, Server.User, brute, date, granularity, userId]);
  console.log('stats', stats);

  return (
    <Page
      title={t('stats', { name: stats?.user.name })}
      description="Statistics"
      headerUrl={`/user/${userId}`}
    >
      {(loading || !stats) ? <Loader /> : (
        <>
          <ButtonGroup size="small">
            <Button
              sx={{ color: !brute ? 'orange' : 'secondary.main' }}
              onClick={setTarget()}
            >
              {t('user')}
            </Button>
            {stats.user.brutes.map((b) => (
              <Button
                key={b.id}
                sx={{ color: brute === b.id ? 'orange' : 'secondary.main' }}
                onClick={setTarget(b.id)}
              >
                <BruteRender brute={b} small sx={{ mr: 1 }} />
                <span>{t(b.name)}</span>
              </Button>
            ))}
          </ButtonGroup>
          <Paper sx={{
            mx: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          >
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('stats', { name: stats?.user.name })}</Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2, p: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 1.5 }}>
              <Text bold>{metricLabel}</Text>
              <ButtonGroup size="small">
                {metricButtons.map(({ metric: optionMetric, label }) => (
                  <Button
                    key={optionMetric}
                    onClick={setMetricTarget(optionMetric)}
                    sx={{ color: metric === optionMetric ? 'orange' : 'secondary.main' }}
                  >
                    {label}
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>
            <Box sx={{ overflowX: 'auto' }}>
              <svg width={heatmapWidth} height={heatmapHeight} role="img" aria-label="Activity heatmap">
                {monthLabels.map((month) => (
                  <text
                    key={`month-${month.label}-${month.x}`}
                    x={month.x}
                    y={12}
                    fill={theme.palette.text.secondary}
                    fontSize={10}
                  >
                    {month.label}
                  </text>
                ))}
                {weekdayLabels.map((day) => (
                  <text
                    key={`weekday-${day.label}-${day.y}`}
                    x={0}
                    y={day.y}
                    fill={theme.palette.text.secondary}
                    fontSize={10}
                    dominantBaseline="middle"
                  >
                    {day.label}
                  </text>
                ))}
                <HeatmapRect<ActivityColumn, ActivityBin>
                  data={activityColumns}
                  xScale={(columnIndex) => LEFT_LABEL_SPACE + (columnIndex * CELL_SIZE)}
                  yScale={(rowIndex) => TOP_LABEL_SPACE + (rowIndex * CELL_SIZE)}
                  bins={(column) => column.bins}
                  count={(bin) => bin.count}
                  colorScale={colorScale}
                  binWidth={CELL_SIZE}
                  binHeight={CELL_SIZE}
                  gap={CELL_GAP}
                >
                  {(heatmap) => heatmap.map((week) => week.map((cell) => (
                    <rect
                      key={`activity-${cell.column}-${cell.row}`}
                      x={cell.x}
                      y={cell.y}
                      width={cell.width}
                      height={cell.height}
                      fill={cell.color}
                      rx={2}
                    >
                      <title>
                        {`${cell.bin.count} ${metricLabel} - ${dayjs.utc(cell.bin.date).format('YYYY-MM-DD')}`}
                      </title>
                    </rect>
                  )))}
                </HeatmapRect>
              </svg>
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};
