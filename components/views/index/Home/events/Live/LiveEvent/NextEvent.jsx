import style from './NextEvent.module.css'

import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../../common';
import { formatDate, formatHour } from '../../../../../../../lib/assets/formatTime';
const Image = lazy(()=> import('next/image'))


const NextEvent = ({event, helpOpacity, setModalActivate}) => {

    
    return (
        <div className={style.image_container}>
            <Suspense fallback={<Loader size={50} style={{position: "absolute", top: "calc(50% - 25px)", left:"calc(50% - 25px)"}}/>}>
                <Image src={event.banner} layout='fill' objectFit='cover' alt='44564'/>
            </Suspense>
            <div className={style.live_info_container}>
                <p className={style.next_event}>Proximo evento</p>
                <h4>{event.name}</h4>
                <div className={style.date_container}>
                    <div><p>{`${formatDate(event.date_from)}`}</p></div>
                    <div><p>{`${formatHour(event.date_from)}`}</p></div>
                </div>
            </div>
            <span className={style.help_cover} style={{opacity: helpOpacity}}>Haz click en el título para ingresar al evento</span>
            <span className={style.more_info} title='Más Info' onClick={()=> setModalActivate({activate: true, event, isNext: true})}><i className="fas fa-exclamation-circle"></i></span>
        </div>
    );
};

export default NextEvent;