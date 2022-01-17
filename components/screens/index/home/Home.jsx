import styles from '../../../../styles/screens/index/home/Home.module.css'

import { useEffect, useState } from 'react';
import { BrowserView, isBrowser, MobileView} from 'react-device-detect';
import Router from "next/router";

import { isAuthenticate } from '../../../../lib/auth';

import AlertModal from '../../../assets/AlertModal/AlertModal';

import LiveResponsive from '../events/Responsive/LiveResponsive'
import SliderResponsive from '../events/Responsive/SliderResponsive'
import LiveDesktop from '../events/Desktop/LiveDesktop'
import SliderDesktop from '../events/Desktop/SliderDesktop'


const Home = ({id}) => {
    //Verificamos que el componente esté montado
    const [mounted, setMounted] = useState(false)
    //Controlamos la apertura/cierre del modal
    const [openModal, setOpenModal] = useState(false)
    //En este array guardaremos los eventos
    const [events, setEvents] = useState([
        {
            _id: 1,
            img: "/assets/img/1.jpg",
            title: "Presentación Bodega Garzón",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit deserunt, molestias ex iste laboriosam distinctio beatae molestiae veniam assumenda voluptatem dolore consequuntur officia sapiente debitis. Adipisci enim dolor iste.",
            date: "19-02-2022",
            hour: `18:55`
        },
        {
            _id: 2,
            img: "/assets/img/2.jpg",
            title: "Presentación Bodega Super Úco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit deserunt, molestias ex iste laboriosam distinctio beatae molestiae veniam assumenda voluptatem dolore consequuntur officia sapiente debitis. Adipisci enim dolor iste.",
            date: "20-02-2022",
            hour: `15:00`
        },
        {
            _id: 3,
            img: "/assets/img/1.jpg",
            title: "Presentación Bodega Zuccardi",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit deserunt, molestias ex iste laboriosam distinctio beatae molestiae veniam assumenda voluptatem dolore consequuntur officia sapiente debitis. Adipisci enim dolor iste.",
            date: "25-02-2022",
            hour: `17:15`
        },
        {
            _id: 4,
            img: "/assets/img/2.jpg",
            title: "Presentación Bodega Marqués de Riscal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit deserunt, molestias ex iste laboriosam distinctio beatae molestiae veniam assumenda voluptatem dolore consequuntur officia sapiente debitis. Adipisci enim dolor iste.",
            date: "01-03-2022",
            hour: `18:00`
        },
    ])


    const enterEvent = (id)=>{
        if (isAuthenticate()) {
            Router.push(`/events/${id}`)
        }else{
            setOpenModal(true)
        }
    }

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={styles.home_section}>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
            <div className={styles.live_container} style={isBrowser ? ({marginLeft: '15%'}):({})}>
                <BrowserView>
                    <LiveDesktop
                        enterEvent={enterEvent}
                    />
                    <SliderDesktop
                        enterEvent={enterEvent}
                        events={events}
                    />
                </BrowserView>
                <MobileView>
                    <LiveResponsive
                        enterEvent={enterEvent}
                    />
                    <SliderResponsive
                        enterEvent={enterEvent}
                        events={events}
                    />
                </MobileView>
            </div>
            {
                openModal && (
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
        </section>
    );
};

export default Home;