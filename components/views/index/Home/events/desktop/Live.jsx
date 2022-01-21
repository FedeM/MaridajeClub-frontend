import styles from './Live.module.css'
import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../common';
const ReactPlayer = lazy(()=> import('react-player'))
import {useState} from 'react'

const Live = ({enterEvent}) => {
    const [modalActivate, setModalActivate] = useState(false)

    const MoreInfoModal = ()=>{
        return(
            <div className={styles.modal_background}>
                <div className={`${styles.modal_container} animate__animated animate__lightSpeedInRight animate__faster`}>
                    <h4 onClick={()=> enterEvent()}>Presentación Bodega Los Haroldos</h4>
                    <p className={styles.liveRes_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                        <div><i className="far fa-clock"></i><p>16:15</p></div>
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
                        <h4>Presentación Bodega Los Haroldos</h4>
                        <div className={styles.date_container}>
                            <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                            <div><i className="far fa-clock"></i><p>16:15</p></div>
                        </div>
                    </div>
                    <span className={styles.help_cover}>Haz click en el título para ingresar al evento</span>
                    <span className={styles.live_alert} title='En vivo'>Live</span>
                    <span className={styles.more_info} title='Más Info' onClick={()=> setModalActivate(true)}><i className="fas fa-exclamation-circle"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Live;