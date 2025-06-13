import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const Services: React.FC = () => {
  const router = useRouter();
  const { service } = router.query;
  const [activeService, setActiveService] = useState<'ceramic' | 'ppf'>(
    service === 'ppf' ? 'ppf' : 'ceramic'
  );

  useEffect(() => {
    if (service === 'ceramic' || service === 'ppf') {
      setActiveService(service);
    }
  }, [service]);

  return (
    <div className={styles.pageContainer}>
      {/* Button Group */}
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.toggleButton} ${activeService === 'ceramic' ? styles.active : ''}`}
          onClick={() => {
            setActiveService('ceramic');
            router.push('/services?service=ceramic', undefined, { shallow: true });
          }}
        >
          Revêtement Céramique
        </button>
        <button
          className={`${styles.toggleButton} ${activeService === 'ppf' ? styles.active : ''}`}
          onClick={() => {
            setActiveService('ppf');
            router.push('/services?service=ppf', undefined, { shallow: true });
          }}
        >
          Film PPF
        </button>
      </div>

      {/* Service Section */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceContent}>
          <div className={styles.imageBlock}>
            <Image
              src={activeService === 'ceramic' ? '/cars/ceramicprotect-9h.jpg' : '/cars/ppf.jpeg'}
              alt={activeService === 'ceramic' ? 'Revêtement Céramique' : 'Film PPF'}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            {activeService === 'ceramic' ? (
              <>
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
              </>
            ) : (
              <>
                <h2>Film de Protection de Peinture (PPF)</h2>
                <p>
                  Le film de protection de peinture (PPF) est une solution physique ultra-résistante qui protège votre carrosserie contre les rayures, les éclats de gravillons, les impacts de portières et les agressions du quotidien. Invisible, auto-cicatrisant et durable, il préserve l’intégrité de votre peinture d’origine.
                </p>
                {/*
                <div className={styles.pricingContainer}>
                  <div className={styles.pricing}>
                    <h3>Tarification</h3>
                    <ul>
                      <li><strong>M :</strong> 8500 DH</li>
                      <li><strong>L :</strong> 10500 DH</li>
                      <li><strong>XL :</strong> 12500 DH</li>
                    </ul>
                  </div>
                  <div className={styles.extras}>
                    <h3>Options Supplémentaires</h3>
                    <ul>
                      <li>Vitres : 1200 DH</li>
                      <li>Jantes : 2500 DH</li>
                      <li>Plastique : 2800 DH</li>
                      <li>Cuir : 3000 DH</li>
                    </ul>
                  </div>
                </div>
                */}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;