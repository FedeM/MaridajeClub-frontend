import {useEffect, useState} from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Layout } from '../components/layout'
import {Home, Wineries, Ecommerce, EventResponsive, EventDesktop} from '../components/views/index'
import style from '../styles/pages/Index.module.css'
import { isAuthenticate } from "../lib/auth";

const user = {
  name: isAuthenticate().username,
  photo:"/assets/img/profile/user.png"
}

export default function Index() {
  const [mounted, setMounted] = useState(false)
  const [enterEvent, setEnterEvent] = useState(false)
  const [post, setPost] = useState({
      photo: "",
      user: "",
      msg:""
  })
  const [posts, setPosts] = useState([])

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