import { useEffect, useState } from 'react';
import styles from '../../../../../styles/screens/index/events/Responsive/SliderResponsive.module.css'
import Image from 'next/image'


const SliderResponsive = ({lives, description, enterEvent}) => {
    const [mounted, setMounted] = useState(false)
    const [eventInfo, setEventInfo] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    const displayEventInfo = ()=>{
        const _eventInfo = document.getElementById('eventInfo')

        if (eventInfo) {
            _eventInfo.classList.replace("animate__slideInUp", "animate__slideOutDown")
            setTimeout(()=>{
                _eventInfo.classList.replace("animate__slideOutDown", "animate__slideInUp")
                setEventInfo(false)
            },500)
            
        }else{
            setEventInfo(true)
        }
    }

    const modalEventInfo = ()=>{
        return eventInfo && (
            <div className={`${styles.event_info_container} animate__animated animate__slideInUp animate__faster`} id='eventInfo'>
                <div className={styles.event_info}>
                    <div className={styles.event_close} onClick={()=> displayEventInfo()}><i className="far fa-times-circle"></i></div>
                    <div className={styles.event_img_container}>
                        <Image
                            src={'/assets/img/1.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                        />
                    </div>
                    <div className={styles.event_info_content}>
                        <h4>Presentación Bodega Los Haroldos</h4>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.</p>
                        <div className={styles.date_container}>
                            <div><i className="far fa-calendar-alt"></i><p>22 - 12 - 2021</p></div>
                            <div><i className="far fa-clock"></i><p>16:15</p></div>
                        </div>
                    </div>
                </div>
                <button onClick={()=> enterEvent()}>Ingresar al evento</button>
            </div>
        )
    }

    return mounted && (
        <>

            <div className={styles.last_events_container} id="slider">
                <div className={styles.last_events_title}>
                    <i className="fas fa-redo"></i>
                    <h3>Ver de nuevo</h3>
                </div>
                <div className={styles.events_track}>
                    <div className={styles.event_img_box} onClick={()=> displayEventInfo()}>
                        <Image
                            src={'/assets/img/1.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                            priority
                        />
                    </div>
                    <div className={styles.event_img_box} onClick={()=> displayEventInfo()}>
                        <Image
                            src={'/assets/img/2.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                            priority
                        />
                    </div>
                    <div className={styles.event_img_box} onClick={()=> displayEventInfo()}>
                        <Image
                            src={'/assets/img/1.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                            priority
                        />
                    </div>
                    <div className={styles.event_img_box} onClick={()=> displayEventInfo()}>
                        <Image
                            src={'/assets/img/2.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                            priority
                        />
                    </div>
                    <div className={styles.event_img_box} onClick={()=> displayEventInfo()}>
                        <Image
                            src={'/assets/img/1.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt={description}
                            priority
                        />
                    </div>
                </div>
            </div>
            {
                modalEventInfo()
            }
        </>
    );
};

export default SliderResponsive;