import { useState } from 'react';
import {
  Search, Plus, X, Eye, Edit2,
  Phone, Mail, BookOpen, CreditCard, FileText,
  CheckCircle, AlertCircle, Download, ChevronDown,
} from 'lucide-react';

const COURSES = ['All','Full Stack Dev','Web Dev','Python Dev','Backend Dev','PHP Dev','AI/ML','Data Analytics','Academic Tuition','Spoken English'];

const initStudents = [
  { id:1, name:'Arjun Patel',   avatar:'AP', phone:'+91 98001 11111', email:'arjun@email.com', course:'Full Stack Dev',   batch:'Morning', joinDate:'01 Jun 2026', fee:16000, paid:16000, status:'active',   docs:true  },
  { id:2, name:'Priya Shah',    avatar:'PS', phone:'+91 97001 22222', email:'priya@email.com', course:'Academic Tuition', batch:'Evening', joinDate:'15 May 2026', fee:2500,  paid:0,     status:'active',   docs:false },
  { id:3, name:'Rahul Mehta',   avatar:'RM', phone:'+91 96001 33333', email:'rahul@email.com', course:'Python Dev',       batch:'Weekend', joinDate:'10 Apr 2026', fee:10000, paid:10000, status:'active',   docs:true  },
  { id:4, name:'Neha Joshi',    avatar:'NJ', phone:'+91 95001 44444', email:'neha@email.com',  course:'Web Dev',          batch:'Morning', joinDate:'20 Mar 2026', fee:8000,  paid:4000,  status:'active',   docs:true  },
  { id:5, name:'Karan Desai',   avatar:'KD', phone:'+91 94001 55555', email:'karan@email.com', course:'Data Analytics',   batch:'Evening', joinDate:'05 Jun 2026', fee:8000,  paid:0,     status:'inactive', docs:false },
  { id:6, name:'Meera Trivedi', avatar:'MT', phone:'+91 93001 66666', email:'meera@email.com', course:'Full Stack Dev',   batch:'Morning', joinDate:'12 May 2026', fee:16000, paid:8000,  status:'active',   docs:true  },
  { id:7, name:'Rohan Sharma',  avatar:'RS', phone:'+91 92001 77777', email:'rohan@email.com', course:'Spoken English',   batch:'Weekend', joinDate:'01 Apr 2026', fee:3000,  paid:3000,  status:'completed',docs:true  },
  { id:8, name:'Isha Gupta',    avatar:'IG', phone:'+91 91001 88888', email:'isha@email.com',  course:'AI/ML',            batch:'Evening', joinDate:'15 Jun 2026', fee:10000, paid:5000,  status:'active',   docs:false },
];

const statusStyle = {
  active:    'bg-emerald-100 text-emerald-700 border-emerald-200',
  inactive:  'bg-slate-100   text-slate-500   border-slate-200',
  completed: 'bg-indigo-100  text-indigo-700  border-indigo-200',
};

const avatarColors = [
  'bg-indigo-100 text-indigo-700','bg-emerald-100 text-emerald-700',
  'bg-violet-100 text-violet-700','bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',    'bg-cyan-100 text-cyan-700',
];

function AddModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name:'',phone:'',email:'',course:'',batch:'Morning',fee:'' });
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const cls = 'w-full border-2 border-slate-200 rounded-xl px-3.5 py-2.5 font-inter text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition-colors';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="bg-indigo-600 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-poppins font-bold text-[18px] text-white">Add New Student</h2>
            <p className="font-inter text-indigo-200 text-[12.5px]">Fill in enrollment details</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white"><X size={16}/></button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Full Name *</label><input value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Student name" className={cls}/></div>
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Phone *</label><input value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+91 XXXXX XXXXX" className={cls}/></div>
          </div>
          <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Email</label><input value={form.email} onChange={e=>set('email',e.target.value)} placeholder="student@email.com" className={cls}/></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Course *</label>
              <select value={form.course} onChange={e=>set('course',e.target.value)} className={cls}>
                <option value="">Select course</option>
                {COURSES.slice(1).map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Batch</label>
              <select value={form.batch} onChange={e=>set('batch',e.target.value)} className={cls}>
                {['Morning','Evening','Weekend','Online'].map(b=><option key={b}>{b}</option>)}
              </select>
            </div>
          </div>
          <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Total Fee (₹)</label><input value={form.fee} onChange={e=>set('fee',e.target.value)} type="number" placeholder="e.g. 16000" className={cls}/></div>
          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 border-2 border-slate-200 text-slate-600 font-poppins font-bold text-[13.5px] py-2.5 rounded-xl hover:bg-slate-50">Cancel</button>
            <button onClick={()=>{
              if(!form.name||!form.phone||!form.course) return;
              onAdd({...form, id:Date.now(), avatar:form.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase(), joinDate:new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}), paid:0, status:'active', docs:false, fee:Number(form.fee)||0});
              onClose();
            }} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-poppins font-bold text-[13.5px] py-2.5 rounded-xl">
              Enroll Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentDrawer({ student, onClose }) {
  const due = student.fee - student.paid;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="ml-auto relative bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl">
        <div className="bg-slate-900 px-6 py-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center">
                <span className="font-poppins font-black text-[18px] text-indigo-300">{student.avatar}</span>
              </div>
              <div>
                <h2 className="font-poppins font-bold text-[20px] text-white">{student.name}</h2>
                <span className={`inline-block text-[11px] font-inter font-semibold px-2.5 py-1 rounded-full border mt-1 ${statusStyle[student.status]}`}>{student.status}</span>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20"><X size={15}/></button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-slate-50 rounded-2xl p-4 space-y-2.5">
            <p className="font-inter font-bold text-[11px] text-slate-400 uppercase tracking-widest mb-3">Contact</p>
            <div className="flex items-center gap-3"><Phone size={14} className="text-slate-400"/><span className="font-inter text-[14px] text-slate-700">{student.phone}</span></div>
            <div className="flex items-center gap-3"><Mail size={14} className="text-slate-400"/><span className="font-inter text-[14px] text-slate-700">{student.email||'—'}</span></div>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 space-y-2">
            <p className="font-inter font-bold text-[11px] text-indigo-600 uppercase tracking-widest mb-3">Enrollment</p>
            {[['Course',student.course],['Batch',student.batch],['Joined',student.joinDate]].map(([l,v])=>(
              <div key={l} className="flex justify-between"><span className="font-inter text-slate-500 text-[13px]">{l}</span><span className="font-inter font-semibold text-[13px] text-slate-800">{v}</span></div>
            ))}
          </div>
          <div className={`rounded-2xl p-4 ${due>0?'bg-orange-50 border border-orange-100':'bg-emerald-50 border border-emerald-100'}`}>
            <p className={`font-inter font-bold text-[11px] uppercase tracking-widest mb-3 ${due>0?'text-orange-600':'text-emerald-600'}`}>Fee Status</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[['Total','₹'+student.fee.toLocaleString(),'slate'],['Paid','₹'+student.paid.toLocaleString(),'emerald'],['Due','₹'+due.toLocaleString(),due>0?'orange':'emerald']].map(([l,v,c])=>(
                <div key={l} className="bg-white rounded-xl py-2.5">
                  <p className={`font-poppins font-black text-[15px] text-${c}-600`}>{v}</p>
                  <p className="font-inter text-slate-400 text-[11px]">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-inter font-bold text-[11px] text-slate-400 uppercase tracking-widest">Documents</p>
              <button className="text-[12px] font-inter font-semibold text-indigo-600 flex items-center gap-1"><Plus size={12}/> Upload</button>
            </div>
            {student.docs ? (
              ['Aadhar Card','Photo ID','Fee Receipt'].map(d=>(
                <div key={d} className="flex items-center justify-between bg-white rounded-xl px-3 py-2.5 mb-2">
                  <div className="flex items-center gap-2"><FileText size={13} className="text-slate-400"/><span className="font-inter text-[13px] text-slate-700">{d}</span></div>
                  <Download size={13} className="text-slate-400 cursor-pointer hover:text-indigo-600"/>
                </div>
              ))
            ) : (
              <div className="text-center py-3"><FileText size={22} className="text-slate-300 mx-auto mb-1.5"/><p className="font-inter text-slate-400 text-[13px]">No documents uploaded</p></div>
            )}
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-poppins font-bold text-[14px] py-3 rounded-xl transition-colors">Edit Student Info</button>
        </div>
      </div>
    </div>
  );
}

export default function ManageStudents() {
  const [students, setStudents] = useState(initStudents);
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState('All');
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = students.filter(s =>
    (courseFilter === 'All' || s.course === courseFilter) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.phone.includes(search))
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-poppins font-black text-[20px] text-slate-900">Students ({students.length})</h2>
          <p className="font-inter text-slate-400 text-[13px]">Manage all enrolled students</p>
        </div>
        <button onClick={()=>setShowAdd(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-poppins font-bold text-[13.5px] px-5 py-2.5 rounded-xl shadow-sm transition-colors">
          <Plus size={15}/> Add Student
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3.5 py-2 flex-1 min-w-[180px]">
          <Search size={14} className="text-slate-400 flex-shrink-0"/>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name or phone…"
            className="bg-transparent font-inter text-[13.5px] text-slate-700 placeholder:text-slate-400 outline-none w-full"/>
        </div>
        <div className="relative">
          <select value={courseFilter} onChange={e=>setCourseFilter(e.target.value)}
            className="appearance-none bg-slate-100 rounded-xl px-4 py-2 pr-8 font-inter text-[13.5px] text-slate-700 outline-none cursor-pointer">
            {COURSES.map(c=><option key={c}>{c}</option>)}
          </select>
          <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {['Student','Course / Batch','Joined','Fee Status','Docs','Action'].map(h=>(
                  <th key={h} className="font-inter font-bold text-[11.5px] text-slate-500 uppercase tracking-wider px-5 py-3.5 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((s, i) => {
                const due = s.fee - s.paid;
                return (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${avatarColors[i%avatarColors.length]}`}>
                          <span className="font-poppins font-black text-[11px]">{s.avatar}</span>
                        </div>
                        <div>
                          <p className="font-inter font-semibold text-[13.5px] text-slate-900">{s.name}</p>
                          <p className="font-inter text-slate-400 text-[12px]">{s.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5"><p className="font-inter font-medium text-[13px] text-slate-800">{s.course}</p><p className="font-inter text-slate-400 text-[12px]">{s.batch}</p></td>
                    <td className="px-5 py-3.5 font-inter text-[13px] text-slate-600">{s.joinDate}</td>
                    <td className="px-5 py-3.5">
                      <p className="font-inter font-semibold text-[13px] text-slate-800">₹{s.paid.toLocaleString()} / ₹{s.fee.toLocaleString()}</p>
                      <p className={`font-inter text-[12px] ${due>0?'text-orange-500':'text-emerald-600'}`}>{due>0?`₹${due.toLocaleString()} due`:'Fully paid ✓'}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      {s.docs
                        ?<span className="flex items-center gap-1 text-emerald-600 font-inter text-[12.5px]"><CheckCircle size={13}/>Uploaded</span>
                        :<span className="flex items-center gap-1 text-orange-500 font-inter text-[12.5px]"><AlertCircle size={13}/>Missing</span>}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button onClick={()=>setSelected(s)} className="w-8 h-8 bg-indigo-50 hover:bg-indigo-100 rounded-lg flex items-center justify-center"><Eye size={14} className="text-indigo-600"/></button>
                        <button className="w-8 h-8 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center justify-center"><Edit2 size={14} className="text-slate-500"/></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length===0 && <div className="text-center py-12"><p className="font-inter text-slate-400 text-[14px]">No students found</p></div>}
      </div>

      {showAdd && <AddModal onClose={()=>setShowAdd(false)} onAdd={s=>setStudents(p=>[s,...p])}/>}
      {selected && <StudentDrawer student={selected} onClose={()=>setSelected(null)}/>}
    </div>
  );
}
