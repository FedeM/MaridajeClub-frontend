import styles from '../../../../../styles/screens/index/events/Responsive/LiveResponsive.module.css'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react';


const LiveResponsive = ({data, id}) => {
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
                    <span>Ingresar al evento</span>
                </div>
            </div>
        </div>
    );
};

export default LiveResponsive;

