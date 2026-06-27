import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import toast from 'react-hot-toast';

const Topbar = () => {
  const navigate = useNavigate();
  const { admin, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  return (
    <div className="h-16 bg-dark-card border-b border-dark-border flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Admin Panel</h2>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <User size={20} />
          <span>{admin?.name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
