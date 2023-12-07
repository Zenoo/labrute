/**
 * `dispose` and `asyncDispose` symbols, exported with polyfill.
 *
 * See <https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/#using-declarations-and-explicit-resource-management>
 */

// Ignore the `readonly` error; this is a polyfill
// @ts-expect-error Some readonly shenanigans
Symbol.dispose ??= Symbol('Symbol.dispose');
// @ts-expect-error Some readonly shenanigans
Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose');

export const DISPOSE: typeof Symbol.dispose = Symbol.dispose;
export const ASYNC_DISPOSE: typeof Symbol.asyncDispose = Symbol.asyncDispose;
