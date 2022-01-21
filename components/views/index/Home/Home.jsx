import style from './Home.module.css'

import { useEffect, useState } from 'react';
import {
    Link as LinkScroll
} from 'react-scroll'
import { BrowserView, MobileView} from 'react-device-detect';
import Router from "next/router";

import {AlertModal} from '../../../common';

import { SliderResponsive, Live,SliderDesktop} from '../../'



const Home = ({id, enterEvent, close}) => {
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
    const [helpOpacity, setHelpOpacity] = useState(0)



    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={style.home_section}>
            <div className={style.color}></div>
            <div className={style.color}></div>
            <div className={style.live_container}>
                <BrowserView>
                    <div className={style.presentation_container}>
                        <div className={style.about_text_container}>
                            <div className={style.about_text_container_text}>
                                <h3>Live Streaming & eCommerce</h3>
                                <p>Viví la única experiencia <span> Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                            </div>
                            <div>
                                <LinkScroll className={style.about_btn} to="live" spy={true} offset={-40} onClick={()=> setHelpOpacity(1)}><i className="fas fa-video"></i> Ver en vivo</LinkScroll>
                                <LinkScroll className={style.about_btn} to="commerce" spy={true}><i className="fas fa-shopping-bag"></i> Comprar</LinkScroll>
                            </div>
                        </div>
                        <Live
                            enterEvent={enterEvent}
                            helpOpacity={helpOpacity}
                        />
                    </div>
                    <SliderDesktop
                        enterEvent={enterEvent}
                        events={events}
                    />
                </BrowserView>
                <MobileView>
                    <div className={style.about_text_container}>
                        <div className={style.about_text_container_text}>
                            <h3>Live Streaming & eCommerce</h3>
                            <p>Viví la única experiencia <span> Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                        </div>
                        <div>
                            <LinkScroll className={style.about_btn} to="live" spy={true} offset={-150} onClick={()=> setHelpOpacity(1)}><i className="fas fa-video"></i> Ver en vivo</LinkScroll>
                            <LinkScroll className={style.about_btn} to="commerce" spy={true}><i className="fas fa-shopping-bag"></i> Comprar</LinkScroll>
                        </div>
                    </div>
                    <Live
                        enterEvent={enterEvent}
                        helpOpacity={helpOpacity}
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