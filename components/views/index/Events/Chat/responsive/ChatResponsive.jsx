import { useEffect } from 'react';
import style from './ChatResponsive.module.css'
import Image from 'next/image'


const ChatResponsive = ({submitPost, posts, handleChange}) => {

    useEffect(()=>{
        const chat_container = document.getElementById('chat_container')
        const content_chat = document.getElementById('content_chat')
        if (chat_container) {
            chat_container.scrollTo(0, content_chat.offsetHeight)
        }
    })

    return (
        <div className={style.chat}>
            <div className={style.chat_container} id='chat_container'>
                <div className={style.content_chat} id="content_chat">
                    {
                        posts.map((e,i)=>(
                            <div className={style.chat_msg} key={i}>
                                <div className={style.chat_msg_img}>
                                    <Image src={e.photo} alt={e.user} layout='fill' objectFit='contain' />
                                </div>
                                <div className={e.role === 0 ?(`${style.chat_msg_text}`):(`${style.chat_msg_text} ${style.admin_text}`)}>
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
    );
};

export default ChatResponsive;