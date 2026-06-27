import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu, Briefcase, Code2, Award,
  Users, TrendingUp, GraduationCap, Target,
  Mic2, MessageCircle, Volume2, Zap,
  ArrowRight, CheckCircle, Monitor, BookOpen,
} from 'lucide-react';

const categories = [
  {
    HeaderIcon: Monitor,
    label: 'Professional IT Courses',
    tagline: 'Job-ready skills with real-world exposure',
    headerGrad: 'from-indigo-600 to-blue-700',
    accentBar: 'bg-indigo-500',
    iconBg: 'bg-indigo-100',
    iconClr: 'text-indigo-600',
    numClr: 'text-indigo-100',
    features: [
      {
        Icon: Cpu,
        title: 'Industry-Driven Curriculum',
        desc: 'Real client projects — not simulated tasks or theory-heavy modules. Build what companies actually need.',
      },
      {
        Icon: Briefcase,
        title: 'Career-First Approach',
        desc: 'Placement-ready training from day one — mock interviews, resume building, and HR preparation.',
      },
      {
        Icon: Code2,
        title: 'Live Project Training',
        desc: 'Build a real portfolio using the latest technologies so you have proof of skills when you interview.',
      },
      {
        Icon: Award,
        title: 'Recognized Certification',
        desc: 'Industry-valued completion certificates that boost your resume and stand out to recruiters.',
      },
    ],
  },
  {
    HeaderIcon: BookOpen,
    label: 'Academic Tuition (1st to 10th)',
    tagline: 'Concept clarity + exam confidence for every student',
    headerGrad: 'from-emerald-600 to-teal-700',
    accentBar: 'bg-emerald-500',
    iconBg: 'bg-emerald-100',
    iconClr: 'text-emerald-600',
    numClr: 'text-emerald-100',
    features: [
      {
        Icon: Users,
        title: 'Personal Attention',
        desc: 'Small batches of 8–12 students ensure every child gets individual focus and better understanding.',
      },
      {
        Icon: TrendingUp,
        title: 'Improve 20–30 Marks',
        desc: 'Guaranteed result improvement in 60 days through strong concept building and practice sessions.',
      },
      {
        Icon: GraduationCap,
        title: 'Experienced Teachers',
        desc: 'Qualified subject experts with 10+ years of academic teaching — Maths, Science, English and more.',
      },
      {
        Icon: Target,
        title: 'Board Exam Focused',
        desc: 'GSEB & CBSE-specific preparation with previous year papers, revision tests, and doubt sessions.',
      },
    ],
  },
  {
    HeaderIcon: Mic2,
    label: 'Spoken English Course',
    tagline: 'Speak with confidence — not just textbook English',
    headerGrad: 'from-orange-500 to-amber-600',
    accentBar: 'bg-orange-500',
    iconBg: 'bg-orange-100',
    iconClr: 'text-orange-600',
    numClr: 'text-orange-100',
    features: [
      {
        Icon: Mic2,
        title: 'Mentor-Led Learning',
        desc: 'One-on-one guidance and real feedback from experienced English communication trainers.',
      },
      {
        Icon: MessageCircle,
        title: 'Real Conversation Practice',
        desc: 'Practical daily exercises and role plays — not grammar rules, but actual speaking fluency.',
      },
      {
        Icon: Volume2,
        title: 'Confidence Building',
        desc: 'Group activities, public speaking drills, and debates to permanently overcome the fear of speaking.',
      },
      {
        Icon: Zap,
        title: '30-Day Results',
        desc: 'See measurable fluency improvement in just 30 days — or we give you extra sessions, free.',
      },
    ],
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                      bg-indigo-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full
                      bg-emerald-100/50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-white border border-slate-200 shadow-sm
                           text-slate-600 font-poppins font-bold text-[13px]
                           tracking-[0.22em] uppercase px-6 py-3 rounded-full mb-7">
            Why EduRise Academy
          </span>

          <h2 className="font-poppins font-black
                         text-[42px] sm:text-[54px] md:text-[64px]
                         text-slate-900 leading-[1.08] mb-6">
            The Right Choice for{' '}
            <span className="text-indigo-600">All Your</span>
            <br className="hidden sm:block" />
            Learning Needs
          </h2>

          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="h-[4px] w-12 rounded-full bg-indigo-500" />
            <span className="h-[4px] w-5  rounded-full bg-orange-400" />
          </div>

          <p className="font-inter text-slate-500 text-[18px] sm:text-[20px] leading-relaxed max-w-2xl mx-auto">
            Whether you're a student, a job seeker, or a working professional —
            EduRise has the right program to take you forward.
          </p>
        </motion.div>

        {/* CATEGORY BLOCKS */}
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              {/* Category Header Banner */}
              <div className={`bg-gradient-to-r ${cat.headerGrad} rounded-2xl p-7 mb-7 relative overflow-hidden`}>
                <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-black/10 blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-5">
                    <div className="w-[64px] h-[64px] bg-white/20 backdrop-blur-sm rounded-2xl
                                    flex items-center justify-center flex-shrink-0
                                    border border-white/30 shadow-lg">
                      <cat.HeaderIcon size={32} className="text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-black text-[24px] sm:text-[28px] text-white leading-tight">
                        {cat.label}
                      </h3>
                      <p className="font-inter text-white/80 text-[15px] mt-1">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-[13px] font-inter">
                    <CheckCircle size={15} className="text-white/80" />
                    <span>{cat.features.length} Key Benefits</span>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.features.map((f, fi) => (
                  <motion.div
                    key={fi}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + fi * 0.09, duration: 0.45 }}
                    className="group bg-white rounded-2xl overflow-hidden
                               border border-slate-100
                               shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                               hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)]
                               hover:-translate-y-2
                               transition-all duration-300"
                  >
                    {/* Colored top accent bar */}
                    <div className={`h-1.5 w-full ${cat.accentBar}`} />

                    <div className="p-7">
                      {/* Icon */}
                      <div className={`w-[56px] h-[56px] ${cat.iconBg} rounded-xl
                                      flex items-center justify-center mb-5
                                      group-hover:scale-110 transition-transform duration-300`}>
                        <f.Icon size={26} className={cat.iconClr} strokeWidth={1.9} />
                      </div>

                      {/* Title */}
                      <h4 className="font-poppins font-bold text-[17px]
                                     text-slate-900 leading-snug mb-3">
                        {f.title}
                      </h4>

                      {/* Thin accent line */}
                      <div className={`h-[3px] w-9 ${cat.accentBar} rounded-full mb-4`} />

                      {/* Description */}
                      <p className="font-inter text-slate-500 text-[14.5px] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900
                     rounded-3xl px-10 py-11
                     flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl
                            flex items-center justify-center flex-shrink-0 shadow-lg">
              <CheckCircle size={28} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-poppins font-black text-[26px] sm:text-[30px]
                             text-white leading-tight mb-1.5">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="font-inter text-slate-400 text-[16px]">
                Book a free demo class today — no commitment, just learning.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 flex-shrink-0
                       bg-gradient-to-r from-orange-500 to-orange-600
                       hover:from-orange-600 hover:to-orange-700
                       text-white font-poppins font-bold text-[17px]
                       px-9 py-4 rounded-2xl
                       shadow-xl shadow-orange-900/30
                       hover:-translate-y-1 hover:shadow-2xl
                       transition-all duration-300"
          >
            Book Free Demo
            <ArrowRight size={18}
              className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
