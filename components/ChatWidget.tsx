import React from 'react';
import styles from './ChatWidget.module.css';
import Image from 'next/image';

const ChatWidget: React.FC = () => {
  const phoneNumber = "212639607843";
  const message = "Bonjour Auto Spa Detailing, je souhaite prendre rendez-vous.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
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