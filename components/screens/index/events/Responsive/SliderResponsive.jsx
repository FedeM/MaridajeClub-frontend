import { useEffect, useState } from 'react';
import styles from '../../../../../styles/screens/index/events/Responsive/SliderResponsive.module.css'
import Image from 'next/image'


const SliderResponsive = ({lives}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && (
        <div className={styles.last_events_container} id="slider">
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_track}>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/2.jpg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/2.jpg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.event_img_box}>
                    <Image
                        src={'/assets/img/1.jpg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderResponsive;


{/* <ReactPlayer
    url={'/assets/video/live.mp4'}
    width='100%'
    height='100%'
    controls
    muted
    className={styles.slider_react_player}
/> */}
