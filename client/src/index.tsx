import './index.css';
import './i18n.js';
import * as serviceWorker from './serviceWorker.js';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { LanguageProvider } from './hooks/useLanguage.js';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader.js';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
