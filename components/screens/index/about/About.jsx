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
                </div>
                <div className={styles.about_img_container}>
                    <img
                        className={styles.about_img_container_img}
                        src="/assets/img/about/alcohol.png"
                        layout="fill"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;