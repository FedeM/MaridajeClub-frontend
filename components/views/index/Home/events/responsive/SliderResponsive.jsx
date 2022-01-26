import { useEffect, useState } from 'react';
import styles from './SliderResponsive.module.css'
import Image from 'next/image'
import ModalEventInfo from './modalEventInfo/ModalEventInfo';


const SliderResponsive = ({enterEvent, events}) => {
    const [mounted, setMounted] = useState(false)
    //Controlamos el display del event info
    const [eventInfo, setEventInfo] = useState(false)
    //Cargamos los datos del evento seleccionado
    const [eventSelected, setEventSelected] = useState({
        id: "",
        banner: "",
        name: "",
        description: "",
        date_from:"",
        hour: ""
    })

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    const displayEventInfo = ()=>{
        const _eventInfo = document.getElementById('eventInfo')

        if (eventInfo) {
            _eventInfo.classList.replace("animate__slideInUp", "animate__slideOutDown")
            setTimeout(()=>{
                _eventInfo.classList.replace("animate__slideOutDown", "animate__slideInUp")
                setEventInfo(false)
            },500)
            
        }else{
            setEventInfo(true)
        }
    }

    return mounted && (
        <>

            <div className={styles.last_events_container} id="slider">
                <div className={styles.last_events_title}>
                    <i className="fas fa-redo"></i>
                    <h3>Ver de nuevo</h3>
                </div>
                <div className={styles.events_track}>
                    {
                        events.map((e,i)=>(
                            <div className={styles.event_img_box} key={i} onClick={()=>{
                                setEventInfo(true)
                                setEventSelected({
                                id: e.id,
                                banner: e.banner,
                                name: e.name,
                                description: e.description,
                                date_from: e.date_from,
                                hour: e.hour
                                })
                            }}>
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
            {
                eventInfo && (
                    <ModalEventInfo enterEvent={enterEvent} displayEventInfo={displayEventInfo} eventSelected={eventSelected}/>
                )
            }
        </>
    );
};

export default SliderResponsive;