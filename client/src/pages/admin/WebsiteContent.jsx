import { useState } from 'react';
import { Save, Edit2, ChevronDown, ChevronUp, Plus, Trash2, CheckCircle } from 'lucide-react';

/* ─── Course content state (mirrors the frontend Courses.jsx data) ── */
const initCourses = [
  { id:'web',      name:'Web Development',        badge:'Beginner / Standard / Advanced', fee:'3,000 – 14,000', duration:'1–6 Months', active:true  },
  { id:'fullstack',name:'Full Stack Development', badge:'Standard / Advanced',            fee:'10,000 – 16,000',duration:'3–6 Months', active:true  },
  { id:'backend',  name:'Backend Development',    badge:'Standard / Advanced',            fee:'8,000 – 15,000', duration:'3–6 Months', active:true  },
  { id:'php',      name:'PHP Development',        badge:'Standard / Advanced',            fee:'10,000 – 16,000',duration:'3–6 Months', active:true  },
  { id:'python',   name:'Python Development',     badge:'Standard / Advanced',            fee:'10,000 – 15,000',duration:'3–6 Months', active:true  },
  { id:'aiml',     name:'AI / ML Engineer',       badge:'Standard',                       fee:'10,000',          duration:'3 Months',  active:true  },
  { id:'data',     name:'Data Analytics',         badge:'Beginner / Standard',            fee:'3,000 – 8,000',  duration:'1–3 Months',active:true  },
  { id:'tuition',  name:'Academic Tuition (1–10)',badge:'Single / Package',               fee:'500 – 2,500/mo', duration:'Monthly',   active:true  },
];

const initTestimonials = [
  { id:1, name:'Raj Patel',    course:'Full Stack Dev', rating:5, text:'Best institute in Gandhinagar! Got placed in 2 months after course completion.' },
  { id:2, name:'Sneha Shah',   course:'Python Dev',     rating:5, text:'The faculty is amazing. They give individual attention to every student.' },
  { id:3, name:'Amit Desai',   course:'Tuition Std 10', rating:5, text:'My son scored 91% in boards. The teachers here are truly dedicated.' },
];

const initHero = {
  headline1: 'Learn Today,',
  headline2: 'Lead Tomorrow',
  subtext: 'Expert coaching, computer courses & spoken English — all under one roof at EduRise Academy, Gandhinagar.',
  badge: "Gandhinagar's Trusted Academy",
  stat1: '95%', stat1label: 'Placement Rate',
  stat2: '25+', stat2label: 'Job-Ready Courses',
  stat3: '500+',stat3label: 'Students Placed',
};

const initPages = {
  about_story: 'EduRise Academy was founded in 2016 with a clear goal: give students in Gandhinagar access to practical, job-ready education that actually works.',
  about_mission: 'To provide practical, job-ready education that empowers students with real skills, industry knowledge and the confidence to excel.',
  about_vision: "To be Gandhinagar's most trusted learning centre — where every student, from Class 1 to a working professional, finds the right education to grow.",
  contact_address: 'EduRise Academy, Gandhinagar, Gujarat, India',
  contact_phone: '+91 98765 43210',
  contact_email: 'info@eduriseacademy.co.in',
};

const inputCls = 'w-full border-2 border-slate-200 rounded-xl px-3.5 py-2.5 font-inter text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition-colors';
const textCls = 'w-full border-2 border-slate-200 rounded-xl px-3.5 py-2.5 font-inter text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition-colors resize-none';

function Section({ title, subtitle, children, defaultOpen=true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button onClick={()=>setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
        <div className="text-left">
          <h3 className="font-poppins font-bold text-[15px] text-slate-900">{title}</h3>
          {subtitle && <p className="font-inter text-slate-400 text-[12.5px] mt-0.5">{subtitle}</p>}
        </div>
        {open ? <ChevronUp size={18} className="text-slate-400"/> : <ChevronDown size={18} className="text-slate-400"/>}
      </button>
      {open && <div className="px-6 pb-6 border-t border-slate-100">{children}</div>}
    </div>
  );
}

function SaveToast() {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white font-poppins font-bold text-[13.5px]
                    px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5">
      <CheckCircle size={16}/> Changes saved successfully!
    </div>
  );
}

export default function WebsiteContent() {
  const [tab, setTab] = useState('courses');
  const [courses, setCourses] = useState(initCourses);
  const [testimonials, setTestimonials] = useState(initTestimonials);
  const [hero, setHero] = useState(initHero);
  const [pages, setPages] = useState(initPages);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(()=>setSaved(false), 2500);
  };

  const tabs = [
    { id:'courses',      label:'Courses Content' },
    { id:'pages',        label:'Page Content'     },
    { id:'testimonials', label:'Testimonials'     },
    { id:'hero',         label:'Hero Banner'      },
  ];

  return (
    <div className="space-y-5">
      {/* Tab bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-1.5 flex gap-1 flex-wrap">
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            className={`px-4 py-2 rounded-xl font-poppins font-semibold text-[13.5px] transition-all
                         ${tab===t.id?'bg-indigo-600 text-white shadow-sm':'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'}`}>
            {t.label}
          </button>
        ))}
        <button onClick={save}
          className="ml-auto flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white
                     font-poppins font-bold text-[13.5px] px-5 py-2 rounded-xl transition-colors">
          <Save size={14}/> Save Changes
        </button>
      </div>

      {/* ── Courses ── */}
      {tab==='courses' && (
        <div className="space-y-4">
          <p className="font-inter text-slate-500 text-[13.5px]">
            Edit the course names, fee ranges and status shown on the <strong>/courses</strong> page.
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  {['Course Name','Badge / Levels','Fee Range','Duration','Status'].map(h=>(
                    <th key={h} className="font-inter font-bold text-[11.5px] text-slate-500 uppercase tracking-wider px-5 py-3.5 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {courses.map((c,i)=>(
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3">
                      <input value={c.name} onChange={e=>setCourses(prev=>prev.map((x,j)=>j===i?{...x,name:e.target.value}:x))}
                        className="font-inter font-semibold text-[13.5px] text-slate-900 bg-transparent border-b-2 border-transparent hover:border-slate-300 focus:border-indigo-400 outline-none w-full transition-colors"/>
                    </td>
                    <td className="px-5 py-3">
                      <input value={c.badge} onChange={e=>setCourses(prev=>prev.map((x,j)=>j===i?{...x,badge:e.target.value}:x))}
                        className="font-inter text-[13px] text-slate-600 bg-transparent border-b-2 border-transparent hover:border-slate-300 focus:border-indigo-400 outline-none w-full transition-colors"/>
                    </td>
                    <td className="px-5 py-3">
                      <input value={c.fee} onChange={e=>setCourses(prev=>prev.map((x,j)=>j===i?{...x,fee:e.target.value}:x))}
                        className="font-inter font-semibold text-[13px] text-emerald-600 bg-transparent border-b-2 border-transparent hover:border-slate-300 focus:border-indigo-400 outline-none w-full transition-colors"/>
                    </td>
                    <td className="px-5 py-3">
                      <input value={c.duration} onChange={e=>setCourses(prev=>prev.map((x,j)=>j===i?{...x,duration:e.target.value}:x))}
                        className="font-inter text-[13px] text-slate-600 bg-transparent border-b-2 border-transparent hover:border-slate-300 focus:border-indigo-400 outline-none w-full transition-colors"/>
                    </td>
                    <td className="px-5 py-3">
                      <button onClick={()=>setCourses(prev=>prev.map((x,j)=>j===i?{...x,active:!x.active}:x))}
                        className={`px-3 py-1 rounded-full font-inter font-semibold text-[12px] border transition-colors
                                     ${c.active?'bg-emerald-100 text-emerald-700 border-emerald-200':'bg-slate-100 text-slate-500 border-slate-200'}`}>
                        {c.active?'Active':'Hidden'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Page Content ── */}
      {tab==='pages' && (
        <div className="space-y-5">
          <Section title="About Page — Our Story" subtitle="Text shown in the 'Our Story' section">
            <div className="pt-4">
              <textarea value={pages.about_story} rows={4}
                onChange={e=>setPages(p=>({...p,about_story:e.target.value}))}
                className={textCls} />
            </div>
          </Section>
          <Section title="About Page — Mission & Vision" subtitle="Mission and Vision card text">
            <div className="pt-4 space-y-4">
              <div>
                <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Mission</label>
                <textarea value={pages.about_mission} rows={3} onChange={e=>setPages(p=>({...p,about_mission:e.target.value}))} className={textCls}/>
              </div>
              <div>
                <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Vision</label>
                <textarea value={pages.about_vision} rows={3} onChange={e=>setPages(p=>({...p,about_vision:e.target.value}))} className={textCls}/>
              </div>
            </div>
          </Section>
          <Section title="Contact Page — Info" subtitle="Address, phone, email shown on contact page">
            <div className="pt-4 space-y-4">
              {[['contact_address','Address','EduRise Academy…'],['contact_phone','Phone Number','+91 XXXXX XXXXX'],['contact_email','Email Address','info@…']].map(([k,l,ph])=>(
                <div key={k}>
                  <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">{l}</label>
                  <input value={pages[k]} placeholder={ph} onChange={e=>setPages(p=>({...p,[k]:e.target.value}))} className={inputCls}/>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}

      {/* ── Testimonials ── */}
      {tab==='testimonials' && (
        <div className="space-y-4">
          {testimonials.map((t,i)=>(
            <div key={t.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                  <div>
                    <label className="font-inter font-semibold text-[12px] text-slate-500 block mb-1.5">Name</label>
                    <input value={t.name} onChange={e=>setTestimonials(prev=>prev.map((x,j)=>j===i?{...x,name:e.target.value}:x))} className={inputCls}/>
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-[12px] text-slate-500 block mb-1.5">Course</label>
                    <input value={t.course} onChange={e=>setTestimonials(prev=>prev.map((x,j)=>j===i?{...x,course:e.target.value}:x))} className={inputCls}/>
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-[12px] text-slate-500 block mb-1.5">Rating (1–5)</label>
                    <input value={t.rating} type="number" min={1} max={5} onChange={e=>setTestimonials(prev=>prev.map((x,j)=>j===i?{...x,rating:Number(e.target.value)}:x))} className={inputCls}/>
                  </div>
                </div>
                <button onClick={()=>setTestimonials(prev=>prev.filter((_,j)=>j!==i))}
                  className="w-8 h-8 bg-red-50 hover:bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-5">
                  <Trash2 size={14} className="text-red-500"/>
                </button>
              </div>
              <div className="mt-3">
                <label className="font-inter font-semibold text-[12px] text-slate-500 block mb-1.5">Review Text</label>
                <textarea value={t.text} rows={2} onChange={e=>setTestimonials(prev=>prev.map((x,j)=>j===i?{...x,text:e.target.value}:x))} className={textCls}/>
              </div>
            </div>
          ))}
          <button onClick={()=>setTestimonials(prev=>[...prev,{id:Date.now(),name:'',course:'',rating:5,text:''}])}
            className="flex items-center gap-2 border-2 border-dashed border-slate-300 hover:border-indigo-400 text-slate-500 hover:text-indigo-600 font-inter font-semibold text-[13.5px] px-5 py-3 rounded-2xl w-full justify-center transition-colors">
            <Plus size={15}/> Add Testimonial
          </button>
        </div>
      )}

      {/* ── Hero ── */}
      {tab==='hero' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Headline Line 1</label>
              <input value={hero.headline1} onChange={e=>setHero(h=>({...h,headline1:e.target.value}))} className={inputCls}/>
            </div>
            <div>
              <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Headline Line 2 (colored)</label>
              <input value={hero.headline2} onChange={e=>setHero(h=>({...h,headline2:e.target.value}))} className={inputCls}/>
            </div>
          </div>
          <div>
            <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Badge Text</label>
            <input value={hero.badge} onChange={e=>setHero(h=>({...h,badge:e.target.value}))} className={inputCls}/>
          </div>
          <div>
            <label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Subtext</label>
            <textarea value={hero.subtext} rows={3} onChange={e=>setHero(h=>({...h,subtext:e.target.value}))} className={textCls}/>
          </div>
          <div className="border-t border-slate-100 pt-5">
            <p className="font-inter font-bold text-[12px] text-slate-500 uppercase tracking-wider mb-4">Stats</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[['stat1','stat1label'],['stat2','stat2label'],['stat3','stat3label']].map(([v,l],i)=>(
                <div key={i} className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <div>
                    <label className="font-inter font-semibold text-[11px] text-slate-500 block mb-1">Value</label>
                    <input value={hero[v]} onChange={e=>setHero(h=>({...h,[v]:e.target.value}))} className={inputCls}/>
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-[11px] text-slate-500 block mb-1">Label</label>
                    <input value={hero[l]} onChange={e=>setHero(h=>({...h,[l]:e.target.value}))} className={inputCls}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {saved && <SaveToast/>}
    </div>
  );
}
