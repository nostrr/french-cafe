import { Main } from './MainPage/Main';
import { ContentElement } from './ContentElement/ContentElement';
import photo from './img1.png';
import photo2 from './img2.png';
import photo3 from './img3.png';
import styles from './OurCoursesPage.module.scss';

export const OurCoursesPage = () => {
  return (
    <>
      <Main title='Наші курси' info='Тут знаходиться уся інформація щодо актуальних курсів, наборів та вартості  ' />
      <div className={styles.contentElement}>
        <ContentElement photo={photo}
                        smallTitle='Топ-курс'
                        largeTitle='Курс для початківців'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. enim ad minim veniam, quis nostrud exercitation.'
                        list={['Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam,',
                        ]} textButton='Записатись на курс' />
      </div>
      <div className={styles.contentElement}>
        <ContentElement photo={photo2}
                        smallTitle='Топ-курс'
                        largeTitle='Курс для початківців'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim
                         veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                        'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Записатись на курс'/>
      </div>
      <div className={styles.contentElement}>
        <ContentElement photo={photo3}
                        smallTitle='Топ-курс'
                        largeTitle='Курс для початківців'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim
                         veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Записатись на курс'/>
      </div>
    </>
  );
};