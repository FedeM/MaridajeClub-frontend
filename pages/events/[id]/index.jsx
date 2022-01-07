import Layout from "../../../components/layout/Layout";
import { BrowserView, MobileView} from 'react-device-detect';
import EventResponsive from "../../../components/screens/events/EventResponsive";
import EventDesktop from "../../../components/screens/events/EventDesktop";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from '../../../styles/screens/events/Event.module.css'
import Router from "next/router";
import Image from 'next/image'
import { isAuthenticate } from "../../../lib/auth";

//Variables de prueba
const user = {
    name:"santillienzo",
    photo:"/assets/img/profile/user.png"
}

const Index = () => {
    const [mounted, setMounted] = useState(false)
    const [leaveAlert, setLeaveAlert] = useState(false)
    const [post, setPost] = useState({
        photo: "",
        user: "",
        msg:""
    })
    const [posts, setPosts] = useState([])

    const leave = ()=>{
        return leaveAlert && (
            <div className={style.modal_container}>
                <div className={style.modal}>
                    <div className={style.modal_icon}>
                        <Image src="/assets/img/icon/stop.png" alt="Icono stop" layout="fill" objectFit="contain"/>
                    </div>
                    <div className={style.modal_text}>
                        <h3>¡Momento!</h3>
                        <p>¿Estás seguro que deseas salir del evento?</p>
                    </div>
                    <div className={style.modal_buttons}>
                        <div className={style.modal_button} onClick={()=>setLeaveAlert(false)}>Cancelar</div>
                        <Link href="/">
                            <a className={style.modal_button} onClick={()=> {
                                setLeaveAlert(false)
                                Router.push('/')
                            }}>Salir</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const handleChange = (e)=>{
        const {value} = e.target;
        setPost({
            photo:user.photo,
            user:user.name,
            msg:value
        })
    }

    const submitPost = (e)=>{
        e.preventDefault()
        setPosts([...posts,{
            photo: post.photo,
            user: post.user,
            msg: post.msg
        }])
        e.target.reset()
    }



    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted && isAuthenticate() &&(
        <Layout
            title={"Video 1"}
            description={"Descripción video"}
        >
            <MobileView>
                <EventResponsive 
                    setLeaveAlert={setLeaveAlert}
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                />
            </MobileView>
            <BrowserView>
                <EventDesktop 
                    setLeaveAlert={setLeaveAlert}
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                />
            </BrowserView>
            {leave()}
        </Layout>
    );
};

export default Index;