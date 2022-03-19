import styles from './Live.module.css'
import { lazy, Suspense, useEffect } from 'react';
const ReactPlayer = lazy(()=> import('react-player'))
import {useState} from 'react'
import LiveEvent from './LiveEvent/LiveEvent';
import NextEvent from './LiveEvent/NextEvent';
import { MoreInfoModal } from '../../../..';

const Live = ({setEnterEvent, helpOpacity, homeEvent}) => {

    const [modalActivate, setModalActivate] = useState({
        activate:false,
        event: {},
        time:{},
        isNext: false
    })

    

    useEffect(()=>{
        if(modalActivate.activate){
            document.querySelector('body').style.overflowY="hidden"
        }else{
            document.querySelector('body').style.overflowY="auto"
        }
    }, [modalActivate])


    return (
        <div className={styles.live_box}>
            {
                modalActivate.activate && (
                    <MoreInfoModal
                        modalActivate={modalActivate}
                        close={()=> setModalActivate(false)}
                    />
                )
            }
            <div className={styles.live_wrapper} id='live'>
                {
                    homeEvent.inLiveEvent ?(
                        <LiveEvent event={homeEvent.inLiveEvent} enterEvent={setEnterEvent} helpOpacity={helpOpacity} setModalActivate={setModalActivate}/>
                    ): homeEvent.nextEvent ?(
                        <NextEvent event={homeEvent.nextEvent} helpOpacity={helpOpacity} setModalActivate={setModalActivate}/>
                    ): homeEvent.lastEvent ?(
                        <LiveEvent event={homeEvent.lastEvent} enterEvent={setEnterEvent} helpOpacity={helpOpacity} last setModalActivate={setModalActivate}/>
                    ):('')
                }
            </div>
        </div>
    );
};

export default Live;