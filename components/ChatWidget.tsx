import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './ChatWidget.module.css';

const ChatWidget: React.FC = () => {
  const phoneNumber = "51955081075";
  const message = "Hola! Quisiera más información.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default ChatWidget;