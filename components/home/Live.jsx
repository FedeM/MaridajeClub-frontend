import styles from '../../styles/home/Live.module.css'
import ScrollDown from '../assets/scrollDown/ScrollDown';
import Slider from './Slider';


const Live = ({data, id}) => {

    const handleCategory = (e)=>{
        const live_categories = document.getElementById('live_category').childNodes
        for (let i = 0; i < live_categories.length; i++) {
            live_categories[i].classList.remove(`${styles.live_category_activate}`)
        }
        //Le agregamos la clase al elemento
        e.classList.add(`${styles.live_category_activate}`)
    }

    return (
        <section className={styles.live_section} id={id}>
            <div className={styles.live_title}>
                <h3>Transmisiones</h3>
            </div>
            <div className={`${styles.live_category}`} id="live_category">
                <p onClick={(e)=> handleCategory(e.target)} className={ `${styles.live_category_activate}`}>Por comenzar</p>
                <p onClick={(e)=> handleCategory(e.target)}>Archivo</p>
            </div>
            <div className={styles.live_slider_container}>
                <Slider
                    lives={data}
                />
            </div>
            <ScrollDown/>
        </section>
    );
};

export default Live;

