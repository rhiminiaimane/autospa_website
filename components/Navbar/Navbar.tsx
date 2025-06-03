import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleContactClick = async () => {
    if (router.pathname !== '/') {
      await router.push('/');
      // Wait for the navigation to complete
      setTimeout(() => {
        scrollToSection('#contact');
      }, 100);
    } else {
      scrollToSection('#contact');
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarLogo}>

        <Image 
          src="/logos/logo.png" 
          alt="AutoSpa Logo" 
          className={styles.logoImage} 
          width={50} 
          height={50} 
        />

        <span className={styles.brandName}>
          <span className={styles.mainBrand}>AutoSpa</span> 
          <span className={styles.subBrand}>Detailing</span>
        </span>
      </div>
      
      <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={() => {
          scrollToSection('.hero');
          setIsOpen(false);
        }}>
          ACCUEIL
        </Link>
        <Link href="/catalogue" onClick={() => setIsOpen(false)}>
          SERVICES
        </Link>
        <Link href="/galerie" onClick={() => setIsOpen(false)}>
          GALERIE
        </Link>
        <a onClick={handleContactClick}>
          CONTACT
        </a>
      </div>

      <div 
        className={`${styles.navbarHamburger} ${isOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;