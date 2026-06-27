import { motion } from 'framer-motion';
import { UserCheck, BookOpen, Users, TrendingUp, Shield, Star } from 'lucide-react';

const OurMissionSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Expert Guidance',
      description: 'Learn from experienced mentors who are dedicated to your growth.',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: BookOpen,
      title: 'Smart Learning',
      description: 'Concept-based approach that makes learning easy, practical and effective.',
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Users,
      title: 'Personal Support',
      description: 'Individual attention in small batches to ensure you never fall behind.',
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of students improving marks, confidence and career opportunities.',
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: Shield,
      title: 'Career Ready',
      description: 'Build communication skills that help you succeed in studies and careers.',
      color: 'cyan',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      borderColor: 'border-cyan-200'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
              <Star size={16} className="text-blue-600" />
              <span className="text-blue-700 font-bold text-xs tracking-wider uppercase">
                WHY EDURISE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Your Success is <span className="text-blue-600">Our Mission</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-3"></div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We don't just teach — we empower, guide, and help you achieve more.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`${feature.bgColor} rounded-xl p-5 border ${feature.borderColor} hover:shadow-lg transition-all h-full text-center`}>
                    {/* Icon */}
                    <div className={`${feature.iconBg} rounded-xl p-4 inline-flex items-center justify-center mb-4`}>
                      <Icon size={32} className={feature.iconColor} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <div className={`w-10 h-0.5 bg-${feature.color}-600 rounded-full mx-auto mb-3`}></div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
