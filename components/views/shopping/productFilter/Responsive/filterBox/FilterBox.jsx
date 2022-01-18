import style from './FilterBox.module.css'

const FilterBox = ({callbackClose}) => {
    return (
        <div className={style.filter_container}>
            <div className={style.close}>
                <i className="fas fa-times" onClick={()=> callbackClose(false)}></i>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Filtrar por</h3>
                </div>
                <div className={style.filters}>
                    <div><p>Filtro 1</p><input type="checkbox" /></div>
                    <div><p>Filtro 2</p><input type="checkbox" /></div>
                    <div><p>Filtro 3</p><input type="checkbox" /></div>
                    <div><p>Filtro 4</p><i className="fas fa-chevron-down"></i></div>
                    <div><p>Filtro 5</p><i className="fas fa-chevron-down"></i></div>
                </div>
            </div>
        </div>
    );
};

export default FilterBox;