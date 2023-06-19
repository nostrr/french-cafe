import styles from './MyInstagram.module.scss';
import photo1 from './img1.png';
import photo2 from './img2.png';
import photo3 from './img3.png';
import photo4 from './img4.png';

export const MyInstagram = () => {
  return (
    <div className={styles.backgroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.firstRow}>
          <div className={styles.col1}>
            <div className={styles.title}>
              Ми в Instagram
            </div>
            <img className={styles.photo1} src={photo1} alt='Photo' />
          </div>
          <div className={styles.col2}>
            <img className={styles.photo2} src={photo2} alt='Photo' />
            <div className={styles.frenchCafe}>
              @the.french.cafe<br />
              <div className={styles.secondRow}>
                <a href='https://www.instagram.com/the.french.cafe?hl=ru'>Підписатись</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.col3}>
            <img className={styles.photo3} src={photo3} alt='Photo' />
          </div>
          <div className={styles.col4}>
            <img className={styles.photo4} src={photo4} alt='Photo' />
          </div>
        </div>
      </div>
    </div>
  );
};