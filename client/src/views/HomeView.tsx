import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

/**
 * HomeView component
 * @returns {React.ReactElement}
 */
const HomeView = () => {
  const { t } = useTranslation('home');
  const [users] = useStateAsync([], Server.User.list);

  return (
    <Page title={t('title')}>
      {users.map((user) => (
        <div key={user.id}>
          {user.login}
        </div>
      ))}
    </Page>
  );
};

export default HomeView;
