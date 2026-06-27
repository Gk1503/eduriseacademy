import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../../utils/helpers';

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/50 hover:scale-110 transition-transform animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
