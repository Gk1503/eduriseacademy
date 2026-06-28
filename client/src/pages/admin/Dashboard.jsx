import { Link } from 'react-router-dom';
import {
  Users, BookOpen, MessageSquare, CreditCard,
  TrendingUp, ArrowRight, Clock, CheckCircle,
  AlertCircle, UserPlus, IndianRupee, BarChart3,
} from 'lucide-react';

const stats = [
  { label: 'Total Students',  value: '148',  change: '+12 this month', Icon: Users,          bg: 'bg-indigo-50',  iconBg: 'bg-indigo-100', iconClr: 'text-indigo-600', numClr: 'text-indigo-700',  trend: 'up' },
  { label: 'Active Courses',  value: '9',    change: '3 new batches',  Icon: BookOpen,       bg: 'bg-emerald-50', iconBg: 'bg-emerald-100',iconClr: 'text-emerald-600',numClr: 'text-emerald-700', trend: 'up' },
  { label: 'Pending Fees',    value: '₹1.2L', change: '23 students due', Icon: CreditCard,    bg: 'bg-orange-50',  iconBg: 'bg-orange-100', iconClr: 'text-orange-500', numClr: 'text-orange-600',  trend: 'warn' },
  { label: 'New Inquiries',   value: '34',   change: '+8 today',       Icon: MessageSquare,  bg: 'bg-violet-50',  iconBg: 'bg-violet-100', iconClr: 'text-violet-600', numClr: 'text-violet-700',  trend: 'up' },
];

const recentStudents = [
  { name: 'Arjun Patel',    course: 'Full Stack Dev',        fee: '₹16,000', status: 'paid',    date: '28 Jun 2026', avatar: 'AP' },
  { name: 'Priya Shah',     course: 'Academic Tuition',      fee: '₹2,500',  status: 'pending', date: '27 Jun 2026', avatar: 'PS' },
  { name: 'Rahul Mehta',    course: 'Python Developer',      fee: '₹10,000', status: 'paid',    date: '26 Jun 2026', avatar: 'RM' },
  { name: 'Neha Joshi',     course: 'Web Dev (Frontend)',    fee: '₹8,000',  status: 'partial', date: '25 Jun 2026', avatar: 'NJ' },
  { name: 'Karan Desai',    course: 'Data Analytics',        fee: '₹8,000',  status: 'pending', date: '24 Jun 2026', avatar: 'KD' },
];

const recentInquiries = [
  { name: 'Mohan Raval',   phone: '+91 98001 12345', course: 'Full Stack Dev',  time: '2h ago',  status: 'new'     },
  { name: 'Sita Patel',    phone: '+91 97001 54321', course: 'Tuition Std 8',   time: '4h ago',  status: 'called'  },
  { name: 'Dev Sharma',    phone: '+91 96001 11111', course: 'AI / ML',         time: '6h ago',  status: 'new'     },
  { name: 'Asha Nair',     phone: '+91 95001 22222', course: 'Spoken English',  time: '1d ago',  status: 'enrolled'},
];

const courseStats = [
  { name: 'Full Stack Dev',    students: 28, capacity: 35, fill: 80 },
  { name: 'Academic Tuition',  students: 42, capacity: 50, fill: 84 },
  { name: 'Web Dev (Frontend)',students: 18, capacity: 25, fill: 72 },
  { name: 'Python Dev',        students: 22, capacity: 30, fill: 73 },
  { name: 'Spoken English',    students: 15, capacity: 20, fill: 75 },
];

const feeStatus = { collected: 82000, pending: 120000, total: 202000 };

const statusBadge = {
  paid:     'bg-emerald-100 text-emerald-700 border-emerald-200',
  pending:  'bg-orange-100  text-orange-700  border-orange-200',
  partial:  'bg-blue-100    text-blue-700    border-blue-200',
};
const inquiryBadge = {
  new:      'bg-indigo-100 text-indigo-700',
  called:   'bg-amber-100  text-amber-700',
  enrolled: 'bg-emerald-100 text-emerald-700',
};

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className={`${s.bg} rounded-2xl border ${s.bg.replace('bg-','border-').replace('-50','-100')} p-5`}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 ${s.iconBg} rounded-xl flex items-center justify-center`}>
                <s.Icon size={20} className={s.iconClr} strokeWidth={2} />
              </div>
              <span className={`text-[11px] font-inter font-semibold px-2 py-0.5 rounded-full
                                ${s.trend === 'warn' ? 'bg-orange-200 text-orange-700' : 'bg-white text-slate-500'}`}>
                {s.change}
              </span>
            </div>
            <p className={`font-poppins font-black text-[28px] ${s.numClr} leading-none mb-1`}>{s.value}</p>
            <p className="font-inter text-slate-500 text-[13px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Students */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div>
              <h3 className="font-poppins font-bold text-[15px] text-slate-900">Recent Admissions</h3>
              <p className="font-inter text-slate-400 text-[12px]">Latest enrolled students</p>
            </div>
            <Link to="/admin/students"
              className="flex items-center gap-1 font-inter font-semibold text-[12.5px]
                         text-indigo-600 hover:text-indigo-800 transition-colors">
              View All <ArrowRight size={13} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentStudents.map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-3.5 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-black text-[11px] text-indigo-600">{s.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-semibold text-[13.5px] text-slate-900 truncate">{s.name}</p>
                  <p className="font-inter text-slate-400 text-[12px]">{s.course}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-inter font-bold text-[13.5px] text-slate-800">{s.fee}</p>
                  <p className="font-inter text-slate-400 text-[11.5px]">{s.date}</p>
                </div>
                <span className={`ml-2 text-[11px] font-inter font-semibold px-2.5 py-1
                                   rounded-full border ${statusBadge[s.status]} flex-shrink-0`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">

          {/* Fee Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-poppins font-bold text-[15px] text-slate-900">Fee Summary</h3>
              <Link to="/admin/fees"
                className="font-inter text-[12px] text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1">
                Details <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-inter text-[12.5px] mb-1.5">
                  <span className="text-slate-500">Collected</span>
                  <span className="font-bold text-emerald-600">₹{(feeStatus.collected/1000).toFixed(0)}K</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${(feeStatus.collected/feeStatus.total)*100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-inter text-[12.5px] mb-1.5">
                  <span className="text-slate-500">Pending</span>
                  <span className="font-bold text-orange-500">₹{(feeStatus.pending/1000).toFixed(0)}K</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full"
                    style={{ width: `${(feeStatus.pending/feeStatus.total)*100}%` }} />
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
              <div className="bg-emerald-50 rounded-xl py-3">
                <p className="font-poppins font-black text-[18px] text-emerald-600">₹{(feeStatus.collected/1000).toFixed(0)}K</p>
                <p className="font-inter text-slate-500 text-[11px]">Collected</p>
              </div>
              <div className="bg-orange-50 rounded-xl py-3">
                <p className="font-poppins font-black text-[18px] text-orange-500">₹{(feeStatus.pending/1000).toFixed(0)}K</p>
                <p className="font-inter text-slate-500 text-[11px]">Pending</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-poppins font-bold text-[15px] text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Add Student',   icon: UserPlus,   to: '/admin/students',   bg: 'bg-indigo-50', clr: 'text-indigo-600' },
                { label: 'Add Fee',       icon: IndianRupee,to: '/admin/fees',        bg: 'bg-emerald-50',clr: 'text-emerald-600'},
                { label: 'View Inquiry',  icon: MessageSquare,to:'/admin/inquiries',  bg: 'bg-violet-50', clr: 'text-violet-600' },
                { label: 'Edit Courses',  icon: BookOpen,   to: '/admin/website/courses',bg:'bg-amber-50',clr:'text-amber-600'  },
              ].map((a, i) => (
                <Link key={i} to={a.to}
                  className={`${a.bg} rounded-xl p-3 flex flex-col items-center gap-2
                               hover:brightness-95 transition-all`}>
                  <a.icon size={18} className={a.clr} strokeWidth={2} />
                  <span className={`font-inter font-semibold text-[11.5px] ${a.clr} text-center leading-tight`}>{a.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Course Fill */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-poppins font-bold text-[15px] text-slate-900 mb-5">Batch Occupancy</h3>
          <div className="space-y-4">
            {courseStats.map((c, i) => (
              <div key={i}>
                <div className="flex justify-between font-inter text-[13px] mb-1.5">
                  <span className="text-slate-700 font-medium">{c.name}</span>
                  <span className="text-slate-500">{c.students}/{c.capacity}</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500
                                    ${c.fill > 85 ? 'bg-orange-400' : c.fill > 70 ? 'bg-indigo-500' : 'bg-emerald-500'}`}
                    style={{ width: `${c.fill}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-poppins font-bold text-[15px] text-slate-900">Recent Inquiries</h3>
            <Link to="/admin/inquiries"
              className="font-inter text-[12px] text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1">
              View All <ArrowRight size={13} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentInquiries.map((q, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-3.5 hover:bg-slate-50 transition-colors">
                <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-black text-[10px] text-slate-600">
                    {q.name.split(' ').map(n=>n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-semibold text-[13px] text-slate-800 truncate">{q.name}</p>
                  <p className="font-inter text-slate-400 text-[11.5px]">{q.course} · {q.phone}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`text-[10.5px] font-inter font-semibold px-2 py-0.5 rounded-full ${inquiryBadge[q.status]}`}>
                    {q.status}
                  </span>
                  <span className="font-inter text-slate-400 text-[11px]">{q.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
