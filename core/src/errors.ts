export class ExpectedError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export class ForbiddenError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export class LimitError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export class MissingElementError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export class NotFoundError extends Error {
  constructor(message = '') {
    super(message);
  }
}

export class InvalidAPIUseError extends Error {
  userId: string;

  constructor(user: { id: string }, message = '') {
    super(message);
    this.userId = user.id;
  }
}

