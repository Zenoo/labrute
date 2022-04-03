import './index.css';
import './i18n';
import * as serviceWorker from './serviceWorker';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './hooks/useLanguage';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';

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
