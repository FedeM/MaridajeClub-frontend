import style from './Filter.module.css'
import Image from 'next/image'

const FilterDesktop = ({name}) => {
    //Función para aplicar los filtros
    const applyFilter =(e)=>{
        
    }

    return (
        <div className={style.filter}>
            <div className={style.content_box}>
                <div className={style.filter_title}>
                    <h3>Filtrar</h3>
                    <h4>{name}</h4>
                </div>
                <div className={style.filter_container}>
                    <div className={style.filter_search}>
                        <input type="search" placeholder='Buscar Bebida, bodega, tipo'/>
                        <div className={style.img}>
                            <Image className='non-select' draggable="false" src="/assets/img/icon/loupe.png" alt="Botón buscar, search button" width={"18"} height={"18"}/>
                        </div>
                    </div>
                    {/* <div className={style.filter_select}>
                        <select name="filter" id="" onChange={(e)=> applyFilter(e)}>
                            <option value="0">Más vendidos</option>
                            <option value="1">Más caro</option>
                            <option value="2">Más barato</option>
                        </select>
                    </div>
                    <div className="style.filterDiv"><p>Filtro 1</p><input type="checkbox" /></div>
                    <div className="style.filterDiv"><p>Filtro 2</p><input type="checkbox" /></div>
                    <div className="style.filterDiv"><p>Filtro 3</p><input type="checkbox" /></div>
                    <div className="style.filterDiv"><p>Filtro 4</p><i className="fas fa-chevron-down"></i></div>
                    <div className="style.filterDiv"><p>Filtro 5</p><i className="fas fa-chevron-down"></i></div> */}
                </div>
            </div>
        </div>
    );
};

export default FilterDesktop;