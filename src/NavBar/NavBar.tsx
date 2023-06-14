import React from 'react';
import styles from './NavBar.module.css'
import { FormButton } from '../main/FormButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
export const NavBar = () => {

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarItem}><Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link></div>
      <div className={styles.navBarItem}></div>
      <div className={styles.navBarItem}><Link className={styles.linkStyle} to='AboutUs'>Про нас</Link> </div>
      <div className={styles.navBarItem}><Link className={styles.linkStyle} to='OurCourses'>Наші курси</Link></div>
      <div className={styles.navBarItem}><Link className={styles.linkStyle} to='OurProducs'>Наші продукти</Link></div>
      <div className={styles.navBarItem}><Link className={styles.linkStyle} to='Team'>Команда</Link></div>
      <div className={styles.navBarItem}></div>
      <div className={styles.navBarItem}><FormButton/></div>
    </div>
  );
};

<div>
  Name
</div>