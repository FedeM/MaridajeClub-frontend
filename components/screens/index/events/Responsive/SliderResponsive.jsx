import { useEffect, useState } from 'react';
import styles from '../../../../../styles/screens/index/events/Responsive/SliderResponsive.module.css'
import Image from 'next/image'
import ModalEventInfo from './modalEventInfo/ModalEventInfo';


const SliderResponsive = ({enterEvent, events}) => {
    const [mounted, setMounted] = useState(false)
    //Controlamos el display del event info
    const [eventInfo, setEventInfo] = useState(false)
    //Cargamos los datos del evento seleccionado
    const [eventSelected, setEventSelected] = useState({
        _id: "",
        img: "",
        title: "",
        description: "",
        date:"",
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
                                _id: e._id,
                                img: e.img,
                                title: e.title,
                                description: e.description,
                                date: e.date,
                                hour: e.hour
                                })
                            }}>
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
            {
                eventInfo && (
                    <ModalEventInfo enterEvent={enterEvent} displayEventInfo={displayEventInfo} eventSelected={eventSelected}/>
                )
            }
        </>
    );
};

export default SliderResponsive;