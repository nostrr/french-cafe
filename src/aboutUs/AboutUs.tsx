import styles from './AboutUs.module.css';
import { Link } from 'react-router-dom';
import foto from './img.png';

export const AboutUs = () => {
  return (
    <div className={styles.pageImage}>
      <div className={styles.mainContainer}>
        <div className={`${styles.col} ${styles.col1}`}>
          <div className={styles.topic}>
            Твоє затишне <br />
            French.café
          </div>
          <div className={styles.textContent}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </div>
          <div className='button'>
            <Link className={styles.linkStyle} to='/Team'>Більше про команду</Link>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <img className={styles.middlePhoto} src={foto} alt='Image' />
        </div>
        <div className={`${styles.col} ${styles.col3}`}>
          <div>
              Картинка
          </div>
          <div>
            Про нас
          </div>
        </div>
      </div>
    </div>
  );
};