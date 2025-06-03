import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const galleryItems = [
  { id: 1, model: 'BMW', Name: 'BMW M3', image: '/cars/bmw.jpg', alt: 'Detailed BMW M3' },
  { id: 2, model: 'Mercedes', Name: 'Mercedes-Benz C-Class', image: '/cars/benz.jpg', alt: 'Detailed Mercedes-Benz C-Class' },
  { id: 3, model: 'Toyota', Name: 'Toyota Camry', image: '/cars/toyota.webp', alt: 'Detailed Toyota Camry' },
  { id: 4, model: 'BMW', Name: 'BMW X5', image: '/cars/bmw2.webp', alt: 'Detailed BMW X5' },
  { id: 5, model: 'Mercedes', Name: 'Mercedes-Benz E-Class', image: '/cars/benz2.webp', alt: 'Detailed Mercedes-Benz E-Class' },
  { id: 6, model: 'Audi', Name: 'Audi A4', image: '/cars/audi.jpg', alt: 'Detailed Audi A4' },
  { id: 7, model: 'Honda', Name: 'Honda Civic', image: '/cars/honda.webp', alt: 'Detailed Honda Civic' },
  { id: 8, model: 'Tesla', Name: 'Tesla Model 3', image: '/cars/tesla.jpeg', alt: 'Detailed Tesla Model 3' },
  { id: 9, model: 'Ford', Name: 'Ford Mustang', image: '/cars/ford.jpg', alt: 'Detailed Ford Mustang' },
  { id: 10, model: 'Volkswagen', Name: 'Volkswagen Golf', image: '/cars/vw.webp', alt: 'Detailed Volkswagen Golf' }
];

const Galerie: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(galleryItems[0]);
  const [filter, setFilter] = useState('All');

  // Get unique models for filter options
  const modelOptions = useMemo(() => {
    const uniqueModels = [...new Set(galleryItems.map(item => item.model))];
    return ['All', ...uniqueModels].sort();
  }, []);

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.model === filter);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image
          src={selectedImage.image}
          alt={selectedImage.alt}
          width={600}
          height={400}
          className={styles.image}
        />
        <h3 className={styles.imageTitle}>{selectedImage.Name}</h3>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.filter}>
          <label htmlFor="modelFilter">Filter by Model: </label>
          <select
            id="modelFilter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.select}
          >
            {modelOptions.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.thumbnails}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={styles.thumbnail}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={100}
                height={75}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galerie;