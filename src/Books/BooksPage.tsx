import s from './books.module.css';

export const BooksPage = () => {
  return (
    <div className={s.flexСontainer}>

        <div className={`${s.flexItem} ${s.item2} `}>
          1
        </div>
        <div className={`${s.flexItem} ${s.item3}`}>
          2
        </div>
      </div>
  );
};