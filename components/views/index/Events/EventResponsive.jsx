import style from './EventResponsive.module.css'
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import Image from 'next/image'


const EventResponsive = ({submitPost, posts, handleChange, close}) => {
    const [openShop, setOpenShop] = useState(false)


    useEffect(()=>{
        const chat_container = document.getElementById('chat_container')
        const content_chat = document.getElementById('content_chat')
        if (chat_container) {
            chat_container.scrollTo(0, content_chat.offsetHeight)
        }
    })


    return (
        <div className={`${style.live_background}`}>
            <div className={`${style.live_container} animate__animated animate__slideInRight`}>
                <ReactPlayer
                    className={style.live}
                    url="/assets/video/videoWine.mp4"
                    playing
                    loop
                    muted
                    width={'100%'}
                    height={'100%'}
                />
                <span className={style.live_alert}>En vivo</span>
                <div className={style.live_close} onClick={()=> close()}>X</div>
                <div className={style.chat}>
                    <div className={style.chat_container} id='chat_container'>
                        <div className={style.content_chat} id="content_chat">
                            {
                                posts.map((e,i)=>(
                                    <div className={style.chat_msg} key={i}>
                                        <div className={style.chat_msg_img}>
                                            <Image src={e.photo} alt={e.user} layout='fill' objectFit='contain' />
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
                <div className={style.options_buttons}>
                    <span><i className="fas fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    );
};

export default EventResponsive;