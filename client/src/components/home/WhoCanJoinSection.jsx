import { motion } from 'framer-motion';
import { School, GraduationCap, Users, Target, Shield, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoCanJoinSection = () => {
  const eligibilityCards = [
    {
      icon: School,
      title: 'School Students',
      subtitle: 'Class 5 to 12 — GSEB & CBSE',
      number: '01',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-600',
      borderColor: 'border-blue-300',
      curveColor: 'blue'
    },
    {
      icon: GraduationCap,
      title: 'College Students',
      subtitle: 'BCA, MCA, BSc IT, B.Com, Diploma',
      number: '02',
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-600',
      borderColor: 'border-green-300',
      curveColor: 'green'
    },
    {
      icon: Users,
      title: 'Parents / Housewives',
      subtitle: 'Never too late to learn English!',
      number: '03',
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-600',
      borderColor: 'border-orange-300',
      curveColor: 'orange'
    },
    {
      icon: Target,
      title: 'Droppers',
      subtitle: 'BCA / MCA entrance preparation',
      number: '04',
      color: 'cyan',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-600',
      borderColor: 'border-cyan-300',
      curveColor: 'cyan'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      label: 'Quality Education',
      color: 'blue'
    },
    {
      icon: Award,
      label: 'Expert Guidance',
      color: 'green'
    },
    {
      icon: TrendingUp,
      label: 'Better Future',
      color: 'pink'
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-3">
              <Users size={16} className="text-blue-600" />
              <span className="text-blue-700 font-bold text-xs tracking-wider uppercase">
                ELIGIBILITY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Who Can <span className="text-blue-600">Join?</span>
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-3"></div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Our courses are open for everyone — students, professionals, and parents alike.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Cards */}
            <div className="space-y-4">
              {eligibilityCards.slice(0, 2).map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${card.bgColor} rounded-xl p-5 border ${card.borderColor} hover:shadow-lg transition-all relative`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${card.iconBg} rounded-xl p-3 flex-shrink-0`}>
                        <Icon size={28} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {card.title}
                        </h3>
                        <div className={`w-10 h-0.5 bg-${card.color}-600 rounded-full mb-2`}></div>
                        <p className="text-xs text-gray-600">
                          {card.subtitle}
                        </p>
                      </div>
                      {/* Number Badge with Curve */}
                      <div className="relative">
                        <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 ${card.borderColor} font-bold text-${card.color}-600 text-sm`}>
                          {card.number}
                        </div>
                        <svg className="absolute -right-8 top-0" width="40" height="50" viewBox="0 0 40 50">
                          <path
                            d="M 0 25 Q 20 10, 40 25"
                            fill="none"
                            stroke={card.color === 'blue' ? '#3b82f6' : card.color === 'green' ? '#10b981' : card.color === 'orange' ? '#f97316' : '#06b6d4'}
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200 flex flex-col items-center justify-center text-center"
            >
              {/* Illustration Placeholder */}
              <div className="mb-4">
                <div className="flex justify-center gap-3 mb-4">
                  <div className="w-16 h-20 bg-blue-200 rounded-lg flex items-center justify-center">
                    <Users size={32} className="text-blue-600" />
                  </div>
                  <div className="w-16 h-20 bg-purple-200 rounded-lg flex items-center justify-center">
                    <GraduationCap size={32} className="text-purple-600" />
                  </div>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="w-16 h-20 bg-pink-200 rounded-lg flex items-center justify-center">
                    <School size={32} className="text-pink-600" />
                  </div>
                  <div className="w-16 h-20 bg-orange-200 rounded-lg flex items-center justify-center">
                    <Target size={32} className="text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-purple-600 rounded-full p-3 inline-flex items-center justify-center mb-3">
                <Users size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                For Everyone, At Every Stage
              </h3>
              <div className="w-12 h-1 bg-purple-600 rounded-full mb-2"></div>
              <p className="text-xs text-gray-600">
                Learn, grow and achieve<br />your goals with us.
              </p>
            </motion.div>

            {/* Right Cards */}
            <div className="space-y-4">
              {eligibilityCards.slice(2, 4).map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`${card.bgColor} rounded-xl p-5 border ${card.borderColor} hover:shadow-lg transition-all relative`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number Badge with Curve */}
                      <div className="relative">
                        <svg className="absolute -left-8 top-0" width="40" height="50" viewBox="0 0 40 50">
                          <path
                            d="M 40 25 Q 20 10, 0 25"
                            fill="none"
                            stroke={card.color === 'orange' ? '#f97316' : '#06b6d4'}
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                        </svg>
                        <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 ${card.borderColor} font-bold text-${card.color}-600 text-sm`}>
                          {card.number}
                        </div>
                      </div>
                      <div className={`${card.iconBg} rounded-xl p-3 flex-shrink-0`}>
                        <Icon size={28} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {card.title}
                        </h3>
                        <div className={`w-10 h-0.5 bg-${card.color}-600 rounded-full mb-2`}></div>
                        <p className="text-xs text-gray-600">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                <School size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Your Journey Starts Here!
                </h3>
                <p className="text-xs text-gray-600">
                  No matter who you are, there's a place for you here.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div className={`bg-${benefit.color}-100 rounded-lg p-2`}>
                      <Icon size={20} className={`text-${benefit.color}-600`} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-bold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap ml-4"
              >
                Join Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
