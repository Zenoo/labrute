class NotFoundError extends Error {
  constructor(message :string = '') {
    super(message);
  }
}

export default NotFoundError;