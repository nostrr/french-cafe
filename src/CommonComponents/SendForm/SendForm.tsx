import React, { Dispatch, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../redux/main.thunk';
import { emailBody } from '../../email/emailBody';
import { formValidation } from '../ModalButton/formValidation';
import PhoneInput from 'react-phone-input-2';
import styles from './SendForm.module.scss';

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

const inputStyles = {
  width: '100%',
  height: '3vh',
  fontSize: '1.5vmin',
  borderRadius: '20px',
  background: '#F3EDED'
};
const containerStyles = { marginBottom: '4%' };
export const SendForm: FC<any> = ({ setShowForm }) => {
  const dispatch: Dispatch<any> = useDispatch();
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
    message: true,
    validFields: false,
  });

  useEffect(() => {
    validAllFields();
  }, [validData.email, validData.name, validData.phone]);

  const validAllFields = () => {
    if (validData.name && (validData.phone || validData.email))
      setValidData({ ...validData, validFields: true });
    else
      setValidData({ ...validData, validFields: false });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    dispatch(sendEmail(emailBody(formData)));

    if (typeof setShowForm === 'function')
      setShowForm(false);

    setFormData({
      name: '',
      phone: '+380',
      email: '',
      message: '',
    });
    setValidData({
      name: false,
      phone: false,
      email: false,
      message: true,
      validFields: false,
    });
  };

  const handleInputChange = (event: any) => {
    if (event.type == 'click') {
      return;
    }
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


  return (
    <div className={styles.formWindow}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.validateLabel}>
          Прізвище та ім’я {validData.name ? '' : ' (Повинно бути не менш ніж 2  символи)'}
        </label>
        <input type='text' value={formData.name} name='name' placeholder='Напишіть своє прізвище та ім’я'
               onChange={handleInputChange} />
        <label className={styles.validateLabel}>
          Ваш e-mail {validData.email ? '' : ' (Формат name@gmail.com)'}
        </label>
        <input type='email' value={formData.email} name='email' placeholder='Email'
               onChange={handleInputChange} />
        <label className={styles.validateLabel}>
          Ваш номер телефону {validData.phone ? '' : ' (не меньше 10 символів)'}
        </label>
        <PhoneInput
          inputStyle={inputStyles}
          containerStyle={containerStyles}
          onChange={
            (value, data, event, formattedValue) =>
              handleInputChange(event)
          }
          value={formData.phone}
          country={'ua'}
          inputProps={{
            name: 'phone',
          }}
        />
        <textarea value={formData.message} name='message' placeholder='Повідомлення'
                  onChange={handleInputChange}></textarea>
        <button className={`button ${styles.buttonInLine} ${styles.button}`} disabled={!validData.validFields}
                type='submit'>
          Відправити
        </button>
      </form>
    </div>
  );

};