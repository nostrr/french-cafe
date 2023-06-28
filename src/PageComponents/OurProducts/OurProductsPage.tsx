import styles from './OurProductsPage.module.scss';
import { Main } from '../../CommonComponents/MainHeaderTamplate/Main';
import { ContentElement } from '../../CommonComponents/ContentElement/ContentElement';
import photo1 from './img1.png';
import photo2 from './img2.png';
import photo3 from './img3.png';
import photo4 from './img4.png';

export const OurProductsPage = () => {
  return (
    <>
      <Main title='Наші продукти'
            info='Тут ви можете ознайомитись із додатковими матеріалами,
              які French.Café дбайливо готує, аби ви іще більше закохались у французьку мову' />
      <div className={styles.contentElement}>
        <ContentElement photo={photo1}
                        smallTitle='сезонний проект'
                        largeTitle='Сahier de vacances'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. enim ad minim veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Купити'
        />
      </div>
      <div className={styles.contentElement}>
        <ContentElement photo={photo2}
                        smallTitle='Кіно'
                        largeTitle='Les Intouchables'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. enim ad minim veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Купити'
        />
      </div>
      <div className={styles.contentElement}>
        <ContentElement photo={photo3}
                        smallTitle='Кіно'
                        largeTitle='Le Petit Nicolas'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. enim ad minim veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Купити'
        />
      </div>
      <div className={styles.contentElement}>
        <ContentElement photo={photo4}
                        smallTitle='Кіно'
                        largeTitle='d’Amélie Poulain'
                        descriptions='"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. enim ad minim veniam, quis nostrud exercitation.'
                        list={['"Lorem ipsum dolor sit amet, consectetur adipiscing',
                          'elit, sed do eiusmod tempor incididunt ut labore',
                          'et dolore magna aliqua. enim ad minim veniam, ']}
                        textButton='Купити'
        />
      </div>
    </>
  );
};