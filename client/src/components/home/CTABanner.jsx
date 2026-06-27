import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { inquiriesAPI, coursesAPI } from '../../services/api';

const demoSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  courseName: z.string().min(1, 'Select a course'),
});

const CTABanner = () => {
  const [courses, setCourses] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(demoSchema),
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await coursesAPI.getAll();
      setCourses(response.data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await inquiriesAPI.create({ ...data, source: 'demo-class' });
      toast.success('Demo class booked! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to book demo class');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Book Your FREE Demo Class
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience our teaching methodology before enrolling. No cost, no obligation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary text-dark"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary text-dark"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <select
                  {...register('courseName')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary text-dark"
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.courseName && <p className="text-red-500 text-sm mt-1">{errors.courseName.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Booking...' : 'Book Free Demo'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
