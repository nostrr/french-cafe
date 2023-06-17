import styles from './WeProud.module.scss';
export const WeProud = () => {
  return(
      <div className={styles.backroundColorContainer}>
          <div className={styles.mainContainer}>
            <div className={`${styles.col}`}>
              <div></div>
              <div></div>
            </div>
            <div className={`${styles.col}`}>
            </div>
            <div className={`${styles.col}`}></div>
          </div>
      </div>
  );
}