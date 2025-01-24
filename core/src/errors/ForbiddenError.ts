export class ForbiddenError extends Error {
  constructor(message = '') {
    super(message);
  }
}
