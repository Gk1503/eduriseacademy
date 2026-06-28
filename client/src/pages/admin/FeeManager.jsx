import { useState } from 'react';
import { Plus, Search, ChevronDown, X, IndianRupee, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const initRecords = [
  { id:1, student:'Arjun Patel',    course:'Full Stack Dev',   total:16000, paid:16000, date:'01 Jun 2026', mode:'Cash',   receipt:'RCP-001', status:'paid'    },
  { id:2, student:'Priya Shah',     course:'Academic Tuition', total:2500,  paid:0,     date:'15 May 2026', mode:'—',      receipt:'—',       status:'pending' },
  { id:3, student:'Rahul Mehta',    course:'Python Dev',       total:10000, paid:10000, date:'10 Apr 2026', mode:'UPI',    receipt:'RCP-003', status:'paid'    },
  { id:4, student:'Neha Joshi',     course:'Web Dev',          total:8000,  paid:4000,  date:'20 Mar 2026', mode:'Cash',   receipt:'RCP-004', status:'partial' },
  { id:5, student:'Karan Desai',    course:'Data Analytics',   total:8000,  paid:0,     date:'05 Jun 2026', mode:'—',      receipt:'—',       status:'pending' },
  { id:6, student:'Meera Trivedi',  course:'Full Stack Dev',   total:16000, paid:8000,  date:'12 May 2026', mode:'Online', receipt:'RCP-006', status:'partial' },
  { id:7, student:'Rohan Sharma',   course:'Spoken English',   total:3000,  paid:3000,  date:'01 Apr 2026', mode:'UPI',    receipt:'RCP-007', status:'paid'    },
  { id:8, student:'Isha Gupta',     course:'AI/ML',            total:10000, paid:5000,  date:'15 Jun 2026', mode:'Cash',   receipt:'RCP-008', status:'partial' },
];

const statusStyle = {
  paid:    'bg-emerald-100 text-emerald-700 border-emerald-200',
  pending: 'bg-orange-100  text-orange-700  border-orange-200',
  partial: 'bg-blue-100    text-blue-700    border-blue-200',
};

const StatusIcon = { paid: CheckCircle, pending: AlertCircle, partial: Clock };

function AddFeeModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ student:'', course:'', total:'', paid:'', mode:'Cash', date: new Date().toISOString().split('T')[0] });
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const cls = 'w-full border-2 border-slate-200 rounded-xl px-3.5 py-2.5 font-inter text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition-colors';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-emerald-600 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-poppins font-bold text-[18px] text-white">Add Fee Record</h2>
            <p className="font-inter text-emerald-200 text-[12.5px]">Record a fee payment</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white"><X size={16}/></button>
        </div>
        <div className="p-6 space-y-4">
          <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Student Name *</label><input value={form.student} onChange={e=>set('student',e.target.value)} placeholder="Student full name" className={cls}/></div>
          <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Course *</label><input value={form.course} onChange={e=>set('course',e.target.value)} placeholder="Course name" className={cls}/></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Total Fee (₹)</label><input value={form.total} onChange={e=>set('total',e.target.value)} type="number" placeholder="16000" className={cls}/></div>
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Amount Paid (₹)</label><input value={form.paid} onChange={e=>set('paid',e.target.value)} type="number" placeholder="8000" className={cls}/></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Payment Mode</label>
              <select value={form.mode} onChange={e=>set('mode',e.target.value)} className={cls}>
                {['Cash','UPI','Online','Cheque','DD'].map(m=><option key={m}>{m}</option>)}
              </select>
            </div>
            <div><label className="font-inter font-semibold text-[12px] text-slate-600 block mb-1.5">Date</label><input value={form.date} onChange={e=>set('date',e.target.value)} type="date" className={cls}/></div>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 border-2 border-slate-200 text-slate-600 font-poppins font-bold text-[13.5px] py-2.5 rounded-xl">Cancel</button>
            <button onClick={()=>{
              if(!form.student||!form.course) return;
              const t=Number(form.total)||0, p=Number(form.paid)||0;
              const status = p===0?'pending':p>=t?'paid':'partial';
              onAdd({...form, id:Date.now(), total:t, paid:p, status, receipt:`RCP-${Date.now().toString().slice(-4)}`});
              onClose();
            }} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-[13.5px] py-2.5 rounded-xl">
              Save Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeeManager() {
  const [records, setRecords] = useState(initRecords);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [showAdd, setShowAdd] = useState(false);

  const filtered = records.filter(r =>
    (filter === 'all' || r.status === filter) &&
    r.student.toLowerCase().includes(search.toLowerCase())
  );

  const total    = records.reduce((a,r)=>a+r.total,0);
  const collected = records.reduce((a,r)=>a+r.paid,0);
  const pending  = total - collected;

  return (
    <div className="space-y-5">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label:'Total Fees',  value:`₹${(total/1000).toFixed(1)}K`,    bg:'bg-slate-50',  border:'border-slate-200', numClr:'text-slate-800'   },
          { label:'Collected',   value:`₹${(collected/1000).toFixed(1)}K`, bg:'bg-emerald-50',border:'border-emerald-100',numClr:'text-emerald-700' },
          { label:'Pending',     value:`₹${(pending/1000).toFixed(1)}K`,   bg:'bg-orange-50', border:'border-orange-100', numClr:'text-orange-600'  },
        ].map((s,i)=>(
          <div key={i} className={`${s.bg} border ${s.border} rounded-2xl p-5`}>
            <p className="font-inter text-slate-500 text-[12.5px] mb-1">{s.label}</p>
            <p className={`font-poppins font-black text-[28px] ${s.numClr} leading-none`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 flex-1 min-w-[180px] max-w-sm">
          <Search size={14} className="text-slate-400 flex-shrink-0"/>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search student…"
            className="bg-transparent font-inter text-[13.5px] text-slate-700 placeholder:text-slate-400 outline-none w-full"/>
        </div>
        <div className="flex items-center gap-2">
          {['all','paid','partial','pending'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              className={`px-3.5 py-1.5 rounded-xl font-inter font-semibold text-[12.5px] capitalize transition-colors
                           ${filter===f?'bg-indigo-600 text-white':'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300'}`}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={()=>setShowAdd(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-[13.5px] px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={14}/> Add Record
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {['Student','Course','Total','Paid','Balance','Mode','Date','Status'].map(h=>(
                  <th key={h} className="font-inter font-bold text-[11.5px] text-slate-500 uppercase tracking-wider px-5 py-3.5 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(r => {
                const Icon = StatusIcon[r.status];
                return (
                  <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 font-inter font-semibold text-[13.5px] text-slate-900">{r.student}</td>
                    <td className="px-5 py-3.5 font-inter text-[13px] text-slate-600">{r.course}</td>
                    <td className="px-5 py-3.5 font-inter font-semibold text-[13px] text-slate-800">₹{r.total.toLocaleString()}</td>
                    <td className="px-5 py-3.5 font-inter font-semibold text-[13px] text-emerald-600">₹{r.paid.toLocaleString()}</td>
                    <td className="px-5 py-3.5 font-inter font-semibold text-[13px] text-orange-500">₹{(r.total-r.paid).toLocaleString()}</td>
                    <td className="px-5 py-3.5 font-inter text-[13px] text-slate-600">{r.mode}</td>
                    <td className="px-5 py-3.5 font-inter text-[13px] text-slate-600">{r.date}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-[11.5px] font-inter font-semibold px-2.5 py-1 rounded-full border ${statusStyle[r.status]}`}>
                        <Icon size={11}/>{r.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length===0 && <div className="text-center py-10"><p className="font-inter text-slate-400">No records found</p></div>}
      </div>

      {showAdd && <AddFeeModal onClose={()=>setShowAdd(false)} onAdd={r=>setRecords(p=>[r,...p])}/>}
    </div>
  );
}
