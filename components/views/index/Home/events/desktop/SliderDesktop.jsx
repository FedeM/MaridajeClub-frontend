import styles from './Slider.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';


const SliderDesktop = ({enterEvent, events}) => {
    //Controlamos la posición del scroll
    const [scroll, setScroll] = useState(0)
    //Cargamos los datos del evento seleccionado
    const [eventSelected, setEventSelected] = useState({
        _id: events[0]._id,
        title: events[0].title,
        description: events[0].description,
        date:events[0].date,
        hour: events[0].hour
    })

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

        if(scroll === 0){
            arrowLeft.style.opacity = "0"
        }else{
            arrowLeft.style.opacity = "1"
        }
    }

    useEffect(()=>{
        hiddenArrow()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll])

    return (
        <div className={styles.last_events_container} id="slider">
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_container}>
                <div className={styles.event_info}>
                    <h4 title={eventSelected.title}>{eventSelected.title}</h4>
                    <p className={styles.info_text}>{eventSelected.description}</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{eventSelected.date}</p></div>
                        <div><i className="far fa-clock"></i><p>{eventSelected.hour}</p></div>
                    </div>
                    <button onClick={()=> enterEvent(eventSelected._id)}>Ingresar al evento</button>
                </div>
                <div className={styles.events_track_container}>
                    <div className={styles.event_track_arrow} id='arrowRight' onClick={()=>moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
                    <div className={styles.event_track_arrow} id='arrowLeft' onClick={()=>moveScroll(false)}><i className="fas fa-chevron-left"></i></div>
                    <div className={styles.events_track} id='eventTrack'>
                        {
                            events.map((e,i)=>(
                                <div className={styles.event_img_box} key={i} onClick={()=>setEventSelected({
                                    _id: e._id,
                                    title: e.title,
                                    description: e.description,
                                    date: e.date,
                                    hour: e.hour
                                })}>
                                    <Image
                                        src={e.img}
                                        layout="fill"
                                        objectFit='cover'
                                        alt={e.title}
                                        priority
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderDesktop;