import { Outlet } from 'react-router';
import Main from '../layouts/Main';

export default function Layout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}