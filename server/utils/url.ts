const url = {
  etwin: window.location.hostname === 'localhost'
    ? 'http://localhost:50320'
    : 'https://eternal-twin.net',
  self: window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://labrute.eternal-twin.net',
};

export default url;