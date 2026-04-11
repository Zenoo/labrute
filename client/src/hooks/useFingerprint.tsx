import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import FingerprintJS, { GetResult } from '@fingerprintjs/fingerprintjs';
import Server from '../utils/Server';
import { setFingerprint } from '../utils/fingerprint';
import { useCsrf } from './useCsrf';

type FingerprintContext = {
  loading: boolean;
  id: string | null;
  data: GetResult | null;
  error: unknown;
  eventId: string | null;
};

const FingerprintContext = createContext<FingerprintContext>({
  loading: true,
  id: null,
  data: null,
  error: null,
  eventId: null,
});

export const useFingerprint = (): FingerprintContext => useContext(FingerprintContext);

type FingerprintProviderProps = {
  children: React.ReactNode;
};

export const FingerprintProvider = ({ children }: FingerprintProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);
  const [eventId, setEventId] = useState<string | null>(null);
  const [data, setData] = useState<GetResult | null>(null);
  const [error, setError] = useState<unknown>(null);
  const { csrfToken } = useCsrf();

  useEffect(() => {
    let isMounted = true;

    if (!csrfToken) {
      return () => { isMounted = false; };
    }

    const process = async () => {
      const result = await (await FingerprintJS.load()).get();
      if (isMounted) {
        setData(result);
        Server.fpe(result)
          .then((d) => {
            setId(d.visitorId);
            setEventId(d.eventId);
            setFingerprint(d.visitorId);
            setLoading(false);
          })
          .catch((err) => {
            console.error('Failed to send fingerprint to server:', err);
            setError(err);
            setLoading(false);
          });
      }
    };

    process().catch((err) => {
      if (isMounted) {
        setError(err);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [csrfToken]);

  const contextValue = useMemo(() => ({
    loading,
    id,
    data,
    error,
    eventId,
  }), [loading, id, data, error, eventId]);

  return (
    <FingerprintContext.Provider value={contextValue}>
      {children}
    </FingerprintContext.Provider>
  );
};
