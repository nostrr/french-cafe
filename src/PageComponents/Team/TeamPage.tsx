import styles from './TeamPage.module.scss';
import { Main } from '../../CommonComponents/MainHeaderTamplate/Main';
import photo1 from './img1.png';
import photo2 from './img2.png';
import photo3 from './img3.png';
import photo4 from './img4.png';
import photo5 from './img5.png';

export const TeamPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Main title='Команда French.Café'
            info='Наша команда це талановиті викладачі, які створять для вас комфортну
та цікаву атмосферу на шляху вашого вивчення французької мови.' />
      <div className={`${styles.mainContainer__row} ${styles.row}`}>
        <div className={`${styles.row__col1} ${styles.col1}`}>
          <div className={styles.col1__title}>
            Викладач рівнів
          </div>
          <div className={styles.col1__teacherName}>
            Марія Бажина
          </div>
          <div className={styles.col1__intro}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className={styles.col1__button}>
            <button className='button'>
              Записатись на заняття
            </button>
          </div>
        </div>
        <div className={`${styles.row__col2} ${styles.col2}`}>
          <img className={styles.col2__photo1} src={photo1} alt='MariaBazhina' />
        </div>
        <div className={`${styles.row__col3} ${styles.col3}`}>
          <img className={styles.col3__photo2} src={photo2} alt='MariaBazhina' />
        </div>
      </div>
      <div className={`${styles.mainContainer__row} ${styles.row}`}>
        <div className={`${styles.row__col1} ${styles.col1}`}>
          <div className={styles.col1__title}>
            Викладач рівнів
          </div>
          <div className={styles.col1__teacherName}>
            Марія Бажина
          </div>
          <div className={styles.col1__intro}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className={styles.col1__button}>
            <button className='button'>
              Записатись на заняття
            </button>
          </div>
        </div>
        <div className={`${styles.row__col1} ${styles.col1}`}>
          <div className={`${styles.col1__intro} ${styles.col1__intro_secondRow}`}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={`${styles.row__col3} ${styles.col3}`}>
            <img className={styles.col3__photo3_secondRow} src={photo3} alt='photo3'/>
        </div>
      </div>
      <div className={`${styles.mainContainer__row} ${styles.row}`}>
        <div className={`${styles.row__col1} ${styles.col1}`}>
          <div className={styles.col1__title}>
            Викладач рівнів
          </div>
          <div className={styles.col1__teacherName}>
            Марія Бажина
          </div>
          <div className={styles.col1__intro}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className={styles.col1__button}>
            <button className='button'>
              Записатись на заняття
            </button>
          </div>
        </div>
        <div className={`${styles.row__col2} ${styles.col2__row3}`}>
          <img className={styles.col2__row3_photo4} src={photo4} alt='MariaBazhina' />
        </div>
        <div className={`${styles.row__col3} ${styles.col3__row3}`}>
          <img className={styles.col3__photo2_photo5} src={photo5} alt='MariaBazhina' />
        </div>
      </div>
    </div>
  );
};