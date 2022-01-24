import {useEffect, useState} from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Layout } from '../components/layout'
import {Home, Wineries, Ecommerce, EventResponsive, EventDesktop} from '../components/views/index'
import style from '../styles/pages/Index.module.css'
import { isAuthenticate } from "../lib/auth";

import cryptoRandomString from 'crypto-random-string';

let id = cryptoRandomString({length: 10, type: 'alphanumeric'});

const user = {
  name: isAuthenticate() ? (isAuthenticate().username):(`user${id}`),
  photo:"/assets/img/profile/user.png",
  role: 0
}

const welcomeMsgs = !isAuthenticate() ?([{
  photo: "/assets/img/profile/robot.png",
  user: "Pepe",
  msg: "Hola! Bienvenid@ al chat de Maridaje Club, me llamo Pepe y soy uno de los administradores.",
  role: 1
},{
  photo: "/assets/img/profile/robot.png",
  user: "Pepe",
  msg: `Por lo visto no has iniciado sesión, asique se te asignará un nombre de usuario único para que puedas comentar! Si deseas utilizar tu nombre inicia sesión!`,
  role: 1
}]):(
  [{
    photo: "/assets/img/profile/robot.png",
    user: "Pepe",
    msg: `Hola ${user.name}! Bienvenido nuevamente al chat de Maridaje Club. Comenta algo!`,
    role: 1
  }]
)

export default function Index() {
  const [mounted, setMounted] = useState(false)
  const [enterEvent, setEnterEvent] = useState(false)
  const [post, setPost] = useState({
      photo: "",
      user: "",
      msg:"",
      role: 0
  })
  const [posts, setPosts] = useState(welcomeMsgs)

  const handleChange = (e)=>{
    const {value} = e.target;
    setPost({
        photo:user.photo,
        user:user.name,
        msg:value,
        role: user.role
    })
  }

  const submitPost = (e)=>{
      e.preventDefault()
      if(post.msg.length > 0){
        setPosts([...posts,{
            photo: post.photo,
            user: post.user,
            msg: post.msg,
            role: post.role
        }])
      }
      e.target.reset()
      setPost({
        ...post,
        msg:""
      })
  }

  useEffect(()=>{
    setMounted(true)
  }, [mounted])


  return mounted &&(
    <Layout
      title="Home"
      description="Descripción"
      home
      nav
      footer
      cart
    >
      <article className={style.article}>
        <Home
          id="home"
          paddingTop={"15vh"}
          enterEvent={()=> setEnterEvent(true)}
        />
        <Wineries id="winaries"/>
        <Ecommerce
          home
          id="commerce"
        />
        {
          enterEvent &&(
            <>
              <MobileView>
                <EventResponsive
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                    close={()=> setEnterEvent(false)}
                />
              </MobileView>
              <BrowserView>
                <EventDesktop
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                    close={()=> setEnterEvent(false)}
                />
              </BrowserView>
            </>
          )
        }
      </article>
    </Layout>
  )
}