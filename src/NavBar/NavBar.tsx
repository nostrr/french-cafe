import React from 'react';
import styles from './NavBar.module.scss';
import { ModalButton } from '../CommonComponents/ModalButton/ModalButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { OurProductsPage } from '../PageComponents/OurProducts/OurProductsPage';

export const NavBar = () => {

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoItem}>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </div>
      <div>
        <Link className={styles.linkStyle} to='/'>
          Про нас
        </Link>
      </div>
      <div>
        <Link className={styles.linkStyle} to='OurCoursesPage'>
          Наші курси
        </Link>
      </div>
      <div>
        <Link className={styles.linkStyle} to='OurProductsPage'>
          Наші продукти
        </Link>
      </div>
      <div>
        <Link className={styles.linkStyle} to='/'>
          Команда
        </Link>
      </div>
      <div>
        <ModalButton />
      </div>
    </div>
  );
};