import { NavLink } from 'react-router-dom';
import { Home, BookOpen, MessageSquare, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/helpers';

const MobileBottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: MessageSquare, label: 'Enquire', path: '/contact' },
    { icon: Phone, label: 'Call', action: 'tel:+919427080826' },
    { icon: MessageCircle, label: 'WhatsApp', action: getWhatsAppLink() },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark-card border-t border-dark-border z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.action) {
            return (
              <a
                key={item.label}
                href={item.action}
                target={item.label === 'WhatsApp' ? '_blank' : undefined}
                rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 hover:text-primary transition-colors"
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'
                }`
              }
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
