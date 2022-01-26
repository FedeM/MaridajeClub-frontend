import styles from './Live.module.css'
import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../common';
const ReactPlayer = lazy(()=> import('react-player'))
import {useState} from 'react'

const Live = ({enterEvent, helpOpacity, liveEvent}) => {
    const [modalActivate, setModalActivate] = useState(false)

    const MoreInfoModal = ()=>{
        return(
            <div className={styles.modal_background}>
                <div className={`${styles.modal_container} animate__animated animate__lightSpeedInRight animate__faster`}>
                    <h4 onClick={()=> enterEvent()}>{liveEvent[0].name}</h4>
                    <p className={styles.liveRes_text}>{liveEvent[0].description}</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{liveEvent[0].date_from}</p></div>
                        <div><i className="far fa-clock"></i><p>{liveEvent[0].hour}</p></div>
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
            {
                modalActivate && (
                    <MoreInfoModal/>
                )
            }
            <div className={styles.live_wrapper} id='live'>
                <div className={styles.video_container}>
                    <Suspense fallback={<Loader size={50} style={{position: "absolute", top: "calc(50% - 25px)", left:"calc(50% - 25px)"}}/>}>
                        <ReactPlayer
                            id="video"
                            className={styles.react_player}
                            url={'/assets/video/videoWine.mp4'}
                            playing
                            loop
                            muted
                            width={'100%'}
                            height={'100%'}
                        />
                    </Suspense>
                    <div className={styles.live_info_container} onClick={()=> enterEvent()}>
                        <h4>{liveEvent[0].name}</h4>
                        <div className={styles.date_container}>
                            <div><i className="far fa-calendar-alt"></i><p>{liveEvent[0].date_from}</p></div>
                            <div><i className="far fa-clock"></i><p>{liveEvent[0].hour}</p></div>
                        </div>
                    </div>
                    <span className={styles.help_cover} style={{opacity: helpOpacity}}>Haz click en el título para ingresar al evento</span>
                    <span className={styles.live_alert} title='En vivo'>Live</span>
                    <span className={styles.more_info} title='Más Info' onClick={()=> setModalActivate(true)}><i className="fas fa-exclamation-circle"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Live;