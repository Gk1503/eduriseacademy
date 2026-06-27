import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryAPI } from '../services/api';
import SectionHeading from '../components/shared/SectionHeading';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    filterImages();
  }, [activeCategory, images]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await galleryAPI.getAll();
      setImages(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterImages = () => {
    if (activeCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === activeCategory));
    }
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'event', label: 'Events' },
    { id: 'placement', label: 'Placement' },
    { id: 'batch', label: 'Batch' },
  ];

  const lightboxSlides = filteredImages.map(img => ({ src: img.imageUrl }));

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Gallery"
          subtitle="Explore our vibrant learning environment and success stories"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-dark-card border border-dark-border hover:border-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : filteredImages.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image._id}
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                />
                {image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images found</p>
          </div>
        )}

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
        />
      </div>
    </div>
  );
};

export default Gallery;
