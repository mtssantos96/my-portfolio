import React from 'react';
import { IoIosCode, IoIosGlobe } from 'react-icons/io';
import shoppingCart from '../../assets/shoppingCart.gif';
import cssLogo from '../../assets/svg/css-3-logo.svg';
import htmlLogo from '../../assets/svg/html-5-logo.svg';
import jsLogo from '../../assets/svg/javascript-logo.svg';
import jestLogo from '../../assets/svg/jest-logo.svg';
import styles from './style.module.css';

export default function ShoppingCart() {
  return (
    <div className={ styles.projectCard }>
      <h2 className={ styles.title }>Shopping Cart</h2>
      <a href={ shoppingCart } target="_blank" rel="noopener noreferrer">
        <img
          src={ shoppingCart }
          alt="amostra do projeto"
          className={ styles.image }
        />
      </a>
      <div className={ styles.description }>
        <h4>
          Projeto desenvolvido durante meu aprendizado no curso de Desenvolvimento Web
          da
          {' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">
            <strong>Trybe</strong>
          </a>
          {' '}
          (Módulo: Front-end).
        </h4>
        <p>
          <b>Shopping Cart</b>
          {' '}
          é uma aplicação que visa criar um carrinho de compras
          totalmente dinâmico, consumindo dados diretamente da
          {' '}
          <b>API</b>
          {' '}
          do
          {' '}
          <a
            href="https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              Mercado Livre
            </strong>
          </a>
          .
          <p>
            Essa aplicação é capaz de:
            <br />
            <br />
            <li>Utilizar dados de um API;</li>
            <li>Adicionar produtos ao carrinho;</li>
            <li>Remover produtos individualmente;</li>
            <li>Limpar o carrinho;</li>
            <li>Salvar o carrinho no Local Storage;</li>
            <li>Fazer a atualição do valor total do carrinho automaticamente;</li>
          </p>
        </p>
        <p>
          Nesse projeto coloco em prática o que aprendi sobre
          {' '}
          <b>JavaScript assíncrono</b>
          ,
          <b>Fetch API</b>
          ,
          {' '}
          <b>Async/Await</b>
          ,
          {' '}
          <b>Jest — Testes Assíncronos</b>
          .
        </p>
      </div>
      <h3>Tecnologias utilizadas:</h3>
      <div className={ styles.tech }>
        <span>
          <img
            alt="HTML Logo"
            className={ styles.techIcon }
            src={ htmlLogo }
          />
          <p>HTML</p>
        </span>
        <span>
          <img
            alt="CSS Logo"
            className={ styles.techIcon }
            src={ cssLogo }
          />
          <p>CSS</p>
        </span>
        <span>
          <img
            alt="Javascript Logo"
            className={ styles.techIcon }
            src={ jsLogo }
          />
          <p>Javascript</p>
        </span>
        <span>
          <img
            alt="Jest Logo"
            className={ styles.techIcon }
            src={ jestLogo }
          />
          <p>Jest</p>
        </span>
      </div>
      <div className={ styles.projectLinks }>
        <a
          href="https://shopping-cart-mho.vercel.app/"
          target="_blank"
          className={ styles.link }
          rel="noreferrer"
        >
          <IoIosGlobe />
          Site
        </a>
        <a
          href="https://github.com/mtssantos96/project-solar-system"
          target="_blank"
          className={ styles.link }
          rel="noreferrer"
        >
          <IoIosCode />
          Código
        </a>
      </div>
    </div>
  );
}
