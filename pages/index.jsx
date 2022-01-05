import Ecommerce from '../components/screens/index/ecommerce/Ecommerce'
import Home from '../components/screens/index/home/Home'
import Layout from '../components/layout/Layout'
import Wineries from '../components/screens/index/wineries/Wineries'
import About from '../components/screens/index/about/About'
import style from '../styles/screens/index/Index.module.css'

export default function Index({data}) {


  return (
    <Layout
      title="Home"
      description="Descripción"
      home
      nav
      footer
    >
      <article className={style.article}>
        <Home
          id="home"
          paddingTop={"15vh"}
        />
        <Wineries id="winaries"/>
        <About id="about"/>
        <Ecommerce
          home
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
