import React from 'react';
import { IoIosCode, IoIosGlobe } from 'react-icons/io';
import trybeTunes from '../../assets/trybetunes.gif';
import cssLogo from '../../assets/svg/css-3-logo.svg';
import htmlLogo from '../../assets/svg/html-5-logo.svg';
import jsLogo from '../../assets/svg/javascript-logo.svg';
import reactLogo from '../../assets/svg/react-logo.svg';
import reactIconsLogo from '../../assets/svg/react-icons-logo.svg';
import styles from './style.module.css';

export default function TrybeTunes() {
  return (
    <div className={ styles.projectCard }>
      <h2 className={ styles.title }>TrybeTunes</h2>
      <a href={ trybeTunes } target="_blank" rel="noopener noreferrer">
        <img
          src={ trybeTunes }
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
          <b>TrybeTunes</b>
          {' '}
          é uma aplicação capaz de reproduzir músicas das mais
          variadas bandas e artistas.
          <p>
            Essa aplicação é capaz de:
            <br />
            <br />
            <li>Fazer login;</li>
            <li>Pesquisar por uma banda ou artista;</li>
            <li>Listar os álbuns disponíveis dessa banda ou artista;</li>
            <li>Visualizar as músicas de um álbum selecionado;</li>
            <li>Reproduzir uma prévia das músicas deste álbum;</li>
            <li>Favoritar e desfavoritar músicas;</li>
            <li>Ver a lista de músicas favoritas;</li>
            <li>Ver o perfil da pessoa logada;</li>
            <li>Editar o perfil da pessoa logada.</li>
          </p>
        </p>
        <p>
          Nesse projeto coloco em prática o que aprendi sobre fazer requisições e
          consumir dados vindos de uma
          {' '}
          <b>API</b>
          , utilizar os ciclos de vida de um componente
          {' '}
          <b>React</b>
          , utilizar a função
          {' '}
          <b>setState</b>
          {' '}
          de forma a garantir que um determinado código só é executado após o estado ser
          atualizado, utilizar o componente
          {' '}
          <b>BrowserRouter</b>
          {' '}
          corretamente, criar
          rotas, mapeando o caminho da URL com o componente correspondente, via
          {' '}
          <b>Route</b>
          , utilizar o
          {' '}
          <b>Switch</b>
          {' '}
          do
          {' '}
          <b>React Router</b>
          e criar links de navegação na aplicação com o componente
          {' '}
          <b>Link</b>
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
            alt="React Logo"
            className={ styles.techIcon }
            src={ reactLogo }
          />
          <p>React</p>
        </span>
        <span>
          <img
            alt="React-Icons Logo"
            className={ styles.techIcon }
            src={ reactIconsLogo }
          />
          <p>React Icons</p>
        </span>
      </div>
      <div className={ styles.projectLinks }>
        <a
          href="https://trybetunes-mho.vercel.app/"
          target="_blank"
          className={ styles.link }
          rel="noreferrer"
        >
          <IoIosGlobe />
          Site
        </a>
        <a
          href="https://github.com/mtssantos96/project-trybetunes"
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
