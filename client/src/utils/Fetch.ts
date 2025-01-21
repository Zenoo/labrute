import { getCookie } from './cookies';

type HeadersType = {
  Accept: string;
  'x-csrf-token': string;
  Authorization: string;
  'Content-Type'?: string;
};

export type ErrorType = string | {
  message: string;
  statusText: string;
  status: number;
};

const Fetch = <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
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
    const user = getCookie('user') || '';
    const token = getCookie('token') || '';
    const headers: HeadersType = {
      Accept: 'application/json',
      'x-csrf-token': localStorage.getItem('csrfToken') || '',
      Authorization: user ? `Basic ${btoa(`${user}:${token}`)}` : ''
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
              window.location.href = '/generating-tournaments';
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
