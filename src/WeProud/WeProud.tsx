import styles from './WeProud.module.scss';
import { TopicContent } from '../CommonComponents/TopicContent';
import photo1 from './img.png';
import { Link } from 'react-router-dom';
import photo2 from './img2.png';

export const WeProud = () => {
  return (
    <div className={styles.backroundColorContainer}>
      <div className={styles.mainContainer}>
        <div className={`${styles.col} ${styles.col1}`}>
          <div className={styles.topic}>
            Ми пишаємось
          </div>
          <img className={styles.photo} src={photo1} />
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <TopicContent topic='+ 156 студентів' fontSize='2.77vw'>
            Більш ніж 156 осіб долучились до наших класів
            протягом останнього року. Число студентів,
            які продовжують свій навчальний шлях з нами,
            постійно зростає.
          </TopicContent>
          <TopicContent topic='5 Викладачів' fontSize='2.77vw'>
            Ми маємо чудову команду сертифікованих
            фахівців, які допомагають студентам розвиватись
            від початкових рівнів до поглибленого вичення
            французької.
          </TopicContent>
          <TopicContent topic='8 Проектів' fontSize='2.77vw'>
            Ми запустили і створили більш, ніж 8 курсів
            для різних цілей та рівнів. Ми постійно працюємо
            над технікою викладання та створюємо унікальні
            навчальні матеріали.
          </TopicContent>
          <Link className={`${styles.linkStyle} button`} to='/Team'>Дізнайтесь більше про навчання</Link>
        </div>
        <div className={`${styles.col} ${styles.col3}`}>
          <img className={styles.rightPhoto} src={photo2} alt='Image' />
          <div className={styles.aboutUsTitle}>
            Ми у<br/>
            цифрах<br/>
            __________
          </div>
        </div>
      </div>
    </div>
  );
};