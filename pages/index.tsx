import Head from 'next/head';
import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/Hero/HeroSection';
import ServicesSection from '@/components/Services/ServicesSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Footer from '@/components/Footer/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services de Detailing Auto de Luxe | AutoSpa Detailing</title>
        <meta name="description" content="Des services professionnels de detailing automobile pour redonner à votre véhicule son éclat d'origine. Nous servons nos clients en français avec un soin premium." />
        <meta name="keywords" content="car detailing, auto detailing, interior cleaning, exterior polishing, ceramic coating, English, French" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Auto Spa Detailing" />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Car Detailing Services" />
        <meta property="og:description" content="High-end car detailing and polishing. Serving English and French-speaking customers." />
        <meta property="og:url" content="https://autospa-website.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Car Detailing Services" />
        <meta name="twitter:description" content="Make your car shine again. Bilingual car detailing services." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
      </Head>
      <div style={{ backgroundColor: "#f5f5f5", margin: 0, padding: 0 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
      </div>
      
      <Footer id="contact" />
    </>
  );
};

export default Home;