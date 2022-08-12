import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import Loader from './components/Loader.js';
import { LanguageProvider } from './hooks/useLanguage.js';
import './i18n.js';
import './index.css';
import * as serviceWorker from './serviceWorker.js';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No root element found');
}

const root = createRoot(container);
root.render(
  <Suspense fallback={<Loader />}>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </Suspense>
);

serviceWorker.unregister();
