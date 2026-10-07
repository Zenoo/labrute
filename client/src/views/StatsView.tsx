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
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
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

type ActivityBin = {
  count: number;
  date: string;
  isCurrentDay: boolean;
};

type MonthlyDay = {
  date: string;
  label: string;
  count: number;
  isCurrentDay: boolean;
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
const MONTHLY_BAR_AREA_HEIGHT = 140;
const MONTHLY_BAR_MIN_STEP = 16;
const MONTHLY_BAR_CHART_MARGIN = {
  top: 8,
  right: 8,
  bottom: 22,
  left: 8,
};

type ComputedHeatmap = {
  activityColumns: ActivityColumn[];
  maxCount: number;
  heatmapWidth: number;
  heatmapHeight: number;
  monthLabels: { x: number; label: string }[];
  weekdayLabels: { y: number; label: string }[];
};

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

  const dailyCountsByDate = useMemo(
    () => new Map<string, number>((stats?.daily ?? []).map((entry) => [
      dayjs.utc(entry.date).format('YYYY-MM-DD'),
      entry[metric],
    ])),
    [metric, stats?.daily],
  );

  const buildHeatmap = useCallback(
    (activityStart: dayjs.Dayjs, activityEnd: dayjs.Dayjs): ComputedHeatmap => {
      const today = dayjs.utc().startOf('day');
      const normalizedStart = activityStart.startOf('day');
      const normalizedEnd = activityEnd.startOf('day');
      const gridStart = normalizedStart.subtract(normalizedStart.day(), 'day');
      const totalDays = normalizedEnd.diff(gridStart, 'day') + 1;
      const computedWeekCount = Math.ceil(totalDays / 7);

      const computedColumns: ActivityColumn[] = Array.from(
        { length: computedWeekCount },
        (_, weekIndex) => {
          const weekStart = gridStart.add(weekIndex * 7, 'day');

          return {
            bins: Array.from({ length: 7 }, (__, dayIndex) => {
              const newDate = weekStart.add(dayIndex, 'day');
              const dateKey = newDate.format('YYYY-MM-DD');
              const inRange = !newDate.isBefore(normalizedStart) && !newDate.isAfter(normalizedEnd);

              return {
                date: dateKey,
                count: inRange ? (dailyCountsByDate.get(dateKey) ?? 0) : 0,
                isCurrentDay: newDate.isSame(today, 'day'),
              };
            }),
          };
        },
      );

      const computedMaxCount = Math.max(
        ...computedColumns.flatMap((column) => column.bins.map((bin) => bin.count)),
        0,
      );

      const labels: { x: number; label: string }[] = [];
      for (
        let monthStart = normalizedStart.startOf('month');
        monthStart.isBefore(normalizedEnd) || monthStart.isSame(normalizedEnd, 'month');
        monthStart = monthStart.add(1, 'month')
      ) {
        const labelDate = monthStart.isBefore(normalizedStart) ? normalizedStart : monthStart;
        const weekIndex = Math.floor(labelDate.diff(gridStart, 'day') / 7);
        const x = LEFT_LABEL_SPACE + (weekIndex * CELL_SIZE);

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
    },
    [dailyCountsByDate],
  );

  const selectedYear = year ?? dayjs.utc().year();
  const yearlyRangeStart = year
    ? dayjs.utc().year(year).startOf('year')
    : dayjs.utc().startOf('day').subtract(364, 'day');
  const yearlyRangeEnd = year
    ? dayjs.utc().year(year).endOf('year').startOf('day')
    : dayjs.utc().startOf('day');

  const yearlyHeatmap = useMemo(
    () => buildHeatmap(yearlyRangeStart, yearlyRangeEnd),
    [buildHeatmap, yearlyRangeEnd, yearlyRangeStart],
  );

  const monthlyData = useMemo(() => {
    if (month === null) {
      return null;
    }

    const monthStart = dayjs.utc().year(selectedYear).month(month).startOf('month');
    const monthEnd = monthStart.endOf('month').startOf('day');
    const daysInMonth = monthEnd.date();
    const today = dayjs.utc().startOf('day');

    const days: MonthlyDay[] = Array.from({ length: daysInMonth }, (_, index) => {
      const date = monthStart.add(index, 'day');
      const dateKey = date.format('YYYY-MM-DD');

      return {
        date: dateKey,
        label: date.format('D'),
        count: dailyCountsByDate.get(dateKey) ?? 0,
        isCurrentDay: date.isSame(today, 'day'),
      };
    });

    const max = Math.max(...days.map((day) => day.count), 0);

    return {
      days,
      max,
    };
  }, [dailyCountsByDate, month, selectedYear]);

  const activityColors = useMemo(() => (theme.palette.mode === 'dark'
    ? ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    : ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']), [theme.palette.mode]);

  const getColorScale = useCallback(
    (max: number) => (countValue: number | { valueOf(): number }) => {
      const count = Number(countValue?.valueOf?.() ?? countValue);

      if (count <= 0) {
        return activityColors[0];
      }

      if (max <= 1) {
        return activityColors[4];
      }

      const ratio = count / max;

      if (ratio <= 0.25) return activityColors[1];
      if (ratio <= 0.5) return activityColors[2];
      if (ratio <= 0.75) return activityColors[3];

      return activityColors[4];
    },
    [activityColors],
  );

  const renderHeatmap = useCallback((computedHeatmap: ComputedHeatmap) => {
    const colorScale = getColorScale(computedHeatmap.maxCount);

    return (
      <Box sx={{ overflowX: 'auto' }}>
        <svg width={computedHeatmap.heatmapWidth} height={computedHeatmap.heatmapHeight} role="img" aria-label="Activity heatmap">
          {computedHeatmap.monthLabels.map((m) => (
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
          {computedHeatmap.weekdayLabels.map((day) => (
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
            data={computedHeatmap.activityColumns}
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
                  stroke={cell.bin.isCurrentDay ? theme.palette.warning.main : undefined}
                  strokeWidth={cell.bin.isCurrentDay ? 2 : 0}
                />
              </Tooltip>
            )))}
          </HeatmapRect>
        </svg>
      </Box>
    );
  }, [getColorScale, metric, t, theme.palette.text.secondary, theme.palette.warning.main]);

  const renderMonthlyBars = useCallback((days: MonthlyDay[], max: number) => {
    const innerWidth = Math.max(days.length * MONTHLY_BAR_MIN_STEP, 520);
    const chartWidth = innerWidth
      + MONTHLY_BAR_CHART_MARGIN.left
      + MONTHLY_BAR_CHART_MARGIN.right;
    const chartHeight = MONTHLY_BAR_AREA_HEIGHT
      + MONTHLY_BAR_CHART_MARGIN.top
      + MONTHLY_BAR_CHART_MARGIN.bottom;

    const xScale = scaleBand<string>({
      domain: days.map((day) => day.date),
      range: [MONTHLY_BAR_CHART_MARGIN.left, MONTHLY_BAR_CHART_MARGIN.left + innerWidth],
      padding: 0.25,
    });

    const yScale = scaleLinear<number>({
      domain: [0, Math.max(max, 1)],
      range: [MONTHLY_BAR_CHART_MARGIN.top + MONTHLY_BAR_AREA_HEIGHT, MONTHLY_BAR_CHART_MARGIN.top],
      nice: true,
    });

    const baselineY = MONTHLY_BAR_CHART_MARGIN.top + MONTHLY_BAR_AREA_HEIGHT;
    const colorScale = getColorScale(max);

    return (
      <Box sx={{ width: 1, overflowX: 'auto', pb: 1, textAlign: 'center' }}>
        <svg width={chartWidth} height={chartHeight} role="img" aria-label="Monthly activity bars">
          {days.map((day, index) => {
            const x = xScale(day.date);
            if (x === undefined) {
              return null;
            }

            const y = yScale(day.count);
            const barHeight = Math.max(2, baselineY - y);

            return (
              <g key={day.date}>
                <Tooltip
                  title={`${day.count} ${t(metric)} - ${dayjs.utc(day.date).format('LL')}`}
                  arrow
                >
                  <g>
                    <Bar
                      x={x}
                      y={y}
                      width={xScale.bandwidth()}
                      height={barHeight}
                      fill={colorScale(day.count)}
                      rx={3}
                    />
                    {day.isCurrentDay && (
                      <Bar
                        x={x - 1}
                        y={Math.max(MONTHLY_BAR_CHART_MARGIN.top, y - 1)}
                        width={xScale.bandwidth() + 2}
                        height={Math.max(2, barHeight + 2)}
                        fill="transparent"
                        stroke={theme.palette.warning.main}
                        strokeWidth={2}
                        rx={4}
                      />
                    )}
                  </g>
                </Tooltip>
                {(index === 0 || (index + 1) % 5 === 0 || index === days.length - 1) && (
                  <text
                    x={x + (xScale.bandwidth() / 2)}
                    y={chartHeight - 6}
                    textAnchor="middle"
                    fill={theme.palette.text.secondary}
                    fontSize={10}
                  >
                    {day.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </Box>
    );
  }, [getColorScale, metric, t, theme.palette.text.secondary, theme.palette.warning.main]);

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

    if (!dialogYear) {
      setDialogYear(dayjs().year());
    }
  }, [dialogYear]);

  const changeDialogBrute = useCallback((event: SelectChangeEvent<string>) => {
    if (!event.target.value) {
      setDialogBrute(null);
      return;
    }
    const selectedBrute = stats?.user.brutes.find(b => b.id === event.target.value);
    setDialogBrute(selectedBrute ?? null);
  }, [stats?.user.brutes]);

  console.log(stats);

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
              {!monthlyData && renderHeatmap(yearlyHeatmap)}
              {monthlyData && (
                renderMonthlyBars(monthlyData.days, monthlyData.max)
              )}
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};
