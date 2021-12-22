import style from '../../../../styles/screens/ecommerce/categoriesNav/CategoriesNav.module.css'

const CategoriesNav = () => {
    
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
                <div className={style.item}>
                    <img src="/assets/iconsCategory/all.png" alt="" />
                    <p>Todo</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/wine.png" alt="" />
                    <p>Vinos</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/liqueur.png" alt="" />
                    <p>Licor</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/beer.png" alt="" />
                    <p>Cervezas</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/whiskey.png" alt="" />
                    <p>Whisky</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/champagne.png" alt="" />
                    <p>Champagne</p>
                </div>
                <div className={style.item}>
                    <img src="/assets/iconsCategory/coffee.png" alt="" />
                    <p>Otros</p>
                </div>
            </div>
            <div className={style.categorieArrow} onClick={()=> moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
        </div>
    );
};

export default CategoriesNav;