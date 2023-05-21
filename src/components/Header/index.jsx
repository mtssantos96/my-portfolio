import React from 'react';
import styles from './style.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header id="home" className={ styles.header }>
      <h1 className={ styles.title }>Portfólio</h1>
      <img src={ logo } alt="Logo" className={ styles.logo } />
    </header>
  );
}
