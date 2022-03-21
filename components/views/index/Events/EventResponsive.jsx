import style from './EventResponsive.module.css'
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import { ChatResponsive, ShopEventResponsive } from '../..';
import { getAllProducts } from '../../../../lib/service/products';


const EventResponsive = ({submitPost, posts, handleChange, close, event}) => {
    const [openShop, setOpenShop] = useState(false)
    const [paused, setPaused] = useState(false)
    const [products, setProducts] = useState([])
    console.log(event.eventId)

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
        <div className={`${style.live_background}`}>
            <div className={`${style.live_container} animate__animated animate__slideInRight`}>
                <iframe 
                    className={style.live}    
                    width="100%" 
                    height="100%" 
                    src="https://www.instagram.com/fedetest13/live/18101408287304905?utm_medium=share_sheet" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen={false}
                ></iframe>
                {event.eventIsLive &&(<span className={style.live_alert}>En vivo</span>)}
                <div className={style.live_close} onClick={()=> close()}>X</div>
                    <div className={style.pauseBottom}>
                        {
                            paused ?(
                                <i className="fas fa-play" onClick={()=> setPaused(false)}></i>
                            ):(
                                <i className="fas fa-pause" onClick={()=> setPaused(true)}></i>
                            )
                        }
                    </div>
                <ChatResponsive
                    submitPost={submitPost}
                    posts={posts}
                    handleChange={handleChange}
                />
                <div className={style.options_buttons}>
                    <span onClick={()=> setOpenShop(true)}><i className="fas fa-shopping-bag"></i></span>
                </div>
            </div>
            {
                openShop &&(
                    <ShopEventResponsive 
                        close={()=> setOpenShop(false)}
                        products={products}
                    />
                )
            }
        </div>
    );
};

export default EventResponsive;