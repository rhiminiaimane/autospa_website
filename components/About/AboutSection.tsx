import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>A propos de AutoSpa</h2>
      <div className={styles.centerText}>
        <p className={styles.aboutHeading}>
            <strong className={styles.highlight}>AutoSpa Detailing</strong>, votre expert en detailing<br/> automobile à Diyar Tanjah,<br/> <strong className={styles.highlight}>Tanger</strong>, MA !
        </p>
        <p className={styles.aboutDescription}>
          Spécialistes en <strong className={styles.highlight}>protection céramique</strong>, film <strong className={styles.highlight}>PPF</strong>, correction de peinture et <strong className={styles.highlight}>lavage premium</strong>, nous sublimons votre véhicule.<br/>
          Membre officiel de <strong className={styles.highlight}>@thedetailingclub.official</strong>, nous assurons un travail de qualité avec une attention minutieuse aux détails.
            {/*
            Nous sommes spécialisés dans une <strong className={styles.highlight}>gamme complète</strong> de services<br/> pour sublimer votre véhicule : protection céramique, application de film PPF,<br/> correction de peinture et lavage premium.<br/>
            Membre officiel de <a href="https://thedetailingclub.official" className={`${styles.link} ${styles.highlight}`}>@thedetailingclub.official</a>, nous garantissons un travail de qualité supérieure avec une <strong className={styles.highlight}>attention méticuleuse</strong> aux détails.
             */}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;