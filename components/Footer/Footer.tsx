import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          {/* Map Section */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Adresse</h3>
            <Link href="https://maps.app.goo.gl/u2n2Zmx6K9zHhju2A" passHref target="_blank">
              <Image
                src="/map.png"
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
                  <span className={styles.icon}>
                    <Image
                      src="/icons/instagram-icon.png"
                      alt="Instagram Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <Link href="https://www.instagram.com/auto_spa_detailing_sarl" target="_blank" className={styles.contactLink}>
                    @auto_spa_detailing_sarl
                  </Link>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/whatsapp-icon-w.png"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  06 62 03 80 56
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/clock-icon.png"
                      alt="Clock Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  Lundi - Vendredi: 9H - 19H<br/>
                  Samedi: 10H - 18H
                </p>
              </div>
                <div className={styles.verticalDivider}></div>
              <div className={styles.messageRapide}>
                <div className={styles.messageContent}>
                    <Image
                        src="/icons/whatsapp-icon.png"
                        alt="WhatsApp Icon"
                        width={50}
                        height={50}
                    />
                    <h3>Contact Rapide</h3>
                    <p>Message direct sur WhatsApp</p>  
                    <a 
                        href={`https://wa.me/+212639607843?text=${encodeURIComponent(
                            "Bonjour Auto Spa Detailing, je souhaite prendre rendez-vous."
                        )}`} 
                        className={styles.whatsappBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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