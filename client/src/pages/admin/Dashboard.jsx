import { useState, useEffect } from 'react';
import { Users, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';
import { inquiriesAPI, coursesAPI, studentsAPI } from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    newToday: 0,
    activeCourses: 0,
    totalStudents: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [inquiryStats, courses, students] = await Promise.all([
        inquiriesAPI.getStats(),
        coursesAPI.getAll(),
        studentsAPI.getShowcase(),
      ]);

      setStats({
        totalInquiries: inquiryStats.data.data.total,
        newToday: inquiryStats.data.data.newToday,
        activeCourses: courses.data.data.length,
        totalStudents: students.data.data.length,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    { icon: MessageSquare, label: 'Total Inquiries', value: stats.totalInquiries, color: 'bg-blue-500' },
    { icon: TrendingUp, label: 'New Today', value: stats.newToday, color: 'bg-green-500' },
    { icon: BookOpen, label: 'Active Courses', value: stats.activeCourses, color: 'bg-primary' },
    { icon: Users, label: 'Total Students', value: stats.totalStudents, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-poppins mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
