import Head from 'next/head';
import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/Hero/HeroSection';
import PackSection from '@/components/Packs/PackSection';
import ServiceSection from '@/components/Services/ServiceSection';

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
        <meta property="og:title" content="Services de Detailing Auto de Luxe | AutoSpa Detailing" />
        <meta property="og:description" content="Des services professionnels de detailing automobile avec un service bilingue." />
        <meta property="og:url" content="https://autospa-website.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://autospa-website.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services de Detailing Auto de Luxe | AutoSpa Detailing" />
        <meta name="twitter:description" content="Des services professionnels de detailing automobile avec un service bilingue." />
        <meta name="twitter:image" content="https://autospa-website.vercel.app/og-image.jpg" />
      </Head>
      <div>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PackSection />
        <ReviewsSection />
      </div>
      
      <Footer id="contact" />
    </>
  );
};

export default Home;