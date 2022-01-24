import style from './ChatDesktop.module.css'
import Image from 'next/image'
import { useEffect } from 'react';


const ChatDesktop = ({open, setOpen, posts, submitPost, handleChange}) => {


    useEffect(()=>{
        const chat_container = document.getElementById('chat_container')
        const content_chat = document.getElementById('content_chat')
        if (chat_container) {
            chat_container.scrollTo(0, content_chat.offsetHeight)
            console.log(content_chat.offsetHeight)
        }
    })

    return (
        <div className={style.side_chat} style={open.chat ? ({left: '100%'}):({left: 0})}>
            <span className={style.close_chat} onClick={()=> setOpen({...open, chat: false})}><i className="fas fa-chevron-left"></i></span>
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
    );
};

export default ChatDesktop;