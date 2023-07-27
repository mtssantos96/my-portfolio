import React from 'react';
import { IoIosCode, IoIosGlobe } from 'react-icons/io';
import styles from './style.module.css';
import projectsData from './projectsData';

export default function ProjectsSection() {
  return (
    <section id="projects" className={ styles.projectsContainer }>
      <h2>Meus Projetos</h2>
      <p>
        Os projetos abaixo foram desenvolvidos como forma
        de aprendizado no curso de Desenvolvimento Web da
        {' '}
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
          <strong>Trybe</strong>
        </a>
      </p>
      <div className={ styles.projects }>
        {projectsData.map((project, index) => (
          <div className={ styles.projectCard } key={ index }>
            <a href={ project.image } target="_blank" rel="noopener noreferrer">
              <img
                src={ project.image }
                alt={ project.title }
                className={ styles.image }
              />
            </a>
            <h2 className={ styles.title }>{project.title}</h2>
            <p className={ styles.description }>{project.description}</p>
            <h3>Tecnologias utilizadas:</h3>
            <div className={ styles.tech }>
              { project.techs
                .map((tech, i) => (
                  <img
                    src={ tech }
                    key={ i }
                    alt={ `Tech ${index}` }
                    className={ styles.techIcon }
                  />)) }
            </div>
            <div className={ styles.projectLinks }>
              <IoIosGlobe />
              <a
                href={ project.siteLink }
                target="_blank"
                className={ styles.link }
                rel="noreferrer"
              >
                Site
              </a>
              <IoIosCode />
              <a
                href={ project.codeLink }
                target="_blank"
                className={ styles.link }
                rel="noreferrer"
              >
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
