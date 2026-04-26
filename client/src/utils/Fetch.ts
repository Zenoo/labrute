import { getPredictableHeaders, TOKEN_COOKIE, USER_COOKIE, Version } from '@labrute/core';
import dayjs from 'dayjs';
import { LS_KEY_CSRF_TOKEN, LS_KEY_SERVER_TIME_OFFSET } from './constants';
import { getCookie } from './cookies';
import { getFingerprint } from './fingerprint';

type HeadersType = {
  Accept: string;
  'x-csrf-token': string;
  Authorization: string;
  'Content-Type'?: string;
  'x-fp'?: string;
  'x-brute-version': string;
  'x-brute-lang': string;
};

export type ErrorType = {
  message?: string;
  statusText?: string;
  status?: number;
};

export const fetchCsrfToken = async () => new Promise<string>((resolve, reject) => {
  const clientTime = dayjs().utc().valueOf();
  fetch('/api/csrf', {
    headers: {
      Accept: 'application/json'
    }
  }).then((response) => {
    response.json().then((json) => {
      const { csrfToken, serverTime } = (json as { csrfToken: string; serverTime: string });
      localStorage.setItem(LS_KEY_CSRF_TOKEN, csrfToken);

      // Calculate and store server time offset
      if (serverTime) {
        const serverTimestamp = dayjs(serverTime).utc().valueOf();
        const offset = serverTimestamp - clientTime;
        localStorage.setItem(LS_KEY_SERVER_TIME_OFFSET, offset.toString());
      }

      resolve(csrfToken);
    }).catch((err) => {
      reject(err);
    });
  }).catch((error) => {
    reject(error);
  });
});

const Fetch = async <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
  // Check if the CSRF token is present in the localStorage
  // If not, fetch it from the server
  if (!localStorage.getItem(LS_KEY_CSRF_TOKEN)) {
    return new Promise((resolve, reject) => {
      fetchCsrfToken().then(() => {
        resolve(Fetch(url, data, method, additionalURLParams));
      }).catch((error) => {
        reject(error);
      });
    });
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

    // Get server time offset for accurate header generation
    const serverTimeOffset = localStorage.getItem(LS_KEY_SERVER_TIME_OFFSET);
    const offset = serverTimeOffset ? +serverTimeOffset : undefined;

    const headers: HeadersType = {
      Accept: 'application/json',
      'x-csrf-token': localStorage.getItem(LS_KEY_CSRF_TOKEN) || '',
      Authorization: user ? `Basic ${btoa(`${user}:${token}`)}` : '',
      'x-fp': getFingerprint() ?? '',
      'x-brute-version': Version,
      'x-brute-lang': document.documentElement.lang || 'en',
      ...getPredictableHeaders(undefined, offset),
    };

    if (!(data instanceof FormData) && !(data instanceof Blob)) {
      headers['Content-Type'] = 'application/json';
    }
    fetch(finalUrl, {
      headers,
      method,
      body
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
