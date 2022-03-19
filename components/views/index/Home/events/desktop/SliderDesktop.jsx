import styles from './Slider.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

const SliderDesktop = ({ setEnterEvent, events}) => {
    const [opacity, setOpacity] = useState(1)
    //Controlamos la posición del scroll
    const [scroll, setScroll] = useState(0)
    //Cargamos los datos del evento seleccionado
    const [eventSelected, setEventSelected] = useState(events.length > 0 &&({
        id: events[0].id,
        name: events[0].name,
        description: events[0].description,
        date_from:`${events[0].date_from.getDate()}/${events[0].date_from.getMonth() + 1}/${events[0].date_from.getFullYear()}`,
        hour: `${events[0].date_from.getHours()}:${events[0].date_from.getMinutes()}`,
        url: events[0].video_url,
        is_live: events[0].is_live
    }))

    //Seleccionar evento y renderizar info
    const selectEvent = (data)=>{
        setOpacity(0)
        setTimeout(()=>{
            setOpacity(1)
            setEventSelected(data)
        },200)
    }

    //Le damos funcionalidad al scroll
    const moveScroll = (dir)=>{
        let _scroll = document.getElementById('eventTrack')
        setScroll(_scroll.scrollLeft)

        if (dir) {
            _scroll.scrollLeft += (_scroll.scrollWidth / 3)
        }else{
            _scroll.scrollLeft -= (_scroll.scrollWidth / 3)
        }
    }

    //Ocultamos la flecha
    const hiddenArrow = ()=>{
        let arrowLeft = document.getElementById('arrowLeft')

        if (arrowLeft) {
            if(scroll === 0){
                arrowLeft.style.opacity = "0"
            }else{
                arrowLeft.style.opacity = "1"
            }
        }
    }

    useEffect(()=>{
        hiddenArrow()
        new WOW().init()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll])

    return events.length > 0 ?(
        <div className={styles.last_events_container} id='slider'>
            <div className={`${styles.last_events_title} wow animate__animated animate__slideInLeft`}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_container}>
                <div className={`${styles.event_info} wow animate__animated animate__slideInLeft`} style={{opacity: opacity}}>
                    <h4 title={eventSelected.name}>{eventSelected.name}</h4>
                    <p className={styles.info_text}>{eventSelected.description}</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{eventSelected.date_from}</p></div>
                        <div><i className="far fa-clock"></i><p>{eventSelected.hour}</p></div>
                    </div>
                    <button
                        onClick={()=> setEnterEvent({
                            activate: true,
                            eventId: eventSelected.id,
                            eventUrl: eventSelected.url,
                            eventIsLive: eventSelected.is_live
                        })}
                    >
                        Ingresar al evento
                    </button>
                </div>
                <div className={`${styles.events_track_container}`}>
                    <div className={styles.event_track_arrow} id='arrowRight' onClick={()=>moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
                    <div className={styles.event_track_arrow} id='arrowLeft' onClick={()=>moveScroll(false)}><i className="fas fa-chevron-left"></i></div>
                    <div className={styles.events_track} id='eventTrack'>
                        {
                            events.map((e,i)=>(
                                <div className={`${styles.event_img_box} wow animate__animated animate__slideInRight`} key={i} onClick={()=>selectEvent({
                                    id: e.id,
                                    name: e.name,
                                    description: e.description,
                                    date_from: `${e.date_from.getDate()}/${e.date_from.getMonth() + 1}/${e.date_from.getFullYear()}`,
                                    hour: `${e.date_from.getHours()}:${e.date_from.getMinutes()}`,
                                    url: e.video_url,
                                    is_live: e.is_live
                                })}>
                                    <Image
                                        src={e.banner}
                                        layout="fill"
                                        objectFit='cover'
                                        alt={e.name}
                                        priority
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    ):(
        <div className={styles.last_events_container}>
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.empty_lastVideos}>
                <p>Parece que aquí no hay nada, por favor espera a que tengamos eventos que mostrar.</p>
                <span onClick={()=> location.reload()}>Reiniciar Página</span>
            </div>
        </div>
    )
};

export default SliderDesktop;