import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          {/* Map Section */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Adresse</h3>
            <Link href="/contact" passHref>
              <Image
                src="/map-image.png"
                alt="Map of Auto Spa Detailing location"
                width={250}
                height={250}
                className={styles.mapImage}
              />
            </Link>
          </div>

          {/* Contact Section */}
          <div className={styles.contactContainer}>
            <h3 className={styles.centeredTitle}>Contactez-Nous</h3>
            <div className={styles.contactWrapper}>
                <div className={styles.verticalDivider}></div>
              <div className={styles.contactDetails}>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>📷</span>
                  <Link href="https://www.instagram.com/auto_spa_detailing_sarl" target="_blank" className={styles.contactLink}>
                    @auto_spa_detailing_sarl
                  </Link>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  06 62 03 80 56
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>🕒</span>
                  Lundi - Vendredi: 9H - 19H<br/>
                  Samedi: 10H - 18H
                </p>
              </div>
                <div className={styles.verticalDivider}></div>
              <div className={styles.messageRapide}>
                <div className={styles.messageContent}>
                    <Image
                        src="/whatsapp-icon.png"
                        alt="WhatsApp Icon"
                        width={50}
                        height={50}
                    />
                    <h3>Contact Rapide</h3>
                    <p>Message direct sur WhatsApp</p>  
                    <a href='' className={styles.whatsappBtn}>
                        Nous Ecrire
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;