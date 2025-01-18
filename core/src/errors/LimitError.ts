class LimitError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export default LimitError;