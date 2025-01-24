export enum Host {
  LaBrute = 'labrute',
  MyBrute = 'mybrute',
  ElBruto = 'elbruto',
  MeinBrutalo = 'meinbrutalo',
}

export const HOST = window.location.hostname.split('.')[0] ?? '';
