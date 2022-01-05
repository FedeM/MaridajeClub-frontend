import style from '../../../styles/screens/events/EventDesktop.module.css'
import ReactPlayer from "react-player";
import { useEffect } from 'react';
import Image from 'next/image'

const EventDesktop = ({setLeaveAlert, submitPost, posts, handleChange}) => {

    useEffect(()=>{
        const chat_container = document.getElementById('chat_container')
        const content_chat = document.getElementById('content_chat')
        if (chat_container) {
            chat_container.scrollTo(0, content_chat.offsetHeight)
            console.log(content_chat.offsetHeight)
        }
    })

    return (
        <article className={style.eventDesktop_container}>
            <section className={style.button_section}>
                <div className={style.button_close} title='Salir del evento' onClick={()=>setLeaveAlert(true)}><i className="fas fa-sign-out-alt"></i></div>
            </section>
            <section className={style.live_section}>
                <div className={style.side_live}>
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
                    </div>
                </div>
                <div className={style.side_chat}>
                    <div className={style.chat_box}>
                        <div className={style.chat_div}>
                            <div className={style.logo_chat_container}>
                                <div className={style.logo_img}>
                                    <Image src="/logo/logo_blanco.png" alt="Maridaje club" objectFit='contain' layout='fill'/>
                                </div>
                            </div>
                            {
                                posts.length === 0 ?
                                (
                                    <div className={style.first_comment}>
                                        <p>Ups! Parece que nadie ha escrito nada, ¡se tú el primero!</p>
                                    </div>
                                )
                                :
                                (
                                    <div className={style.chat_container} id="chat_container">
                                        <div className={style.content_chat} id="content_chat">
                                            {
                                                posts.reverse().map((e,i)=>(
                                                    <div className={style.chat} key={i}>
                                                        <div className={style.chat_msg}>
                                                            <div className={style.chat_msg_img}>
                                                                <Image src={e.photo} alt={e.user}  layout='fill' objectFit='contain'/>
                                                            </div>
                                                            <div className={style.chat_msg_text}>
                                                                <h5>{e.user}</h5>
                                                                <p>{e.msg}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            <form onSubmit={(e)=> submitPost(e)}>
                                <input type="text" placeholder="Escribe un mensaje aquí..." onChange={(e)=>handleChange(e)}/>
                                <button>Publicar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default EventDesktop;