import { useState, useMemo, useRef, TouchEvent } from 'react';
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Get unique models for filter options
  const modelOptions = useMemo(() => {
    const uniqueModels = [...new Set(galleryItems.map(item => item.model))];
    return ['All', ...uniqueModels].sort();
  }, []);

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.model === filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    
    // Set the first image of the selected category as the selected image
    if (newFilter === 'All') {
      setSelectedImage(galleryItems[0]);
    } else {
      const firstItemInCategory = galleryItems.find(item => item.model === newFilter);
      if (firstItemInCategory) {
        setSelectedImage(firstItemInCategory);
      }
    }
  };

  const handleThumbnailClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    // Scroll to top of the page smoothly
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth' 
    });
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
  const swipeDistance = touchStart - touchEnd;
  const minSwipeDistance = 50;

  if (Math.abs(swipeDistance) > minSwipeDistance) {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;

    if (swipeDistance > 0) {
      // Swipe left
      setSlideDirection('left');
      newIndex = currentIndex + 1 >= filteredItems.length ? 0 : currentIndex + 1;
    } else {
      // Swipe right
      setSlideDirection('right');
      newIndex = currentIndex - 1 < 0 ? filteredItems.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredItems[newIndex]);
    
    // Reset slide direction after animation
    setTimeout(() => {
      setSlideDirection(null);
    }, 300);
  }
};

  return (
    <div className={styles.gallery}>
      <div 
        className={styles.mainImage} 
        ref={mainImageRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
  src={selectedImage.image}
  alt={selectedImage.alt}
  width={600}
  height={400}
  className={`${styles.image} ${
    slideDirection === 'left' ? styles.slideLeft : 
    slideDirection === 'right' ? styles.slideRight : ''
  }`}
/>
        <h3 className={styles.imageTitle}>{selectedImage.Name}</h3>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.filter}>
          <label htmlFor="modelFilter">Filter by Model: </label>
          <select
            id="modelFilter"
            value={filter}
            onChange={handleFilterChange}
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
              onClick={() => handleThumbnailClick(item)}
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