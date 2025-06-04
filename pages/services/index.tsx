import Link from 'next/link';
import styles from './Services.module.css';

const packs = [
  {
    title: 'Pack Maintenance',
    price: '120 DH',
    description: 'Un nettoyage complet pour redonner de l’éclat à votre voiture, idéal pour un entretien régulier.',
    features: [
      'Lavage extérieur à la main et séchage',
      'Nettoyage des jantes et pneus',
      'Nettoyage intérieur',
      'Polissage des pneus',
      'Nettoyage avec la technique des deux seaux',
      'Nettoyage avec lance à mousse active',
      'Conditionnement des plastiques intérieurs',
    ],
    buttonText: 'Réserver Maintenant',
    buttonLink: '/book-maintenance',
  },
  {
    title: 'Pack Platinum',
    price: '320 DH',
    description: 'Une désinfection avancée et un polissage brillant pour une propreté durable et une protection renforcée.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
    ],
    buttonText: 'Réserver Maintenant',
    buttonLink: '/book-platinum',
  },
  {
    title: 'Pack Diamond',
    price: '760 DH',
    description: 'Un soin luxueux avec traitement du cuir et protection anti-saleté pour une voiture impeccable.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
      'Traitement des sièges en cuir ou de la sellerie',
      'Protection plastique (protection UV, contre la détérioration et la saleté avec effet neuf)',
    ],
    buttonText: 'Réserver Maintenant',
    buttonLink: '/book-diamond',
  },
  {
    title: 'Pack Titanium',
    price: '1320 DH',
    description: 'Le summum du soin auto avec polissage chimique et cire premium pour une finition parfaite.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
      'Traitement des sièges en cuir ou de la sellerie',
      'Protection plastique (protection UV, contre la détérioration et la saleté avec effet neuf)',
      'Décontamination chimique et manuelle',
      'Polissage en une étape',
      'Application de cire premium',
    ],
    buttonText: 'Réserver Maintenant',
    buttonLink: '/book-titanium',
  },
];
const Services: React.FC = () => {
  return (
    <div className={styles.pricing}>
      {/*<h1 className={styles.title}>Pricing Packs</h1>*/}
      <div className={styles.cards}>
        {packs.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.planTitle}>{plan.title}</h2>
            <p className={styles.price}>{plan.price}</p>
            <p className={styles.description}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={styles.feature}>{feature}</li>
              ))}
            </ul>
            <Link href={plan.buttonLink} className={styles.button}>
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;