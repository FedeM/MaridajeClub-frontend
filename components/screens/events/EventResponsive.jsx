import style from '../../../styles/screens/events/EventResponsive.module.css'
import ReactPlayer from "react-player";


const EventResponsive = ({setLeaveAlert,submitPost, posts, handleChange}) => {
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
                {
                    posts.map((e,i)=>(
                        <div className={style.chat_msg} key={i}>
                            <div className={style.chat_msg_img}>
                                <img src={e.photo} alt="" />
                            </div>
                            <div className={style.chat_msg_text}>
                                <h5>{e.user}</h5>
                                <p>{e.msg}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
                <form onSubmit={(e)=> submitPost(e)}>
                    <input type="text" placeholder="Escribe un mensaje aquí..." onChange={(e)=>handleChange(e)}/>
                    <button>Publicar</button>
                </form>
            </div>
        </div>
    );
};

export default EventResponsive;