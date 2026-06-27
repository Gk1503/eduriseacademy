import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-10 bg-slate-900 border-b border-slate-700/60">
      <div className="w-full h-full px-6 lg:px-14 xl:px-24 flex items-center justify-between">

        {/* Left: tagline */}
        <div className="hidden md:flex items-center gap-2.5">
          <span className="text-orange-400 text-[12px]">✦</span>
          <span className="font-inter font-medium text-[12.5px] text-slate-300 whitespace-nowrap">
            Gandhinagar's #1 IT Training Institute — Expert Courses in Web Dev, Python &amp; Spoken English
          </span>
          <span className="text-orange-400 text-[12px]">✦</span>
        </div>

        {/* Mobile: short brand line */}
        <p className="md:hidden font-poppins font-semibold text-[12px] text-slate-300">
          EduRise Academy, Gandhinagar
        </p>

        {/* Right: contact info */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 font-inter text-[12.5px]
                       text-slate-300 hover:text-white transition-colors duration-150"
          >
            <Phone size={12} strokeWidth={2} className="text-orange-400 flex-shrink-0" />
            <span>+91 98765 43210</span>
          </a>

          <span className="hidden sm:block h-3.5 w-px bg-slate-600" />

          <a
            href="mailto:info@eduriseacademy.co.in"
            className="hidden sm:flex items-center gap-1.5 font-inter text-[12.5px]
                       text-slate-300 hover:text-white transition-colors duration-150"
          >
            <Mail size={12} strokeWidth={2} className="text-orange-400 flex-shrink-0" />
            <span>info@eduriseacademy.co.in</span>
          </a>
        </div>

      </div>
    </div>
  );
}
