declare module 'convert-svg-to-png' {
  export function convert(svg: string | Buffer): Promise<Buffer>;
}