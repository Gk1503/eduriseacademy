import { motion } from 'framer-motion';
import {
  Mic2, Users, MessageCircle,
  Volume2, BookOpen, Briefcase,
} from 'lucide-react';

const highlights = [
  {
    num: '01',
    Icon: Mic2,
    title: 'Basic to Advanced Speaking',
    desc: 'Structured step-by-step lessons that take you from beginner to confident speaker.',
    grad: 'from-blue-500 to-indigo-600',
    glow: 'shadow-blue-200',
  },
  {
    num: '02',
    Icon: Users,
    title: 'Role Plays & Activities',
    desc: 'Immersive role plays and group activities that make real conversations feel natural.',
    grad: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-200',
  },
  {
    num: '03',
    Icon: MessageCircle,
    title: 'Daily Use Sentences',
    desc: 'A toolkit of many everyday sentences for work, travel, and social situations.',
    grad: 'from-violet-500 to-purple-700',
    glow: 'shadow-violet-200',
  },
  {
    num: '04',
    Icon: Volume2,
    title: 'Public Speaking Practice',
    desc: 'Build courage to present, debate, and lead discussions in front of any audience.',
    grad: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-200',
  },
  {
    num: '05',
    Icon: BookOpen,
    title: 'Vocabulary Building',
    desc: 'Context-based learning that ensures every new word you learn actually sticks.',
    grad: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-200',
  },
  {
    num: '06',
    Icon: Briefcase,
    title: 'Interview Preparation',
    desc: 'Walk into every HR round or Group Discussion with structure and real confidence.',
    grad: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-200',
  },
];

export default function CourseHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-indigo-50 border border-indigo-200
                           text-indigo-600 font-poppins font-bold
                           text-[12px] tracking-[0.22em] uppercase
                           px-5 py-2.5 rounded-full mb-6">
            What You'll Learn
          </span>

          <h2 className="font-poppins font-black
                         text-[36px] sm:text-[46px] md:text-[52px]
                         text-slate-900 leading-[1.1] mb-5">
            Course{' '}
            <span className="text-indigo-600">Highlights</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-[3px] w-10 rounded-full bg-indigo-500" />
            <span className="h-[3px] w-4  rounded-full bg-orange-400" />
          </div>

          <p className="font-inter text-slate-500 text-[17px] leading-relaxed max-w-2xl mx-auto">
            A complete program designed to make you confident, fluent,
            and ready for real-world conversations.
          </p>
        </motion.div>

        {/* ── Cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className={`group relative bg-gradient-to-br ${item.grad}
                          rounded-3xl p-7 text-white overflow-hidden
                          shadow-xl ${item.glow}
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-300 cursor-default`}
            >
              {/* Shiny glare circle top-right */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full
                              bg-white/15 blur-2xl pointer-events-none" />

              {/* Step number — watermark */}
              <span className="absolute bottom-4 right-5
                               font-poppins font-black text-[72px] leading-none
                               text-white/10 select-none pointer-events-none
                               group-hover:text-white/15 transition-colors duration-300">
                {item.num}
              </span>

              {/* Icon circle */}
              <div className="relative z-10 w-[62px] h-[62px] bg-white/20
                              backdrop-blur-sm rounded-2xl
                              flex items-center justify-center mb-6
                              group-hover:bg-white/30 transition-colors duration-300
                              shadow-md">
                <item.Icon size={28} className="text-white" strokeWidth={1.9} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-poppins font-bold
                             text-[20px] text-white leading-snug mb-3">
                {item.title}
              </h3>

              {/* Thin white accent */}
              <div className="relative z-10 h-[2px] w-10 bg-white/50 rounded-full mb-4" />

              {/* Description */}
              <p className="relative z-10 font-inter text-white/80
                            text-[14.5px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
