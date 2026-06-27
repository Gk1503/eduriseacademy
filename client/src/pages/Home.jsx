import HeroSection from '../components/home/HeroSection';
import CourseHighlights from '../components/home/CourseHighlights';
import SpokenEnglishSection from '../components/home/SpokenEnglishSection';
import CourseEligibility from '../components/home/CourseEligibility';
import WhatMakesUsDifferent from '../components/home/WhatMakesUsDifferent';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import GalleryPreview from '../components/home/GalleryPreview';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CourseHighlights />
      <SpokenEnglishSection />
      <CourseEligibility />
      <WhatMakesUsDifferent />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <GalleryPreview />
    </>
  );
};

export default Home;
