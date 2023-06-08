import s from './books.module.css'
export const BooksPage = () => {
    return (
        <div className={s.flexСontainer}>
            <div className={`${s.flexItem} ${s.item1}`}>1</div>
            <div className={`${s.flexItem} ${s.item2}`}>2
                {/*<div className={`${s.item1} ${s.flexItem}`}>1</div>*/}
                {/*<div className={`${s.item2} ${s.flexItem}`}>2</div>*/}
            </div>
            <div className={`${s.flexItem} ${s.item3}`}>3</div>
            <div className={`${s.flexItem} ${s.item4}`}>4</div>
            <div className={`${s.flexItem} ${s.item5}`}>5</div>
            <div className={`${s.flexItem} ${s.item6}`}>6</div>
            <div className={`${s.flexItem} ${s.item7}`}>7</div>
            <div className={`${s.flexItem} ${s.item8}`}>8</div>
        </div>
    );
}