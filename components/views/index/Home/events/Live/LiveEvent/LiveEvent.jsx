import style from './LiveEvent.module.css'

import { lazy, Suspense } from 'react';
import { Loader } from '../../../../../../common';
import { formatDate, formatHour } from '../../../../../../../lib/assets/formatTime';
const ReactPlayer = lazy(()=> import('react-player'))

const LiveEvent = ({event, helpOpacity, last, setModalActivate, enterEvent}) => {

    return (
        <div className={style.video_container}>
            <Suspense fallback={<Loader size={50} style={{position: "absolute", top: "calc(50% - 25px)", left:"calc(50% - 25px)"}}/>}>
                <ReactPlayer
                    id="video"
                    className={style.react_player}
                    url={'/assets/video/videoWine.mp4'}
                    playing
                    loop
                    muted
                    width={'100%'}
                    height={'100%'}
                />
            </Suspense>
            <div className={style.live_info_container} 
                onClick={()=> enterEvent({
                    activate: true,
                    eventId: event.id,
                    eventUrl: event.video_url,
                    eventIsLive: last ?(false):(true)
                })}
            >
            { last && (<p className={style.last_event}>Último evento</p>)}
                <h4>{event.name}</h4>
                <div className={style.date_container}>
                    <div><i className="far fa-calendar-alt"></i><p>{`${formatDate(event.date_from)}`}</p></div>
                    <div><i className="far fa-clock"></i><p>{`${formatHour(event.date_from)}`}</p></div>
                </div>
            </div>
            <span className={style.help_cover} style={{opacity: helpOpacity}}>Haz click en el título para ingresar al evento</span>
            {!last &&(<span className={style.live_alert} title='En vivo'>En vivo</span>)}
            <span className={style.more_info} title='Más Info' onClick={()=> setModalActivate({activate: true, event, isNext: false})}><i className="fas fa-exclamation-circle"></i></span>
        </div>
    );
};

export default LiveEvent;