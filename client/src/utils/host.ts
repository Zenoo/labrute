export enum Host {
  LaBrute = 'labrute',
  MyBrute = 'mybrute',
  ElBruto = 'elbruto',
  MeinBrutalo = 'meinbrutalo',
}

export const HOST = typeof window !== 'undefined' ? window.location.hostname.split('.')[0] ?? '' : '';
