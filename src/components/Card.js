import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

export default function Card({title, description, to}) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
} 