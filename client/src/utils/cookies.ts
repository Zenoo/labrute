// Get current domain
const getMainDomain = () => {
  const { hostname } = window.location;

  // Don't set domain for localhost or IP addresses
  if (hostname === 'localhost' || hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return '';
  }

  // For actual domains, get the last 2 parts (e.g., eternaltwin.org)
  return hostname.split('.').slice(-2).join('.');
};

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
};

export const setCookie = (name: string, value: string, days: number) => {
  const mainDomain = getMainDomain();
  const domainAttr = mainDomain ? `; domain=${mainDomain}` : '';
  document.cookie = `${name}=${value}; path=/${domainAttr}; max-age=${days * 24 * 60 * 60}`;
};

export const deleteCookie = (name: string) => {
  const mainDomain = getMainDomain();
  const domainAttr = mainDomain ? `; domain=${mainDomain}` : '';
  document.cookie = `${name}=; path=/${domainAttr}; max-age=0`;
};
