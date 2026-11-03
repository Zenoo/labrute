import {
  BATTLE_ROYALE_MIN_RADIUS,
  BATTLE_ROYALE_SCOUT_COOLDOWN_MS,
  BattleRoyaleBruteView,
  BattleRoyaleKnownTile,
  BattleRoyalePerk,
  BattleRoyaleStateResponse,
  BattleRoyaleTileType,
  getAvailableMoves,
  getTileKey,
  isInsideBattleRoyaleMap,
} from '@labrute/core';
import { Brute } from '@labrute/prisma';
import {
  Box, Dialog, DialogActions, DialogContent, Tooltip
} from '@mui/material';
import { keyframes } from '@mui/system';
import dayjs from 'dayjs';
import { autoDetectRenderer, Renderer } from 'pixi.js';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../../hooks/useAlert';
import { useBrute } from '../../hooks/useBrute';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { renderMiniFighter } from '../../utils/fight/renderMiniFighter';
import { FantasyButton } from '../FantasyButton';
import { Text } from '../Text';

const TILE_SIZE = 36;
// Age (past the scout cooldown) at which the stripes reach full opacity
const STALE_FULL_MS = 12 * 60 * 60 * 1000;

const pulse = keyframes`
  0% { box-shadow: inset 0 0 0 2px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: inset 0 0 0 4px rgba(255, 215, 0, 1); }
  100% { box-shadow: inset 0 0 0 2px rgba(255, 215, 0, 0.3); }
`;

const TILE_COLORS: Record<BattleRoyaleTileType, string> = {
  plain: '#8fbf6a',
  difficult: '#8a6d3b',
  barrier: '#3b3b3b',
};

type Props = {
  eventId: string;
  brute: Pick<Brute, 'id' | 'name' | 'gender' | 'body' | 'colors'>;
}

type MapBrute = BattleRoyaleBruteView & { team: 'L' | 'R' };

export const BattleRoyaleMap = ({ eventId, brute }: Props) => {
  const { t } = useTranslation('event');
  const Alert = useAlert();
  const Server = useServer();

  const [state, setState] = useState<BattleRoyaleStateResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [miniFighters, setMiniFighters] = useState<Record<string, string>>({});
  const [now, setNow] = useState(Date.now());
  const navigate = useNavigate();
  const { updateBrute } = useBrute();
  const [perkNotice, setPerkNotice] = useState<BattleRoyalePerk | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const requestedRef = useRef(new Set<string>());

  useEffect(() => {
    Server.Event.getBattleRoyale(eventId, brute.id)
      .then(setState)
      .catch(catchError(Alert));
  }, [Alert, Server.Event, brute.id, eventId]);

  // Tick for the scout cooldown
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Brutes to render on the map: our own and the ones seen by scouting
  const visibleBrutes = useMemo(() => {
    const brutes = new Map<string, MapBrute>([[brute.id, { ...brute, team: 'L' as const }]]);
    Object.values(state?.knownTiles ?? {}).forEach((known) => {
      if (known.brute && !brutes.has(known.brute.id)) {
        brutes.set(known.brute.id, { ...known.brute, team: 'R' as const });
      }
    });
    return [...brutes.values()];
  }, [brute, state?.knownTiles]);

  // Render mini fighters outside of any Pixi application
  useEffect(() => {
    const missing = visibleBrutes.filter((b) => !requestedRef.current.has(b.id));
    if (!missing.length) return;
    missing.forEach((b) => requestedRef.current.add(b.id));

    (async () => {
      try {
        if (!rendererRef.current) {
          rendererRef.current = await autoDetectRenderer({
            backgroundAlpha: 0,
            width: 200,
            height: 200,
            antialias: true,
          });
        }
        for (const b of missing) {
          if (!rendererRef.current) return;
          try {
            const image = await renderMiniFighter(rendererRef.current, b, { team: b.team });
            setMiniFighters((prev) => ({ ...prev, [b.id]: image }));
          } catch {
            // The map stays usable with a plain marker
          }
        }
      } catch {
        // Renderer unavailable
      }
    })();
  }, [visibleBrutes]);

  useEffect(() => () => {
    rendererRef.current?.destroy();
    rendererRef.current = null;
  }, []);

  const getType = useCallback((x: number, y: number) => {
    if (!state) return undefined;
    const known = state.knownTiles[getTileKey(x, y)];
    if (known) return known.type;
    return state.fullMap?.find((tile) => tile.x === x && tile.y === y)?.type;
  }, [state]);

  const availableMoves = useMemo(() => {
    if (!state || state.eliminated || state.resolved) return new Set<string>();
    return new Set(
      getAvailableMoves(state.position, state.movesLeft, state.radius, getType)
        .map(({ x, y }) => getTileKey(x, y)),
    );
  }, [getType, state]);

  const move = (x: number, y: number) => {
    if (busy) return;
    setBusy(true);
    Server.Event.moveBattleRoyale(eventId, brute.id, { x, y })
      .then(({
        fightId, perk, xpGained, ...newState
      }) => {
        setState(newState);
        if (xpGained) {
          updateBrute((b) => (b ? { ...b, xp: b.xp + xpGained } : null));
        }
        if (fightId) {
          // A fight was triggered, show it right away
          navigate(`/${brute.name}/fight/${fightId}`, { state: { battleRoyaleEventId: eventId } });
          return;
        }
        if (perk?.type === 'vision') {
          Alert.open('info', t('br.visionPerkNotice', { count: perk.value }));
          setPerkNotice(null);
        } else {
          setPerkNotice(perk);
        }
      })
      .catch(catchError(Alert))
      .finally(() => setBusy(false));
  };

  const scout = () => {
    if (busy) return;
    setBusy(true);
    Server.Event.scoutBattleRoyale(eventId, brute.id)
      .then(setState)
      .catch(catchError(Alert))
      .finally(() => setBusy(false));
  };

  if (!state) return null;

  const nextScout = state.lastScoutAt
    ? new Date(state.lastScoutAt).getTime() + BATTLE_ROYALE_SCOUT_COOLDOWN_MS
    : 0;
  const canScout = !state.eliminated && !state.resolved && nextScout <= now;

  const range = state.radius;
  const rows: number[] = [];
  const columns: number[] = [];
  for (let i = -range; i <= range; i++) {
    rows.push(i);
    columns.push(i);
  }

  const fullMap = new Map(state.fullMap?.map((tile) => [getTileKey(tile.x, tile.y), tile]));

  const renderTile = (x: number, y: number) => {
    if (!isInsideBattleRoyaleMap(x, y, state.radius)) {
      return <Box key={`${x},${y}`} sx={{ width: TILE_SIZE, height: TILE_SIZE }} />;
    }

    const key = getTileKey(x, y);
    const known: BattleRoyaleKnownTile | undefined = state.knownTiles[key];
    const full = fullMap.get(key);
    const type = known?.type ?? full?.type;
    const perk = known?.perk ?? full?.perk;
    const isSelf = state.position.x === x && state.position.y === y;
    const isMove = availableMoves.has(key);
    const tileBrute = isSelf ? brute : known?.brute;

    const nextRadius = Math.max(BATTLE_ROYALE_MIN_RADIUS, state.radius - 1);
    const isDanger = !state.resolved
      && state.radius > BATTLE_ROYALE_MIN_RADIUS
      && !isInsideBattleRoyaleMap(x, y, nextRadius);
    const staleness = known
      ? Math.min(
        1,
        Math.max(0, now - new Date(known.scoutedAt).getTime() - BATTLE_ROYALE_SCOUT_COOLDOWN_MS)
        / STALE_FULL_MS,
      )
      : 0;

    const tooltip = [
      type ? t(`br.tile.${type}`) : null,
      perk ? t(`br.perk.${perk.type}`, { count: perk.value }) : null,
      tileBrute ? (isSelf ? t('br.you') : tileBrute.name) : null,
      known ? t('br.scouted', { time: dayjs(known.scoutedAt).fromNow() }) : null,
      isDanger ? t('br.dangerTile') : null,
    ].filter(Boolean).join(' - ');

    return (
      <Tooltip key={key} title={tooltip} disableHoverListener={!tooltip}>
        <Box
          onClick={isMove ? () => move(x, y) : undefined}
          sx={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            boxSizing: 'border-box',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            bgcolor: type ? TILE_COLORS[type] : 'rgba(0, 0, 0, 0.6)',
            cursor: isMove ? 'pointer' : 'default',
            animation: isMove ? `${pulse} 1.2s infinite` : undefined,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            lineHeight: 1,
            // Diagonal stripes, more opaque the older the scout
            '&::before': staleness > 0 ? {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.15 + staleness * 0.85,
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.55) 0 3px, transparent 3px 7px)',
            } : undefined,
            // Tiles that will be eliminated on the next resize
            '&::after': isDanger ? {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 2,
              bgcolor: 'rgba(220, 0, 0, 0.35)',
              boxShadow: 'inset 0 0 0 2px rgba(220, 0, 0, 0.9)',
            } : undefined,
          }}
        >
          {tileBrute ? (
            miniFighters[tileBrute.id] ? (
              <Box
                component="img"
                src={miniFighters[tileBrute.id]}
                alt={isSelf ? t('br.you').toString() : tileBrute.name}
                sx={{
                  maxWidth: TILE_SIZE * 0.9,
                  maxHeight: TILE_SIZE * 0.9,
                  zIndex: 1,
                  // The extracted image ignores the container flip, so mirror opponents here
                  transform: isSelf ? undefined : 'scaleX(-1)',
                }}
              />
            ) : (isSelf ? '🙂' : '⚔')
          ) : perk ? (perk.type === 'level' ? '⭐' : '👁') : null}
        </Box>
      </Tooltip>
    );
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Text bold>
        {t('br.round', { round: state.round })} - {t('br.radius', { radius: state.radius })}
      </Text>
      <Text>
        {t('br.movesLeft', { count: state.movesLeft })} - {t('br.levels', { count: state.level })} - {t('br.vision', { count: state.vision })}
      </Text>
      {state.eliminated && <Text bold color="error">{t('br.eliminated')}</Text>}
      {!state.eliminated && state.resolved && <Text bold>{t('br.resolved')}</Text>}
      {state.alive !== null && <Text>{t('br.alive', { count: state.alive })}</Text>}
      <Box sx={{ overflowX: 'auto', my: 1 }}>
        <Box sx={{ display: 'inline-block', border: '2px solid', borderColor: 'border.shadow' }}>
          {rows.map((y) => (
            <Box key={y} sx={{ display: 'flex' }}>
              {columns.map((x) => renderTile(x, y))}
            </Box>
          ))}
        </Box>
      </Box>
      {!state.eliminated && !state.resolved && (
        <>
          <FantasyButton color="secondary" onClick={scout} disabled={!canScout || busy}>
            {t('br.scout')}
          </FantasyButton>
          {!canScout && (
            <Text sx={{ mt: 1 }}>
              {t('br.scoutCooldown', { time: dayjs(nextScout).format('HH:mm') })}
            </Text>
          )}
        </>
      )}
      <Dialog open={perkNotice?.type === 'level'} onClose={() => setPerkNotice(null)}>
        <DialogContent>
          <Text>{t('br.levelPerkNotice', { count: perkNotice?.value ?? 0 })}</Text>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <FantasyButton color="success" to={`/${brute.name}/level-up`}>
            {t('br.goToLevelUp')}
          </FantasyButton>
          <FantasyButton color="secondary" onClick={() => setPerkNotice(null)}>
            {t('br.close')}
          </FantasyButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
