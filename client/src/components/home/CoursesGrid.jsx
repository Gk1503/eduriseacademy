import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import one   from "../../Gallery/courses/one.png";
import two   from "../../Gallery/courses/two.jpg";
import three from "../../Gallery/courses/three.png";
import four  from "../../Gallery/courses/four.jpg";

const courses = [
  { id: 1, title: 'Spoken English',    image: one   },
  { id: 2, title: 'Academic Coaching', image: two   },
  { id: 3, title: 'Computer Courses',  image: three },
  { id: 4, title: 'Digital Marketing', image: four  },
];

const CoursesGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* ── Heading ─────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block font-poppins font-bold text-[11.5px]
                           tracking-[0.22em] uppercase text-indigo-600 mb-4">
            What We Offer
          </span>
          <h2 className="font-poppins font-black text-[36px] md:text-[44px]
                         text-slate-900 mb-4 leading-tight">
            Our Course <span className="text-indigo-600">Posters</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-[3px] w-10 rounded-full bg-indigo-500" />
            <span className="h-[3px] w-4 rounded-full bg-orange-400" />
          </div>
          <p className="font-inter text-slate-500 text-[16px] max-w-xl mx-auto">
            Click any poster to view it in detail — find the right program for your goals.
          </p>
        </div>

        {/* ── 4-column Poster Grid ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(course)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl
                              shadow-[0_4px_20px_rgba(0,0,0,0.10)]
                              hover:shadow-[0_12px_40px_rgba(79,70,229,0.22)]
                              border border-slate-100
                              transition-all duration-400
                              group-hover:-translate-y-2 h-[440px] bg-slate-50">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover
                             group-hover:scale-[1.04] transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/30
                                transition-colors duration-300 flex items-center justify-center">
                  <span className="scale-0 group-hover:scale-100 transition-transform duration-300
                                   bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                    <ZoomIn size={28} className="text-indigo-600" />
                  </span>
                </div>
              </div>

              {/* Title below card */}
              <div className="mt-3 text-center">
                <h3 className="font-poppins font-bold text-[15px] text-slate-800
                               group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                <span className="font-inter text-[12px] text-slate-400 mt-0.5 block">
                  Click to view poster
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2.5
                       font-poppins font-bold text-[16px]
                       bg-indigo-600 hover:bg-indigo-700 text-white
                       px-8 py-3.5 rounded-xl
                       shadow-lg shadow-indigo-200
                       hover:shadow-xl hover:shadow-indigo-300
                       hover:-translate-y-[2px] transition-all duration-300"
          >
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[100]
                       flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center
                         bg-white/15 hover:bg-white/30 rounded-full
                         text-white transition-colors"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.88,    opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[88vh] object-contain"
              />
              <div className="text-center mt-4">
                <span className="inline-block bg-white/15 backdrop-blur-sm
                                 text-white font-poppins font-bold text-[17px]
                                 px-6 py-2.5 rounded-full">
                  {selected.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoursesGrid;
