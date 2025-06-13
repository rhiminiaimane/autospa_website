import Image from 'next/image';
import styles from './Hero.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <div className={styles.heroTitle}>
          <p>Bienvenue chez <br/><strong>Auto Spa Detailing</strong></p>
        </div>
        <div className={styles.heroDescription}>
          <p>
            Votre destination de confiance pour le soin automobile haut de gamme.
          </p>
        </div>
      </div>

      <div className={styles.imageContent}>
        <Image
          src="/IMG3.png"
          alt="Car Detailing"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default HeroSection;