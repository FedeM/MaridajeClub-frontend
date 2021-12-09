import { useState } from 'react'
import Live from '../components/home/Live'
import Layout from '../components/layout/Layout'


export default function Home({data}) {

  const [navHeigth, setNavHeigth] = useState()

  return (
    <Layout
      title="Home"
      description="Descripción"
      setNavHeigth={setNavHeigth}
    >
      <article style={{marginTop:`${navHeigth}px`}}>
        <Live
          data={data}
          id="home"
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
