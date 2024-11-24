import { AlertContextInterface } from '../hooks/useAlert';
import { ErrorType } from './Fetch';

const catchError = (Alert: AlertContextInterface) => (error: ErrorType | string) => {
  const errorMessage = typeof error === 'string'
    ? error
    : error.message
      ? error.message.includes('<h1>404 Not Found</h1>')
        ? error.statusText
        : error.message
      : error.statusText;
  Alert.open('error', errorMessage);
};

export default catchError;
