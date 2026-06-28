import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, Users, MessageSquare,
  Image, Megaphone, Globe, FileText, CreditCard,
  FolderOpen, GraduationCap, ChevronDown, ChevronRight,
  LogOut, Monitor, Star, Settings, BarChart3,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import newlogo from '../../Gallery/newlogo.jpeg';

const websiteLinks = [
  { icon: BookOpen,  label: 'Courses Content', path: '/admin/website/courses'      },
  { icon: FileText,  label: 'Page Content',    path: '/admin/website/pages'         },
  { icon: Image,     label: 'Gallery',          path: '/admin/gallery'               },
  { icon: Star,      label: 'Testimonials',     path: '/admin/website/testimonials'  },
  { icon: Monitor,   label: 'Hero / Banner',    path: '/admin/website/hero'          },
];

const academyLinks = [
  { icon: LayoutDashboard, label: 'Dashboard',     path: '/admin/dashboard'     },
  { icon: Users,           label: 'Students',       path: '/admin/students'      },
  { icon: GraduationCap,   label: 'Courses',        path: '/admin/courses'       },
  { icon: CreditCard,      label: 'Fee Records',    path: '/admin/fees'          },
  { icon: MessageSquare,   label: 'Inquiries',      path: '/admin/inquiries'     },
  { icon: FolderOpen,      label: 'Documents',      path: '/admin/documents'     },
  { icon: Megaphone,       label: 'Announcements',  path: '/admin/announcements' },
];

function NavSection({ title, links, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg
                   text-slate-400 hover:text-slate-200 transition-colors"
      >
        <span className="font-inter font-bold text-[10.5px] tracking-[0.2em] uppercase">
          {title}
        </span>
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
      </button>
      {open && (
        <div className="mt-1 space-y-0.5">
          {links.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px]
                 font-inter font-medium transition-all duration-150
                 ${isActive
                   ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/40'
                   : 'text-slate-400 hover:text-white hover:bg-white/8'
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={16} strokeWidth={isActive ? 2.2 : 1.9}
                        className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="w-[240px] flex-shrink-0 bg-slate-900 flex flex-col h-full border-r border-white/8">

      {/* Brand */}
      <div className="px-5 py-5 border-b border-white/8">
        <div className="flex items-center gap-3">
          <img src={newlogo} alt="EduRise" className="h-9 w-auto" />
          <div>
            <p className="font-poppins font-black text-[16px] text-white leading-none">EduRise</p>
            <p className="font-inter text-slate-500 text-[10.5px] mt-0.5 uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {/* Website Manager */}
        <div className="mb-1 px-3 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
          <div className="flex items-center gap-2 mb-0.5">
            <Globe size={13} className="text-indigo-400" />
            <span className="font-inter font-black text-[10px] tracking-[0.22em] uppercase text-indigo-400">
              Website Manager
            </span>
          </div>
          <p className="font-inter text-slate-500 text-[11px]">Frontend content control</p>
        </div>
        <NavSection title="Website" links={websiteLinks} defaultOpen={true} />

        <div className="border-t border-white/8 my-3" />

        {/* Academy Manager */}
        <div className="mb-1 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <div className="flex items-center gap-2 mb-0.5">
            <GraduationCap size={13} className="text-emerald-400" />
            <span className="font-inter font-black text-[10px] tracking-[0.22em] uppercase text-emerald-400">
              Academy Manager
            </span>
          </div>
          <p className="font-inter text-slate-500 text-[11px]">Students, fees & operations</p>
        </div>
        <NavSection title="Academy" links={academyLinks} defaultOpen={true} />
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/8 space-y-1">
        <NavLink to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-inter font-medium
             transition-all ${isActive ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white hover:bg-white/8'}`
          }
        >
          <Settings size={16} /> Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px]
                     font-inter font-medium text-slate-500 hover:text-red-400
                     hover:bg-red-500/10 transition-all"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
}
