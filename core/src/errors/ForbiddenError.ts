class ForbiddenError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export default ForbiddenError;
