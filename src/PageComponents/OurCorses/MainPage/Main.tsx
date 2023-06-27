import styles from './Main.module.scss'
import { FC } from 'react';

interface IMainProps{
  title: string,
  info?:string
}

export const Main:FC<IMainProps> = ({title, info}) => {
  return(
    <div className={styles.mainContainer}>
          <div className={styles.mainContainer__mainTitle}>
            {title}
          </div>
          <div className={styles.mainContainer__info}>
            {info}
          </div>
    </div>
  )
}