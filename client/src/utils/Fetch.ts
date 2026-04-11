import { TOKEN_COOKIE, USER_COOKIE } from '@labrute/core';
import { getCookie } from './cookies';
import { getFingerprint } from './fingerprint';

type HeadersType = {
  Accept: string;
  'x-csrf-token': string;
  Authorization: string;
  'Content-Type'?: string;
  'x-fp'?: string;
};

export type ErrorType = string | {
  message: string;
  statusText: string;
  status: number;
};

const waitForFingerprint = async () => {
  let fingerprintWaitRetryCount = 0;
  const fingerprint = getFingerprint();
  if (fingerprint) return;

  await new Promise<void>((resolve, reject) => {
    const check = () => {
      const retryFingerprint = getFingerprint();
      if (retryFingerprint) resolve();
      else {
        fingerprintWaitRetryCount++;
        if (fingerprintWaitRetryCount > 100) {
          console.error('Fingerprint is taking too long to load');
          reject(new Error('Fingerprint loading timeout'));
        } else {
          setTimeout(check, 50);
        }
      }
    };
    check();
  });
};

const Fetch = async <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}, skipFingerprint = false): Promise<ReturnType> => {
  if (!skipFingerprint) {
    await waitForFingerprint();
  }

  // Check if the CSRF token is present in the localStorage
  // If not, fetch it from the server
  if (!localStorage.getItem('csrfToken')) {
    return new Promise((resolve, reject) => {
      fetch('/api/csrf', {
        headers: {
          Accept: 'application/json'
        }
      }).then((response) => {
        response.json().then((json) => {
          localStorage.setItem('csrfToken', (json as { csrfToken: string }).csrfToken);
          resolve(Fetch(url, data, method, additionalURLParams));
        }).catch((err) => {
          reject(err);
        });
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

    const headers: HeadersType = {
      Accept: 'application/json',
      'x-csrf-token': localStorage.getItem('csrfToken') || '',
      Authorization: user ? `Basic ${btoa(`${user}:${token}`)}` : '',
      'x-fp': getFingerprint() ?? ''
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
