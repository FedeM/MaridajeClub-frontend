import styles from './Live.module.css'
import { lazy, Suspense, useEffect } from 'react';
const ReactPlayer = lazy(()=> import('react-player'))
import {useState} from 'react'
import LiveEvent from './LiveEvent/LiveEvent';
import NextEvent from './LiveEvent/NextEvent';

const Live = ({enterEvent, helpOpacity, homeEvent}) => {

    const [modalActivate, setModalActivate] = useState({
        activate:false,
        event: {},
        isNext: false
    })

    const MoreInfoModal = ()=>{
        return(
            <div className={styles.modal_background}>
                <div className={`${styles.modal_container} animate__animated animate__lightSpeedInRight animate__faster`}>
                    <h4 
                        onClick={()=> enterEvent({
                            activate: true,
                            eventId: modalActivate.event.id,
                            eventUrl: modalActivate.event.video_url
                        })}
                    >
                            {modalActivate.event.name}
                    </h4>
                    <p className={styles.modal_text}>{modalActivate.event.description}</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{`${modalActivate.event.date_from.getDate()}/${modalActivate.event.date_from.getMonth() + 1}/${modalActivate.event.date_from.getFullYear()}`}</p></div>
                        <div><i className="far fa-clock"></i><p>{`${modalActivate.event.date_from.getHours()}:${modalActivate.event.date_from.getMinutes()}`}</p></div>
                    </div>
                    {!modalActivate.isNext && (
                            <button 
                                onClick={()=> enterEvent({
                                    activate: true,
                                    eventId: modalActivate.event.id,
                                    eventUrl: modalActivate.event.video_url
                                })}>
                                    Ingresar al evento
                            </button>
                        )
                    }
                    <span className={styles.close_modal} onClick={()=> setModalActivate(false)}>x</span>
                </div>
            </div>
        )
    }

    useEffect(()=>{
        if(modalActivate.activate){
            document.querySelector('body').style.overflowY="hidden"
        }else{
            document.querySelector('body').style.overflowY="auto"
        }
    }, [modalActivate])


    return (
        <div className={styles.live_box}>
            {
                modalActivate.activate && (
                    <MoreInfoModal/>
                )
            }
            <div className={styles.live_wrapper} id='live'>
                {
                    homeEvent.inLiveEvent ?(
                        <LiveEvent event={homeEvent.inLiveEvent} enterEvent={enterEvent} helpOpacity={helpOpacity} setModalActivate={setModalActivate}/>
                    ): homeEvent.nextEvent ?(
                        <NextEvent event={homeEvent.nextEvent} helpOpacity={helpOpacity} setModalActivate={setModalActivate}/>
                    ): homeEvent.lastEvent ?(
                        <LiveEvent event={homeEvent.lastEvent} enterEvent={enterEvent} helpOpacity={helpOpacity} last setModalActivate={setModalActivate}/>
                    ):('')
                }
            </div>
        </div>
    );
};

export default Live;