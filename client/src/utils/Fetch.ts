import { ACCEPT_HEADER, AUTHORIZATION_HEADER, CONTENT_TYPE_HEADER, CSRF_COOKIE_NAME, CSRF_HEADER, FINGERPRINT_HEADER, getPredictableHeaders, LANGUAGE_HEADER, TOKEN_COOKIE, USER_COOKIE, VERSION_HEADER, Version } from '@labrute/core';
import { LS_KEY_CSRF_TOKEN } from './constants';
import { getCookie } from './cookies';
import { getFingerprint } from './fingerprint';

type HeadersType = {
  [ACCEPT_HEADER]: string;
  [CSRF_HEADER]: string;
  [AUTHORIZATION_HEADER]: string;
  [CONTENT_TYPE_HEADER]?: string;
  [FINGERPRINT_HEADER]?: string;
  [VERSION_HEADER]: string;
  [LANGUAGE_HEADER]: string;
};

export type ErrorType = {
  message?: string;
  statusText?: string;
  status?: number;
};

export const fetchCsrfToken = async () => new Promise<string>((resolve, reject) => {
  fetch('/api/csrf', {
    headers: {
      [ACCEPT_HEADER]: 'application/json'
    }
  }).then((response) => {
    response.json().then((json) => {
      const { csrfToken } = (json as { csrfToken: string });
      localStorage.setItem(LS_KEY_CSRF_TOKEN, csrfToken);
      resolve(csrfToken);
    }).catch((err) => {
      reject(err);
    });
  }).catch((error) => {
    reject(error);
  });
});

const Fetch = async <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
  const csrfCookie = getCookie(CSRF_COOKIE_NAME);
  const localStorageToken = localStorage.getItem(LS_KEY_CSRF_TOKEN);

  // If localStorage has a token but the session cookie is gone, clear localStorage
  if (localStorageToken && !csrfCookie) {
    localStorage.removeItem(LS_KEY_CSRF_TOKEN);
  }

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

    // Get the CSRF token to use as seed for predictable headers
    const csrfToken = localStorage.getItem(LS_KEY_CSRF_TOKEN) || '';

    const headers: HeadersType = {
      [ACCEPT_HEADER]: 'application/json',
      [CSRF_HEADER]: csrfToken,
      [AUTHORIZATION_HEADER]: user ? `Basic ${btoa(`${user}:${token}`)}` : '',
      [FINGERPRINT_HEADER]: getFingerprint() ?? '',
      [VERSION_HEADER]: Version,
      [LANGUAGE_HEADER]: document.documentElement.lang || 'en',
      ...getPredictableHeaders(csrfToken),
    };

    if (!(data instanceof FormData) && !(data instanceof Blob)) {
      headers[CONTENT_TYPE_HEADER] = 'application/json';
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
