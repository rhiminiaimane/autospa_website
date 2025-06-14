import Image from 'next/image';
import styles from './Hero.module.css';
import Reveal from '../ScrollOnReveal/Reveal'; // Assuming you have a Reveal component for animations

const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <Reveal direction="left"> 
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
      </Reveal>

      <Reveal direction="right"> 
        <div className={styles.imageContent}>
          <Image
            src="/IMG3.png"
            alt="Car Detailing"
            width={800}
            height={600}
          />
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;