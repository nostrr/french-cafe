import styles from './WeAreTrusted.module.scss';
import photo from './img.png'

export const WeAreTrusted = () => {
  return (
    <div className={styles.backgroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={`${styles.col} ${styles.col1} ${styles.title}`}>
          Нам довіряють
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <div className={styles.firstRow}>
            Дякую за такий чудовий та інтенсивний курс,
            хороший фітбек та підтримку! Уся наша
            група зробила великий крок вперед до мрії
            розмовляти французькою мовою.<br/>
            Merci Beaucoup!
          </div>
          <div className={styles.secondRow}>
              <div>
                <img src={photo} alt='Image' />
              </div>
              <div className={styles.commentPerson}>
                Надія,<br/>
                Студентка курсу B1
              </div>
          </div>
          <div className={styles.thirdRow}>
            Відгуки&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};