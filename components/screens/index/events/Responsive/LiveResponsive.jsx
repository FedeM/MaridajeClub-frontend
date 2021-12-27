import styles from '../../../../../styles/screens/index/events/Responsive/LiveResponsive.module.css'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react';


const LiveResponsive = ({data, id}) => {
    const [mounted, setMounted] = useState(false)

    const fullScreen = ()=>{
        const video = document.getElementById('video')
        video.requestFullscreen()
    }

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <div className={styles.liveRes_box}>
            <div className={styles.liveRes_title}>
                <h3>Próximo</h3>
            </div>
            <div className={styles.videoRes_container}>
                <ReactPlayer
                    id="video"
                    className={styles.react_player}
                    url={'/assets/video/1.mp4'}
                    playing
                    loop
                    muted
                    width={'100%'}
                    height={'100%'}
                />
                <span className={styles.liveRes_alert}>Live</span>
                <div className={styles.liveRes_info_container}>
                    <h4>Presentación Bodega Los Haroldos</h4>
                    <p className={styles.liveRes_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                        <div><i className="far fa-clock"></i><p>16:15</p></div>
                    </div>
                    <button onClick={()=> fullScreen()}>Ingresar al evento</button>
                </div>
            </div>
        </div>
    );
};

export default LiveResponsive;

