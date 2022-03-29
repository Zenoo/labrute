type HeadersType = {
  Accept: string;
  'Csrf-Token': string;
  Authorization: string;
  'Content-Type'?: string;
};

const Fetch = (url: string, data = {}, method: string = 'GET', additionalURLParams = {}): Promise<any> => {
  let body: Blob | FormData | string | null = null;
  let finalUrl = url;

  if (method === 'GET') {
    finalUrl += `?${new URLSearchParams({ ...data, ...additionalURLParams })}`;
  } else {
    finalUrl += `?${new URLSearchParams({ ...additionalURLParams })}`;
    body = (data instanceof FormData || data instanceof Blob) ? data : JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    const headers: HeadersType = {
      Accept: 'application/json',
      'Csrf-Token': 'nocheck',
      Authorization: localStorage.getItem('user') ? `Basic ${btoa(`${localStorage.getItem('user')}:${localStorage.getItem('token')}`)}` : ''
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
            return json.then((processedJson) => {
              resolve(processedJson);
              return processedJson;
            });
          }
          return json.then((processedJson) => {
            reject(processedJson);
            return processedJson;
          });
        }

        reject(response.statusText);
        return response.statusText;
      });
  });
};

export default Fetch;
