import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from './components/Loader';
import { LanguageProvider } from './hooks/useLanguage';
import './i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { HOST } from './utils/host';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No root element found');
}

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
  <Suspense fallback={<Loader />}>
    <LanguageProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </Suspense>
);

serviceWorker.unregister();
