import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { BiLoaderAlt } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';

import styles from './style.module.css';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isLoading: false,
      isSent: false,
      isError: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    this.setState({ isLoading: true });

    const emailjsParams = {
      service_id: 'service_qg8frq4',
      template_id: 'template_b4ovk0m',
      user_id: 'T6INK0DokyA7Bw2oj',
      template_params: {
        from_name: name,
        reply_to: email,
        message,
      },
    };

    emailjs
      .send(
        emailjsParams.service_id,
        emailjsParams.template_id,
        emailjsParams.template_params,
        emailjsParams.user_id,
      )
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);

        this.setState({ isSent: true, isLoading: false });
        const time = 3000;

        setTimeout(() => {
          this.setState({
            name: '',
            email: '',
            message: '',
            isSent: false,
          });
        }, time);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);

        this.setState({ isError: true, isLoading: false });
      });
  };

  render() {
    const { name, email, message, isLoading, isSent, isError } = this.state;

    let buttonText;
    if (isLoading) {
      buttonText = <BiLoaderAlt className={ styles.rotate } />;
    } else if (isSent) {
      buttonText = <IoIosCheckmarkCircleOutline />;
    } else if (isError) {
      buttonText = <IoIosCloseCircleOutline />;
    } else {
      buttonText = 'Enviar';
    }

    let buttonClassName;
    if (isLoading) {
      buttonClassName = styles.buttonLoading;
    } if (isSent) {
      buttonClassName = styles.buttonSucess;
    } else if (isError) {
      buttonClassName = styles.buttonFail;
    }

    return (
      <section>
        <Header />
        <div className={ styles.contact }>
          <h2>Entre em contato</h2>
          <form className={ styles.contactForm } onSubmit={ this.handleSubmit }>
            <label className={ styles.label } htmlFor="name">
              <span className={ styles.span }>Nome</span>
              <input
                className={ styles.input }
                id="name"
                onChange={ this.handleChange }
                name="name"
                required
                value={ name }
                type="text"
              />
            </label>
            <label className={ styles.label } htmlFor="email">
              <span className={ styles.span }>E-mail</span>
              <input
                className={ styles.input }
                id="email"
                name="email"
                onChange={ this.handleChange }
                required
                value={ email }
                type="email"
              />
            </label>
            <label className={ styles.label } htmlFor="message">
              <span className={ styles.span }>Mensagem</span>
              <textarea
                className={ styles.input }
                id="message"
                name="message"
                onChange={ this.handleChange }
                required
                value={ message }
              />
            </label>
            <button
              type="submit"
              className={ `${styles.button} ${buttonClassName}` }
              disabled={ isLoading }
            >
              { buttonText }
            </button>
          </form>
          <Contact />
        </div>
        <Footer />
      </section>
    );
  }
}
