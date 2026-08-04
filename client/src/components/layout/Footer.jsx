import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, GraduationCap } from 'lucide-react';
import newlogo from '../../Gallery/newlogo.jpeg';

const quickLinks = [
  { name: 'Home',          path: '/'           },
  { name: 'Courses',       path: '/courses'    },
  { name: 'About Us',      path: '/about'      },
  { name: 'Placement',     path: '/placement'  },
  { name: 'Gallery',       path: '/gallery'    },
  { name: 'Contact Us',    path: '/contact'    },
];

const courses = [
  { name: 'Full Stack MERN',    path: '/courses/full-stack-mern'        },
  { name: 'React JS',           path: '/courses/frontend-react'         },
  { name: 'Python & Django',    path: '/courses/python-django'          },
  { name: 'Spoken English',     path: '/spoken-english'                 },
  { name: 'UI/UX Design',       path: '/courses/ui-ux-design'           },
  { name: 'Digital Marketing',  path: '/courses/digital-marketing-seo'  },
];

const socials = [
  { Icon: FaFacebook,  href: 'https://www.facebook.com/share/p/18v1f9ZBh7/',  label: 'Facebook',  color: 'hover:bg-blue-600'  },
  { Icon: FaInstagram, href: 'https://www.instagram.com/edurise_academy_gnr?igsh=MTczaW1nbW5wemkwcA%3D%3D', label: 'Instagram', color: 'hover:bg-pink-600'  },
  { Icon: FaLinkedin,  href: 'https://linkedin.com',  label: 'LinkedIn',  color: 'hover:bg-blue-700'  },
  { Icon: FaYoutube,   href: 'https://youtube.com/@eduriseacademy-v3m?si=AMeU6_1kM1Ifwfk_',   label: 'YouTube',   color: 'hover:bg-red-600'   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full
                      bg-indigo-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full
                      bg-violet-900/20 blur-3xl pointer-events-none" />

      {/* ── CTA Strip ───────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/10
                      bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-700">
        <div className="container mx-auto px-6 py-7
                        flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-white/15 rounded-xl
                            flex items-center justify-center flex-shrink-0">
              <GraduationCap size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-poppins font-bold text-white text-[18px] leading-tight">
                Start Your Learning Journey Today
              </p>
              <p className="font-inter text-indigo-200 text-[13.5px] mt-0.5">
                Book a free demo class — no cost, no commitment.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 flex-shrink-0
                       bg-white hover:bg-slate-50 text-indigo-700
                       font-poppins font-bold text-[15px]
                       px-7 py-3 rounded-xl shadow-lg
                       hover:-translate-y-0.5 hover:shadow-xl
                       transition-all duration-300"
          >
            Book Free Demo
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── Main footer grid ────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src={newlogo}
                alt="EduRise Academy"
                className="h-[44px] w-auto drop-shadow-md
                           group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline">
                  <span className="font-poppins text-[22px] font-black text-blue-400 leading-none">Edu</span>
                  <span className="font-poppins text-[22px] font-black text-green-400 leading-none">Rise</span>
                </div>
                <span className="font-inter text-[9px] font-bold tracking-[0.24em]
                                 text-slate-400 uppercase mt-0.5">Academy</span>
              </div>
            </Link>

            <p className="font-inter text-slate-400 text-[14px] leading-relaxed mb-6 max-w-[260px]">
              Gandhinagar's #1 IT Training Institute. Expert courses in Web Dev,
              Python, Spoken English & Academic Tuition since 2026.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 bg-white/8 border border-white/10 rounded-xl
                              flex items-center justify-center
                              text-slate-400 hover:text-white
                              ${color} hover:border-transparent
                              transition-all duration-200`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-[16px] text-white mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-indigo-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 font-inter text-[14px]
                               text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                  >
                    <ArrowRight size={13}
                      className="text-indigo-500 opacity-0 group-hover:opacity-100
                                 -translate-x-1 group-hover:translate-x-0
                                 transition-all duration-200 flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-poppins font-bold text-[16px] text-white mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full" />
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courses.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 font-inter text-[14px]
                               text-slate-400 hover:text-emerald-300 transition-colors duration-200"
                  >
                    <ArrowRight size={13}
                      className="text-emerald-500 opacity-0 group-hover:opacity-100
                                 -translate-x-1 group-hover:translate-x-0
                                 transition-all duration-200 flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-bold text-[16px] text-white mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/15 border border-orange-500/20
                                rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-orange-400" />
                </div>
                <span className="font-inter text-slate-400 text-[13.5px] leading-relaxed">
                  EduRise Academy Gandhinagar,<br />SFN 203, Arizona Sky, Vavol,<br />Uvarsad Road, Gandhinagar
                </span>
              </li>
              <li>
                <a
                  href="tel:+919427080826"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-indigo-500/15 border border-indigo-500/20
                                  rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-indigo-400" />
                  </div>
                  <span className="font-inter text-slate-400 text-[13.5px]
                                   group-hover:text-indigo-300 transition-colors">
                    +91 94270 80826
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:eduriseacademy.learning@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-blue-500/15 border border-blue-500/20
                                  rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-blue-400" />
                  </div>
                  <span className="font-inter text-slate-400 text-[13.5px]
                                   group-hover:text-blue-300 transition-colors">
                    eduriseacademy.learning@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919427080826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-green-500/15 border border-green-500/20
                                  rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={15} className="text-green-400" />
                  </div>
                  <span className="font-inter text-slate-400 text-[13.5px]
                                   group-hover:text-green-300 transition-colors">
                    WhatsApp Us
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Google Map ──────────────────────────────────── */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 h-[200px]">
          <iframe
            src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EduRise Academy Location"
          />
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-white/10
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-slate-500 text-[13px]">
            © {year} <span className="text-slate-400 font-semibold">EduRise Academy</span>. All rights reserved.
          </p>
          <p className="font-inter text-slate-600 text-[12.5px]">
            Designed with ❤️ in Gandhinagar, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
