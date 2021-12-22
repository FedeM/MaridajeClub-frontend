import styles from '../../../../styles/screens/index/events/Slider.module.css'

const Slider = ({lives}) => {
    return (
        <div className={styles.last_events_container} id="slider">
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_track}>
                <div className={styles.event_img_box}>
                    <img 
                        src={'/assets/img/1.jpg'}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <img 
                        src={'/assets/img/2.jpg'}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <img 
                        src={'/assets/img/1.jpg'}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <img 
                        src={'/assets/img/2.jpg'}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <img 
                        src={'/assets/img/1.jpg'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Slider;


{/* <ReactPlayer
    url={'/assets/video/live.mp4'}
    width='100%'
    height='100%'
    controls
    muted
    className={styles.slider_react_player}
/> */}
