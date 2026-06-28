import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Bell, Search, Menu, X } from 'lucide-react';
import Sidebar from '../admin/Sidebar';
import { useAuthStore } from '../../store/authStore';

const pageTitles = {
  '/admin/dashboard':           { title: 'Dashboard',          sub: 'Overview of academy operations' },
  '/admin/students':            { title: 'Students',           sub: 'Manage enrolled students'       },
  '/admin/courses':             { title: 'Courses',            sub: 'Manage course catalog'           },
  '/admin/fees':                { title: 'Fee Records',        sub: 'Track payments & dues'           },
  '/admin/inquiries':           { title: 'Inquiries',          sub: 'Leads & contact requests'        },
  '/admin/documents':           { title: 'Documents',          sub: 'Student document repository'     },
  '/admin/announcements':       { title: 'Announcements',      sub: 'Post notices & updates'          },
  '/admin/gallery':             { title: 'Gallery',            sub: 'Manage photo gallery'            },
  '/admin/website/courses':     { title: 'Courses Content',    sub: 'Edit courses shown on website'   },
  '/admin/website/pages':       { title: 'Page Content',       sub: 'Edit About, Hero & other pages'  },
  '/admin/website/testimonials':{ title: 'Testimonials',       sub: 'Manage student reviews'          },
  '/admin/website/hero':        { title: 'Hero / Banner',      sub: 'Edit homepage banner'            },
  '/admin/settings':            { title: 'Settings',           sub: 'Admin preferences'               },
};

export default function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const { admin } = useAuthStore();
  const page = pageTitles[location.pathname] || { title: 'Admin', sub: '' };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-inter">

      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 z-10">
            <Sidebar />
          </div>
          <button onClick={() => setMobileSidebarOpen(false)}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-white rounded-xl
                       flex items-center justify-center text-slate-700">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-6 h-[64px] flex items-center gap-4 flex-shrink-0">
          <button onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-600
                       hover:bg-slate-100 rounded-xl transition-colors">
            <Menu size={18} />
          </button>

          <div>
            <h1 className="font-poppins font-black text-[18px] text-slate-900 leading-none">{page.title}</h1>
            {page.sub && <p className="font-inter text-slate-400 text-[12px] mt-0.5">{page.sub}</p>}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 border border-slate-200
                            rounded-xl px-3.5 py-2 w-52">
              <Search size={14} className="text-slate-400 flex-shrink-0" />
              <input placeholder="Search..." className="bg-transparent font-inter text-[13px]
                                                         text-slate-600 placeholder:text-slate-400
                                                         outline-none w-full" />
            </div>

            {/* Bell */}
            <button className="relative w-9 h-9 bg-slate-100 border border-slate-200 rounded-xl
                               flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-2.5 bg-slate-100 border border-slate-200
                            rounded-xl px-3 py-1.5 cursor-pointer hover:bg-slate-200 transition-colors">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="font-poppins font-black text-[12px] text-white">A</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-inter font-bold text-[12px] text-slate-800 leading-none">Admin</p>
                <p className="font-inter text-slate-400 text-[10.5px] mt-0.5">EduRise</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
