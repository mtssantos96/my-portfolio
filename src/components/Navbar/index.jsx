import React from 'react';
import { Link } from 'react-scroll';
import styles from './style.module.css';

export default function NavigationBar() {
  return (
    <nav className={ styles.navbar }>
      <div className={ styles.navContainer }>
        <Link
          to="home"
          smooth
          duration={ 500 }
          className={ styles.navLink }
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth
          duration={ 500 }
          className={ styles.navLink }
        >
          Projetos
        </Link>
        <Link
          to="about"
          smooth
          duration={ 500 }
          className={ styles.navLink }
        >
          Sobre
        </Link>
        <Link
          to="contact"
          smooth
          duration={ 500 }
          className={ styles.navLink }
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}
