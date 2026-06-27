import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, BookOpen, Award, TrendingUp, GraduationCap,
  CheckCircle, ArrowRight, Quote, MapPin, Heart,
  Monitor, Mic2, Target, Lightbulb, Star, Sparkles,
  Clock, Shield,
} from 'lucide-react';
import newlogo from '../Gallery/newlogo.jpeg';

/* ─── Data ───────────────────────────────────────────────────── */
const stats = [
  { num: '500+', label: 'Students Trained',  Icon: Users,      clr: 'text-indigo-600',  numClr: 'text-indigo-700',  bg: 'bg-indigo-50',  border: 'border-indigo-100'  },
  { num: '10+',  label: 'Years Experience',  Icon: Award,      clr: 'text-emerald-600', numClr: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { num: '95%',  label: 'Placement Rate',    Icon: TrendingUp, clr: 'text-orange-500',  numClr: 'text-orange-600',  bg: 'bg-orange-50',  border: 'border-orange-100'  },
  { num: '20+',  label: 'Courses Offered',   Icon: BookOpen,   clr: 'text-violet-600',  numClr: 'text-violet-700',  bg: 'bg-violet-50',  border: 'border-violet-100'  },
];

const services = [
  {
    Icon: Monitor,
    title: 'Professional IT Courses',
    desc: 'Web Development, Full Stack, Backend, Python, PHP, AI/ML, and Data Analytics — all with live projects and placement support.',
    tags: ['Web Dev', 'Full Stack', 'Python', 'AI/ML'],
    cardBg: 'bg-indigo-50',
    border: 'border-indigo-100',
    topBar: 'bg-indigo-500',
    iconBg: 'bg-indigo-100', iconClr: 'text-indigo-600',
    tagClr: 'bg-white text-indigo-700 border-indigo-200',
    titleClr: 'text-indigo-900',
  },
  {
    Icon: GraduationCap,
    title: 'Academic Tuition (Class 1–10)',
    desc: 'Small-batch tuition for Maths, Science, English and more. Focused on GSEB & CBSE boards with regular tests and doubt sessions.',
    tags: ['GSEB', 'CBSE', 'All Subjects', 'Std 1–10'],
    cardBg: 'bg-emerald-50',
    border: 'border-emerald-100',
    topBar: 'bg-emerald-500',
    iconBg: 'bg-emerald-100', iconClr: 'text-emerald-600',
    tagClr: 'bg-white text-emerald-700 border-emerald-200',
    titleClr: 'text-emerald-900',
  },
  {
    Icon: Mic2,
    title: 'Spoken English',
    desc: 'Confidence-building English communication program — grammar, fluency, group discussions and interview English.',
    tags: ['Communication', 'Grammar', 'Fluency'],
    cardBg: 'bg-amber-50',
    border: 'border-amber-100',
    topBar: 'bg-amber-500',
    iconBg: 'bg-amber-100', iconClr: 'text-amber-600',
    tagClr: 'bg-white text-amber-700 border-amber-200',
    titleClr: 'text-amber-900',
  },
];

const whyUs = [
  { text: 'Expert faculty with 10+ years of real-world industry experience', Icon: Award,      clr: 'text-indigo-600',  bg: 'bg-indigo-50'  },
  { text: 'Small batches (max 12 students) for personal attention',           Icon: Users,      clr: 'text-emerald-600', bg: 'bg-emerald-50' },
  { text: 'Live project-based training — not just theory',                   Icon: Monitor,    clr: 'text-violet-600',  bg: 'bg-violet-50'  },
  { text: '100% placement assistance with mock interviews & resume prep',     Icon: TrendingUp, clr: 'text-orange-500',  bg: 'bg-orange-50'  },
  { text: 'Flexible timings — morning, evening, weekend & online batches',    Icon: Clock,      clr: 'text-cyan-600',    bg: 'bg-cyan-50'    },
  { text: 'Recognized certification on course completion',                    Icon: Shield,     clr: 'text-rose-500',    bg: 'bg-rose-50'    },
  { text: 'Regular tests, assessments & parent-teacher feedback',             Icon: BookOpen,   clr: 'text-teal-600',    bg: 'bg-teal-50'    },
  { text: 'Lifetime access to course materials and doubt sessions',           Icon: Sparkles,   clr: 'text-amber-600',   bg: 'bg-amber-50'   },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 pt-[120px] pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-700/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-emerald-700/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15
                             text-slate-300 font-inter font-semibold text-[12px]
                             tracking-[0.22em] uppercase px-5 py-2.5 rounded-full mb-6">
              <MapPin size={12} className="text-indigo-400" /> Gandhinagar, Gujarat · Est. 2016
            </span>
            <h1 className="font-poppins font-black text-[40px] sm:text-[54px] text-white leading-tight mb-5">
              About <span className="text-indigo-400">EduRise</span> Academy
            </h1>
            <p className="font-inter text-slate-400 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
              A trusted name in Gandhinagar for IT training, academic tuition and spoken English —
              shaping careers and building confidence since 2016.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Row ─────────────────────────────────────────── */}
      <div className="container mx-auto px-6 -mt-10 mb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${s.bg} border ${s.border} rounded-2xl p-5
                          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                          flex items-center gap-4`}
            >
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <s.Icon size={20} className={s.clr} strokeWidth={2} />
              </div>
              <div>
                <p className={`font-poppins font-black text-[26px] ${s.numClr} leading-none`}>{s.num}</p>
                <p className="font-inter text-slate-600 text-[12.5px] mt-0.5">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block font-inter font-bold text-[11px] tracking-[0.24em]
                               text-indigo-600 uppercase mb-4 border-b-2 border-indigo-200 pb-1">
                Our Story
              </span>
              <h2 className="font-poppins font-black text-[32px] sm:text-[38px] text-slate-900 leading-tight mb-5">
                Built on One Belief —<br />
                <span className="text-indigo-600">Every Student Can Succeed</span>
              </h2>
              <div className="space-y-4 font-inter text-slate-600 text-[15.5px] leading-relaxed">
                <p>
                  EduRise Academy was founded in 2016 with a clear goal: give students in Gandhinagar access to
                  practical, job-ready education that actually works. We started with a small batch of 10 students
                  and a passion for teaching the right way.
                </p>
                <p>
                  Today, we have trained 500+ students now working in companies across Gujarat and India.
                  Our approach has always been the same — small batches, real projects, personal attention,
                  and honest placement support.
                </p>
                <p>
                  Beyond IT, we serve Class 1–10 students through academic tuition, and offer Spoken English
                  for students and professionals. We believe education should be complete — not just code.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-3xl
                              border border-indigo-100 shadow-[0_8px_40px_rgba(99,102,241,0.12)] p-8 text-center">
                <img src={newlogo} alt="EduRise Academy" className="h-[80px] w-auto mx-auto mb-5 drop-shadow-sm" />
                <h3 className="font-poppins font-black text-[22px] text-slate-900 mb-1">EduRise Academy</h3>
                <p className="font-inter text-slate-500 text-[14px] mb-6">Gandhinagar, Gujarat · Est. 2016</p>
                <div className="grid grid-cols-3 gap-3">
                  {[['2016','Founded'],['500+','Students'],['3','Programs']].map(([n,l],i) => (
                    <div key={i} className="bg-white rounded-xl py-4 px-2 border border-indigo-100 shadow-sm">
                      <p className="font-poppins font-black text-[20px] text-indigo-600 leading-none">{n}</p>
                      <p className="font-inter text-slate-500 text-[11.5px] mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white
                              rounded-2xl px-5 py-3 shadow-lg flex items-center gap-2.5">
                <Award size={16} className="text-emerald-200" />
                <div>
                  <p className="font-poppins font-bold text-[13px] leading-none">Top Rated</p>
                  <p className="font-inter text-emerald-200 text-[11px] mt-0.5">in Gandhinagar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Provide ───────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block font-inter font-bold text-[11px] tracking-[0.24em]
                             text-indigo-600 uppercase mb-3">What We Offer</span>
            <h2 className="font-poppins font-black text-[32px] sm:text-[40px] text-slate-900 mb-3">
              Three Programs, One Academy
            </h2>
            <p className="font-inter text-slate-500 text-[16px] max-w-xl mx-auto">
              From school-age children to working professionals — the right program for every stage of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${s.cardBg} border ${s.border} rounded-2xl overflow-hidden
                            shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                            hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]
                            hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* Colored top bar */}
                <div className={`${s.topBar} h-1.5 w-full`} />
                <div className="p-7">
                  <div className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                    <s.Icon size={22} className={s.iconClr} strokeWidth={1.9} />
                  </div>
                  <h3 className={`font-poppins font-bold text-[19px] ${s.titleClr} leading-snug mb-3`}>
                    {s.title}
                  </h3>
                  <p className="font-inter text-slate-600 text-[14.5px] leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t, j) => (
                      <span key={j} className={`text-[11.5px] font-inter font-semibold
                                                px-2.5 py-1 rounded-full border ${s.tagClr} shadow-sm`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Teacher ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block font-inter font-bold text-[11px] tracking-[0.24em]
                             text-indigo-600 uppercase mb-3">Our Faculty</span>
            <h2 className="font-poppins font-black text-[32px] sm:text-[40px] text-slate-900">
              Meet Our Special Teacher
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200
                            shadow-[0_12px_56px_rgba(0,0,0,0.12)]">
              <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">

                {/* Photo panel — dark */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900
                                flex flex-col items-center justify-center p-8
                                border-b sm:border-b-0 sm:border-r border-white/10">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20
                                  shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-4 bg-indigo-100
                                  flex items-center justify-center">
                    <img
                      src="/teacher.jpg"
                      alt="Faculty"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<span style="font-size:2.5rem;font-weight:900;color:#4f46e5">P</span>';
                      }}
                    />
                  </div>
                  <h3 className="font-poppins font-bold text-[17px] text-white text-center mb-0.5">
                    Priya Sharma
                  </h3>
                  <p className="font-inter text-indigo-300 font-semibold text-[12.5px] text-center mb-3">
                    Lead Academic Tutor
                  </p>
                  <div className="flex items-center gap-1 justify-center mb-2">
                    {[1,2,3,4,5].map(n => (
                      <Star key={n} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-inter text-slate-400 text-[11.5px] text-center">10+ Years Teaching</p>
                </div>

                {/* Quote panel — warm off-white */}
                <div className="bg-slate-50 p-8 flex flex-col justify-center">
                  <Quote size={28} className="text-indigo-300 mb-4" />
                  <blockquote className="font-inter text-slate-700 text-[15.5px] leading-relaxed italic mb-6">
                    "Every child comes with a different pace of learning. At EduRise, we make sure
                    no student is left behind. I have seen students go from struggling with basic
                    Maths to scoring 90+ in board exams — that transformation is what drives me
                    every single day."
                  </blockquote>
                  <div className="border-t border-slate-200 pt-5">
                    <p className="font-inter font-bold text-slate-400 text-[11px] mb-3 uppercase tracking-widest">
                      Subjects Taught
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies'].map((sub, i) => (
                        <span key={i} className="text-[12px] font-inter font-semibold
                                                  bg-indigo-100 text-indigo-700 border border-indigo-200
                                                  px-3 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student quotes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {[
                { quote: "My daughter's Maths grade jumped from D to A in just 2 months. The personal attention here is amazing.", name: 'Parent — Std 8 Student' },
                { quote: "Best teacher I've ever had. She explains every concept with real-life examples and never rushes through topics.", name: 'Rahul M. — Class 10 student' },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5"
                >
                  <p className="font-inter text-slate-700 text-[14px] leading-relaxed italic mb-3">
                    "{t.quote}"
                  </p>
                  <p className="font-inter font-semibold text-indigo-600 text-[12.5px]">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block font-inter font-bold text-[11px] tracking-[0.24em]
                             text-indigo-600 uppercase mb-3">Our Purpose</span>
            <h2 className="font-poppins font-black text-[32px] sm:text-[40px] text-slate-900">
              Mission &amp; Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: 'Our Mission', Icon: Target,
                bg: 'bg-indigo-600', textClr: 'text-white', subClr: 'text-indigo-200',
                text: 'To provide practical, job-ready education that empowers students with real skills, industry knowledge and the confidence to excel — whether in a boardroom, a classroom or a tech company.',
              },
              {
                label: 'Our Vision', Icon: Lightbulb,
                bg: 'bg-emerald-600', textClr: 'text-white', subClr: 'text-emerald-200',
                text: "To be Gandhinagar's most trusted learning centre — where every student, from Class 1 to a working professional, finds the right education to grow.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.bg} rounded-2xl p-8 relative overflow-hidden`}
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                    <item.Icon size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className={`font-poppins font-bold text-[22px] ${item.textClr} mb-3`}>{item.label}</h3>
                  <p className={`font-inter ${item.subClr} text-[15px] leading-relaxed`}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { Icon: Target,    title: 'Result-Focused',    desc: 'Every course is designed around real outcomes — jobs, marks, or fluency.',   bg: 'bg-violet-50', border: 'border-violet-100', iconBg: 'bg-violet-100', iconClr: 'text-violet-600' },
              { Icon: Heart,     title: 'Student-First',     desc: 'We measure success by how well each student grows, not just attendance.',    bg: 'bg-rose-50',   border: 'border-rose-100',   iconBg: 'bg-rose-100',   iconClr: 'text-rose-500'  },
              { Icon: Lightbulb, title: 'Practical Learning', desc: 'Hands-on projects and real problems prepare students for the real world.',  bg: 'bg-amber-50',  border: 'border-amber-100',  iconBg: 'bg-amber-100',  iconClr: 'text-amber-600' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center p-6 ${v.bg} border ${v.border} rounded-2xl`}
              >
                <div className={`w-11 h-11 ${v.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <v.Icon size={20} className={v.iconClr} strokeWidth={2} />
                </div>
                <h4 className="font-poppins font-bold text-[16px] text-slate-900 mb-1.5">{v.title}</h4>
                <p className="font-inter text-slate-600 text-[13.5px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block font-inter font-bold text-[11px] tracking-[0.24em]
                             text-indigo-600 uppercase mb-3">Our Advantages</span>
            <h2 className="font-poppins font-black text-[32px] sm:text-[40px] text-slate-900">
              Why Students &amp; Parents Choose Us
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-start gap-3.5 ${item.bg} border
                             ${item.bg.replace('bg-','border-').replace('-50','-100')}
                             rounded-xl px-5 py-4`}
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <item.Icon size={15} className={item.clr} strokeWidth={2} />
                </div>
                <span className="font-inter text-slate-700 text-[14px] leading-snug pt-1">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl
                            flex items-center justify-center mx-auto mb-5">
              <GraduationCap size={26} className="text-indigo-400" strokeWidth={1.8} />
            </div>
            <h3 className="font-poppins font-black text-[30px] text-white mb-3">
              Ready to Start Learning?
            </h3>
            <p className="font-inter text-slate-400 text-[16px] leading-relaxed mb-8">
              Visit us in Gandhinagar or book a free demo class — for IT courses,
              academic tuition or Spoken English. No commitment required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact"
                className="group inline-flex items-center gap-2.5
                           bg-indigo-600 hover:bg-indigo-500 text-white
                           font-poppins font-bold text-[15px]
                           px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-900/50
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Free Demo <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/courses"
                className="inline-flex items-center gap-2
                           border border-white/20 hover:border-white/40
                           text-slate-300 hover:text-white
                           font-poppins font-bold text-[15px]
                           px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
