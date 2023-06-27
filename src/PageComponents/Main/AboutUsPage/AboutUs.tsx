import styles from './AboutUs.module.scss';
import { Link } from 'react-router-dom';
import photo from './img.png';
import photo2 from './img2.png';
import { TopicContent } from '../../../CommonComponents/TopicContent/TopicContent';

export const AboutUs = () => {
  return (
    <div className={styles.pageImage}>
      <div className={styles.mainContainer}>
        <div className={`${styles.col} ${styles.col1}`}>
          <TopicContent topic='Твоє затишне French.café'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </TopicContent>
          <div className='button'>
            <Link className={styles.linkStyle} to='/Team'>Більше про команду</Link>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <img className={styles.middlePhoto} src={photo} alt='Image' />
        </div>
        <div className={`${styles.col} ${styles.col3}`}>
          <img className={styles.rightPhoto} src={photo2} alt='Image' />
          <div className={styles.aboutUsTitle}>
            Про нас&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
};

