import { Outlet } from 'react-router';
import { ModeratorLayout } from '../../../layouts/ModeratorLayout';

export default function ModeratorPanelLayout() {
  return (
    <ModeratorLayout>
      <Outlet />
    </ModeratorLayout>
  );
}