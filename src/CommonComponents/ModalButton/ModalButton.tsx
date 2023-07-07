import React, { FC } from 'react';
import styles from './ModalButton.module.scss';
import 'react-phone-input-2/lib/high-res.css';


export const ModalButton: FC<any> = ({ children, showModal, setShowModalFunction }) => {
  const handleButtonClick = () => {
    setShowModalFunction(true);
  };

  const buttonElement = React.cloneElement(children[0],
    { onClick: handleButtonClick });

  const modalWindow = React.cloneElement(children[1],
    { setShowModal: (flag: boolean) => setShowModalFunction(flag) });

  return (
    <div>
      {buttonElement}
      {showModal && (
        <div className={styles.formContainer}>
          <div className={styles.formBackground} onClick={() => setShowModalFunction(false)}></div>
          <div className={styles.formWindow}>
            {modalWindow}
          </div>
        </div>
      )}
    </div>
  );
};





