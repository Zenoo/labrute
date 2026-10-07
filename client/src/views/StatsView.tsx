import { BruteForRender, UserStatsGetResponse } from '@labrute/core';
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tooltip,
  useTheme
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
import { Settings } from '@mui/icons-material';

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

  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [stats, setStats] = useState<UserStatsGetResponse | null>(null);
  const [brute, setBrute] = useState<BruteForRender | null>(null);
  const [loading, setLoading] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [metric, setMetric] = useState<HeatmapMetric>('xpGained');
  const [dialogBrute, setDialogBrute] = useState<BruteForRender | null>(null);
  const [dialogMonth, setDialogMonth] = useState<number | null>(null);
  const [dialogYear, setDialogYear] = useState<number | null>(null);

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
      entry[metric],
    ]));

    const computedColumns: ActivityColumn[] = Array.from({
      length: computedWeekCount
    }, (_, weekIndex) => {
      const weekStart = gridStart.add(weekIndex * 7, 'day');

      return {
        bins: Array.from({ length: 7 }, (__, dayIndex) => {
          const newDate = weekStart.add(dayIndex, 'day');
          const dateKey = newDate.format('YYYY-MM-DD');
          const inRange = !newDate.isBefore(activityStart) && !newDate.isAfter(today);

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
    for (
      let monthStart = activityStart.startOf('month');
      monthStart.isBefore(today) || monthStart.isSame(today, 'month');
      monthStart = monthStart.add(1, 'month')
    ) {
      const labelDate = monthStart.isBefore(activityStart) ? activityStart : monthStart;
      const weekIndex = Math.floor(labelDate.diff(gridStart, 'day') / 7);
      const x = LEFT_LABEL_SPACE + (weekIndex * CELL_SIZE);

      // Avoid duplicate labels when consecutive month starts map to the same week column.
      if (labels[labels.length - 1]?.x === x) {
        continue;
      }

      labels.push({
        x,
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
  }, [metric, stats?.daily]);

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

  const title = t('stats', {
    name: brute?.name ?? stats?.user.name,
    granularity: typeof month === 'number'
      ? dayjs().month(month).year(year ?? 0).format('MMMM YYYY')
      : year
        ? dayjs().year(year).format('YYYY')
        : t('allTime'),
  });

  useEffect(() => {
    if (!userId) {
      return;
    }

    setLoading(true);

    Server.User.getStats({
      userId,
      month: month ?? undefined,
      year: year ?? undefined,
      bruteId: brute?.id,
    })
      .then(setStats)
      .catch(catchError(Alert))
      .finally(() => {
        setLoading(false);
      });
  }, [Alert, Server.User, brute?.id, month, userId, year]);

  const setMetricTarget = useCallback((target: HeatmapMetric) => () => {
    setMetric(target);
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, []);
  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const filterStats = useCallback(() => {
    setMonth(dialogMonth);
    setYear(dialogYear);
    setBrute(dialogBrute);
    closeSettings();
  }, [closeSettings, dialogBrute, dialogMonth, dialogYear]);

  const changeDialogYear = useCallback((event: SelectChangeEvent<number>) => {
    if (!event.target.value) {
      setDialogMonth(null);
      setDialogYear(null);
      return;
    }
    setDialogYear(+event.target.value);
  }, []);

  const changeDialogMonth = useCallback((event: SelectChangeEvent<string>) => {
    if (!event.target.value) {
      setDialogMonth(null);
      return;
    }
    setDialogMonth(+event.target.value);
  }, []);

  const changeDialogBrute = useCallback((event: SelectChangeEvent<string>) => {
    if (!event.target.value) {
      setDialogBrute(null);
      return;
    }
    const selectedBrute = stats?.user.brutes.find(b => b.id === event.target.value);
    setDialogBrute(selectedBrute ?? null);
  }, [stats?.user.brutes]);

  console.log('stats', stats);

  return (
    <Page
      title={title}
      description="Statistics"
      headerUrl={`/user/${userId}`}
    >
      <Dialog
        open={settingsOpen}
        onClose={closeSettings}
      >
        <DialogTitle>{t('settings')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('settings.desc')}</DialogContentText>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="stats-year-label">{t('year')}</InputLabel>
                <Select
                  labelId="stats-year-label"
                  id="stats-year-select"
                  value={dialogYear ?? ''}
                  label={t('year')}
                  onChange={changeDialogYear}
                >
                  <MenuItem value=""><em>{t('none')}</em></MenuItem>
                  {Array.from({ length: 20 }, (_, i) => {
                    const y = dayjs().year() - i;
                    return (
                      <MenuItem key={y} value={y}>{y}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="stats-month-label">{t('month')}</InputLabel>
                <Select
                  labelId="stats-month-label"
                  id="stats-month-select"
                  value={dialogMonth?.toString() ?? ''}
                  label={t('month')}
                  onChange={changeDialogMonth}
                >
                  <MenuItem value=""><em>{t('none')}</em></MenuItem>
                  {Array.from({ length: 12 }, (_, i) => {
                    return (
                      <MenuItem key={i} value={i.toString()}>{dayjs().month(i).format('MMMM')}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="stats-brute-label">{t('brute')}</InputLabel>
                <Select
                  labelId="stats-brute-label"
                  value={dialogBrute?.id ?? ''}
                  label={t('brute')}
                  onChange={changeDialogBrute}
                >
                  <MenuItem value=""><em>{t('none')}</em></MenuItem>
                  {stats?.user.brutes.map((b) => (
                    <MenuItem key={b.id} value={b.id}>{t(b.name)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeSettings}
            variant="mybrute"
            sx={{ color: 'text.secondary' }}
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={filterStats}
            autoFocus
            variant="mybrute"
            sx={{ color: 'error.main' }}
          >
            {t('filter')}
          </Button>
        </DialogActions>
      </Dialog>
      {(loading || !stats) ? <Loader /> : (
        <>
          <Paper sx={{
            mx: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          >
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 1 }}>{title}</Text>
            <Tooltip title={t('settings')}>
              <IconButton onClick={openSettings}>
                <Settings />
              </IconButton>
            </Tooltip>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2, p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
              <ButtonGroup size="small">
                {METRIC_OPTIONS.map((option) => (
                  <Button
                    key={option}
                    onClick={setMetricTarget(option)}
                    sx={{ color: metric === option ? 'orange' : 'secondary.main' }}
                  >
                    {t(option)}
                  </Button>
                ))}
              </ButtonGroup>
              {/* TODO display another graph for monthly stats */}
              <Box sx={{ overflowX: 'auto' }}>
                <svg width={heatmapWidth} height={heatmapHeight} role="img" aria-label="Activity heatmap">
                  {monthLabels.map((m) => (
                    <text
                      key={`month-${m.label}-${m.x}`}
                      x={m.x}
                      y={12}
                      fill={theme.palette.text.secondary}
                      fontSize={10}
                    >
                      {m.label}
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
                      <Tooltip
                        key={`activity-${cell.column}-${cell.row}`}
                        title={`${cell.bin.count} ${t(metric)} - ${dayjs.utc(cell.bin.date).format('LL')}`}
                        arrow
                      >
                        <rect
                          x={cell.x}
                          y={cell.y}
                          width={cell.width}
                          height={cell.height}
                          fill={cell.color}
                          rx={2}
                        />
                      </Tooltip>
                    )))}
                  </HeatmapRect>
                </svg>
              </Box>
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};
