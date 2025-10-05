import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router';
import { LanguageProvider } from './hooks/useLanguage';
import Root from './root';
import './i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HOST } from './utils/host';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No root element found');
}

// Enable plugins for dayjs
dayjs.extend(utc);
dayjs.extend(relativeTime);

export const analyticsMeasurementIds: Partial<Record<string, string>> = {
  brute: 'G-QKXVBHQVPD',
  labrute: 'G-2B923MBHKJ',
  mybrute: 'G-Y2146LK2E3',
  elbruto: 'G-NWPDW7N12P',
  meinbrutalo: 'G-8J6H1KJ4WV',
};

const analyticsMeasurementId = analyticsMeasurementIds[HOST];
if (analyticsMeasurementId) {
  ReactGA.initialize(analyticsMeasurementId);
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Root />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);

serviceWorker.unregister();
