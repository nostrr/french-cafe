import React from 'react';
import styles from './NavBar.module.css';
import { ModalButton } from '../Main/ModalButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarItem}>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </div>
      <div className={styles.navBarItem}>

      </div>
      <div className={styles.navBarItem}>
        <Link className={styles.linkStyle} to='/'>
          Про нас
        </Link>
      </div>
      <div className={styles.navBarItem}>
        <Link className={styles.linkStyle} to='/'>
          Наші курси
        </Link>
      </div>
      <div className={styles.navBarItem}>
        <Link className={styles.linkStyle} to='/'>
          Наші продукти
        </Link>
      </div>
      <div className={styles.navBarItem}>
        <Link className={styles.linkStyle} to='/'>
          Команда
        </Link>
      </div>
      <div className={styles.navBarItem}>

      </div>
      <div className={styles.navBarItem}>
        <ModalButton />
      </div>
    </div>
  );
};