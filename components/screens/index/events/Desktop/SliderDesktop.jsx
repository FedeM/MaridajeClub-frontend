import styles from '../../../../../styles/screens/index/events/Desktop/Slider.module.css'

const SliderDesktop = () => {
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

export default SliderDesktop;