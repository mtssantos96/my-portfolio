import React from 'react';

import styles from './style.module.css';
import SolarSystem from './projectSolarSystem';
import ShoppingCart from './projectShoppingCart';
import TrybeTunes from './projectTrybeTunes';

export default function ProjectsSection() {
  return (
    <section className={ styles.projectsContainer }>
      <div className={ styles.projects }>
        <ShoppingCart />
        <SolarSystem />
        <TrybeTunes />
      </div>
    </section>
  );
}
