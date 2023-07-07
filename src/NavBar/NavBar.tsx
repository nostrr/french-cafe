import React, { Dispatch, useState } from 'react';
import styles from './NavBar.module.scss';
import { ModalButton } from '../CommonComponents/ModalButton/ModalButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { SendForm } from '../CommonComponents/SendForm/SendForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setShowModalForm, setShowModalMenu } from '../redux/main.reducer';

export const NavBar = () => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoItem}>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </div>
      <div className={styles.menu}>
        <div>
          <Link className={styles.linkStyle} to='/'>
            Про нас
          </Link>
        </div>
        <div>
          <Link className={styles.linkStyle} to='OurCourses'>
            Наші курси
          </Link>
        </div>
        <div>
          <Link className={styles.linkStyle} to='OurProducts'>
            Наші продукти
          </Link>
        </div>
        <div>
          <Link className={styles.linkStyle} to='Team'>
            Команда
          </Link>
        </div>
        <div>
          <ModalButton showModal={useSelector((state: RootState) => state.main.showModalForm)}
                       setShowModalFunction={(flag: boolean) => dispatch(setShowModalForm(flag))}>
            <button className='button'>Напишіть нам</button>
            <SendForm />
          </ModalButton>
        </div>
      </div>
      <ModalMenu />
    </div>
  );
};

const ModalMenu = () => {
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <ModalButton showModal={useSelector((state: RootState) => state.main.showModalMenu)}
                 setShowModalFunction={(flag: boolean) => dispatch(setShowModalMenu(flag))}>
      <div className={styles.burgerIcon}
      >
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </div>
      <div className={styles.modalMenu}>
        <Link className={styles.modalLinkStyle} onClick={() => dispatch(setShowModalMenu(false))} to='/'>
          Про нас
        </Link>
        <Link className={styles.modalLinkStyle} to='OurCourses'>
          Наші курси
        </Link>
        <Link className={styles.modalLinkStyle} to='OurProducts'>
          Наші продукти
        </Link>
        <Link className={styles.modalLinkStyle} to='Team'>
          Команда
        </Link>
      </div>
    </ModalButton>
  );
};