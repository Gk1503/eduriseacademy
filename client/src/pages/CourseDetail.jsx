import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, IndianRupee, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';
import { coursesAPI } from '../services/api';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import InquiryModal from '../components/shared/InquiryModal';
import { getWhatsAppLink } from '../utils/helpers';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, [slug]);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const response = await coursesAPI.getBySlug(slug);
      setCourse(response.data.data);
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner fullScreen />;
  if (!course) return <div className="min-h-screen pt-48 text-center">Course not found</div>;

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={16} />
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <ChevronRight size={16} />
          <span className="text-white">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8">
              {course.badge && (
                <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  {course.badge}
                </span>
              )}

              <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">{course.title}</h1>

              <div className="flex flex-wrap gap-6 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee size={20} className="text-primary" />
                  <span className="text-2xl font-bold text-white">{course.fee}</span>
                </div>
              </div>

              {course.mode && course.mode.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.mode.map((m) => (
                    <span key={m} className="bg-dark-border px-4 py-2 rounded-full text-sm">
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-b border-dark-border mb-6">
                <div className="flex gap-6">
                  {['overview', 'syllabus', 'career'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 font-semibold capitalize transition-colors ${
                        activeTab === tab
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold font-poppins mb-4">Course Overview</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{course.description}</p>

                  <h3 className="text-xl font-bold font-poppins mb-4">Who Should Join?</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Students looking to start their IT career</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Working professionals seeking career change</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Freshers wanting to enhance their skills</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div>
                  <h2 className="text-2xl font-bold font-poppins mb-4">Course Syllabus</h2>
                  {course.syllabus && course.syllabus.length > 0 ? (
                    <div className="space-y-4">
                      {course.syllabus.map((module, index) => (
                        <div key={index} className="bg-dark border border-dark-border rounded-lg p-4">
                          <h4 className="font-bold text-lg mb-2">{module.module}</h4>
                          <ul className="space-y-1">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="text-gray-400 flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">Detailed syllabus will be shared during enrollment.</p>
                  )}
                </div>
              )}

              {activeTab === 'career' && (
                <div>
                  <h2 className="text-2xl font-bold font-poppins mb-4">Career Opportunities</h2>
                  <p className="text-gray-300 mb-4">After completing this course, you can pursue roles such as:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Software Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Data Analyst'].map((role) => (
                      <span key={role} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">{course.fee}</div>
                <p className="text-gray-400">Course Fee</p>
              </div>

              <button
                onClick={() => setShowInquiryModal(true)}
                className="w-full btn-primary mb-3"
              >
                Enroll Now
              </button>

              <a
                href={getWhatsAppLink(`I'm interested in ${course.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary block text-center mb-3"
              >
                WhatsApp Us
              </a>

              <button className="w-full bg-dark-border hover:bg-dark text-white py-3 px-6 rounded-full font-semibold transition-colors">
                Download Brochure
              </button>

              <div className="mt-6 pt-6 border-t border-dark-border space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm text-gray-400">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">Mode</div>
                    <div className="text-sm text-gray-400">{course.mode?.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        courses={[course]}
        selectedCourse={course.title}
      />
    </div>
  );
};

export default CourseDetail;
