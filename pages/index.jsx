import { useState } from 'react'
import Ecommerce from '../components/screens/index/ecommerce/Ecommerce'
import Live from '../components/screens/index/events/Live'
import Home from '../components/screens/index/home/Home'
import Layout from '../components/layout/Layout'
import Wineries from '../components/screens/index/wineries/Wineries'


export default function Index({data}) {

  const [navHeigth, setNavHeigth] = useState()

  return (
    <Layout
      title="Home"
      description="Descripción"
      setNavHeigth={setNavHeigth}
    >
      <article style={{marginTop:`${navHeigth}px`}}>
        <Home
          id="home"
        />
        <Wineries/>
        <Live
          data={data}
          id="events"
        />
        <Ecommerce
          id="commerce"
        />
      </article>
    </Layout>
  )
}

export async function getStaticProps(){
  try {
      const res = await fetch('http://localhost:3000/videos.json')
      const data = await res.json()
      return{
          props: {
              data
          }
      }
  } catch (error) {
      console.log(error)
  }
}
