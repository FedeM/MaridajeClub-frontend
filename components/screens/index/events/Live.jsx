import styles from '../../../../styles/screens/index/events/Live.module.css'
import ReactPlayer from 'react-player/lazy'


const Live = ({data, id}) => {


    return (
        <div className={styles.live_box}>
            <div className={styles.live_title}>
                <h3>Por empezar</h3>
                <i className="fas fa-video"></i>
            </div>
            <div className={styles.video_container}>
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
                <span className={styles.live_alert}>Live</span>
                <div className={styles.live_info_container}>
                    <h4>Presentación Bodega Los Haroldos</h4>
                    <span>Ingresar al evento</span>
                </div>
            </div>
        </div>
    );
};

export default Live;

