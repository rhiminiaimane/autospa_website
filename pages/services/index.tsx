import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const Services: React.FC = () => {
  return (
    <div className={styles.pageContainer}>

      {/* Revêtement Céramique 9H */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceContent}>
            <div className={styles.imageBlock}>
            <Image
              src="/cars/ceramicprotect-9h.jpg"
              alt="Revêtement Céramique"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Revêtement Céramique 9H</h2>
            <p>
              Notre revêtement céramique 9H offre une protection longue durée contre les agressions extérieures :<br/>UV, pluies acides, pollution, résine et fientes d'oiseaux. 
              Votre véhicule garde un aspect neuf et une brillance incomparable pendant des années.
            </p>

            <div className={styles.pricingContainer}>
              <div className={styles.pricing}>
                <h3>Tarification</h3>
                <ul>
                  <li><strong>M :</strong> 3760 DH</li>
                  <li><strong>L :</strong> 4650 DH</li>
                  <li><strong>XL :</strong> 5820 DH</li>
                </ul>
              </div>

              <div className={styles.extras}>
                <h3>Options Supplémentaires</h3>
                <ul>
                  <li>Vitres : 750 DH</li>
                  <li>Jantes : 1860 DH</li>
                  <li>Plastique : 2100 DH</li>
                  <li>Cuir : 2200 DH</li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>
      </section>


      <section className={styles.serviceSection}>
        <div className={styles.serviceContent}>
            <div className={styles.imageBlock}>
            <Image
              src="/cars/ppf.jpeg"
              alt="Revêtement Céramique"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Film de Protection de Peinture (PPF)</h2>
            <p>
              Le film de protection de peinture (PPF) est une solution physique ultra-résistante qui protège votre carrosserie contre les rayures, les éclats de gravillons, les impacts de portières et les agressions du quotidien. Invisible, auto-cicatrisant et durable, il préserve l’intégrité de votre peinture d’origine.
            </p>
            {/*
            <div className={styles.pricingContainer}>
              <div className={styles.pricing}>
                <h3>Tarification</h3>
                <ul>
                  <li><strong>M :</strong> 3760 DH</li>
                  <li><strong>L :</strong> 4650 DH</li>
                  <li><strong>XL :</strong> 5820 DH</li>
                </ul>
              </div>

              <div className={styles.extras}>
                <h3>Options Supplémentaires</h3>
                <ul>
                  <li>Vitres : 750 DH</li>
                  <li>Jantes : 1860 DH</li>
                  <li>Plastique : 2100 DH</li>
                  <li>Cuir : 2200 DH</li>
                </ul>
              </div>
            </div>
            */}
          </div>

          
        </div>
        <br /><br />
      </section>
    </div>
  );
};

export default Services;