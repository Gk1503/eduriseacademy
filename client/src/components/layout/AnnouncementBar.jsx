import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { announcementsAPI } from '../../services/api';

const AnnouncementBar = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementsAPI.getActive();
      setAnnouncements(response.data.data || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  if (!isVisible || announcements.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-dark py-2 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {announcements.map((announcement, index) => (
              <span key={announcement._id} className="inline-block mx-8 font-semibold">
                {announcement.link ? (
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {announcement.text}
                  </a>
                ) : (
                  announcement.text
                )}
                {index < announcements.length - 1 && ' • '}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
