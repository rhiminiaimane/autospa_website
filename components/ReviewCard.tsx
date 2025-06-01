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
    <div className={styles.reviewCard}>
      <div className={styles.quote}>&quot;</div>
      <p className={styles.reviewText}>{quote}</p>
      <div className={styles.author}>{author}</div>
      <div className={styles.rating}>{stars}</div>
    </div>
  );
};

export default ReviewCard;
