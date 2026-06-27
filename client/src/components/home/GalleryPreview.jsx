import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryAPI } from '../../services/api';
import SectionHeading from '../shared/SectionHeading';

const GalleryPreview = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await galleryAPI.getAll();
      setImages(response.data.data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  if (images.length === 0) return null;

  return (
    <section className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Gallery"
          subtitle="Glimpses of our vibrant learning environment"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.map((image, index) => (
            <motion.div
              key={image._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.imageUrl}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
            View Full Gallery <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
