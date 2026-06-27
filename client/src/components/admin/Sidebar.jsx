import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, MessageSquare, Users, Image, Megaphone } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/admin/courses' },
    { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: Users, label: 'Students', path: '/admin/students' },
    { icon: Image, label: 'Gallery', path: '/admin/gallery' },
    { icon: Megaphone, label: 'Announcements', path: '/admin/announcements' },
  ];

  return (
    <div className="w-64 bg-dark-card border-r border-dark-border h-full flex flex-col">
      <div className="p-6 border-b border-dark-border">
        <h1 className="text-xl font-bold font-poppins gradient-text">EduRise Admin</h1>
      </div>
      
      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-dark-border'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
