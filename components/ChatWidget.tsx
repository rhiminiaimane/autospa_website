import React from 'react';
import styles from './ChatWidget.module.css';
import Image from 'next/image';

const ChatWidget: React.FC = () => {
  const phoneNumber = "212662038056";
  const message = "Bonjour Auto Spa Detailing, je souhaite prendre rendez-vous.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className={styles.badge}>1</span>
      <span className={styles.popupMessage}>Besoin d&apos;aide ?</span>
      <Image
        src="/icons/whatsapp-icon.png"
        alt="WhatsApp Chat"
        width={42}
        height={42}
      />
    </a>
  );
};

export default ChatWidget;