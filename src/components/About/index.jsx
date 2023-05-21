import React from 'react';
import styles from './style.module.css';

export default function About() {
  return (
    <section id="about" className={ styles.about }>
      <div className={ styles.aboutContent }>
        <h2>Quem sou eu</h2>
        <br />
        <p>
          Me chamo Matheus, acabei de me formar em Desenvolvimento Web pela escola
          de tecnologia
          {' '}
          <b>Trybe</b>
          . Tenho como vocação o Front-End, sou uma pessoa muito ligada a arte, a
          criação, uma pessoa muito curiosa, que ama descobrir o porquê das coisas, como
          tudo funciona.
        </p>
      </div>
    </section>
  );
}
