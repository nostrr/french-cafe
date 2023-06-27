import styles from './WriteToUs.module.scss';
import { SendForm } from '../../../CommonComponents/SendForm/SendForm';
import photo from './img.png';

export const WriteToUs = () => {
  return (
    <div className={styles.backgroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={`${styles.col} ${styles.col1}`}>
          <img className={`${styles.photo}`} src={photo} />
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <div className={styles.questions}>
            Залишились ще питання?
          </div>
          <SendForm />
        </div>
      </div>
    </div>
  );
};