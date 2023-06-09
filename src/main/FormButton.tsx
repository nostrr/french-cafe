import React, {Dispatch, useState} from "react";
import styles from './FormButton.module.css'
import {useDispatch} from "react-redux";
import {sendEmail} from "../redux/main.thunk";
import {emailBody} from "../email/emailBody";

interface FormData{
    name: string;
    phone: string;
    email: string;
    message?: string;
}

export const FormButton = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const[formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
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
            message: ''
        })
    };

    return (
        <div>
            <button className='button' onClick={handleButtonClick}>Напишіть нам</button>

            {showForm && (
                <div className={styles.formContainer}>
                    <div className={styles.formBackground} onClick={() => setShowForm(false)}></div>
                    <div className={styles.formWindow}>
                        <form className={styles.form} onSubmit={handleFormSubmit}>
                            <input type="text" value={formData.name} name="name" placeholder="Ім'я" onChange={handleInputChange}/>
                            <input type="text" value={formData.phone} name="phone" placeholder="Номер телефону" onChange={handleInputChange}/>
                            <input type="email" value={formData.email} name="email" placeholder="Email" onChange={handleInputChange}/>
                            <textarea value={formData.message} name="message" placeholder="Повідомлення" onChange={handleInputChange}></textarea>
                            <button className={`button ${styles.buttonInLine}`} type="submit">Відправити</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};