import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { studentsAPI } from '../../services/api';
import SectionHeading from '../shared/SectionHeading';

const PlacementCompanies = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await studentsAPI.getShowcase();
      setStudents(response.data.data.filter(s => s.company).slice(0, 3));
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const companies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'HCL',
    'Tech Mahindra', 'Capgemini', 'IBM', 'Amazon', 'Google', 'Microsoft'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Students Work At"
          subtitle="Join the league of successful professionals placed in top companies"
        />

        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl px-8 py-4 hover:border-primary transition-all"
              >
                <span className="text-lg font-semibold text-gray-300">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {students.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={student._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center"
              >
                {student.photo && (
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
                  />
                )}
                <h3 className="text-xl font-bold font-poppins mb-2">{student.name}</h3>
                <p className="text-gray-400 mb-2">{student.course}</p>
                <p className="text-primary font-semibold mb-1">{student.company}</p>
                {student.salary && (
                  <p className="text-accent font-bold text-lg">{student.salary}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacementCompanies;
