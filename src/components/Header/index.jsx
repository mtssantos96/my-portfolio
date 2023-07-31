import React from 'react';
import styles from './style.module.css';
import logo from '../../assets/whiteLogo.png';
import Navbar from '../Navbar';

export default function Header() {
  return (
    <header className={ styles.container }>
      <img src={ logo } alt="Logo" className={ styles.logo } />
      <Navbar />
    </header>
  );
}
