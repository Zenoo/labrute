import { Outlet } from 'react-router';
import { AdminLayout } from '../../layouts/AdminLayout';

export default function AdminPanelLayout() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}