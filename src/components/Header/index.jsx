import React from 'react';
import styles from './style.module.css';
import logo from '../../assets/whiteLogo.png';
import perfil from '../../assets/perfil.jpg';

export default function Header() {
  return (
    <section id="home" className={ styles.container }>
      <div className={ styles.textContainer }>
        <h1>Matheus Santos</h1>
        <h2>Desenvolvedor Front-End</h2>
        <p>
          Seja bem vindo ao meu Portfólio, aqui estarão alguns projetos que desenvolvi
          durante o curso de Desenvolvimento Web.
        </p>
      </div>
      <div className={ styles.imgContainer }>
        <div className={ styles.logoWrapper }>
          <img src={ logo } alt="Logo" className={ styles.logo } />
        </div>
        <img src={ perfil } alt="meu retrato" className={ styles.perfil } />
      </div>
    </section>
  );
}
