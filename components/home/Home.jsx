import styles from '../../styles/home/Home.module.css'
import Image from 'next/image';
import {
    Link as LinkScroll
} from 'react-scroll'
import { isDesktop } from 'react-device-detect';
import ScrollDown from '../assets/scrollDown/ScrollDown'
import { useEffect, useState } from 'react';


const Home = ({id}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <div id={id} className={styles.home_section}>
            <div className={styles.home_container}>
                <div className={styles.home_text_container}>
                    <div className={styles.home_text_container_text}>
                        <h3>Live Streaming & eCommerce</h3>
                        <p>Viví la única experiencia <span> Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                    </div>
                    <div>
                        <LinkScroll className={styles.home_btn} to="events" spy={true}>Eventos</LinkScroll>
                        <LinkScroll className={styles.home_btn} to="events" spy={true}>Comprar</LinkScroll>
                    </div>
                </div>
                <div className={styles.home_img_container}>
                    <Image
                        className={styles.home_img_container_img}
                        src="/assets/img/home/alcohol.png"
                        layout="fill"
                        priority
                    />
                </div>
                <div className={styles.home_svg_background}>
                    <img
                        className={styles.home_svg_background_svg}
                        src={isDesktop ?("/assets/svg/home/background2.svg"):("/assets/svg/home/background.svg")}
                        layout="fill"
                    />
                </div>
            </div>
            {/* <ScrollDown/> */}
        </div>
    );
};

export default Home;