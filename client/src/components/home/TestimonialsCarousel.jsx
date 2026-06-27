import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { studentsAPI } from '../../services/api';
import SectionHeading from '../shared/SectionHeading';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await studentsAPI.getShowcase();
      const withTestimonials = response.data.data.filter(s => s.testimonial);
      setTestimonials(withTestimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Students Say"
          subtitle="Hear from our successful alumni about their learning experience"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="bg-dark border border-dark-border rounded-2xl p-6 h-full">
                <Quote size={40} className="text-primary/30 mb-4" />
                
                <p className="text-gray-300 mb-6 line-clamp-4">{testimonial.testimonial}</p>

                <div className="flex items-center gap-4">
                  {testimonial.photo && (
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold font-poppins">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.course}</p>
                    {testimonial.company && (
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
