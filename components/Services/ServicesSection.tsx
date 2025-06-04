import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Pack Maintenance',
    description: 'Nettoyage approfondi extérieur et intérieur avec polissage et soin des pneus.',
    imageUrl: '/cars/maintenance-pack.webp',
  },
  {
    title: 'Pack Platinum',
    description: "Désinfection complète de l'habitacle, polissage brillant et protection des surfaces.",
    imageUrl: '/cars/platinum-pack.avif',
  },
  {
    title: 'Pack Diamond',
    description: 'Désinfection avancée, polissage premium, traitement du cuir et protection anti-saleté.',
    imageUrl: '/cars/diamond-pack.jpg',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Notre service</h2>
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