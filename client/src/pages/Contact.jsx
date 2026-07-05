import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
  CheckCircle, Send, User, MessageSquare,
  GraduationCap, ChevronDown, Sparkles,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { inquiriesAPI } from '../services/api';

/* ─── Static course list ─────────────────────────────────────── */
const courseOptions = [
  'Web Development (Frontend)',
  'Full Stack Development',
  'Backend Development',
  'PHP Development',
  'Python Development',
  'AI / ML Engineer',
  'Data Analytics',
  'Academic Tuition (Class 1–10)',
  'Spoken English',
];

const contactDetails = [
  {
    Icon: MapPin, label: 'Visit Us',
    value: 'EduRise Academy Gandhinagar, SFN 203, Arizona Sky, Vavol, Uvarsad Road, Gandhinagar',
    href: null, iconBg: 'bg-indigo-500/20', iconClr: 'text-indigo-300',
  },
  {
    Icon: Phone, label: 'Call Us',
    value: '+91 94270 80826',
    href: 'tel:+919427080826', iconBg: 'bg-emerald-500/20', iconClr: 'text-emerald-300',
  },
  {
    Icon: Mail, label: 'Email Us',
    value: 'eduriseacademy.learning@gmail.com',
    href: 'mailto:eduriseacademy.learning@gmail.com', iconBg: 'bg-sky-500/20', iconClr: 'text-sky-300',
  },
  {
    Icon: Clock, label: 'Working Hours',
    value: 'Mon – Sat: 9 AM – 8 PM\nSunday: 10 AM – 5 PM',
    href: null, iconBg: 'bg-amber-500/20', iconClr: 'text-amber-300',
  },
];

/* ─── Input component ─────────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block font-inter font-semibold text-[13px] text-slate-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-inter text-red-500 text-[12px] mt-1 flex items-center gap-1">
          <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-[9px]">!</span>
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = `w-full bg-white border-2 border-slate-200 rounded-xl
  px-4 py-3 font-inter text-[14.5px] text-slate-800
  placeholder:text-slate-400
  focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
  transition-all duration-200`;

/* ─── Page ───────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', city:'', course:'', message:'' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)  e.name   = 'Please enter your full name';
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = 'Enter a valid 10-digit number';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.course) e.course = 'Please select a course';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await inquiriesAPI.create({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        courseName: form.course,
        message: form.message,
        source: 'contact-page',
      });
      setSubmitted(true);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send. Please try calling or WhatsApp instead.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 pt-[120px] pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-700/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-emerald-700/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30
                             text-indigo-300 font-inter font-semibold text-[12px]
                             tracking-[0.22em] uppercase px-5 py-2.5 rounded-full mb-6">
              <Sparkles size={12} /> We respond within 2 hours
            </span>
            <h1 className="font-poppins font-black text-[40px] sm:text-[54px] text-white leading-tight mb-4">
              Let's Start Your<br />
              <span className="text-indigo-400">Learning Journey</span>
            </h1>
            <p className="font-inter text-slate-400 text-[16px] sm:text-[17px] max-w-xl mx-auto">
              Book a free demo, ask a question, or just say hello —
              our team is here to help you choose the right course.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Quick Contact Chips ───────────────────────────────── */}
      <div className="container mx-auto px-6 -mt-7 mb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { Icon: Phone, label: 'Call Now', sub: '+91 94270 80826', href: 'tel:+919427080826', bg: 'bg-white', border: 'border-slate-200', iconBg: 'bg-emerald-100', iconClr: 'text-emerald-600', hover: 'hover:border-emerald-300 hover:shadow-emerald-100' },
            { Icon: FaWhatsapp, label: 'WhatsApp', sub: 'Chat instantly', href: 'https://wa.me/919427080826', bg: 'bg-green-600', border: 'border-green-500', iconBg: 'bg-white/20', iconClr: 'text-white', hover: 'hover:bg-green-700', textClr: 'text-white', subClr: 'text-green-100' },
            { Icon: Mail, label: 'Email Us', sub: 'eduriseacademy.learning@gmail.com', href: 'mailto:eduriseacademy.learning@gmail.com', bg: 'bg-white', border: 'border-slate-200', iconBg: 'bg-indigo-100', iconClr: 'text-indigo-600', hover: 'hover:border-indigo-300 hover:shadow-indigo-100' },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`group flex items-center gap-4 ${item.bg} border ${item.border}
                          rounded-2xl px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                          hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                          hover:-translate-y-1 ${item.hover}
                          transition-all duration-300`}
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <item.Icon size={22} className={item.iconClr} />
              </div>
              <div>
                <p className={`font-poppins font-bold text-[16px] ${item.textClr || 'text-slate-900'} leading-none mb-1`}>
                  {item.label}
                </p>
                <p className={`font-inter text-[13px] ${item.subClr || 'text-slate-500'}`}>{item.sub}</p>
              </div>
              <ArrowRight size={16} className={`ml-auto ${item.textClr || 'text-slate-400'} group-hover:translate-x-1 transition-transform`} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Main 2-col ────────────────────────────────────────── */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">

          {/* ── Left: Info Panel ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl overflow-hidden
                            shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              {/* Top accent */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />

              <div className="p-8">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 bg-indigo-500/20 border border-indigo-500/30
                                  rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-indigo-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-poppins font-black text-[18px] text-white leading-none">EduRise Academy</p>
                    <p className="font-inter text-slate-500 text-[12px] mt-0.5">Gandhinagar, Gujarat</p>
                  </div>
                </div>

                {/* Contact items */}
                <div className="space-y-6 mb-8">
                  {contactDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <item.Icon size={17} className={item.iconClr} strokeWidth={1.9} />
                      </div>
                      <div>
                        <p className="font-inter font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href}
                            className="font-inter text-slate-300 text-[14px] hover:text-white transition-colors leading-relaxed">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-inter text-slate-300 text-[14px] leading-relaxed whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919427080826"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full
                             bg-green-600 hover:bg-green-500 text-white
                             font-poppins font-bold text-[15px]
                             py-3.5 rounded-xl mb-6
                             hover:-translate-y-0.5 transition-all duration-300
                             shadow-lg shadow-green-900/30"
                >
                  <FaWhatsapp size={20} />
                  Chat on WhatsApp
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Divider */}
                <div className="border-t border-white/8 pt-6">
                  <p className="font-inter text-slate-500 text-[11px] uppercase tracking-widest font-bold mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { Icon: FaFacebook,  href: '#', color: 'hover:bg-blue-600'  },
                      { Icon: FaInstagram, href: '#', color: 'hover:bg-pink-600'  },
                      { Icon: FaYoutube,   href: '#', color: 'hover:bg-red-600'   },
                    ].map(({ Icon, href, color }, i) => (
                      <a key={i} href={href}
                        className={`w-9 h-9 bg-white/8 border border-white/10 rounded-xl
                                    flex items-center justify-center text-slate-400
                                    hover:text-white ${color} hover:border-transparent
                                    transition-all duration-200`}>
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-slate-200
                            shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">

              {/* Form header */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-7">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-[20px] text-white leading-tight">
                      Book a Free Demo Class
                    </h2>
                    <p className="font-inter text-indigo-200 text-[13px] mt-0.5">
                      Fill in your details — we'll call you within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success State ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-8 py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle size={40} className="text-emerald-600" />
                    </motion.div>
                    <h3 className="font-poppins font-black text-[26px] text-slate-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-inter text-slate-500 text-[15.5px] leading-relaxed max-w-sm mx-auto mb-8">
                      Thank you, <strong className="text-slate-700">{form.name}</strong>!
                      Our team will call you at <strong className="text-slate-700">{form.phone}</strong> within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',city:'',course:'',message:'' }); }}
                        className="font-poppins font-bold text-[14px] text-indigo-600
                                   border-2 border-indigo-200 hover:border-indigo-400
                                   px-6 py-2.5 rounded-xl transition-colors"
                      >
                        Submit Another
                      </button>
                      <Link to="/courses"
                        className="inline-flex items-center justify-center gap-2
                                   bg-indigo-600 hover:bg-indigo-700 text-white
                                   font-poppins font-bold text-[14px]
                                   px-6 py-2.5 rounded-xl transition-colors"
                      >
                        View Courses <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="px-8 py-8"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <Field label="Full Name *" error={errors.name}>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            name="name" value={form.name} onChange={handleChange}
                            type="text" placeholder="e.g. Raj Patel"
                            className={`${inputCls} pl-10 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}`}
                          />
                        </div>
                      </Field>
                      <Field label="Phone Number *" error={errors.phone}>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            name="phone" value={form.phone} onChange={handleChange}
                            type="tel" placeholder="10-digit mobile number"
                            className={`${inputCls} pl-10 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}`}
                          />
                        </div>
                      </Field>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <Field label="Email Address *" error={errors.email}>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            name="email" value={form.email} onChange={handleChange}
                            type="email" placeholder="your@email.com"
                            className={`${inputCls} pl-10 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}`}
                          />
                        </div>
                      </Field>
                      <Field label="City">
                        <div className="relative">
                          <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            name="city" value={form.city} onChange={handleChange}
                            type="text" placeholder="Your city (optional)"
                            className={`${inputCls} pl-10`}
                          />
                        </div>
                      </Field>
                    </div>

                    {/* Course select */}
                    <div className="mb-5">
                      <Field label="Course Interested In *" error={errors.course}>
                        <div className="relative">
                          <GraduationCap size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <select
                            name="course" value={form.course} onChange={handleChange}
                            className={`${inputCls} pl-10 pr-10 appearance-none cursor-pointer
                                        ${errors.course ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''}
                                        ${!form.course ? 'text-slate-400' : 'text-slate-800'}`}
                          >
                            <option value="">Select a course / program</option>
                            {courseOptions.map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </Field>
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <Field label="Message (optional)">
                        <textarea
                          name="message" value={form.message} onChange={handleChange}
                          rows={4} placeholder="Tell us anything — batch timing preferences, doubts, etc."
                          className={`${inputCls} resize-none`}
                        />
                      </Field>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full relative overflow-hidden
                                 bg-indigo-600 hover:bg-indigo-700
                                 disabled:bg-indigo-400 disabled:cursor-not-allowed
                                 text-white font-poppins font-bold text-[16px]
                                 py-4 rounded-xl
                                 shadow-lg shadow-indigo-200
                                 hover:shadow-xl hover:shadow-indigo-300
                                 hover:-translate-y-0.5
                                 transition-all duration-300"
                    >
                      <span className="absolute inset-0 -translate-x-full skew-x-[-18deg]
                                       bg-white/15 group-hover:translate-x-[200%]
                                       transition-transform duration-700 pointer-events-none" />
                      {submitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending your request…
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2.5">
                          <Send size={17} />
                          Send Message &amp; Book Demo
                          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      )}
                    </button>

                    <p className="font-inter text-slate-400 text-[12.5px] text-center mt-4">
                      🔒 Your information is private and will never be shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Trust badges below form */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: '⚡', title: '2-Hour Reply', sub: 'Guaranteed response' },
                { icon: '🎓', title: 'Free Demo',    sub: 'No payment needed'   },
                { icon: '🔒', title: '100% Private', sub: 'Data stays with us'  },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white border border-slate-200 rounded-2xl px-4 py-4 text-center
                             shadow-sm"
                >
                  <span className="text-[22px] block mb-1">{b.icon}</span>
                  <p className="font-poppins font-bold text-[13px] text-slate-800 leading-tight">{b.title}</p>
                  <p className="font-inter text-slate-400 text-[11.5px] mt-0.5">{b.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Map ──────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 pb-14">
        <div className="rounded-3xl overflow-hidden border border-slate-200
                        shadow-[0_8px_40px_rgba(0,0,0,0.1)] h-[320px]">
          <iframe
            src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL}
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EduRise Academy Location"
          />
        </div>
      </div>

    </div>
  );
}
