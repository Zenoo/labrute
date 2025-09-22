import { Outlet } from 'react-router';
import ProvideBrute from '../../../components/Brute/ProvideBrute';

export default function BruteLayout() {
  return (
    <ProvideBrute>
      <Outlet />
    </ProvideBrute>
  );
}