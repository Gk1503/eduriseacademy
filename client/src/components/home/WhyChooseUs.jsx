import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Briefcase, Code2, Award, Clock, Users,
  ArrowRight, CheckCircle2,
} from 'lucide-react';

const features = [
  {
    Icon: GraduationCap,
    title: 'Expert Industry Faculty',
    desc: 'Learn from professionals with 10+ years of real-world experience who still work in the industry.',
    grad: 'from-indigo-500 to-blue-600',
    glow: 'shadow-indigo-100',
    tag: 'Top Educators',
  },
  {
    Icon: Briefcase,
    title: '100% Placement Support',
    desc: 'Dedicated placement cell with tie-ups with 100+ companies — resume help, mock interviews & HR prep.',
    grad: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-100',
    tag: 'Career Growth',
  },
  {
    Icon: Code2,
    title: 'Live Project Training',
    desc: 'Work on real industry projects and build a portfolio that impresses recruiters from day one.',
    grad: 'from-violet-500 to-purple-700',
    glow: 'shadow-violet-100',
    tag: 'Hands-On',
  },
  {
    Icon: Award,
    title: 'Recognized Certification',
    desc: 'Get industry-recognized certificates on course completion that are valued by top companies.',
    grad: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-100',
    tag: 'Certified',
  },
  {
    Icon: Clock,
    title: 'Flexible Batch Timings',
    desc: 'Morning, evening, weekend, and online batches — designed to fit your schedule, not disrupt it.',
    grad: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-100',
    tag: 'Your Time',
  },
  {
    Icon: Users,
    title: 'Small Batch Size',
    desc: 'Maximum 12 students per batch ensures every student gets personal attention and direct mentorship.',
    grad: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-100',
    tag: 'Personalized',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full
                      bg-indigo-50/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
                      bg-emerald-50/70 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200
                           text-indigo-700 font-poppins font-bold
                           text-[13px] tracking-[0.2em] uppercase
                           px-6 py-3 rounded-full mb-7">
            <CheckCircle2 size={15} />
            Our Advantages
          </span>

          <h2 className="font-poppins font-black
                         text-[42px] sm:text-[54px] md:text-[64px]
                         text-slate-900 leading-[1.08] mb-6">
            Why Choose{' '}
            <span className="text-indigo-600">EduRise</span>
            <br className="hidden sm:block" />
            Academy?
          </h2>

          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="h-[4px] w-12 rounded-full bg-indigo-500" />
            <span className="h-[4px] w-5 rounded-full bg-orange-400" />
          </div>

          <p className="font-inter text-slate-500 text-[18px] sm:text-[20px] leading-relaxed max-w-2xl mx-auto">
            We provide the best learning environment to help you succeed —
            from school to career and beyond.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              className={`group relative bg-white rounded-3xl overflow-hidden
                         border border-slate-100
                         shadow-[0_6px_28px_rgba(0,0,0,0.07)] ${f.glow}
                         hover:shadow-[0_18px_56px_rgba(0,0,0,0.13)]
                         hover:-translate-y-2
                         transition-all duration-300`}
            >
              {/* Top gradient strip */}
              <div className={`bg-gradient-to-r ${f.grad} h-2 w-full`} />

              <div className="p-8">
                {/* Tag chip */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-br ${f.grad}
                                   w-[66px] h-[66px] rounded-2xl
                                   flex items-center justify-center
                                   shadow-lg
                                   group-hover:scale-110 transition-transform duration-300`}>
                    <f.Icon size={30} className="text-white" strokeWidth={1.8} />
                  </div>
                  <span className="font-inter font-semibold text-[12px] text-slate-400
                                   bg-slate-50 border border-slate-200
                                   px-3 py-1 rounded-full tracking-wide uppercase">
                    {f.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-[20px]
                               text-slate-900 leading-snug mb-3">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-slate-500 text-[15px] leading-relaxed mb-5">
                  {f.desc}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-1.5 text-indigo-600 font-inter font-semibold text-[13.5px]
                                group-hover:gap-2.5 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700
                     rounded-3xl px-10 py-11 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-inter text-indigo-200 text-[13px] tracking-[0.2em] uppercase font-semibold mb-2">
                Start Today
              </p>
              <h3 className="font-poppins font-black text-[28px] sm:text-[34px] text-white leading-tight mb-2">
                Experience the EduRise Difference
              </h3>
              <p className="font-inter text-indigo-200 text-[16px]">
                Book a free demo class — no payment, no commitment required.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 flex-shrink-0
                         bg-white hover:bg-slate-50
                         text-indigo-700 font-poppins font-bold text-[17px]
                         px-9 py-4 rounded-2xl
                         shadow-xl
                         hover:-translate-y-1 hover:shadow-2xl
                         transition-all duration-300"
            >
              Book Free Demo
              <ArrowRight size={18}
                className="group-hover:translate-x-0.5 transition-transform text-indigo-600" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
