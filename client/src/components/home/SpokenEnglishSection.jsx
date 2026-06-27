import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, Users, Video, Clock,
  MessageSquare, UserCheck, Target,
  ArrowRight, CheckCircle, Star, Zap,
} from 'lucide-react';

const stats = [
  { Icon: Calendar, value: '30',   label: 'Day Program',    accent: '#6366f1', bg: 'bg-indigo-500/20', border: 'border-indigo-500/30', text: 'text-indigo-300' },
  { Icon: Users,    value: '8–12', label: 'Batch Size',     accent: '#10b981', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-300' },
  { Icon: Video,    value: 'FREE', label: 'Demo Class',     accent: '#f59e0b', bg: 'bg-amber-500/20',   border: 'border-amber-500/30',   text: 'text-amber-300'  },
  { Icon: Clock,    value: '2×',   label: 'Daily Batches',  accent: '#a855f7', bg: 'bg-violet-500/20', border: 'border-violet-500/30',   text: 'text-violet-300' },
];

const features = [
  { Icon: MessageSquare, title: 'Real Conversations',  desc: 'Practical daily exercises to build fluency fast.', color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
  { Icon: UserCheck,     title: 'Expert Trainers',     desc: '10+ years of proven teaching experience.',         color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
  { Icon: Target,        title: 'Practical & Focused', desc: 'Speaking, listening & real-world communication.',  color: 'text-amber-400',   bg: 'bg-amber-500/15'   },
];

export default function SpokenEnglishSection() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 55%,#0f172a 100%)' }}
    >
      {/* ── Mesh glow ──────────────────────────────────── */}
      <div className="absolute top-0   left-1/3  w-[480px] h-[480px] rounded-full bg-indigo-700/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-violet-700/20 blur-[90px]  pointer-events-none" />
      <div className="absolute top-1/2 left-0    w-[260px] h-[260px] rounded-full bg-orange-600/10 blur-[80px]  pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ═══ TOP HEADER ════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2
                           bg-amber-500/15 border border-amber-400/30
                           text-amber-300 font-poppins font-bold
                           text-[12px] tracking-[0.22em] uppercase
                           px-5 py-2.5 rounded-full mb-7">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            Most Popular Course
          </span>

          {/* Heading */}
          <h2 className="font-poppins font-black
                         text-[40px] sm:text-[52px] md:text-[62px]
                         leading-[1.1] mb-4">
            <span className="text-white">Spoken </span>
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-orange-400 to-amber-300">
              English
            </span>
            <span className="text-white"> Course</span>
          </h2>

          {/* Tagline */}
          <p className="font-poppins font-semibold text-[20px] sm:text-[22px]
                        text-slate-300 mb-4">
            Don't Learn English…&nbsp;
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-indigo-400 to-blue-300">
              Start Speaking It!
            </span>
          </p>

          <p className="font-inter text-slate-400 text-[16.5px] leading-relaxed max-w-2xl mx-auto">
            A practical{' '}
            <span className="text-orange-400 font-semibold">30-day</span>{' '}
            program to help you build confidence, speak fluently and
            communicate naturally in any situation.
          </p>
        </motion.div>

        {/* ═══ STATS ROW ═════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group relative ${s.bg} border ${s.border}
                          rounded-2xl p-6 text-center
                          backdrop-blur-sm
                          hover:bg-white/10 hover:-translate-y-1
                          transition-all duration-300`}
            >
              {/* Icon */}
              <span className={`inline-flex w-12 h-12 rounded-xl
                                ${s.bg} items-center justify-center
                                mx-auto mb-4`}>
                <s.Icon size={22} className={s.text} strokeWidth={2} />
              </span>

              {/* Value */}
              <p className={`font-poppins font-black text-[36px]
                             leading-none mb-1 ${s.text}`}>
                {s.value}
              </p>

              {/* Label */}
              <p className="font-inter text-slate-400 text-[13px] font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ═══ BOTTOM: FEATURES + CTA ════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── Left: Feature cards ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="space-y-4"
          >
            <h3 className="font-poppins font-bold text-[22px] text-white mb-6">
              What You'll{' '}
              <span className="text-transparent bg-clip-text
                               bg-gradient-to-r from-orange-400 to-amber-300">
                Learn
              </span>
            </h3>

            {features.map((f, i) => (
              <div
                key={i}
                className={`flex items-start gap-4
                            ${f.bg} border border-white/10
                            rounded-2xl p-5
                            hover:bg-white/10 hover:border-white/20
                            transition-all duration-200`}
              >
                <span className={`w-11 h-11 rounded-xl bg-white/10
                                  flex items-center justify-center flex-shrink-0`}>
                  <f.Icon size={21} className={f.color} strokeWidth={1.9} />
                </span>
                <div>
                  <h4 className="font-poppins font-bold text-[16px] text-white mb-1">
                    {f.title}
                  </h4>
                  <p className="font-inter text-slate-400 text-[14px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Right: CTA card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden
                       bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600
                       p-8 flex flex-col justify-between"
          >
            {/* Glare */}
            <div className="absolute -top-16 -right-16 w-52 h-52
                            rounded-full bg-white/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40
                            rounded-full bg-orange-800/30 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5
                               bg-white/20 text-white font-poppins font-bold
                               text-[11px] tracking-[0.2em] uppercase
                               px-4 py-2 rounded-full mb-6">
                <Zap size={12} className="fill-white" />
                Limited Seats Available
              </span>

              <h3 className="font-poppins font-black text-[30px] sm:text-[34px]
                             text-white leading-tight mb-3">
                Ready to Start
                <span className="block">Speaking English?</span>
              </h3>

              <p className="font-inter text-white/85 text-[15px] leading-relaxed mb-6">
                Join hundreds of students who have already transformed
                their English speaking skills with our proven 30-day method.
              </p>

              <div className="flex items-center gap-2 mb-8">
                <CheckCircle size={18} className="text-white flex-shrink-0" strokeWidth={2.5} />
                <span className="font-inter text-white/90 text-[14px]">
                  <span className="font-bold text-white">500+</span> learners already enrolled
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2
                           bg-white hover:bg-gray-50
                           text-orange-600 font-poppins font-bold text-[16px]
                           px-6 py-4 rounded-2xl
                           shadow-xl shadow-black/20
                           hover:-translate-y-1 hover:shadow-2xl
                           transition-all duration-300"
              >
                <Users size={19} />
                Free Demo Class
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/courses"
                className="flex-1 flex items-center justify-center gap-2
                           bg-white/20 hover:bg-white/30 backdrop-blur-sm
                           text-white font-poppins font-bold text-[16px]
                           border-2 border-white/40 hover:border-white/60
                           px-6 py-4 rounded-2xl
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                View Details
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
