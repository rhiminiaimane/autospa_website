import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import React from 'react';
import Footer from '@/components/Footer';

import ReviewsSection from '@/components/ReviewsSection';


const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;