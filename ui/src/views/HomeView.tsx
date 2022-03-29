import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';

/**
 * HomeView component
 * @returns {React.ReactElement}
 */
const HomeView = () => {
  const { t } = useTranslation('home');

  return (
    <Page title={t('title')}>
      TODO
    </Page>
  );
};

export default HomeView;
