import styles from '../../../../../styles/screens/index/events/Desktop/Slider.module.css'
import Image from 'next/image'


const SliderDesktop = ({description}) => {
    return (
        <div className={styles.last_events_container} id="slider">
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_track}>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout="fill"
                        objectFit='contain'
                        alt={description}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/2.jpg'}
                        layout="fill"
                        objectFit='contain'
                        alt={description}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout="fill"
                        objectFit='contain'
                        alt={description}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/2.jpg'}
                        layout="fill"
                        objectFit='contain'
                        alt={description}
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout="fill"
                        objectFit='contain'
                        alt={description}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderDesktop;