import { useState } from 'react';
import style from '../../../../../styles/screens/ecommerce/productFilter/Responsive/FilterResponsive.module.css'

const ProductFilterResponsive = () => {
    const [sortActivate, setSortActivate] = useState(false)
    const [filterActivate, setFilterActivate] = useState(false)

    const sortBox = ()=>{
        return sortActivate && (
            <div className={style.filter_box}>
                <div className={style.filter_close}>
                    <i className="fas fa-times" onClick={()=> setSortActivate(false)}></i>
                </div>
                <div className={style.content_box}>
                    <div className={style.filter_title}>
                        <h3>Ordenar por</h3>
                    </div>
                    <div className={style.sort_container}>
                        <div><p>Más reciente</p></div>
                        <div><p>Mayor precio</p></div>
                        <div><p>Menor precio</p></div>
                    </div>
                </div>
            </div>
        )
    }

    const filterBox = ()=>{
        return filterActivate && (
            <div className={style.filter_box}>
                <div className={style.filter_close}>
                    <i className="fas fa-times" onClick={()=> setFilterActivate(false)}></i>
                </div>
                <div className={style.content_box}>
                    <div className={style.filter_title}>
                        <h3>Filtrar por</h3>
                    </div>
                    <div className={style.filter_container}>
                        <div><p>Filtro 1</p><input type="checkbox" /></div>
                        <div><p>Filtro 2</p><input type="checkbox" /></div>
                        <div><p>Filtro 3</p><input type="checkbox" /></div>
                        <div><p>Filtro 4</p><i className="fas fa-chevron-down"></i></div>
                        <div><p>Filtro 5</p><i className="fas fa-chevron-down"></i></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.side} onClick={()=> setSortActivate(true)}><img src="/assets/img/icon/sort.png" alt="" /><span>Ordenar</span></div>
                <div className={style.side} onClick={()=> setFilterActivate(true)}><img src="/assets/img/icon/filter.png" alt="" /><span>Filtrar</span></div>
            </div>
            {sortBox()}
            {filterBox()}
        </>
    );
};

export default ProductFilterResponsive;