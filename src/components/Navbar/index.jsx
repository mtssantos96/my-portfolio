import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.css';

export default function NavigationBar() {
  const location = useLocation();

  return (
    <nav className={ styles.navbar }>
      <div className={ styles.navContainer }>
        <Link
          to="/"
          className={ `${styles.navLink} ${location
            .pathname === '/' ? styles.currentPage : ''}` }
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={ `${styles.navLink} ${location
            .pathname === '/projects' ? styles.currentPage : ''}` }
        >
          Projetos
        </Link>
        {/* <Link
          to="none"
          className={ `${styles.navLink} ${location
            .pathname === '/about' ? styles.currentPage : ''}` }
        >
          Sobre
        </Link> */}
        <Link
          to="/contact"
          className={ `${styles.navLink} ${location
            .pathname === '/contact' ? styles.currentPage : ''}` }
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}
