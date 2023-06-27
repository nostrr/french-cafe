import React from 'react';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainBlock}>
        <div className={styles.mainString}>
          Атмосферно<br/>
          та естетично<br/>
          про французьку<br/>
        </div>
      </div>
    </div>
  );
};




