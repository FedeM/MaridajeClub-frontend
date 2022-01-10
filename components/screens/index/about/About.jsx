import styles from '../../../../styles/screens/index/about/About.module.css'
import Image from 'next/image';
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
                    <div className={`${styles.about_text_container_text} wow animate__animated animate__fadeIn`}>
                        <h3>Live Streaming & eCommerce</h3>
                        <p>Viví la única experiencia <span> Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                    </div>
                </div>
                <div className={styles.about_img_container}>
                    <Image
                        className={styles.about_img_container_img}
                        src="/assets/img/about/alcohol.png"
                        layout="fill"
                        alt='Botellas de alcohol, alcohol bottle'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;