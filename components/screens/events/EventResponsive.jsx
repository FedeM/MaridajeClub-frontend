import style from '../../../styles/screens/events/EventResponsive.module.css'
import ReactPlayer from "react-player";
import { useEffect } from 'react';


const EventResponsive = ({setLeaveAlert,submitPost, posts, handleChange}) => {

    useEffect(()=>{
        const chat_container = document.getElementById('chat_container')
        const content_chat = document.getElementById('content_chat')
        if (chat_container) {
            chat_container.scrollTo(0, content_chat.offsetHeight)
            console.log(content_chat.offsetHeight)
        }
    })


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
                <div className={style.chat_container} id='chat_container'>
                    <div className={style.content_chat} id="content_chat">
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