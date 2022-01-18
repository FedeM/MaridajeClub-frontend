import styles from './LiveResponsive.module.css'
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../common';
const ReactPlayer = lazy(()=> import('react-player'))

const LiveResponsive = ({data, enterEvent}) => {
    const [mounted, setMounted] = useState(false)


    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <div className={styles.liveRes_box}>
            <div className={styles.liveRes_title}>
                <h3>Próximo</h3>
            </div>
            <div className={styles.videoRes_container}>
                {/* <Suspense fallback={<Loader size={50} style={{position: "absolute", top: "calc(50% - 25px)", left:"calc(50% - 25px)"}}/>}>
                    <ReactPlayer
                        id="video"
                        className={styles.react_player}
                        url={'/assets/video/1.mp4'}
                        playing
                        loop
                        muted
                        width={'100%'}
                        height={'100%'}
                        style={{border:"5px solid red"}}
                    />
                </Suspense> */}
                <video src="/assets/video/1.mp4" width={'100%'} height={'100%'} autoPlay muted loop></video>
                <span className={styles.liveRes_alert}>Live</span>
                <div className={styles.liveRes_info_container}>
                    <h4>Presentación Bodega Los Haroldos</h4>
                    <p className={styles.liveRes_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                        <div><i className="far fa-clock"></i><p>16:15</p></div>
                    </div>
                    <button onClick={()=> enterEvent()}>Ingresar al evento</button>
                </div>
            </div>
        </div>
    );
};

export default LiveResponsive;

