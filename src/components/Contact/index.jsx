import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './style.module.css';

export default function Contact() {
  return (
    <div className={ styles.contactList }>
      <a
        href="https://www.linkedin.com/in/matheussantpsdev/"
        className={ styles.listLink }
        target="_blank"
        rel="noreferrer"
      >
        <div className={ styles.listItem }>
          <p>Linkedin</p>
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/mtssantos96"
        className={ styles.listLink }
        target="_blank"
        rel="noreferrer"
      >
        <div className={ styles.listItem }>
          <p>Github</p>
          <FaGithub />
        </div>
      </a>
    </div>
  );
}
