import { useEffect } from 'react';
import { useLocation } from 'react-router';
import ReactGA from 'react-ga4';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (ReactGA.isInitialized) {
      // Track pageview with react-ga4
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname,
        title: document.title,
      });
    }
  }, [location]);
};
