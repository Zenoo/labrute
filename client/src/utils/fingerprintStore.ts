// A simple store for the latest fingerprint event_id
let fingerprint: string | undefined;

export const setFingerprint = (f: string) => {
  fingerprint = f;
};

export const getFingerprint = () => fingerprint;
