import styles from './ReviewCard.module.css';

interface ReviewCardProps {
  author: string;
  quote: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, quote, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>
      ★
    </span>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p>{quote}</p>
      </div>
      <div className={styles.reviewHeader}>
        <span className={styles.reviewerName}>{author}</span>
        <span className={styles.stars}>{stars}</span>
      </div>
    </div>
  );
};

export default ReviewCard;