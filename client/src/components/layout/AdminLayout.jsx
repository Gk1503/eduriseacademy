import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import Topbar from '../admin/Topbar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-dark overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
