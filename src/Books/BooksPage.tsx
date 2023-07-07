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

const func = async () => {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello from Promise');
    }, 2000);
  });

  const prom2 = new Promise((resolve, reject) =>{
    setInterval(() => {
      resolve('Hello from Promise 2');
    },5000);
  });

  console.log((await Promise.all([prom, prom2])));
};

//func();