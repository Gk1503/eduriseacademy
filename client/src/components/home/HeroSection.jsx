import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Trophy, BookOpen, Headphones,
  GraduationCap, Star, CheckCircle,
  ArrowRight, Zap,
} from 'lucide-react';

/*
  TopBar   : 40px  (h-10)
  Navbar   : 112px / 124px
  Total    : 152px / 164px
  Hero pt  : 162px / 176px  (12px breathing room)
*/

/* ── Stats row ───────────────────────────────────────────────────── */
const stats = [
  { Icon: BookOpen,   num: '25+',  label: 'Job-Ready Courses', iconColor: 'text-indigo-600',  bg: 'bg-indigo-50',  border: 'border-indigo-100' },
  { Icon: Headphones, num: '24/7', label: 'Student Support',   iconColor: 'text-violet-600',  bg: 'bg-violet-50',  border: 'border-violet-100' },
];

/* ── Mini stats inside dark card ─────────────────────────────────── */
const miniStats = [
  { Icon: BookOpen,      num: '25+',    label: 'Courses'    },
  { Icon: GraduationCap, num: 'Expert', label: 'Trainers'   },
  { Icon: Zap,           num: 'FREE',   label: 'Demo Class' },
];

/* ── Checklist row inside dark card ───────────────────────────────── */
const checklist = ['Expert Mentors', 'Hands-on Projects', 'Career Support'];

/* ── Floating chips outside dark card ───────────────────────────── */
const chips = [
  {
    Icon: Trophy, iconBg: 'bg-orange-50', iconColor: 'text-orange-500',
    shadow: 'shadow-orange-100/80', border: 'border-orange-100',
    title: 'Top Rated', sub: 'In Gandhinagar',
    pos: 'absolute -top-5 -right-6', yAnim: [0,-9,0], dur: 2.5, delay: 0,
  },
  {
    Icon: CheckCircle, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500',
    shadow: 'shadow-emerald-100/80', border: 'border-emerald-100',
    title: '100% Job Support', sub: 'Guaranteed',
    pos: 'absolute -bottom-5 -left-6', yAnim: [0,-11,0], dur: 3, delay: 0.5,
  },
  {
    Icon: Star, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-500',
    shadow: 'shadow-yellow-100/80', border: 'border-yellow-100',
    title: '4.9 / 5 Rating', sub: 'By Students',
    pos: 'absolute top-1/3 -right-8', yAnim: [0,-8,0], dur: 2.8, delay: 1,
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-visible
                 pt-[120px] pb-10"
      style={{
        backgroundColor: '#F7F8FF',
        backgroundImage: `
          linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '44px 44px',
      }}
    >
      {/* Decorative dots */}
      <div className="absolute top-52 left-12  w-5   h-5   rounded-full bg-orange-400/45  blur-[2px] pointer-events-none" />
      <div className="absolute top-72 right-24 w-3   h-3   rounded-full bg-indigo-500/55            pointer-events-none" />
      <div className="absolute bottom-40 left-40 w-4  h-4  rounded-full bg-emerald-400/45           pointer-events-none" />
      <div className="absolute bottom-24 right-64 w-2.5 h-2.5 rounded-full bg-orange-400/45         pointer-events-none" />
      {/* Right side glow */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full
                      bg-indigo-100/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ══ LEFT ══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5
                         bg-gradient-to-r from-orange-50 to-amber-50
                         border-2 border-orange-200 rounded-full
                         px-5 py-2 mb-5 shadow-sm"
            >
              <GraduationCap size={16} className="text-orange-600 flex-shrink-0" strokeWidth={2} />
              <span className="font-poppins font-bold text-[12.5px] tracking-[0.16em]
                               text-amber-800 uppercase">
                Gandhinagar's Trusted Academy
              </span>
            </motion.div>

            {/* ── Heading ─────────────────────────────────────── */}
            <h1 className="font-poppins font-black leading-[1.07] mb-5
                           text-[40px] md:text-[50px] lg:text-[58px] xl:text-[66px]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="block text-slate-900"
              >
                Learn Today,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.27, duration: 0.5 }}
                className="block text-green-600"
              >
                Lead Tomorrow
              </motion.span>
            </h1>

            {/* ── Subtitle ────────────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="font-inter font-medium text-slate-700 leading-relaxed mb-6
                         text-[15px] md:text-[17px] max-w-[500px]"
            >
              Expert coaching, computer courses &amp; spoken English —
              all under one roof at EduRise Academy, Gandhinagar.
            </motion.p>

            {/* ── CTA Buttons ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46 }}
              className="flex flex-wrap gap-4 mb-7"
            >
              <Link
                to="/courses"
                className="group inline-flex items-center gap-2.5
                           font-poppins font-bold text-[17px]
                           bg-indigo-600 hover:bg-indigo-700 text-white
                           px-8 py-[15px] rounded-xl
                           shadow-lg shadow-indigo-200
                           hover:shadow-xl hover:shadow-indigo-300
                           hover:-translate-y-[2px] transition-all duration-300"
              >
                <BookOpen size={20} strokeWidth={2} />
                Explore Courses
                <ArrowRight size={18}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5
                           font-poppins font-bold text-[17px]
                           bg-white hover:bg-slate-50
                           border-2 border-slate-300 hover:border-indigo-400
                           text-slate-800 hover:text-indigo-600
                           px-8 py-[15px] rounded-xl
                           shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Zap size={20} strokeWidth={2} />
                Free Demo Class
              </Link>
            </motion.div>

            {/* Thin divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

            {/* ── Stats Row ───────────────────────────────────── */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  className="flex items-center gap-3.5"
                >
                  {/* Icon */}
                  <span className={`w-[42px] h-[42px] flex items-center justify-center
                                    rounded-xl ${s.bg} border ${s.border} flex-shrink-0`}>
                    <s.Icon size={19} className={s.iconColor} strokeWidth={1.9} />
                  </span>

                  {/* Number + Label */}
                  <div className="leading-none">
                    <p className="font-poppins font-black text-slate-900
                                  text-[22px] tracking-tight leading-none">
                      {s.num}
                    </p>
                    <p className="font-inter font-medium text-slate-500 text-[12px] mt-1">
                      {s.label}
                    </p>
                  </div>

                  {/* Vertical divider */}
                  {i < stats.length - 1 && (
                    <span className="hidden sm:block w-px h-11 bg-slate-200 ml-5" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ══ RIGHT: Dark achievement panel ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main dark card */}
            <div className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-[#1e1b6e]
                            rounded-3xl p-7 shadow-2xl shadow-indigo-300/30 overflow-hidden">

              {/* Grid texture */}
              <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: `
                  linear-gradient(white 1px, transparent 1px),
                  linear-gradient(90deg, white 1px, transparent 1px)
                `,
                backgroundSize: '22px 22px',
              }} />
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full
                              bg-indigo-500/35 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full
                              bg-violet-600/20 blur-3xl pointer-events-none" />

              {/* Brand header */}
              <div className="relative flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl
                                flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-poppins font-bold text-white text-[17px] leading-tight">
                    EduRise Academy
                  </p>
                  <p className="font-inter text-indigo-300 text-[12px] mt-0.5">
                    Since 2016 · Gandhinagar, Gujarat
                  </p>
                </div>
                <span className="ml-auto bg-emerald-400/20 border border-emerald-400/30
                                 text-emerald-300 font-poppins font-semibold text-[10.5px]
                                 px-3 py-1.5 rounded-full uppercase tracking-wider flex-shrink-0">
                  Verified ✓
                </span>
              </div>

              {/* Hero value proposition */}
              <div className="relative text-center mb-5">
                <p className="font-inter text-indigo-300 text-[11px] font-bold
                              uppercase tracking-[0.26em] mb-2">
                  Why Students Choose Us
                </p>
                <p className="font-poppins font-black text-white leading-tight
                              text-[22px] sm:text-[24px] tracking-tight
                              max-w-[220px] mx-auto">
                  Practical Training<br />
                  <span className="text-emerald-400">Real Results</span>
                </p>
                <p className="font-inter text-indigo-300 text-[13px] mt-2">
                  Hands-on learning designed to make you job-ready
                </p>
              </div>

              {/* 3 mini stat cards */}
              <div className="relative grid grid-cols-3 gap-3 mb-5">
                {miniStats.map((s, i) => (
                  <div key={i}
                    className="bg-white/10 backdrop-blur-sm border border-white/10
                               rounded-2xl p-4 text-center">
                    <s.Icon size={20} className="text-indigo-200 mx-auto mb-2.5"
                            strokeWidth={1.7} />
                    <p className="font-poppins font-black text-white text-[20px]
                                  leading-none tracking-tight">
                      {s.num}
                    </p>
                    <p className="font-inter text-indigo-300 text-[11px] mt-1.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Checklist row */}
              <div className="relative flex flex-wrap items-center justify-between gap-2.5
                              border-t border-white/10 pt-4">
                {checklist.map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" strokeWidth={2.2} />
                    <span className="font-inter text-indigo-200 text-[11.5px] whitespace-nowrap">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            {chips.map((c, i) => (
              <motion.div
                key={i}
                animate={{ y: c.yAnim }}
                transition={{ duration: c.dur, repeat: Infinity,
                              delay: c.delay, ease: 'easeInOut' }}
                className={`${c.pos} z-10 bg-white rounded-2xl px-4 py-3
                            shadow-xl ${c.shadow} border ${c.border}
                            flex items-center gap-2.5`}
              >
                <span className={`w-9 h-9 ${c.iconBg} rounded-xl
                                  flex items-center justify-center flex-shrink-0`}>
                  <c.Icon size={18} className={c.iconColor} strokeWidth={2} />
                </span>
                <div className="leading-tight">
                  <p className="font-poppins font-bold text-gray-900 text-[13.5px] leading-none">
                    {c.title}
                  </p>
                  <p className="font-inter text-slate-400 text-[10.5px] mt-0.5">
                    {c.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
