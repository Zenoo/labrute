class NotFoundError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export default NotFoundError;
