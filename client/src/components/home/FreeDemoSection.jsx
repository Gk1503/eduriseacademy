import { motion } from 'framer-motion';
import { Zap, Users, MessageSquare, BookOpen, Phone, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/helpers';

const FreeDemoSection = () => {
  const features = [
    {
      icon: Users,
      label: 'Expert Trainers',
      color: 'text-white'
    },
    {
      icon: MessageSquare,
      label: 'Interactive Sessions',
      color: 'text-white'
    },
    {
      icon: BookOpen,
      label: 'Practical Learning',
      color: 'text-white'
    }
  ];

  const benefits = [
    { icon: Shield, text: '100% Free' },
    { icon: Clock, text: 'No Hidden Charges' },
    { icon: CheckCircle, text: 'Instant Confirmation' }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-green-700 via-green-600 to-green-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Decorative Sparkles */}
      <div className="absolute top-16 right-32">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
      <div className="absolute top-24 right-20 rotate-45">
        <div className="flex flex-col gap-1">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
          <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-lg"
          >
            <Zap size={14} fill="currentColor" />
            Limited Seats — Enroll Now!
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight"
          >
            Book Your <span className="text-yellow-400">FREE</span> Demo
            <br />
            Class Today
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-green-100 mb-6"
          >
            No commitment. Just come and experience it yourself.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-white/20 transition-all"
                >
                  <div className="bg-white/20 rounded-md p-1.5">
                    <Icon size={18} className={feature.color} strokeWidth={2.5} />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-gray-900 px-6 py-3 rounded-lg text-base font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone size={18} />
              Call Now
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg text-base font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageSquare size={18} />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg text-base font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              <span className="text-lg">✨</span>
              Sign Up Free
            </Link>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4 text-green-100"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon size={16} className="text-green-300" />
                  <span className="text-xs font-semibold">{benefit.text}</span>
                  {index < benefits.length - 1 && (
                    <span className="ml-2 text-green-400">•</span>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeDemoSection;
