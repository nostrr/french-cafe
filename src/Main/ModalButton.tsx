import React, { useState } from 'react';
import styles from './ModalButton.module.scss';
import 'react-phone-input-2/lib/high-res.css';
import { SendForm } from '../CommonComponents/SendForm/SendForm';


export const ModalButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button className='button' onClick={handleButtonClick}>Напишіть нам</button>
      {showForm && (
        <div className={styles.formContainer}>
          <div className={styles.formBackground} onClick={() => setShowForm(false)}></div>
          <div className={styles.formWindow}>
            <SendForm setShowForm={setShowForm} />
          </div>
        </div>
      )}
    </div>
  );
};


