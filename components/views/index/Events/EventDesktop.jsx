import style from './EventDesktop.module.css'
import ReactPlayer from "react-player";
import { useState } from 'react';
import { ChatDesktop, ShopEventDesktop } from '../..';

const EventDesktop = ({submitPost, posts, handleChange, close, event}) => {
    const [open, setOpen] = useState({
        chat: false,
        shop: false
    })
    const [paused, setPaused] = useState(false)

    return (
        <article className={style.eventDesktop_container}>
            <section className={style.live_section}>
                <div className={style.side_live}>
                    <div className={style.live_container} >
                        <ReactPlayer
                            id="live"
                            className={style.live}
                            url={event.eventUrl}
                            playing={paused ? (false):(true)}
                            loop
                            width={'100%'}
                            height={'100%'}
                        />
                        {event.eventIsLive &&(<span className={style.live_alert}>En vivo</span>)}
                        <div className={style.pauseBottom}>
                            {
                                paused ?(
                                    <i className="fas fa-play" onClick={()=> setPaused(false)}></i>
                                ):(
                                    <i className="fas fa-pause" onClick={()=> setPaused(true)}></i>
                                )
                            }
                        </div>
                        <div className={style.options_buttons}>
                            <span onClick={()=>close()}><i className="fas fa-times"></i></span>
                            <span onClick={()=> setOpen({...open, chat: true})} style={open.chat ? ({opacity: 0}):({opacity: 1})}><i className="far fa-comments"></i></span>
                            <span onClick={()=> setOpen({...open, shop: true})} style={open.shop ? ({opacity: 0}):({opacity: 1})}><i className="fas fa-shopping-bag"></i></span>
                        </div>
                        <div className={style.controls}>
                            <div>
                                {
                                    paused ?(
                                        <i className="fas fa-play" onClick={()=> setPaused(false)}></i>
                                    ):(
                                        <i className="fas fa-pause" onClick={()=> setPaused(true)}></i>
                                    )
                                }
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <ShopEventDesktop
                        open={open}
                        setOpen={setOpen}
                    />
                    <ChatDesktop
                        open={open}
                        setOpen={setOpen}
                        submitPost={submitPost}
                        posts={posts}
                        handleChange={handleChange}
                    />
                </div>
            </section>
        </article>
    );
};

export default EventDesktop;