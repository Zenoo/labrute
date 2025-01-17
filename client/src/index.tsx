import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from './components/Loader';
import { LanguageProvider } from './hooks/useLanguage';
import './i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No root element found');
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
