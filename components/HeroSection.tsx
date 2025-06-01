import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import googlereviews from '../public/google-reviews.png';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroTitle}><strong>Bienvenue</strong> à AutoSpa Detailing</p><br />
        <p className={styles.heroDescription}>
            Nous offrons des services de detailing <strong>haut de gamme</strong><br /> 
          Protection céramique, film de protection de peinture (PPF), restauration du cuir et autres services sur mesure.
        </p>
        <div className={styles.heroRating}>
          <Image 
            src={googlereviews}
            alt="Google Logo"
            width={110}
            height={20}
            style={{ marginLeft: '2px' }}
          />
           5 (parmi +40 avis)
        </div>
      </div>
    </section>
  );
};

export default HeroSection;