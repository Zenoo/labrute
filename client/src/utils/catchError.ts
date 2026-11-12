import { AlertContextInterface } from '../hooks/useAlert';
import { ErrorType } from './Fetch';

const catchErrorHandler = (Alert: AlertContextInterface, error: unknown) => {
  if (typeof error === 'string') {
    Alert.open('error', error);

    return;
  }

  if (!(typeof error === 'object' && error !== null)) {
    Alert.open('error', 'An unknown error occurred');

    return;
  }

  const knownError = error as ErrorType;

  let errorMessage;

  if (knownError.message) {
    if (knownError.message.includes('<h1>404 Not Found</h1>')) {
      errorMessage = knownError.statusText;
    } else {
      errorMessage = knownError.message;
    }
  } else {
    errorMessage = knownError.statusText;
  }

  Alert.open('error', errorMessage ?? 'An unknown error occurred');
};

export function catchError(Alert: AlertContextInterface): (error: unknown) => void;
export function catchError(Alert: AlertContextInterface, error: unknown): void;

export function catchError(Alert: AlertContextInterface, error?: unknown) {
  if (error === undefined) {
    return (_error: unknown) => {
      catchErrorHandler(Alert, _error);
    };
  }

  catchErrorHandler(Alert, error);

  return undefined;
}

export const isError = (error: unknown, code: number): boolean => {
  if (typeof error === 'object' && error !== null && 'status' in error) {
    return error.status === code;
  }

  return false;
};
