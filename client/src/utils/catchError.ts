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

  const errorMessage = knownError.message
    ? knownError.message.includes('<h1>404 Not Found</h1>')
      ? knownError.statusText
      : knownError.message
    : knownError.statusText;

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
