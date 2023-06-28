import styles from './ContentElement.module.scss';
import React, { FC } from 'react';

interface IContentElementProps {
  photo: any,
  smallTitle: string,
  largeTitle: string,
  descriptions: string,
  list: string[],
  textButton: string
}

export const ContentElement: FC<IContentElementProps> = ({
                                                           list, descriptions, largeTitle,
                                                           smallTitle, textButton, photo,
                                                         }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainContainer__column1} ${styles.column1}`}>
        <img className={styles.column1__image} src={photo} alt='photo1' />
      </div>
      <div className={`${styles.mainContainer__column2} ${styles.column2}`}>
        <div className={styles.column2__smallTitle}>
          {smallTitle}
        </div>
        <div className={styles.column2__largeTitle}>
          {largeTitle}
        </div>
        <div className={styles.column2__descriptions}>
          {descriptions}
        </div>
        <div className={styles.column2__list}>
          <ul>
          {list.map((repo, index) => (
              <li key={index}>
                {repo}
              </li>
          ))}
          </ul>
        </div>
        <div className={styles.column2__button}>
          <button className={`button ${styles.column2__button_width}`}> {textButton}</button>
        </div>
      </div>
    </div>
  );
};