import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2 className={styles.aboutTitle}>A propos de AutoSpa</h2>
      <div className={styles.centerText}>
        <p className={styles.aboutHeading}>
            <strong>AutoSpa Detailing</strong>, votre expert en detailing<br/> automobile à Diyar Tanjah,<br/> Tanger, MA !
        </p>
        <p className={styles.aboutDescription}>
          Spécialistes en protection céramique, film PPF, correction de peinture et lavage premium, nous sublimons votre véhicule.<br/>
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