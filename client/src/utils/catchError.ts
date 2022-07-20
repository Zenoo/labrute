import { TFunction } from 'react-i18next';
import { AlertContextInterface } from '../hooks/useAlert';

const catchError = (Alert: AlertContextInterface, t: TFunction) => (error: string) => {
  Alert.open('error', t(`common:${error.replaceAll(' ', '')}`));
};

export default catchError;
