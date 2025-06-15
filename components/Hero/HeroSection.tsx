import styles from './Hero.module.css';
import Reveal from '../ScrollOnReveal/Reveal'; // Assuming you have a Reveal component for animations

const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoOverlay}></div> {/* Add this line */}
      
      <Reveal direction="left">
        <div className={styles.textContent}>
          <div className={styles.heroTitle}>
            <p>Bienvenue chez <br/>Auto Spa Detailing</p>
          </div>
          <div className={styles.heroDescription}>
            <p>
              Votre destination de confiance pour le soin automobile haut de gamme.
            </p>
          </div>
        </div>
      </Reveal>
      
    </section>
  );
};

export default HeroSection;