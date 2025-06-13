import styles from './AboutSection.module.css';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>Qui sommes nous ?</h2><br />
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            src="/IMG1.jpg" // Change this path if your image is elsewhere
            alt="Auto Spa Detailing"
            width={400}
            height={350}
            className={styles.img}
          />
        </div>
        <div className={styles.aboutText}>
          
          <div className={styles.centerText}>
            <p className={styles.highlight}>
              Auto Spa Detailing, c’est une équipe passionnée par l’automobile, dédiée à sublimer et protéger votre véhicule.
            </p>
            <br />
            <div className={styles.aboutDescription}>
              <p>
                Grâce à des technologies de pointe comme <strong className={styles.highlight2}>le revêtement céramique 🚗, la correction de peinture ✨, ou encore la pose de films de protection PPF 🛡️</strong>, nous garantissons à votre véhicule une protection durable et une apparence irréprochable.<br />Chaque intervention est réalisée avec le plus grand soin, dans le respect des spécificités de chaque voiture et des attentes de son propriétaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;