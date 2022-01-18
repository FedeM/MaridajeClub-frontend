import style from './CategoriesNav.module.css'
import Image from 'next/image'

const CategoriesNav = ({setFilterBy, filterBy}) => {
    
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
                <div className={style.item} onClick={()=> setFilterBy({...filterBy, category: false})}>
                    <Image src="/assets/iconsCategory/all.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Todo</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 0})}>
                    <Image src="/assets/iconsCategory/wine.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Vinos</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 1})}>
                    <Image src="/assets/iconsCategory/liqueur.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Licor</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 2})}>
                    <Image src="/assets/iconsCategory/beer.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Cervezas</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 3})}>
                    <Image src="/assets/iconsCategory/whiskey.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Whisky</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 4})}>
                    <Image src="/assets/iconsCategory/champagne.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Champagne</p>
                </div>
                <div className={style.item} onClick={()=>setFilterBy({...filterBy, category: 5})}>
                    <Image src="/assets/iconsCategory/coffee.png" width={'70%'} height={50} objectFit='contain' alt="Categoría icono" />
                    <p>Otros</p>
                </div>
            </div>
            <div className={style.categorieArrow} onClick={()=> moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
        </div>
    );
};

export default CategoriesNav;