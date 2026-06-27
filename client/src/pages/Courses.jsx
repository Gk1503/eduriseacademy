import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2, Globe, Server, Database, Brain, BarChart3,
  GraduationCap, CheckCircle, Clock, IndianRupee,
  ArrowRight, Zap, BookOpen,
  Star, Users, Award, Sparkles,
} from 'lucide-react';

/* ─── Course Data ────────────────────────────────────────────── */
const courseCategories = [
  {
    id: 'web', label: 'Web Development', Icon: Globe,
    grad: 'from-indigo-500 to-blue-600',
    headerBorder: 'border-indigo-500', titleClr: 'text-indigo-700',
    iconBg: 'bg-indigo-100', iconClr: 'text-indigo-600',
    accentClr: 'text-indigo-700', accentBg: 'bg-indigo-50', accentBorder: 'border-indigo-300',
    courses: [
      { title: 'Frontend Developer', badge: 'Beginner', badgeColor: 'bg-emerald-100 text-emerald-700', duration: '1 Month', fee: '3,000', highlight: false, contents: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
      { title: 'Frontend Developer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '8,000', highlight: false, contents: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'React.js', 'Git & GitHub'] },
      { title: 'Advanced Frontend Developer', badge: 'Advanced', badgeColor: 'bg-violet-100 text-violet-700', duration: '6 Months', fee: '14,000', highlight: true, contents: ['HTML, CSS & Tailwind', 'JavaScript', 'React.js', 'Git & GitHub', 'Responsive Design', 'REST API Integration', 'Cloud Deployment'] },
    ],
  },
  {
    id: 'fullstack', label: 'Full Stack Development', Icon: Code2,
    grad: 'from-violet-500 to-purple-700',
    headerBorder: 'border-violet-500', titleClr: 'text-violet-700',
    iconBg: 'bg-violet-100', iconClr: 'text-violet-600',
    accentClr: 'text-violet-700', accentBg: 'bg-violet-50', accentBorder: 'border-violet-300',
    courses: [
      { title: 'Full Stack Developer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '10,000', highlight: false, contents: ['HTML & CSS', 'Tailwind CSS (ES6)', 'JavaScript (ES6)', 'React.js', 'Node.js', 'Express.js', 'Git & GitHub'] },
      { title: 'Full Stack Developer', badge: 'Advanced', badgeColor: 'bg-violet-100 text-violet-700', duration: '6 Months', fee: '16,000', highlight: true, contents: ['3-Month course content', 'AI Fundamentals', 'Cloud Deployment', 'System Architecture', 'Live Project Build'] },
    ],
  },
  {
    id: 'backend', label: 'Backend Development', Icon: Server,
    grad: 'from-cyan-500 to-blue-600',
    headerBorder: 'border-cyan-500', titleClr: 'text-cyan-700',
    iconBg: 'bg-cyan-100', iconClr: 'text-cyan-600',
    accentClr: 'text-cyan-700', accentBg: 'bg-cyan-50', accentBorder: 'border-cyan-300',
    courses: [
      { title: 'Backend Developer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '8,000', highlight: false, contents: ['JavaScript', 'Node.js', 'Express.js', 'REST API', 'API Testing (Postman)', 'MongoDB', 'Git & GitHub'] },
      { title: 'Advanced Backend Developer', badge: 'Advanced', badgeColor: 'bg-violet-100 text-violet-700', duration: '6 Months', fee: '15,000', highlight: true, contents: ['3-Month course content', 'Role Based Access Control', 'API Validation', 'API Testing', 'Cloud Deployment'] },
    ],
  },
  {
    id: 'php', label: 'PHP Development', Icon: Database,
    grad: 'from-orange-500 to-amber-600',
    headerBorder: 'border-orange-500', titleClr: 'text-orange-700',
    iconBg: 'bg-orange-100', iconClr: 'text-orange-600',
    accentClr: 'text-orange-700', accentBg: 'bg-orange-50', accentBorder: 'border-orange-300',
    courses: [
      { title: 'PHP Developer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '10,000', highlight: false, contents: ['HTML & CSS', 'PHP (Core)', 'Forms & Sessions', 'MySQL Database', 'Basic CRUD Operations', 'Git & GitHub'] },
      { title: 'Advanced PHP Developer', badge: 'Advanced', badgeColor: 'bg-violet-100 text-violet-700', duration: '6 Months', fee: '16,000', highlight: true, contents: ['3-Month course content', 'MVC Architecture', 'CRUD Applications', 'Authentication', 'Cloud Deployment', 'Role Based Access Control'] },
    ],
  },
  {
    id: 'python', label: 'Python', Icon: Brain,
    grad: 'from-emerald-500 to-teal-600',
    headerBorder: 'border-emerald-500', titleClr: 'text-emerald-700',
    iconBg: 'bg-emerald-100', iconClr: 'text-emerald-600',
    accentClr: 'text-emerald-700', accentBg: 'bg-emerald-50', accentBorder: 'border-emerald-300',
    courses: [
      { title: 'Python Developer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '10,000', highlight: false, contents: ['Python Basics', 'OOP Concepts', 'File Handling', 'Data Structures', 'Modules & Libraries', 'Git & GitHub'] },
      { title: 'Advanced Python Developer', badge: 'Advanced', badgeColor: 'bg-violet-100 text-violet-700', duration: '6 Months', fee: '15,000', highlight: true, contents: ['Python (Core)', 'Django Framework', 'Flask Framework', 'REST API Development', 'JWT Authentication', 'Cloud Deployment'] },
    ],
  },
  {
    id: 'aiml', label: 'AI / ML Engineer', Icon: Zap,
    grad: 'from-rose-500 to-pink-600',
    headerBorder: 'border-rose-500', titleClr: 'text-rose-700',
    iconBg: 'bg-rose-100', iconClr: 'text-rose-600',
    accentClr: 'text-rose-700', accentBg: 'bg-rose-50', accentBorder: 'border-rose-300',
    courses: [
      { title: 'AI / ML Engineer', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '10,000', highlight: true, contents: ['Python for ML', 'Math Foundations', 'Pandas & NumPy', 'Data Visualization (MatPlotLib)', 'Jupyter Notebooks', 'Git & GitHub', 'Supervised vs Unsupervised Learning'] },
    ],
  },
  {
    id: 'data', label: 'Data Analytics', Icon: BarChart3,
    grad: 'from-amber-500 to-orange-500',
    headerBorder: 'border-amber-500', titleClr: 'text-amber-700',
    iconBg: 'bg-amber-100', iconClr: 'text-amber-600',
    accentClr: 'text-amber-700', accentBg: 'bg-amber-50', accentBorder: 'border-amber-300',
    courses: [
      { title: 'Data Analytics & Visualization', badge: 'Beginner', badgeColor: 'bg-emerald-100 text-emerald-700', duration: '1 Month', fee: '3,000', highlight: false, contents: ['Data Fundamentals', 'Excel Basics', 'Data Cleaning', 'SQL Basics', 'Charts & Visuals', 'Reporting Fundamentals'] },
      { title: 'Data Analytics & Visualization', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-700', duration: '3 Months', fee: '8,000', highlight: true, contents: ['1-Month course content', 'Python Basics for Analytics', 'Pandas & NumPy', 'Exploratory Data Analysis', 'Data Cleaning & Transformation', 'Business Case Studies'] },
    ],
  },
];

const tabs = [
  { id: 'all',       label: 'All Courses'     },
  { id: 'tuition',   label: '🎓 Academic Tuition' },
  { id: 'web',       label: 'Web Dev'          },
  { id: 'fullstack', label: 'Full Stack'       },
  { id: 'backend',   label: 'Backend'          },
  { id: 'php',       label: 'PHP'              },
  { id: 'python',    label: 'Python'           },
  { id: 'aiml',      label: 'AI / ML'          },
  { id: 'data',      label: 'Data Analytics'   },
];

/* ─── Course Card ────────────────────────────────────────────── */
function CourseCard({ course, accentClr, accentBg, accentBorder }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-2xl overflow-hidden flex flex-col
                  border ${course.highlight ? `${accentBorder} border-2` : 'border-slate-200'}
                  shadow-[0_3px_16px_rgba(0,0,0,0.07)]
                  hover:shadow-[0_10px_32px_rgba(0,0,0,0.11)]
                  hover:-translate-y-1 transition-all duration-300`}
    >
      {course.highlight && (
        <div className={`${accentBg} text-center text-[11px] font-poppins font-bold
                         tracking-[0.15em] uppercase py-1.5 ${accentClr}`}>
          ⭐ Most Popular
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div>
            <span className={`inline-block text-[11px] font-inter font-semibold
                              px-2.5 py-1 rounded-full border ${course.badgeColor} mb-2`}>
              {course.badge}
            </span>
            <h3 className="font-poppins font-bold text-[16px] text-slate-900 leading-snug">
              {course.title}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-center gap-0.5 justify-end">
              <IndianRupee size={13} className="text-emerald-600" />
              <span className="font-poppins font-black text-[22px] text-emerald-600">{course.fee}</span>
            </div>
            <div className="flex items-center gap-1 justify-end">
              <Clock size={11} className="text-slate-400" />
              <span className="font-inter text-[12px] text-slate-500">{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Contents — always visible */}
        <div className="bg-slate-50 rounded-xl p-3 mb-4 flex-1">
          <p className="font-inter font-semibold text-[11.5px] text-slate-400 uppercase tracking-wider mb-2.5">
            Course Contents
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            {course.contents.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={13} className="text-emerald-500 flex-shrink-0" />
                <span className="font-inter text-[13px] text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className={`group flex items-center justify-center gap-2 w-full
                     ${accentBg} ${accentClr} border ${accentBorder}
                     hover:opacity-90 font-poppins font-bold text-[13.5px]
                     py-2.5 rounded-xl transition-all duration-300
                     hover:-translate-y-0.5`}
        >
          Enroll Now <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Category Block ─────────────────────────────────────────── */
function CategoryBlock({ cat }) {
  const Icon = cat.Icon;
  return (
    <div className="mb-10">
      {/* Clean header — no heavy gradient */}
      <div className={`flex items-center gap-3 mb-5 pb-4 border-b-2 ${cat.headerBorder}`}>
        <div className={`w-10 h-10 ${cat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon size={20} className={cat.iconClr} strokeWidth={2} />
        </div>
        <div>
          <h2 className={`font-poppins font-black text-[22px] ${cat.titleClr} leading-tight`}>{cat.label}</h2>
          <p className="font-inter text-slate-400 text-[12.5px]">{cat.courses.length} plans available</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {cat.courses.map((course, i) => (
          <CourseCard
            key={i}
            course={course}
            accentClr={cat.accentClr}
            accentBg={cat.accentBg}
            accentBorder={cat.accentBorder}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Academic Tuition Section ───────────────────────────────── */
function AcademicSection() {
  const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi / Gujarati', 'Computer'];
  const features = [
    { Icon: Users,       text: 'Small batches — 8 to 12 students only'    },
    { Icon: Star,        text: 'Improve 20–30 marks in 60 days guaranteed' },
    { Icon: Award,       text: 'GSEB & CBSE board exam focused'            },
    { Icon: BookOpen,    text: 'Experienced teachers with 10+ years'       },
    { Icon: CheckCircle, text: 'Doubt clearing & revision sessions'        },
    { Icon: Zap,         text: 'Previous year paper & mock tests'          },
  ];

  const plans = [
    {
      badge: 'Flexible', badgeClr: 'bg-teal-100 text-teal-700 border-teal-200',
      title: 'Single Subject', fee: '500 – 800', per: 'per month', highlight: false,
      contents: ['Any one subject of choice', 'Regular tests', 'Doubt clearing sessions', 'Study material included'],
    },
    {
      badge: 'Best Value', badgeClr: 'bg-orange-100 text-orange-700 border-orange-200',
      title: 'All Subjects Package', fee: '2,500', per: 'per month', highlight: true,
      contents: ['All core subjects', 'Daily homework help', 'Regular tests & assessments', 'Parent progress reports', 'Holiday revision batches'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 rounded-3xl overflow-hidden border-2 border-emerald-200 shadow-[0_8px_40px_rgba(16,185,129,0.12)]"
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-7 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-black/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 flex-shrink-0">
              <GraduationCap size={28} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 border border-white/30 text-white text-[11px] font-inter font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  Academic Tuition
                </span>
              </div>
              <h2 className="font-poppins font-black text-[26px] sm:text-[30px] text-white leading-tight">
                Class 1<sup>st</sup> to 10<sup>th</sup>
              </h2>
              <p className="font-inter text-white/75 text-[14px] mt-1">
                GSEB & CBSE · Maths, Science, English & more
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s, i) => (
              <span key={i} className="bg-white/15 border border-white/25 text-white
                                       font-inter font-semibold text-[12px]
                                       px-3 py-1.5 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Features */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <h3 className="font-poppins font-bold text-[16px] text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-600" /> Why Choose Our Tuition?
            </h3>
            <ul className="space-y-3">
              {features.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={13} className="text-emerald-600" />
                  </div>
                  <span className="font-inter text-[13.5px] text-slate-700 leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {plans.map((plan, i) => (
              <div key={i}
                className={`rounded-2xl overflow-hidden border
                            ${plan.highlight
                              ? 'border-emerald-300 shadow-[0_4px_24px_rgba(16,185,129,0.18)]'
                              : 'border-slate-200 shadow-sm'
                            }`}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600
                                  text-white text-center text-[11px] font-poppins font-bold
                                  tracking-[0.15em] uppercase py-1.5">
                    ⭐ Best Value
                  </div>
                )}
                <div className="bg-white p-5">
                  <span className={`inline-block text-[11.5px] font-inter font-semibold
                                    px-2.5 py-1 rounded-full border ${plan.badgeClr} mb-3`}>
                    {plan.badge}
                  </span>
                  <h3 className="font-poppins font-bold text-[18px] text-slate-900 mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <IndianRupee size={14} className="text-emerald-600" />
                    <span className="font-poppins font-black text-[24px] text-emerald-600">{plan.fee}</span>
                    <span className="font-inter text-slate-400 text-[12px]">/ {plan.per}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {plan.contents.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle size={13} className="text-emerald-500 flex-shrink-0" />
                        <span className="font-inter text-[13.5px] text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="group flex items-center justify-center gap-2 w-full
                               bg-gradient-to-r from-emerald-600 to-teal-600
                               hover:from-emerald-700 hover:to-teal-700
                               text-white font-poppins font-bold text-[14px]
                               py-2.5 rounded-xl shadow-md shadow-emerald-100
                               hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Enquire Now <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────── */
export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');

  const visibleCategories = activeTab === 'all'
    ? courseCategories
    : courseCategories.filter(c => c.id === activeTab);

  const showTuition = activeTab === 'all' || activeTab === 'tuition';
  const showIT = activeTab !== 'tuition';

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 pt-[120px] pb-12">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30
                           text-indigo-300 font-inter font-semibold text-[12px] tracking-[0.2em] uppercase
                           px-5 py-2.5 rounded-full mb-5">
            <BookOpen size={13} /> EduRise Academy
          </span>
          <h1 className="font-poppins font-black text-[38px] sm:text-[50px] text-white leading-tight mb-3">
            Our <span className="text-indigo-400">Courses</span> &amp; Programs
          </h1>
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[3px] w-10 rounded-full bg-indigo-500" />
            <span className="h-[3px] w-5 rounded-full bg-orange-400" />
          </div>
          <p className="font-inter text-slate-400 text-[16px] sm:text-[17px] max-w-2xl mx-auto mb-8">
            Professional IT courses, Academic tuition for Class 1–10 & Spoken English —
            all crafted to give you real results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[['7+','Course Categories'],['15+','Programs Offered'],['500+','Students Trained'],['95%','Placement Rate']].map(([n, l], i) => (
              <div key={i} className="text-center">
                <p className="font-poppins font-black text-[26px] text-white leading-none">{n}</p>
                <p className="font-inter text-slate-400 text-[12px] mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-poppins font-semibold text-[13px]
                          transition-all duration-200 whitespace-nowrap
                          ${activeTab === tab.id
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                          }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

            {/* Academic Tuition — ALWAYS FIRST */}
            {showTuition && <AcademicSection />}

            {/* IT Courses */}
            {showIT && visibleCategories.map(cat => (
              <CategoryBlock key={cat.id} cat={cat} />
            ))}

          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-700
                        rounded-3xl px-8 py-10 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <p className="font-inter text-indigo-200 text-[12px] tracking-[0.2em] uppercase font-semibold mb-2">Not Sure Which Course?</p>
          <h3 className="font-poppins font-black text-[26px] sm:text-[30px] text-white mb-3">Book a Free Demo Class</h3>
          <p className="font-inter text-indigo-200 text-[15px] mb-6 max-w-xl mx-auto">
            Talk to our counsellor, attend a live class, then decide. No payment required.
          </p>
          <Link to="/contact"
            className="group inline-flex items-center gap-2.5
                       bg-white hover:bg-slate-50 text-indigo-700
                       font-poppins font-bold text-[15px]
                       px-8 py-3.5 rounded-2xl shadow-xl
                       hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300"
          >
            Book Free Demo <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
