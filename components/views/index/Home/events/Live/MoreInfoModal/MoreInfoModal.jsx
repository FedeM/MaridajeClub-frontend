import { formatDate, formatHour } from '../../../../../../../lib/assets/formatTime';
import style from './MoreInfoModal.module.css'


const MoreInfoModal = ({modalActivate, close})=>{
    return(
        <div className={style.modal_background}>
            <div className={`${style.modal_container} animate__animated animate__lightSpeedInRight animate__faster`}>
                <h4 
                    onClick={()=> setEnterEvent({
                        activate: true,
                        eventId: modalActivate.event.id,
                        eventUrl: modalActivate.event.video_url,
                        eventIsLive: modalActivate.event.is_live
                    })}
                >
                        {modalActivate.event.name}
                </h4>
                <p className={style.modal_text}>{modalActivate.event.description}</p>
                <div className={style.date_container}>
                    <div><i className="far fa-calendar-alt"></i><p>{`${formatDate(modalActivate.event.date_from)}`}</p></div>
                    <div><i className="far fa-clock"></i><p>{`${formatHour(modalActivate.event.date_from)}`}</p></div>
                </div>
                {!modalActivate.isNext && (
                        <button 
                            onClick={()=> setEnterEvent({
                                activate: true,
                                eventId: modalActivate.event.id,
                                eventUrl: modalActivate.event.video_url,
                                eventIsLive: modalActivate.event.is_live
                            })}>
                                Ingresar al evento
                        </button>
                    )
                }
                <span className={style.close_modal} onClick={()=> close()}>x</span>
            </div>
        </div>
    )
}

export default MoreInfoModal;