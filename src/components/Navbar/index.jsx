import React from 'react';
import { Link } from 'react-scroll';
import styles from './style.module.css';

export default function NavigationBar() {
  return (
    <nav className={ styles.navbar }>
      <div className={ styles.navContainer }>
        <p>
          <Link
            to="home"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            to="projects"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Projetos
          </Link>
        </p>
        <p>
          <Link
            to="about"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Sobre
          </Link>
        </p>
        <p>
          <Link
            to="contact"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Contatos
          </Link>
        </p>
      </div>
    </nav>
  );
}
