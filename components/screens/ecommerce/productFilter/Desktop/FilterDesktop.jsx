import style from '../../../../../styles/screens/ecommerce/productFilter/Desktop/Filter.module.css'

const FilterDesktop = () => {
    return (
        <div className={style.filter}>
            <div className={style.content_box}>
                <div className={style.filter_title}>
                    <h3>Filtrar</h3>
                </div>
                <div className={style.filter_container}>
                    <div className={style.filter_search}>
                        <img className='non-select' draggable="false" src="/assets/img/icon/loupe.png" alt="" />
                        <input type="search" placeholder='Buscar Bebida, bodega, tipo'/>
                    </div>
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

export default FilterDesktop;