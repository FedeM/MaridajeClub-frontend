import style from './NextEvent.module.css'

import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../../common';
const Image = lazy(()=> import('next/image'))


const NextEvent = ({event, helpOpacity, setModalActivate}) => {
    const time = {
        year : new Date(event.date_from).getFullYear(),
        month : new Date(event.date_from).getMonth(),
        day : new Date(event.date_from).getDate(),
        hour : new Date(event.date_from).getHours(),
        minute : new Date(event.date_from).getMinutes()
    }

    
    return (
        <div className={style.image_container}>
            <Suspense fallback={<Loader size={50} style={{position: "absolute", top: "calc(50% - 25px)", left:"calc(50% - 25px)"}}/>}>
                <Image src={event.banner} layout='fill' objectFit='cover' alt='44564'/>
            </Suspense>
            <div className={style.live_info_container}>
                <p className={style.next_event}>Proximo evento</p>
                <h4>{event.name}</h4>
                <div className={style.date_container}>
                    <div><p>{`${time.day}/${time.month + 1}/${time.year}`}</p></div>
                    <div><p>{`${time.hour}:${time.minute}`}</p></div>
                </div>
            </div>
            <span className={style.help_cover} style={{opacity: helpOpacity}}>Haz click en el título para ingresar al evento</span>
            <span className={style.more_info} title='Más Info' onClick={()=> setModalActivate({activate: true, event, time, isNext: true})}><i className="fas fa-exclamation-circle"></i></span>
        </div>
    );
};

export default NextEvent;