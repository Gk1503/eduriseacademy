import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Award } from 'lucide-react';
import toast from 'react-hot-toast';
import { inquiriesAPI } from '../services/api';
import SectionHeading from '../components/shared/SectionHeading';

const internshipSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  courseName: z.string().min(1, 'Select technology'),
  message: z.string().optional(),
});

const Internship = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(internshipSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await inquiriesAPI.create({ ...data, source: 'internship' });
      toast.success('Internship inquiry submitted! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  const technologies = [
    'Web Development (MERN Stack)',
    'Frontend Development (React)',
    'Backend Development (Node.js)',
    'Mobile App Development (Flutter)',
    'Python Development',
    'Data Science',
    'UI/UX Design',
    'Digital Marketing',
  ];

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="IT Internship Program"
          subtitle="Gain practical experience with real-world projects"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold font-poppins mb-6">Why Choose Our Internship?</h2>
            
            <div className="space-y-4 mb-8">
              {[
                'Work on live industry projects',
                'Learn from experienced mentors',
                'Get internship completion certificate',
                'Flexible duration: 1, 3, or 6 months',
                'Opportunity for pre-placement offer',
                'Build your professional portfolio',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
              <h3 className="text-xl font-bold font-poppins mb-4">Duration & Fees</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">1 Month</span>
                  <span className="text-primary font-bold">₹5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">3 Months</span>
                  <span className="text-primary font-bold">₹10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">6 Months</span>
                  <span className="text-primary font-bold">₹15,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-poppins mb-6">Register for Internship</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Technology *</label>
                <select
                  {...register('courseName')}
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                >
                  <option value="">Select technology</option>
                  {technologies.map((tech) => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
                {errors.courseName && <p className="text-red-500 text-sm mt-1">{errors.courseName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message')}
                  rows="3"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none"
                  placeholder="Any specific requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
          <Award size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-poppins mb-2">Get Certified</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Receive an industry-recognized internship completion certificate that adds value to your resume and helps you stand out in job interviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internship;
