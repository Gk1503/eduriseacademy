import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  School, GraduationCap, Briefcase, Users,
  Calendar, Clock, UsersRound, MapPin,
  ArrowRight, CheckCircle,
} from 'lucide-react';

const audience = [
  {
    num: '01',
    Icon: School,
    title: 'School Students',
    subtitle: 'Class 5 to 12 — GSEB & CBSE',
    desc: 'Build strong fundamentals in Maths, Science & English. Get academic coaching that improves marks and builds real confidence.',
    tags: ['Academic Coaching', 'IT Basics', 'Spoken English'],
    grad: 'from-blue-500 to-indigo-600',
    tagBg: 'bg-indigo-50 text-indigo-700',
  },
  {
    num: '02',
    Icon: GraduationCap,
    title: 'College Students',
    subtitle: 'BCA · MCA · BSc IT · B.Com · Diploma',
    desc: 'Master industry-ready IT skills with live projects and placement preparation to land your first job.',
    tags: ['Web Development', 'Python', 'Placement Support'],
    grad: 'from-emerald-500 to-teal-600',
    tagBg: 'bg-emerald-50 text-emerald-700',
  },
  {
    num: '03',
    Icon: Briefcase,
    title: 'Working Professionals',
    subtitle: 'Job seekers & career switchers',
    desc: 'Upskill with in-demand technologies and Spoken English to grow faster in your career or switch to IT.',
    tags: ['Career Switch', 'Upskilling', 'Evening Batches'],
    grad: 'from-violet-500 to-purple-700',
    tagBg: 'bg-violet-50 text-violet-700',
  },
  {
    num: '04',
    Icon: Users,
    title: 'Parents & Housewives',
    subtitle: "It's never too late to learn",
    desc: 'Learn Spoken English and basic digital skills at a comfortable pace — with flexible morning or evening slots.',
    tags: ['Spoken English', 'Digital Skills', 'Flexible Timing'],
    grad: 'from-orange-500 to-amber-500',
    tagBg: 'bg-amber-50 text-amber-700',
  },
];

const schedule = [
  { Icon: Calendar,    label: 'Course Duration',  value: '30 Days',       sub: 'Spoken English' },
  { Icon: Clock,       label: 'Batch Timings',    value: 'Morning & Eve', sub: 'Flexible slots' },
  { Icon: UsersRound,  label: 'Batch Size',       value: '8 – 12',        sub: 'Students only'  },
  { Icon: MapPin,      label: 'Location',         value: 'Gandhinagar',   sub: 'Gujarat, India' },
];

export default function CourseEligibility() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">

      {/* ── Decorative blobs ──────────────────────────────── */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full
                      bg-indigo-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full
                      bg-emerald-50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ═══ HEADER ════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2
                           bg-indigo-50 border border-indigo-200
                           text-indigo-700 font-poppins font-bold
                           text-[12px] tracking-[0.22em] uppercase
                           px-5 py-2.5 rounded-full mb-7">
            <CheckCircle size={13} />
            Who Can Join?
          </span>

          <h2 className="font-poppins font-black
                         text-[36px] sm:text-[46px] md:text-[54px]
                         text-slate-900 leading-[1.1] mb-5">
            This Is For{' '}
            <span className="text-indigo-600">Everyone</span>
            <br className="hidden sm:block" />
            At Every Stage
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-[3px] w-10 rounded-full bg-indigo-500" />
            <span className="h-[3px] w-4  rounded-full bg-orange-400" />
          </div>

          <p className="font-inter text-slate-500 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Whether you're a school student, a college grad, a professional,
            or a parent — there's a course at EduRise built exactly for you.
          </p>
        </motion.div>

        {/* ═══ AUDIENCE CARDS ════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {audience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              className="group bg-white rounded-3xl overflow-hidden
                         shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                         hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)]
                         hover:-translate-y-2
                         transition-all duration-300 border border-slate-100"
            >
              {/* ── Gradient top panel ─── */}
              <div className={`bg-gradient-to-br ${item.grad} p-7 relative overflow-hidden`}>
                {/* Glare */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full
                                bg-white/15 blur-2xl pointer-events-none" />
                {/* Watermark number */}
                <span className="absolute bottom-2 right-4 font-poppins font-black
                                 text-[64px] leading-none text-white/10 select-none">
                  {item.num}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-[60px] h-[60px] bg-white/20
                                backdrop-blur-sm rounded-2xl
                                flex items-center justify-center mb-5
                                group-hover:bg-white/30 transition-colors duration-300">
                  <item.Icon size={28} className="text-white" strokeWidth={1.9} />
                </div>

                {/* Title + subtitle */}
                <h3 className="relative z-10 font-poppins font-bold
                               text-[20px] text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="relative z-10 font-inter text-white/75 text-[12.5px]">
                  {item.subtitle}
                </p>
              </div>

              {/* ── White card body ─────── */}
              <div className="p-6">
                <p className="font-inter text-slate-500 text-[14px]
                              leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Tag chips */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`${item.tagBg} font-inter font-semibold
                                  text-[11.5px] px-3 py-1.5 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══ SCHEDULE STRIP (dark) ═════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900
                     rounded-3xl px-8 py-9 mb-0"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left label */}
            <div className="text-center md:text-left flex-shrink-0">
              <p className="font-inter text-slate-400 text-[12px] tracking-[0.2em]
                            uppercase font-semibold mb-1">
                Batch Details
              </p>
              <h3 className="font-poppins font-black text-[26px] text-white leading-tight">
                Schedule &amp;
                <span className="text-transparent bg-clip-text
                                 bg-gradient-to-r from-orange-400 to-amber-300">
                  {' '}Availability
                </span>
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white/10 flex-shrink-0" />

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 flex-1">
              {schedule.map((s, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-white/10 rounded-xl
                                  flex items-center justify-center flex-shrink-0">
                    <s.Icon size={20} className="text-indigo-300" strokeWidth={1.9} />
                  </div>
                  <div className="leading-tight">
                    <p className="font-poppins font-bold text-white text-[16.5px]">
                      {s.value}
                    </p>
                    <p className="font-inter text-slate-400 text-[12px]">
                      {s.label}
                    </p>
                  </div>
                  {i < schedule.length - 1 && (
                    <div className="hidden sm:block w-px h-10 bg-white/10 ml-3" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 flex-shrink-0
                         bg-gradient-to-r from-orange-500 to-orange-600
                         hover:from-orange-600 hover:to-orange-700
                         text-white font-poppins font-bold text-[16px]
                         px-7 py-3.5 rounded-2xl
                         shadow-lg shadow-orange-900/30
                         hover:-translate-y-0.5 hover:shadow-xl
                         transition-all duration-300"
            >
              Enroll Now
              <ArrowRight size={17}
                className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
