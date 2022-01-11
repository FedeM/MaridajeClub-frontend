import styles from '../../../../../styles/screens/index/events/Desktop/Slider.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';


const SliderDesktop = ({description, enterEvent}) => {
    const [scroll, setScroll] = useState(0)

    const moveScroll = (dir)=>{
        let _scroll = document.getElementById('eventTrack')
        setScroll(_scroll.scrollLeft)

        if (dir) {
            _scroll.scrollLeft += (_scroll.scrollWidth / 3)
        }else{
            _scroll.scrollLeft -= (_scroll.scrollWidth / 3)
        }
    }

    const hiddenArrow = ()=>{
        let arrowLeft = document.getElementById('arrowLeft')

        if(scroll === 0){
            arrowLeft.style.opacity = "0"
        }else{
            arrowLeft.style.opacity = "1"
        }
    }

    useEffect(()=>{
        hiddenArrow()
    }, [scroll])

    return (
        <div className={styles.last_events_container} id="slider">
            <div className={styles.last_events_title}>
                <i className="fas fa-redo"></i>
                <h3>Ver de nuevo</h3>
            </div>
            <div className={styles.events_container}>
                <div className={styles.event_info}>
                    <h4>Presentación Bodega Garzón</h4>
                    <p className={styles.info_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit deserunt, molestias ex iste laboriosam distinctio beatae molestiae veniam assumenda voluptatem dolore consequuntur officia sapiente debitis. Adipisci enim dolor iste.</p>
                    <div className={styles.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                        <div><i className="far fa-clock"></i><p>16:15</p></div>
                    </div>
                    <button onClick={()=> enterEvent()}>Ingresar al evento</button>
                </div>
                <div className={styles.events_track_container}>
                    <div className={styles.event_track_arrow} id='arrowRight' onClick={()=>moveScroll(true)}><i className="fas fa-chevron-right"></i></div>
                    <div className={styles.event_track_arrow} id='arrowLeft' onClick={()=>moveScroll(false)}><i className="fas fa-chevron-left"></i></div>
                    <div className={styles.events_track} id='eventTrack'>
                        <div className={styles.event_img_box}>
                            <Image
                                src={'/assets/img/1.jpg'}
                                layout="fill"
                                objectFit='cover'
                                alt={description}
                            />
                        </div>
                        <div className={styles.event_img_box}>
                            <Image
                                src={'/assets/img/2.jpg'}
                                layout="fill"
                                objectFit='cover'
                                alt={description}
                            />
                        </div>
                        <div className={styles.event_img_box}>
                            <Image
                                src={'/assets/img/1.jpg'}
                                layout="fill"
                                objectFit='cover'
                                alt={description}
                            />
                        </div>
                        <div className={styles.event_img_box}>
                            <Image
                                src={'/assets/img/2.jpg'}
                                layout="fill"
                                objectFit='cover'
                                alt={description}
                            />
                        </div>
                        <div className={styles.event_img_box}>
                            <Image
                                src={'/assets/img/1.jpg'}
                                layout="fill"
                                objectFit='cover'
                                alt={description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderDesktop;