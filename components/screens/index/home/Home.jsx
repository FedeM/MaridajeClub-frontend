import styles from '../../../../styles/screens/index/home/Home.module.css'
import { useEffect, useState } from 'react';
import LiveResponsive from '../events/Responsive/LiveResponsive'
import SliderResponsive from '../events/Responsive/SliderResponsive'
import LiveDesktop from '../events/Desktop/LiveDesktop'
import SliderDesktop from '../events/Desktop/SliderDesktop'
import { BrowserView, isBrowser, MobileView} from 'react-device-detect';
import Router from "next/router";
import { isAuthenticate } from '../../../../lib/auth';
import AlertModal from '../../../assets/AlertModal/AlertModal';



const Home = ({id, paddingTop}) => {
    const [mounted, setMounted] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const modalEvent= ()=>{
        return openModal && (
            ////////////////////////////////////////////
            <AlertModal
                img={"/assets/img/icon/alert.png"}
                title="Espera"
                alert="Para ingresar al evento primero debes iniciar sesión"
                btnText="Iniciar Sesión"
                closeCallback={()=>{
                    setOpenModal(false)
                }}
                callback= {()=>{
                    Router.push('/session')
                }}
            />
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