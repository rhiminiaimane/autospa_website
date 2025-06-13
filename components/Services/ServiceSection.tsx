import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const services = [
    {
        title: 'Protection Nano Céramique',
        description: 'Protection longue durée contre les rayons UV, la pluie acide, la pollution et plus encore. Finition ultra brillante et protection jusqu’à 5 ans.',
        imageUrl: '/cars/ceramic-protect-9h2.jpg',
    },
    {
        title: 'Film de protection de peinture',
        description: 'Préservez votre peinture contre les éclats de pierre, rayures et agressions extérieures avec un film invisible et ultra résistant.',
        imageUrl: '/cars/ppf2.jpg',
    },
];

const ServiceSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Notre Services</h2>
      <Link href="/services">
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </Link>
      <div className={styles.linkContainer}>
        <Link href="/services" className={styles.servicesLink}>
          Voir plus de details 
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

export default ServiceSection;