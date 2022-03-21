import style from './Home.module.css'

import { useEffect, useState } from 'react';
import {
    Link as LinkScroll
} from 'react-scroll'
import { BrowserView, MobileView} from 'react-device-detect';

import { SliderResponsive, Live,SliderDesktop} from '../../'



const Home = ({setEnterEvent, allEvents}) => {
    //Verificamos que el componente esté montado
    const [mounted, setMounted] = useState(false)
    //Aquí guardaremos el evento en vivo
    const [homeEvent, setHomeEvent] = useState({
        fill: false,
        inLiveEvent: false,
        lastEvent: false,
        nextEvent: false
    })
    //En estos estados se guardarán el evento en vivo, el último evento y el siguiente evento respectivamente
    const [inLiveEvent, setInLiveEvent] = useState(false)
    const [lastEvent, setLastEvent] = useState(false)
    const [nextEvent, setNextEvent] = useState(false)
    //En este array guardaremos todos los eventos anteriores al día de la fecha
    const [events, setEvents] = useState(allEvents.filter(e => {
        let date_from = new Date(e.date_from)

        if(date_from < new Date()){
            return true
        }
        return false
    }))
    const [helpOpacity, setHelpOpacity] = useState(0)

    const fillLiveEnter = (allEvents)=>{
        const currentDate = new Date();
        let lastDate = new Date(0, 0, 0);
        let mostNextDate = new Date(2099, 11, 30)

        console.log('///')
        allEvents.map(e=>{
            let date_from = new Date(e.date_from)
            let date_to = new Date(e.date_to)

            //Verificamos que sea el vivo actual
            if(date_from <= currentDate && date_to >= currentDate){
                setInLiveEvent(e)
            }
            
            //Verificamos cuál es el último evento 
            if(date_from  > lastDate && date_from < currentDate && !(date_from <= currentDate && date_to >= currentDate)){
                lastDate = date_from;
                setLastEvent(e)
            }
            
            //Verificamos cual es el próximo evento 
            if (date_from > currentDate && date_from < mostNextDate && !(date_from <= currentDate && date_to >= currentDate)) {
                mostNextDate = date_from
                setNextEvent(e)
            }
        })

    }
    
    
    useEffect(()=>{
        setMounted(true)
        fillLiveEnter(allEvents)
        
        setHomeEvent({
            fill: true,
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
                                <p>Viví la única experiencia <span>Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                            </div>
                            <div>
                                <LinkScroll className={style.about_btn} to="live" spy={true} offset={-40} onClick={()=> setHelpOpacity(1)}><i className="fas fa-video"></i> Ver en vivo</LinkScroll>
                                <LinkScroll className={style.about_btn} to="commerce" spy={true}><span><i className="fas fa-shopping-bag"></i> Comprar</span></LinkScroll>
                            </div>
                        </div>
                        <Live
                            setEnterEvent={setEnterEvent}
                            helpOpacity={helpOpacity}
                            homeEvent={homeEvent}
                        />
                    </div>
                    <SliderDesktop
                        setEnterEvent={setEnterEvent}
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
                        setEnterEvent={setEnterEvent}
                        helpOpacity={helpOpacity}
                        homeEvent={homeEvent}
                    />
                    <SliderResponsive
                        setEnterEvent={setEnterEvent}
                        events={events}
                    />
                </MobileView>
            </div>
        </section>
    );
};

export default Home;