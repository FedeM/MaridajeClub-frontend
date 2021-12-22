import styles from '../../../../styles/screens/index/about/About.module.css'
import Image from 'next/image';
import {
    Link as LinkScroll
} from 'react-scroll'
import { isDesktop } from 'react-device-detect';
// import ScrollDown from '../assets/scrollDown/ScrollDown'
import { useEffect, useState } from 'react';


const About = ({id}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={styles.about_section}>
            <div className={styles.about_container}>
                <div className={styles.about_text_container}>
                    <div className={styles.about_text_container_text}>
                        <h3>Live Streaming & eCommerce</h3>
                        <p>Viví la única experiencia <span> Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                    </div>
                    {/* <div>
                        <LinkScroll className={styles.about_btn} to="home" spy={true}>Eventos</LinkScroll>
                        <LinkScroll className={styles.about_btn} to="commerce" spy={true}>Comprar</LinkScroll>
                    </div> */}
                </div>
                <div className={styles.about_img_container}>
                    <Image
                        className={styles.about_img_container_img}
                        src="/assets/img/about/alcohol.png"
                        layout="fill"
                        priority
                    />
                </div>
                {/* <div className={styles.about_svg_background}>
                    <img
                        className={styles.about_svg_background_svg}
                        src={isDesktop ?("/assets/svg/about/background2.svg"):("/assets/svg/about/background.svg")}
                        layout="fill"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default About;