// localStorage keys
export const LS_KEY_CSRF_TOKEN = 'csrfToken';
export const LS_KEY_THEME = 'mode';
export const LS_KEY_MARQUEE_PAUSED = 'marqueePaused';
export const LS_KEY_LANGUAGE = 'language';
export const LS_KEY_FINGERPRINT_LOG = 'x-fp-l';
export const LS_KEY_FIGHT_SPEED = 'fightSpeed';
export const LS_KEY_FIGHT_BACKGROUND_MUSIC = 'fightBackgroundMusic';
export const LS_KEY_PREFIX_EVENT_ROUND_WATCHED = 'eventRoundWatched-';

// Helper functions for dynamic localStorage keys
export const getLSKeyClanWar = (warId?: string) => `clanWar-${warId}`;
export const getLSKeyEventRoundWatched = (eventId: string) => `${LS_KEY_PREFIX_EVENT_ROUND_WATCHED}${eventId}`;
