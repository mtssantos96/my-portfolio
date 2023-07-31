import React, { Component } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import logo from '../../assets/whiteLogo.png';
import perfil from '../../assets/perfil.jpg';

class Home extends Component {
  render() {
    return (
      <section className={ styles.container }>
        <Header />
        <main className={ `${styles.contentContainer} clearfix` }>
          <div className={ styles.textContainer }>
            <h1>Matheus Santos</h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>
              Seja bem vindo ao meu Portfólio, aqui estarão alguns projetos que desenvolvi
              durante o curso de Desenvolvimento Web.
            </p>
            <Contact />
            <Link to="/projects" className={ styles.projectsRedirect }>
              <FaAngleDoubleRight />
              <h3>Projetos</h3>
              <FaAngleDoubleLeft />
            </Link>
          </div>
          <div className={ styles.imgContainer }>
            <div className={ styles.logoWrapper }>
              <img src={ logo } alt="Logo" className={ styles.logo } />
            </div>
            <img src={ perfil } alt="Minha foto" className={ styles.perfil } />
          </div>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Home;
