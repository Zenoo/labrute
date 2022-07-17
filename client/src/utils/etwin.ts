const etwin = {
  url: window.location.hostname === 'localhost'
    ? 'http://localhost:50320'
    : 'https://eternal-twin.net',
  fetch: (url: string, params?: RequestInit) => fetch(
    window.location.hostname === 'localhost'
      ? `${etwin.url}${url}`
      : `${etwin.url}${url}`,
    params,
  ),
};

export default etwin;