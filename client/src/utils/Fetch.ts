import { CSRF_HEADER, FINGERPRINT_HEADER, getPredictableHeaders, LANGUAGE_HEADER, TOKEN_COOKIE, USER_COOKIE, VERSION_HEADER, Version } from '@labrute/core';
import { LS_KEY_CSRF_TOKEN } from './constants';
import { getCookie } from './cookies';
import { getFingerprint } from './fingerprint';

type HeadersType = {
  Accept: string;
  [CSRF_HEADER]: string;
  Authorization: string;
  'Content-Type'?: string;
  [FINGERPRINT_HEADER]?: string;
  [VERSION_HEADER]: string;
  [LANGUAGE_HEADER]: string;
};

export type ErrorType = {
  message?: string;
  statusText?: string;
  status?: number;
};

// Prevent multiple concurrent CSRF token fetches
let csrfFetchPromise: Promise<string> | null = null;

export const fetchCsrfToken = async () => {
  // If already fetching, return the existing promise
  if (csrfFetchPromise) {
    return csrfFetchPromise;
  }

  csrfFetchPromise = new Promise<string>((resolve, reject) => {
    fetch('/api/csrf', {
      headers: {
        Accept: 'application/json'
      },
      credentials: 'include', // Important: allows cookies to be set/sent
    }).then((response) => {
      response.json().then((json: { csrfToken: string }) => {
        const { csrfToken } = json;
        // Store token in localStorage (cookie is httpOnly and used by server)
        if (csrfToken) {
          localStorage.setItem(LS_KEY_CSRF_TOKEN, csrfToken);
        }
        csrfFetchPromise = null; // Clear the promise so future calls can fetch again
        resolve(csrfToken);
      }).catch((err) => {
        csrfFetchPromise = null;
        reject(err);
      });
    }).catch((error) => {
      csrfFetchPromise = null;
      reject(error);
    });
  });

  return csrfFetchPromise;
};

const Fetch = async <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
  // Get the CSRF token from localStorage, or fetch if it doesn't exist
  let csrfToken: string | null = localStorage.getItem(LS_KEY_CSRF_TOKEN);

  if (!csrfToken) {
    // Fetch new token (server will set httpOnly cookie AND return token value)
    csrfToken = await fetchCsrfToken();
  }

  let body: Blob | FormData | string | null = null;
  let finalUrl = url;

  if (method === 'GET') {
    finalUrl += `?${new URLSearchParams({ ...data, ...additionalURLParams }).toString()}`;
  } else {
    finalUrl += `?${new URLSearchParams({ ...additionalURLParams }).toString()}`;
    body = (data instanceof FormData || data instanceof Blob) ? data : JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    const user = getCookie(USER_COOKIE) || '';
    const token = getCookie(TOKEN_COOKIE) || '';

    const headers: HeadersType = {
      Accept: 'application/json',
      [CSRF_HEADER]: csrfToken,
      Authorization: user ? `Basic ${btoa(`${user}:${token}`)}` : '',
      [FINGERPRINT_HEADER]: getFingerprint() ?? '',
      [VERSION_HEADER]: Version,
      [LANGUAGE_HEADER]: document.documentElement.lang || 'en',
      ...getPredictableHeaders(csrfToken),
    };

    if (!(data instanceof FormData) && !(data instanceof Blob)) {
      headers['Content-Type'] = 'application/json';
    }
    fetch(finalUrl, {
      headers,
      method,
      body,
      credentials: 'include', // Important: allows cookies to be set/sent
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = response.json();

          if (response.status >= 200 && response.status < 300) {
            json.then((processedJson: ReturnType) => {
              resolve(processedJson);
            }).catch((err) => {
              reject(err);
            });
          } else {
            json.then((processedJson: ReturnType) => {
              reject(processedJson);
            }).catch((err) => {
              reject(err);
            });
          }
        } else {
          response.text().then((text) => {
            if (response.status === 999) {
              if (window.location.pathname !== '/generating-tournaments') {
                window.location.href = '/generating-tournaments';
              }
            }

            reject({
              message: text,
              statusText: response.statusText,
              status: response.status
            });
          }).catch((err) => {
            reject(err);
          });
        }
      }).catch((error) => {
        reject(error);
      });
  });
};

export default Fetch;
