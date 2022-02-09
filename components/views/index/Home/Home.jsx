import style from './Home.module.css'

import { useEffect, useState } from 'react';
import {
    Link as LinkScroll
} from 'react-scroll'
import { BrowserView, MobileView} from 'react-device-detect';

import { SliderResponsive, Live,SliderDesktop} from '../../'

import { events as arrayEvents } from '../../../../lib/events';



const Home = ({enterEvent}) => {
    //Verificamos que el componente esté montado
    const [mounted, setMounted] = useState(false)
    //Aquí guardaremos el evento en vivo
    const [homeEvent, setHomeEvent] = useState({
        inLiveEvent: false,
        lastEvent: false,
        nextEvent: false
    })
    const [inLiveEvent, setInLiveEvent] = useState(false)
    const [lastEvent, setLastEvent] = useState(false)
    const [nextEvent, setNextEvent] = useState(false)
    //En este array guardaremos los eventos
    const [events, setEvents] = useState(arrayEvents.filter(event => {
        if(event.is_live === false && event.date_from < new Date()){
            return true
        }
        return false
    }))
    const [helpOpacity, setHelpOpacity] = useState(0)

    const fillLiveEnter = ()=>{
        const currentDate = new Date();
        let lastDate = new Date(0, 0, 0);
        let mostNextDate = new Date(2099, 11, 30)

        for (let i = 0; i < arrayEvents.length; i++) {
            if (arrayEvents[i].is_live === true) {
                setInLiveEvent(arrayEvents[i])
            }
            if (arrayEvents[i].date_from > lastDate && arrayEvents[i].date_from < currentDate && arrayEvents[i].is_live === false) {
                lastDate = arrayEvents[i].date_from
                setLastEvent(arrayEvents[i])
            }
            if (arrayEvents[i].date_from > currentDate && arrayEvents[i].date_from < mostNextDate) {
                mostNextDate = arrayEvents[i].date_from
                setNextEvent(arrayEvents[i])
            }
            if (arrayEvents[i].date_from < currentDate) {
                
            }
        }
    }
    
    
    useEffect(()=>{
        setMounted(true)
        if(!mounted){
            fillLiveEnter()
        }
        setHomeEvent({
            inLiveEvent: inLiveEvent,
            lastEvent: lastEvent,
            nextEvent: nextEvent
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[mounted])
    
    return mounted &&(
        <section className={style.home_section}>
            <div className={style.color}></div>
            <div className={style.color}></div>
            <div className={style.live_container}>
                <BrowserView>
                    <div className={style.presentation_container} id="home">
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
                            homeEvent={homeEvent}
                        />
                    </div>
                    <SliderDesktop
                        enterEvent={enterEvent}
                        events={events}
                    />
                </BrowserView>
                <MobileView>
                    <div className={style.about_text_container} id="home">
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
                        homeEvent={homeEvent}
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