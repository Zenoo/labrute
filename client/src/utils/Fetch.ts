type HeadersType = {
  Accept: string;
  'Csrf-Token': string;
  Authorization: string;
  'Content-Type'?: string;
};

const Fetch = <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
  let body: Blob | FormData | string | null = null;
  let finalUrl = url;

  if (method === 'GET') {
    finalUrl += `?${new URLSearchParams({ ...data, ...additionalURLParams }).toString()}`;
  } else {
    finalUrl += `?${new URLSearchParams({ ...additionalURLParams }).toString()}`;
    body = (data instanceof FormData || data instanceof Blob) ? data : JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    const user = localStorage.getItem('user') || '';
    const token = localStorage.getItem('password')|| '';
    const headers: HeadersType = {
      Accept: 'application/json',
      'Csrf-Token': 'nocheck',
      Authorization: localStorage.getItem('user') ? `Basic ${btoa(`${user}:${token}`)}` : ''
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
            }).catch((error) => {
              reject(error);
            });
          }
          json.then((processedJson: ReturnType) => {
            reject(processedJson);
          }).catch((error) => {
            reject(error);
          });
        }

        reject(response.statusText);
      }).catch((error: unknown) => {
        reject(error);
      });
  });
};

export default Fetch;
