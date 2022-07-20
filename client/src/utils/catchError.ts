import { TFunction } from 'react-i18next';
import { AlertContextInterface } from '../hooks/useAlert';
import { ErrorType } from './Fetch';

const catchError = (Alert: AlertContextInterface, t: TFunction) => (error: ErrorType | string) => {
  const errorMessage = typeof error === 'string'
    ? error
    : error.message
      ? error.message.startsWith('<!DOCTYPE html>')
        ? t(`common:${error.statusText.replaceAll(' ', '')}`)
        : error.message
      : t(`common:${error.statusText.replaceAll(' ', '')}`);
  Alert.open('error', errorMessage);
};

export default catchError;
