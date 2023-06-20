import s from './books.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

export const BooksPage = () => {
  return (
    <div className={s.flexСontainer}>

      <div className={`${s.flexItem} ${s.item2} `}>
        <PhoneInput
          country={'ua'}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={`${s.flexItem} ${s.item3}`}>
        2
      </div>
    </div>
  );
};