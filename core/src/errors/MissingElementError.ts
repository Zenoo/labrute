class MissingElementError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export default MissingElementError;