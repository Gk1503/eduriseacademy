import { Link } from 'react-router-dom';
import { Clock, IndianRupee, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseCard = ({ course, index = 0 }) => {
  const badgeColors = {
    'Most Popular': 'bg-primary',
    'New': 'bg-green-500',
    'Hot': 'bg-red-500',
    'Trending': 'bg-purple-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden card-hover group"
    >
      {/* Badge */}
      {course.badge && (
        <div className={`${badgeColors[course.badge] || 'bg-primary'} text-white text-xs font-semibold px-3 py-1 inline-block`}>
          {course.badge}
        </div>
      )}

      <div className="p-6">
        {/* Icon */}
        {course.icon && (
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <img src={course.icon} alt={course.title} className="w-10 h-10" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold font-poppins mb-3 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <IndianRupee size={16} className="text-primary" />
            <span>{course.fee}</span>
          </div>
        </div>

        {/* Mode Tags */}
        {course.mode && course.mode.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.mode.map((m) => (
              <span key={m} className="text-xs bg-dark-border px-3 py-1 rounded-full">
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 text-center bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            Know More
          </Link>
          <Link
            to="/contact"
            className="flex-1 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            Enroll
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
