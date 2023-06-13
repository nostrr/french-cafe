import React, { Dispatch, useEffect, useState } from 'react';
import styles from './FormButton.module.css';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../redux/main.thunk';
import { emailBody } from '../email/emailBody';
import { formValidation } from './formValidation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

interface ValidForm {
  email: boolean;
  name: boolean;
  phone: boolean;
  message: boolean,
  validFields: boolean;
}

export const FormButton = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [validData, setValidData] = useState<ValidForm>({
    email: false,
    name: false,
    phone: false,
    message:true,
    validFields: false,
  });

  useEffect(() => {
    validAllFields();
  }, [validData.email, validData.name, validData.phone]);

  const validAllFields = () => {
    if (validData.name && (validData.phone || validData.email))
      setValidData({ ...validData, validFields: true });
    else
      setValidData({...validData, validFields: false})
  };

  const handleInputChange = (event: any) => {
    const { name, value }: { name: string, value: string } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setValidData((prevValidData) => ({
      ...prevValidData,
      [name]: formValidation[name](value),
    }));
  };
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    dispatch(sendEmail(emailBody(formData)));
    setShowForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
    setValidData({
      name: false,
      phone: false,
      email: false,
      message: true,
      validFields: false
    });
  };

  return (
    <div>
      <button className='button' onClick={handleButtonClick}>Напишіть нам</button>

      {showForm && (
        <div className={styles.formContainer}>
          <div className={styles.formBackground} onClick={() => setShowForm(false)}></div>
          <div className={styles.formWindow}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <label hidden={validData.name} className={styles.validateLabel}>Ім'я повинно бути не менш ніж 2 символи.</label>
              <input type='text' value={formData.name} name='name' placeholder="Ім'я" onChange={handleInputChange} />
              <label hidden={validData.phone} className={styles.validateLabel}>Цифрове значення(не меньше 10 символів).</label>
              <input type='text' value={formData.phone} name='phone' placeholder='Номер телефону'
                     onChange={handleInputChange} />
              <label hidden={validData.email} className={styles.validateLabel}>Введіть корректне значення приклад name@gmail.com.</label>
              <input type='email' value={formData.email} name='email' placeholder='Email'
                     onChange={handleInputChange} />
              <textarea value={formData.message} name='message' placeholder='Повідомлення'
                        onChange={handleInputChange}></textarea>
              <button className={`button ${styles.buttonInLine}`} disabled={!validData.validFields}
                      type='submit'>Відправити
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};