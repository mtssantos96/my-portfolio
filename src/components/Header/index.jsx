import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
        <div className={ styles.contactList }>
          <a
            href="https://www.linkedin.com/in/matheussantpsdev/"
            className={ styles.listLink }
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mtssantos96"
            className={ styles.listLink }
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
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
