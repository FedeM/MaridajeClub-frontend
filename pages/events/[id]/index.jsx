import { Layout } from '../../../components/layout'
import { EventDesktop, EventResponsive } from '../../../components/views';


import { BrowserView, MobileView} from 'react-device-detect';
import { useState, useEffect } from "react";
import Router from "next/router";
import { isAuthenticate } from "../../../lib/auth";
import { AlertModal } from '../../../components/common';

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
            <AlertModal
                img={"/assets/img/icon/stop.png"}
                title="¡Momento!"
                alert="¿Estás seguro que deseas salir del evento?"
                btnText="Salir"
                closeCallback={()=>{
                    setLeaveAlert(false)
                }}
                callback= {()=>{
                    Router.push('/')
                }}
            />
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