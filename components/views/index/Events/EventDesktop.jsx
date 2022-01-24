import style from './EventDesktop.module.css'
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { ChatDesktop, ShopEventDesktop } from '../..';

const EventDesktop = ({submitPost, posts, handleChange, close}) => {
    const [open, setOpen] = useState({
        chat: false,
        shop: false
    })

    return (
        <article className={style.eventDesktop_container}>
            <section className={style.live_section}>
                <div className={style.side_live}>
                    <div className={style.live_container}>
                        <ReactPlayer
                            className={style.live}
                            url="/assets/video/videoWine.mp4"
                            playing
                            loop
                            muted
                            width={'100%'}
                            height={'100%'}
                        />
                        <span className={style.live_alert}>Live</span>
                        <div className={style.options_buttons}>
                            <span onClick={()=>close()}><i className="fas fa-times"></i></span>
                            <span onClick={()=> setOpen({...open, chat: true})} style={open.chat ? ({opacity: 0}):({opacity: 1})}><i className="far fa-comments"></i></span>
                            <span onClick={()=> setOpen({...open, shop: true})} style={open.shop ? ({opacity: 0}):({opacity: 1})}><i className="fas fa-shopping-bag"></i></span>
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