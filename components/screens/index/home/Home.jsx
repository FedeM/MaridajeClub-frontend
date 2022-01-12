import styles from '../../../../styles/screens/index/home/Home.module.css'
import { useEffect, useState } from 'react';
import LiveResponsive from '../events/Responsive/LiveResponsive'
import SliderResponsive from '../events/Responsive/SliderResponsive'
import LiveDesktop from '../events/Desktop/LiveDesktop'
import SliderDesktop from '../events/Desktop/SliderDesktop'
import { BrowserView, isBrowser, MobileView} from 'react-device-detect';
import Link from 'next/link';
import Router from 'next/router';
import { isAuthenticate } from '../../../../lib/auth';
import Image from 'next/image'



const Home = ({id, paddingTop}) => {
    const [mounted, setMounted] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const modalEvent= ()=>{
        return openModal && (
            <div className={styles.modalEvent_container}>
                <div className={styles.modal_container}>
                    <div className={styles.modal_icon}>
                        <Image src="/assets/img/icon/alert.png" alt="Icono de alerta" layout="fill" objectFit='contain' objectPosition={'50%'}/>
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
        if (isAuthenticate()) {
            Router.push('/events/5')
        }else{
            setOpenModal(true)
        }
    }

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={styles.home_section} style={{paddingTop: paddingTop}}>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
            <div className={styles.live_container} style={isBrowser ? ({marginLeft: '15%'}):({})}>
                <BrowserView>
                    <LiveDesktop
                        enterEvent={enterEvent}
                    />
                    <SliderDesktop
                        enterEvent={enterEvent}
                    />
                </BrowserView>
                <MobileView>
                    <LiveResponsive
                        enterEvent={enterEvent}
                    />
                    <SliderResponsive
                        enterEvent={enterEvent}
                    />
                </MobileView>
            </div>
            {modalEvent()}
        </section>
    );
};

export default Home;