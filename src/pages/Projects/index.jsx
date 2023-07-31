import React, { Component } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';

import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import styles from './style.module.css';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    return () => {
      window.removeEventListener('scroll', this.handleScroll);
    };
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleScroll = () => {
    const twoHundred = 200;
    if (window.scrollY < twoHundred) {
      this.setState({ buttonDisabled: true });
    } else {
      this.setState({ buttonDisabled: false });
    }
  };

  render() {
    const { buttonDisabled } = this.state;
    return (
      <section>
        <Header />
        <div className={ styles.container }>

          <h2>Meus Projetos</h2>
          <Projects />
        </div>
        <button
          className={ styles.btnBackToTop }
          onClick={ this.scrollTop }
          type="button"
          disabled={ buttonDisabled }
        >
          <IoIosArrowDropup />
        </button>
        <Footer />
      </section>
    );
  }
}

export default ProjectsPage;
