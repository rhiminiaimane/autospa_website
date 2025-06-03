import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReviewCard from './ReviewCard';
import styles from './ReviewsSection.module.css';

interface Review {
  author: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    author: 'Aboudi M.',
    quote: "I'm seriously impressed with Auto Spa Detailing in Tangier. The detailer clearly has a lot of experience and brought top-tier techniques—like the two bucket method—which you don't see often here. It's clear they brought their expertise from outside and are now raising the bar in Tangier.",
    rating: 5,
  },
  {
    author: 'eLDahBi',
    quote: 'I highly recommend AUTO SPA DETAILING! Excellent service, friendly staff, a warm welcome, and amazing results. My car looks new with the full wash, polish, and nano-ceramic coating. Truly professional work!',
    rating: 5,
  },
  {
    author: 'Karim T.',
    quote: "Auto Spa Detailing is a game-changer in Tangier. The attention to detail is unmatched—they even cleaned areas I didn't know existed! The paint correction and ceramic coating made my car shine like it just came out of the showroom. Worth every penny!",
    rating: 5,
  },
  {
    author: 'Sarah L.',
    quote: "Best detailing service I've ever used! The team was professional, meticulous, and delivered beyond my expectations. My car has never looked this good. I'll definitely be a returning customer.",
    rating: 5,
  },
  {
    author: 'Mehdi R.',
    quote: "Incredible work! The interior detailing was so thorough—it felt like driving a brand-new car afterward. The team is knowledgeable and passionate about what they do. Tangier finally has a world-class detailing service!",
    rating: 5,
  },
  {
    author: 'Nadia K.',
    quote: "I was skeptical at first, but Auto Spa Detiling proved me wrong. The level of care and precision they put into their work is outstanding. My car's paint has never looked better. 10/10 would recommend!",
    rating: 5,
  },
  {
    author: 'Youssef A.',
    quote: "These guys are magicians! They transformed my dusty, worn-out car into something that looks showroom-ready. The ceramic coating is holding up perfectly, even after weeks. Exceptional service!",
    rating: 5,
  },
  {
    author: 'Layla M.',
    quote: "From booking to finish, the experience was flawless. The staff is friendly, the facility is clean, and the results speak for themselves. My car has never been this spotless. Absolute professionals!",
    rating: 5,
  },
];

const ReviewsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [reviewsPerPage, setReviewsPerPage] = useState<number>(2);

  // Add useEffect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className={styles.reviews}>
      <h2 className={styles.reviewsTitle}>Avis</h2>
      <div className={styles.sliderContainer}>
        <button
          onClick={handlePrev}
          className={styles.sliderButton}
          aria-label="Previous reviews"
        >
          <Image 
            src="/slider.png"
            alt="Previous"
            width={18}
            height={18}
            className={styles.prevArrow}
          />
        </button>
        <div className={styles.cardsContainer}>
          {currentReviews.map((review, index) => (
            <div key={index} className={styles.cardItem}>
              <ReviewCard
                author={review.author}
                quote={review.quote}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={styles.sliderButton}
          aria-label="Next reviews"
        >
          <Image 
            src="/slider.png"
            alt="Next"
            width={18}
            height={18}
            className={styles.nextArrow}
          />
        </button>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={
              index === currentPage ? styles.dotActive : styles.dot
            }
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;