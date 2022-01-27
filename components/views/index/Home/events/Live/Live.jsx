import styles from './Live.module.css'
import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../common';
const ReactPlayer = lazy(()=> import('react-player'))
import {useState} from 'react'
import LiveEvent from './LiveEvent/LiveEvent';
import NextEvent from './LiveEvent/NextEvent';

const Live = ({enterEvent, helpOpacity, homeEvent}) => {
    console.log(homeEvent)

    const [modalActivate, setModalActivate] = useState(false)

    const MoreInfoModal = ()=>{
        return(
            <div className={styles.modal_background}>
                <div className={`${styles.modal_container} animate__animated animate__lightSpeedInRight animate__faster`}>
                    <h4 onClick={()=> enterEvent()}>{homeEvent.name}</h4>
                    <p className={styles.liveRes_text}>{homeEvent.description}</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{`${homeEvent.date_from.getDate()}/${homeEvent.date_from.getMonth() + 1}/${homeEvent.date_from.getFullYear()}`}</p></div>
                        <div><i className="far fa-clock"></i><p>{`${homeEvent.date_from.getHours()}:${homeEvent.date_from.getMinutes()}`}</p></div>
                    </div>
                    <button onClick={()=> enterEvent()}>Ingresar al evento</button>
                    <span className={styles.modal_more_info}><i className="fas fa-exclamation-circle"></i></span>
                    <span className={styles.close_modal} onClick={()=> setModalActivate(false)}>x</span>
                </div>
            </div>
        )
    }



    return (
        <div className={styles.live_box}>
            {/* {
                modalActivate && (
                    <MoreInfoModal/>
                )
            } */}
            <div className={styles.live_wrapper} id='live'>
                {
                    homeEvent.inLiveEvent ?(
                        <LiveEvent event={homeEvent.inLiveEvent} helpOpacity={helpOpacity}/>
                    ): homeEvent.nextEvent ?(
                        <NextEvent event={homeEvent.nextEvent} helpOpacity={helpOpacity}/>
                    ): homeEvent.lastEvent ?(
                        <LiveEvent event={homeEvent.lastEvent} helpOpacity={helpOpacity} last/>
                    ):('')
                }
            </div>
        </div>
    );
};

export default Live;