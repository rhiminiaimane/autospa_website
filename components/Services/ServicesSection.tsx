import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Protection Céramique',
    description: 'Le texte généré est du pseudo latin et peut donner l\'impression d\'être du vrai texte.',
  },
  {
    title: 'Application de Film PPF',
    description: 'Le texte généré est du pseudo latin et peut donner l\'impression d\'être du vrai texte.',
  },
  {
    title: 'Correction de Peinture',
    description: 'Le texte généré est du pseudo latin et peut donner l\'impression d\'être du vrai texte.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Notre service</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
      <div className={styles.linkContainer}>
        <Link href="/services" className={styles.servicesLink}>
          Voir tous nos services 
          <Image 
            src="/icons/circle-arrow.png" 
            alt="arrow" 
            width={20} 
            height={20}
            className={styles.arrowImage}
          />
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;