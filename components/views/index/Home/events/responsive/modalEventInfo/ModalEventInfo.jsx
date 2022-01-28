import style from './ModalEventInfo.module.css'
import Image from 'next/image'


const ModalEventInfo = ({displayEventInfo, eventSelected, enterEvent}) => {
    return (
        <div className={`${style.event_info_container} animate__animated animate__slideInUp animate__faster`} id='eventInfo'>
            <div className={style.event_info}>
                <div className={style.event_close} onClick={()=> displayEventInfo()}><i className="far fa-times-circle"></i></div>
                <div className={style.event_img_container}>
                    <Image
                        src={eventSelected.banner}
                        layout='fill'
                        objectFit='cover'
                        alt={eventSelected.name}
                        priority
                    />
                </div>
                <div className={style.event_info_content}>
                    <h4>{eventSelected.name}</h4>
                    <p className={style.text}>{eventSelected.description}</p>
                    <div className={style.date_container}>
                        <div><i className="far fa-calendar-alt"></i><p>{eventSelected.date_from}</p></div>
                        <div><i className="far fa-clock"></i><p>{eventSelected.hour}</p></div>
                    </div>
                </div>
            </div>
            <button 
                onClick={()=> enterEvent({
                    activate: true,
                    eventId: eventSelected.id,
                    eventUrl: eventSelected.url,
                    eventIsLive: eventSelected.is_live
                })}
            >
                Ingresar al evento
            </button>
        </div>
    );
};

export default ModalEventInfo;