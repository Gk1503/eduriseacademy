import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

// Layouts
import MainLayout from '../components/layout/MainLayout';
import AdminLayout from '../components/layout/AdminLayout';

// Public Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import CourseDetail from '../pages/CourseDetail';
import Placement from '../pages/Placement';
import Gallery from '../pages/Gallery';
import Internship from '../pages/Internship';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Admin Pages
import AdminLogin from '../pages/admin/AdminLogin';
import Dashboard from '../pages/admin/Dashboard';
import ManageCourses from '../pages/admin/ManageCourses';
import ManageInquiries from '../pages/admin/ManageInquiries';
import ManageStudents from '../pages/admin/ManageStudents';
import ManageGallery from '../pages/admin/ManageGallery';
import ManageAnnouncements from '../pages/admin/ManageAnnouncements';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore();
  return token ? children : <Navigate to="/admin/login" replace />;
};

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="placement" element={<Placement />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="internship" element={<Internship />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<ManageCourses />} />
        <Route path="inquiries" element={<ManageInquiries />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="gallery" element={<ManageGallery />} />
        <Route path="announcements" element={<ManageAnnouncements />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
