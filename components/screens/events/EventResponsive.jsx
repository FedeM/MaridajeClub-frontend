import style from '../../../styles/screens/events/EventResponsive.module.css'
import ReactPlayer from "react-player";
import Link from 'next/link'


const EventResponsive = ({setLeaveAlert}) => {
    return (
        <div className={style.live_container}>
            <ReactPlayer
                className={style.live}
                url="/assets/video/1.mp4"
                playing
                loop
                muted
                width={'100%'}
                height={'100%'}
            />
            <span className={style.live_alert}>Live</span>
            <div className={style.live_close} onClick={()=>setLeaveAlert(true)}>X</div>
            <div className={style.chat}>
                <div className={style.chat_container}>
                    <div className={style.chat_msg}>
                        <div className={style.chat_msg_img}>
                            <img src="/assets/img/profile/user.png" alt="" />
                        </div>
                        <div className={style.chat_msg_text}>
                            <h5>manumoretta</h5>
                            <p>Holaaa, bienvenidos a MaridajeClub!!</p>
                        </div>
                    </div>
                    <div className={style.chat_msg}>
                        <div className={style.chat_msg_img}>
                            <img src="/assets/img/profile/user.png" alt="" />
                        </div>
                        <div className={style.chat_msg_text}>
                            <h5>santillienzo</h5>
                            <p>Holaaa soy Enzoo, como les va?</p>
                        </div>
                    </div>
                    <div className={style.chat_msg}>
                        <div className={style.chat_msg_img}>
                            <img src="/assets/img/profile/user.png" alt="" />
                        </div>
                        <div className={style.chat_msg_text}>
                            <h5>santillienzo</h5>
                            <p>Holaaa soy Enzoo, como les va?</p>
                        </div>
                    </div>
                    <div className={style.chat_msg}>
                        <div className={style.chat_msg_img}>
                            <img src="/assets/img/profile/user.png" alt="" />
                        </div>
                        <div className={style.chat_msg_text}>
                            <h5>santillienzo</h5>
                            <p>Holaaa soy Enzoo, como les va?</p>
                        </div>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Escribe un mensaje aquí..."/>
                    <button>Publicar</button>
                </form>
            </div>
        </div>
    );
};

export default EventResponsive;