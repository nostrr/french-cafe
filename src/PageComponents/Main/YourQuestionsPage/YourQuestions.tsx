import styles from './YourQuestions.module.scss';

export const YourQuestions = () => {
  return (
    <div className={styles.backgroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={`${styles.row} ${styles.row1}`}>
          Нас питають:
        </div>
        <div className={`${styles.row} ${styles.row2}`}>
          <div className={styles.questString}>
            Як записатись на курс?
          </div>
          <div className={styles.contentText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={`${styles.row} ${styles.row3}`}>
          <div className={styles.questString}>
            Які формати занять
            ви пропонуєте?
          </div>
          <div className={styles.contentText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={`${styles.row} ${styles.row4}`}>
          <div className={styles.questString}>
            Який тип навчання кращий?
          </div>
          <div className={styles.contentText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={`${styles.row} ${styles.row5}`}>
          <div className={styles.questString}>
            Чи можу я подарувати рідним навчання у школі?
          </div>
          <div className={styles.contentText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className={styles.row6}>
          Часті<br/>
          питання &nbsp;&nbsp;&nbsp;<br/>
        </div>
      </div>
    </div>

  );
};