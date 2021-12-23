import ReactPlayer from 'react-player';
import styles from '../../../../../styles/screens/index/events/Desktop/Live.module.css'

const LiveDesktop = () => {
    return (
        <div className={styles.live_box}>
            <div className={styles.live_title}>
                <i className="fas fa-video"></i>
                <h3>Próximo</h3>
            </div>
            <div className={styles.live_wrapper}>
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
                </div>
                <div className={styles.live_info_container}>
                    <h4>Presentación Bodega Los Haroldos</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                        <div><i className="far fa-clock"></i><p>16:15</p></div>
                    </div>
                    <button>Ingresar al evento</button>
                </div>
            </div>
        </div>
    );
};

export default LiveDesktop;