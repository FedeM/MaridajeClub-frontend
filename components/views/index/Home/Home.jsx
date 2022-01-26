import style from './Home.module.css'

import { useEffect, useState } from 'react';
import {
    Link as LinkScroll
} from 'react-scroll'
import { BrowserView, MobileView} from 'react-device-detect';

import { SliderResponsive, Live,SliderDesktop} from '../../'

import { events as arrayEvents } from '../../../../lib/events';



const Home = ({id, enterEvent, close}) => {
    //Verificamos que el componente esté montado
    const [mounted, setMounted] = useState(false)
    //Aquí guardaremos el evento en vivo
    const [liveEvent, setLiveEvent] = useState(arrayEvents.filter(event => event.is_live === true))
    //En este array guardaremos los eventos
    const [events, setEvents] = useState(arrayEvents.filter(event => event.is_live === false))
    const [helpOpacity, setHelpOpacity] = useState(0)



    useEffect(()=>{
        setMounted(true)
        // console.log(liveEvent)
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
                            liveEvent={liveEvent}
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
                        liveEvent={liveEvent}
                    />
                    <SliderResponsive
                        enterEvent={enterEvent}
                        events={events}
                    />
                </MobileView>
            </div>
        </section>
    );
};

export default Home;