import styles from './ServiceCard.module.css';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string; // Add this new prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ServiceCard;