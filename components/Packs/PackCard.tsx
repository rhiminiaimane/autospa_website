import styles from './PackCard.module.css';
import Image from 'next/image';

interface PackCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PackCard: React.FC<PackCardProps> = ({ title, description, imageUrl }) => {
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

export default PackCard;