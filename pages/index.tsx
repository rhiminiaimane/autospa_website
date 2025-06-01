import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;