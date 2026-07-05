import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, Home, BookOpen, HelpCircle, Info, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import newlogo from "../../Gallery/newlogo.jpeg";

/* TopBar = 40px  |  Navbar = 68px  |  Total = 108px */
const NAV_TOP = 'top-10';

const navLinks = [
  { name: 'Home',     path: '/',        Icon: Home     },
  { name: 'Courses',  path: '/courses', Icon: BookOpen },
  { name: 'About Us', path: '/about',   Icon: Info     },
  { name: 'Contact',  path: '/contact', Icon: Mail     },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed inset-x-0 ${NAV_TOP} z-40
      bg-white/95 backdrop-blur-sm border-b border-slate-200
      shadow-[0_2px_16px_rgba(0,0,0,0.07)]`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between h-[76px]">

          {/* ── Logo ─────────────────────────────────────── */}
          <Link to="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 scale-125 rounded-xl bg-indigo-500/20
                              blur-lg opacity-0 group-hover:opacity-60
                              transition-opacity duration-300 pointer-events-none" />
              <img
                src={newlogo}
                alt="EduRise Academy"
                className="relative h-[54px] w-auto drop-shadow
                           group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col leading-none select-none">
              <div className="flex items-baseline">
                <span className="font-poppins text-[32px] font-black
                                 tracking-tight text-blue-700 leading-none">Edu</span>
                <span className="font-poppins text-[32px] font-black
                                 tracking-tight text-green-600 leading-none">Rise</span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="block h-[2px] w-5 rounded-full bg-indigo-400" />
                <span className="font-inter text-[10px] font-bold tracking-[0.26em]
                                 text-slate-400 uppercase">Academy</span>
                <span className="block h-[2px] w-5 rounded-full bg-indigo-400" />
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ──────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `relative group px-4 py-2 rounded-lg
                   font-poppins text-[14.5px] font-medium tracking-wide
                   transition-all duration-200 whitespace-nowrap
                   ${isActive
                     ? 'text-indigo-600 bg-indigo-50'
                     : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60'
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    {name}
                    {!isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2
                        h-[2px] w-0 group-hover:w-6 rounded-full
                        bg-gradient-to-r from-indigo-400 to-orange-400
                        transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Desktop right actions ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Phone */}
            <a
              href="tel:+919427080826"
              className="group flex items-center gap-2.5
                         bg-slate-50 hover:bg-emerald-50
                         border border-slate-200 hover:border-emerald-300
                         px-3.5 py-2 rounded-xl
                         transition-all duration-200 shadow-sm"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-lg
                               bg-emerald-500/20 group-hover:bg-emerald-500/30
                               transition-colors flex-shrink-0">
                <Phone size={14} strokeWidth={2.2} className="text-emerald-400" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-inter text-[8.5px] font-bold tracking-[0.2em]
                                 uppercase text-slate-500">Call Us</span>
                <span className="font-poppins text-[13px] font-bold text-slate-800
                                 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                  +91 94270 80826
                </span>
              </div>
            </a>

            {/* Enroll CTA */}
            <Link
              to="/contact"
              className="group relative flex items-center gap-2.5 overflow-hidden
                         bg-gradient-to-r from-orange-500 to-orange-600
                         hover:from-orange-400 hover:to-orange-500
                         text-white font-poppins text-[14.5px] font-bold
                         pl-5 pr-4 py-2.5 rounded-xl
                         shadow-lg shadow-orange-900/40
                         hover:shadow-xl hover:shadow-orange-900/50
                         hover:-translate-y-[1px]
                         transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-[-18deg]
                               bg-white/15 group-hover:translate-x-[200%]
                               transition-transform duration-700 pointer-events-none" />
              <span>Enroll Now</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-lg
                               bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowRight size={13}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100
                       transition-colors text-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map(({ name, path, Icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl
                       font-poppins text-[15px] font-medium transition-all
                       ${isActive
                         ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-500'
                         : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                       }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={17} className={isActive ? 'text-indigo-200' : 'text-slate-500'} strokeWidth={1.9} />
                        {name}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                className="pt-3 space-y-2.5 border-t border-slate-100 mt-2"
              >
                <a
                  href="tel:+919427080826"
                  className="flex items-center gap-3 px-4 py-3
                             bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl
                             text-emerald-300 transition-colors
                             border border-emerald-500/20"
                >
                  <Phone size={18} className="text-emerald-400" />
                  <span className="font-poppins text-[15px] font-semibold">
                    +91 94270 80826
                  </span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full
                             bg-gradient-to-r from-orange-500 to-orange-600
                             text-white font-poppins text-[15px] font-bold
                             px-5 py-3 rounded-xl shadow-lg shadow-orange-900/40"
                >
                  Enroll Now <ArrowRight size={17} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
