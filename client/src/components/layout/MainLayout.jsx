import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../shared/WhatsAppButton';
import MobileBottomNav from './MobileBottomNav';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </div>
  );
};

export default MainLayout;
