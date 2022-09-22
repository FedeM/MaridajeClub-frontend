import style from '../styles/pages/Index.module.css'

import {useEffect, useState} from 'react'

import { Layout } from '../components/layout'
import {Home, Wineries, Ecommerce, Events} from '../components/views/index'
import { LoadingTab } from '../components/common' //Pantalla de carga

import { getAllProducts } from '../lib/service/products'
import { getAllEvents } from '../lib/service/events'

import { isMobile } from 'react-device-detect'


export default function Index({allProducts, allEvents}) {

  const [mounted, setMounted] = useState(false)
  const [enterEvent, setEnterEvent] = useState({
    activate: false,
    eventId: "",
    eventUrl: "",
    eventIsLive: false
  })


  useEffect(()=>{
    setMounted(true)

    if(enterEvent.activate){
      document.querySelector('body').style.overflowY="hidden"
    }else{
      document.querySelector('body').style.overflowY="auto"
    }

  }, [mounted, enterEvent])

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
          setEnterEvent={setEnterEvent}
          allEvents={allEvents}
        />
        <Wineries id="winaries"/>
        <Ecommerce
          home
          id="commerce"
          allProducts={allProducts}
        />
        {
          enterEvent.activate &&(
            <Events
              enterEvent={enterEvent}
              setEnterEvent={setEnterEvent}
            />
          )
        }
      </article>
    </Layout>
  )
}


export async function getStaticProps(context){
  let allProducts
  let allEvents

  try {
    allProducts = await getAllProducts({
      _page: 1,
      _limit: 12
    })
    allEvents = await getAllEvents()
    allEvents = allEvents.data

  } catch (error) {
    return{
      notFound: true
    };
  }

  return{
    props: {
      allProducts,
      allEvents
    },
    revalidate: 60
  }
}