/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoIosCode, IoIosGlobe } from 'react-icons/io';
import styles from './style.module.css';
import shoppingCart from '../../assets/shoppingCart.jpg';
import solarSystem from '../../assets/solarSystem.jpg';

export default function ProjectsSection() {
  return (
    <section id="projects" className={ styles.projectsContainer }>
      <h2>Meus Projetos</h2>
      <br />
      <p>
        Os projetos abaixo foram desenvolvidos como forma de
        aprendizado no curso de Desenvolvimento Web da
        {' '}
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
          <strong>Trybe</strong>
        </a>
      </p>
      <div className={ styles.projects }>
        <div className={ styles.projectCard }>
          <img src={ shoppingCart } alt="Shopping Cart" className={ styles.image } />
          <h2 className={ styles.title }>Shopping Cart</h2>
          <p className={ styles.description }>
            Nesse projeto foi desenvolvido uma aplicação que simula um carrinho de
            compras. Nele coloco em prática todo o conteúdo aprendido sobre
            {' '}
            <b>Web Storage</b>
            ,
            <b> JavaScript assíncrono</b>
            ,
            {' '}
            <b>consumo de API</b>
            {' '}
            e
            {' '}
            <b>TDD</b>
            .
            Os dados dos produtos são obtidos através da API do Mercado Livre.
          </p>
          <div className={ styles.projectLinks }>
            <IoIosGlobe />
            <a
              href="https://mtssantos96.github.io/project-shopping-cart/"
              target="_blank"
              rel="noopener noreferrer"
              className={ styles.link }
            >
              Site

            </a>
            <IoIosCode />
            <a
              href="https://github.com/mtssantos96/project-shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
              className={ styles.link }
            >
              Código
            </a>
          </div>
        </div>
        <div className={ styles.projectCard }>
          <img src={ solarSystem } alt="Shopping" className={ styles.image } />
          <h2 className={ styles.title }>Sistema Solar</h2>
          <p className={ styles.description }>
            Aqui foi desenvolvida minha primeira aplicação utilizando
            {' '}
            <b>React</b>
            .
            Foi desenvolvido uma página que lista os planetas do sistema solar e
            algumas das missões espaciais mais conhecidas.
            Nele coloco em prática todo o conteúdo sobre utilizar
            {' '}
            <b>JSX</b>
            , utilizar corretamente
            o método
            {' '}
            <b>render()</b>
            , utilizar o
            {' '}
            <b>import</b>
            , criar
            {' '}
            <b>componentes de classe</b>
            {' '}
            em React,
            criar múltiplos componentes a partir de uma array, fazer uso de
            {' '}
            <b>props </b>
            e fazer uso de
            {' '}
            <b>PropTypes</b>
            {' '}
            para validar as props de um componente.
          </p>
          <div className={ styles.projectLinks }>
            <IoIosGlobe />
            <a
              href="https://solar-system-mtssantos-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={ styles.link }
            >
              Site

            </a>
            <IoIosCode />
            <a
              href="https://github.com/mtssantos96/project-solar-system"
              target="_blank"
              rel="noopener noreferrer"
              className={ styles.link }
            >
              Código
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
