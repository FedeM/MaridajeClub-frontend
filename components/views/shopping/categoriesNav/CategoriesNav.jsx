import style from './CategoriesNav.module.css'
import Image from 'next/image'

import Router from 'next/router'

const CategoriesNav = ({categories}) => {
    
    const moveScroll = (dir)=>{
        let scroll = document.getElementById('categoryTrack')

        if (dir) {
            scroll.scrollLeft += (scroll.scrollWidth / 3)
        }else{
            scroll.scrollLeft -= (scroll.scrollWidth / 3)
        }
    }
    
    return (
        <div className={style.categories_container}>
            <div className={style.categorieArrow} onClick={()=> moveScroll(false)}><i className="fas fa-chevron-left"></i></div>
            <div className={style.categorieTrack} id='categoryTrack'>
                {
                    categories.map((e,i)=>(
                        <div key={i} className={style.item} onClick={()=> Router.push(`/shopping?category=${e.name.toLowerCase()}`)}>
                            <Image src={e.image} width={'70%'} height={50} objectFit='contain' alt="Categoría icono"  draggable="false"/>
                            <p>{e.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className={style.categorieArrow} onClick={()=> moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
        </div>
    );
};

export default CategoriesNav;