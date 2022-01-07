import style from '../../styles/screens/profile/Index.module.css'
import UserInfo from "../../components/screens/profile/userInfo/UserInfo";
import Layout from '../../components/layout/Layout'
import Shopping from "../../components/screens/profile/Shopping/Shopping";
import { isAuthenticate } from '../../lib/auth';


const Index = () => {

    return isAuthenticate() &&(
        <Layout
            title={'Profile'}
            description={'Descripción del perfil'}
            nav
            footer
        >
            <article style={{paddingTop:`15vh`}} className={style.article}>
                <UserInfo/> 
                <Shopping/>
            </article>
        </Layout>
    );
};

export default Index;