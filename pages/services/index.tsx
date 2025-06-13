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

  const ceramicPricing = [
    {
      size: 'M',
      label: 'Taille Moyenne: M',
      price: '3760 DHS',
      image: '/cars/vw.webp',
    },
    {
      size: 'L',
      label: 'Taille Grande: L',
      price: '4650 DHS',
      image: '/cars/toyota.webp',
    },
    {
      size: 'XL',
      label: 'Taille Extra Grande: XL',
      price: '5820 DHS',
      image: '/cars/bmw.jpg',
    },
  ];

  const extraPricing = [
    {
      label: 'Vitres',
      price: '750 DHS',
    },
    {
      label: 'Jantes',
      price: '1860 DHS',
    },
    {
      label: 'Plastique',
      price: '2100 DHS',
    },
    {
      label: 'Cuir',
      price: '2200 DHS',
    },
  ];

  return (
    <div className={styles.pageContainer}>
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

      {activeService === 'ceramic' ? (
        <>
          <div className={styles.introText}>
            <h2>Traitement Céramique à Auto Spa – Brillance, Protection et Excellence</h2>
            <p>
              Vous êtes à la recherche du meilleur soin pour votre voiture à Tanger ? Le traitement céramique automobile est la solution idéale pour offrir à votre véhicule une brillance éclatante, une protection durable et une valeur ajoutée inégalée.
            </p>
            <p>
              Chez Auto Spa Detailing Tanger, nous vous proposons un revêtement céramique professionnel appliqué avec expertise, pour transformer votre voiture et la protéger des agressions extérieures.
            </p>
          </div>

          <div className={styles.cardsContainer}>
            {ceramicPricing.map((car, index) => (
              <div className={styles.pricingCard} key={index}>
                <div className={styles.carImageContainer}>
                  <Image src={car.image} alt={car.label} width={300} height={300} />
                </div>
                <h3 className={styles.carLabel}>{car.label}</h3>
                <div className={styles.priceLine}>
                  <span className={styles.price}>{car.price}</span>
                </div>
                <div className={styles.extraInfo}>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.extraSection}>
            <h3 className={styles.sectionTitle}>Options Extra</h3>
            <div className={styles.extraItems}>
              {extraPricing.map((item, index) => (
                <div className={styles.extraItem} key={index}>
                  <span className={styles.carLabel}>{item.label}</span>
                  <div className={styles.priceLine}>
                    <span className={styles.price}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.advantages}>
            <h3>🔒 Les avantages du traitement céramique à Tanger</h3>
            <ul>
              <li>Protection maximale contre le climat de Tanger : Résistance aux UV, pluie salée, sable, fientes d’oiseaux et micro-rayures.</li>
              <li>Finition ultra-brillante : Une peinture éclatante avec un effet miroir luxueux.</li>
              <li>Effet hydrophobe puissant : L’eau, la poussière et les saletés glissent littéralement sur la surface.</li>
              <li>Facilité d’entretien : Moins de lavages, plus de temps pour vous.</li>
              <li>Durabilité exceptionnelle : Jusqu’à 5 ans de protection avec un seul traitement.</li>
              <li>Préserve la valeur de votre véhicule : Idéal pour les voitures neuves, de luxe ou de collection.</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className={styles.introText}>
            <h2>Film de Protection de Peinture (PPF) à Tanger – La Protection Invisible Ultime</h2>
            <p>
              Vous souhaitez protéger la carrosserie de votre voiture contre les agressions du quotidien ? Le film de protection de peinture (PPF) est la solution haut de gamme pour préserver l’éclat de votre véhicule tout en gardant un aspect d’origine impeccable.
            </p>
            <p>
              Chez Auto Spa Detailing Tanger, nous sommes spécialisés dans la pose professionnelle de films PPF de haute qualité, découpés sur mesure pour une finition parfaite.
            </p>
          </div>

          <div className={styles.advantages}>
            <h3>🛡️ Pourquoi choisir un film de protection PPF à Tanger ?</h3>
            <ul>
              <li>Protection contre les impacts et rayures : Le film PPF agit comme une seconde peau contre les éclats de gravillons, les rayures, les frottements et les agressions mécaniques.</li>
              <li>Résistance aux UV et à l’oxydation : Idéal pour le climat ensoleillé de Tanger, il empêche la décoloration de la peinture.</li>
              <li>Effet auto-régénérant : Les micro-rayures disparaissent avec la chaleur du soleil ou de l’eau chaude.</li>
              <li>Invisible à l’œil nu : Application précise pour un rendu 100 % transparent et sans bulles.</li>
              <li>Entretien simplifié : La surface reste lisse et propre plus longtemps.</li>
              <li>Préserve la valeur de revente : Votre voiture reste dans un état “comme neuf” pendant des années.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;