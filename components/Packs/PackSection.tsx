import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './PackCard';
import styles from './PackSection.module.css';

const packs = [
  {
    title: 'Pack Maintenance',
    description: 'Un nettoyage complet, idéal pour un entretien régulier et garder votre véhicule toujours propre.',
    imageUrl: '/cars/maintenance-pack.webp',
  },
  {
    title: 'Pack Platinum',
    description: "Un service plus approfondi avec désinfection intérieure et brillance carrosserie pour une propreté durable.",
    imageUrl: '/cars/platinum-pack.avif',
  },
  {
    title: 'Pack Diamond',
    description: 'Un soin luxueux avec traitement du cuir ou tissu et protection contre la saleté et les UV.',
    imageUrl: '/cars/diamond-pack.jpg',
  },
  {
    title: 'Pack Titanium',
    description: "Le pack ultime pour les passionnés d’automobile : polissage + cire premium pour une finition miroir.",
    imageUrl: '/cars/titanium-pack.jpg',
  },
];

const PackSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Notre Packs</h2>
      <div className={styles.cardsContainer}>
        {packs.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      <div className={styles.linkContainer}>
        <Link href="/packs" className={styles.servicesLink}>
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

export default PackSection;