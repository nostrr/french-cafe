import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import React from 'react';

export const Footer = () => {
  return (
    <div className={styles.backgroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.col1}>
          <Link to='/'><img src={logo} className='App-logo' alt='logo' /></Link>
        </div>
        <div className={styles.col2}>
          E-mail:<br/>
          Телефон:
        </div>
        <div className={styles.col3}>
          <div>Про нас</div>
          <div>Наші курси</div>
          <div>Наші продукти</div>
          <div>Команда</div>
        </div>
      </div>
    </div>
  );
};