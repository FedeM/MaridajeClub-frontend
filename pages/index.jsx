import { Layout } from '../components/layout'
import {Home, Wineries, About, Ecommerce} from '../components/views/index'
import style from '../styles/pages/Index.module.css'

export default function Index() {


  return (
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