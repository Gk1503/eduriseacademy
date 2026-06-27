import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { studentsAPI } from '../services/api';
import SectionHeading from '../components/shared/SectionHeading';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const Placement = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await studentsAPI.getShowcase();
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Placement Success"
          subtitle="95% of our students get placed in top companies"
        />

        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
            <div className="text-5xl font-bold text-white mb-2">95%</div>
            <div className="text-white text-lg">Placement Rate</div>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : students.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={student._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center card-hover"
              >
                {student.photo && (
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
                  />
                )}
                <h3 className="text-xl font-bold font-poppins mb-2">{student.name}</h3>
                <p className="text-gray-400 mb-2">{student.course}</p>
                {student.company && (
                  <p className="text-primary font-semibold mb-1">{student.company}</p>
                )}
                {student.salary && (
                  <p className="text-accent font-bold text-lg">{student.salary}</p>
                )}
                {student.batch && (
                  <p className="text-sm text-gray-500 mt-2">Batch: {student.batch}</p>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No placement records available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Placement;
