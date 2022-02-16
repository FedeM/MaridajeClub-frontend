import { useState } from 'react';
import style from './FilterResponsive.module.css'
import Image from 'next/image'
import SortBox from './sortBox/SortBox';
import FilterBox from './filterBox/FilterBox';

const FilterResponsive = () => {
    const [sortActivate, setSortActivate] = useState(false)
    const [filterActivate, setFilterActivate] = useState(false)

    const sortBox = ()=>{
        return sortActivate && (
            <SortBox
                callbackClose={()=>setSortActivate(false)}
            />
        )
    }

    const filterBox = ()=>{
        return filterActivate && (
            <FilterBox
                callbackClose={()=>setFilterActivate(false)}
            />
        )
    }

    return (
        <>
            <div className={style.filter_search}>
                <input type="search" placeholder='Buscar Bebida, bodega, tipo'/>
                <div className={style.img}>
                    <Image className='non-select' draggable="false" src="/assets/img/icon/loupe.png" alt="Botón buscar, search button" width={"18"} height={"18"}/>
                </div>
            </div>
            {/* <div className={style.container}>
                <div className={style.side} onClick={()=> setSortActivate(true)}><Image src="/assets/img/icon/sort.png" alt="icon order, icono ordenar" width={'18px'} height={'18px'}/><span>Ordenar</span></div>
                <div className={style.side} onClick={()=> setFilterActivate(true)}><Image src="/assets/img/icon/filter.png" alt="icon filter, icono filtrar" width={'18px'} height={'18px'}/><span>Filtrar</span></div>
            </div> */}
            {sortBox()}
            {filterBox()}
        </>
    );
};

export default FilterResponsive;