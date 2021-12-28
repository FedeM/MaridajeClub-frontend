import styles from '../../../../styles/screens/index/home/Home.module.css'
import { useEffect, useState } from 'react';
import LiveResponsive from '../events/Responsive/LiveResponsive'
import SliderResponsive from '../events/Responsive/SliderResponsive'
import LiveDesktop from '../events/Desktop/LiveDesktop'
import SliderDesktop from '../events/Desktop/SliderDesktop'
import { BrowserView, MobileView} from 'react-device-detect';
import Link from 'next/link';
import Router from 'next/router';

const Home = ({id}) => {
    const [mounted, setMounted] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const modalEvent= ()=>{
        return openModal && (
            <div className={styles.modalEvent_container}>
                <div className={styles.modal_container}>
                    <div className={styles.modal_icon}>
                        <img src="/assets/img/icon/alert.png" alt="" />
                    </div>
                    <div className={styles.modal_text}>
                        <h3>Espera</h3>
                        <p>Para ingresar al evento primero debes iniciar sesión</p>
                    </div>
                    <div className={styles.modal_buttons}>
                        <div className={styles.modal_button} onClick={()=>setOpenModal(false)}>Cancelar</div>
                        <Link href="/session">
                            <a className={styles.modal_button}>Iniciar sesión</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const enterEvent = ()=>{
        // setOpenModal(true)
        Router.push('/events/5')
    }

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={styles.home_section}>
            <div className={styles.live_title}>
                <i className="fas fa-circle"></i>
                <h2>Live session</h2>
            </div>
            <div className={styles.live_container}>
                <BrowserView>
                    <LiveDesktop
                        enterEvent={enterEvent}
                    />
                    <SliderDesktop/>
                </BrowserView>
                <MobileView>
                    <LiveResponsive
                        enterEvent={enterEvent}
                    />
                    <SliderResponsive/>
                </MobileView>
            </div>
            {modalEvent()}
        </section>
    );
};

export default Home;