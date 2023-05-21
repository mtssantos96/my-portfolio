import React from 'react';
import { Link } from 'react-scroll';
import styles from './style.module.css';

export default function NavigationBar() {
  return (
    <nav className={ styles.navbar }>
      <ul className={ styles.navContainer }>
        <li>
          <Link
            to="home"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth
            duration={ 500 }
            className={ styles.navLink }
          >
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
