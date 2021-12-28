import style from '../../../styles/screens/events/EventDesktop.module.css'
import ReactPlayer from "react-player";
import Link from 'next/link'
import { useState } from 'react';

const EventDesktop = ({setLeaveAlert}) => {


    return (
        <article className={style.eventDesktop_container}>
            <section className={style.button_section}>
                <div className={style.button_close} onClick={()=>setLeaveAlert(true)}><i class="fas fa-sign-out-alt"></i></div>
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
                            <div className={style.chat_container}>
                                <div className={style.chat}>
                                    <div className={style.chat_msg}>
                                        <div className={style.chat_msg_img}>
                                            <img src="/assets/img/profile/user.png" alt="" />
                                        </div>
                                        <div className={style.chat_msg_text}>
                                            <h5>manumoretta</h5>
                                            <p>Holaaa, bienvenidos a MaridajeClub!!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.chat}>
                                    <div className={style.chat_msg}>
                                        <div className={style.chat_msg_img}>
                                            <img src="/assets/img/profile/user.png" alt="" />
                                        </div>
                                        <div className={style.chat_msg_text}>
                                            <h5>manumoretta</h5>
                                            <p>Holaaa, bienvenidos a MaridajeClub!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <input type="text" placeholder="Escribe un mensaje aquí..."/>
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