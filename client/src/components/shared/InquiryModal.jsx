import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { inquiriesAPI } from '../../services/api';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  city: z.string().optional(),
  courseName: z.string().min(1, 'Please select a course'),
  mode: z.string().optional(),
  message: z.string().optional(),
});

const InquiryModal = ({ isOpen, onClose, courses = [], selectedCourse = null }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      courseName: selectedCourse || '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await inquiriesAPI.create(data);
      toast.success('Inquiry submitted successfully! We will contact you soon.');
      reset();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-dark-card border border-dark-border rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-dark-border rounded-lg transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold font-poppins mb-2">Enquire Now</h2>
            <p className="text-gray-400 mb-6">Fill the form and we'll contact you within 2 hours</p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  {...register('city')}
                  type="text"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Course *</label>
                <select
                  {...register('courseName')}
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.courseName && <p className="text-red-500 text-sm mt-1">{errors.courseName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Mode</label>
                <select
                  {...register('mode')}
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select mode</option>
                  <option value="Classroom">Classroom</option>
                  <option value="Online">Online</option>
                  <option value="Weekend">Weekend</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message')}
                  rows="3"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Any specific questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
