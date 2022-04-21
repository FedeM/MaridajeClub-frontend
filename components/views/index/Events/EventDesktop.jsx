import style from './EventDesktop.module.css'
import { useEffect, useState } from 'react';
import { ChatDesktop, ShopEventDesktop } from '../..';
import { getAllProducts } from '../../../../lib/service/products';

const EventDesktop = ({submitPost, posts, handleChange, close, event}) => {
    const [open, setOpen] = useState({
        chat: false,
        shop: false
    })
    const [paused, setPaused] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        Promise.all([
            getAllProducts()
        ]).then(([products])=>{
            setProducts(products.filter(e=>{
                if (e.event_id === event.eventId) {
                    return true
                }
                return false
            }))
        }).catch(err=>{
            new Error(err)
            console.log(err)
        })
    }, [])

    return (
        <article className={style.eventDesktop_container}>
            <section className={style.live_section}>
                <div className={style.side_live}>
                    <div className={style.live_container} >

                    {/* ********************************************************** */}
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.instagram.com/fedetest13/live/18101408287304905?utm_medium=share_sheet" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen={false}
                        ></iframe>
                    {/* ********************************************************** */}

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
                        products={products}
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