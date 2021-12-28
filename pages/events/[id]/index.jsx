import Layout from "../../../components/layout/Layout";
import { BrowserView, MobileView} from 'react-device-detect';
import EventResponsive from "../../../components/screens/events/EventResponsive";
import EventDesktop from "../../../components/screens/events/EventDesktop";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Link from "next/link";
import style from '../../../styles/screens/events/Event.module.css'
import { Router } from "next/router";


const index = () => {
    const [mounted, setMounted] = useState(false)
    const [leaveAlert, setLeaveAlert] = useState(false)

    const leave = ()=>{
        return leaveAlert && (
            <div className={style.modal_container}>
                <div className={style.modal}>
                    <div className={style.modal_icon}>
                        <img src="/assets/img/icon/stop.png" alt="" />
                    </div>
                    <div className={style.modal_text}>
                        <h3>¡Momento!</h3>
                        <p>¿Estás seguro que deseas salir del evento?</p>
                    </div>
                    <div className={style.modal_buttons}>
                        <div className={style.modal_button} onClick={()=>setLeaveAlert(false)}>Cancelar</div>
                        <Link href="/">
                            <a className={style.modal_button} onClick={()=> {
                                Router.push('/')
                                setLeaveAlert(false)
                            }}>Salir</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && (
        <Layout
            title={"Video 1"}
            description={"Descripción video"}
        >
            <MobileView>
                <EventResponsive setLeaveAlert={setLeaveAlert}/>
            </MobileView>
            <BrowserView>
                <EventDesktop setLeaveAlert={setLeaveAlert}/>
            </BrowserView>
            {leave()}
        </Layout>
    );
};

export default index;