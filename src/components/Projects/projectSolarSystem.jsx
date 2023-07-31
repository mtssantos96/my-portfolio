import React from 'react';
import { IoIosCode, IoIosGlobe } from 'react-icons/io';
import solarSystem from '../../assets/solarSystem.gif';
import cssLogo from '../../assets/svg/css-3-logo.svg';
import htmlLogo from '../../assets/svg/html-5-logo.svg';
import jsLogo from '../../assets/svg/javascript-logo.svg';
import reactLogo from '../../assets/svg/react-logo.svg';
import reactIconsLogo from '../../assets/svg/react-icons-logo.svg';
import styles from './style.module.css';

export default function SolarSystem() {
  return (
    <div className={ styles.projectCard }>
      <h2 className={ styles.title }>Solar System</h2>
      <a href={ solarSystem } target="_blank" rel="noopener noreferrer">
        <img
          src={ solarSystem }
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
          <b>Solar System</b>
          {' '}
          é o meu primeiro projeto utilizando
          {' '}
          <b>React</b>
          ,
          se trata de uma aplicação que
          lista os planetas do sistema solar e algumas das missões espaciais
          mais conhecidas.
        </p>
        <p>
          Nesse projeto coloco em prática o que aprendi sobre utilizar
          {' '}
          <b>JSX</b>
          {' '}
          no
          {' '}
          <b>React</b>
          , utilizar
          corretamente o método
          {' '}
          <b>render()</b>
          {' '}
          para renderizar os componentes, utilizar
          {' '}
          <b>import</b>
          {' '}
          para
          trazer componentes em diferentes arquivos, criar componentes de classe em
          {' '}
          <b>React</b>
          , criar
          múltiplos componentes a partir de um array, fazer uso de
          {' '}
          <b>props</b>
          {' '}
          corretamente e fazer uso
          de
          {' '}
          <b>PropTypes</b>
          {' '}
          para validar as
          {' '}
          <b>props</b>
          {' '}
          de um componente.
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
          href="https://solar-system-mho.vercel.app/"
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
