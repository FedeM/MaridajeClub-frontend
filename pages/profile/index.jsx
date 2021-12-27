import style from '../../styles/screens/profile/Index.module.css'

import UserInfo from "../../components/screens/profile/userInfo/UserInfo";
import Layout from '../../components/layout/Layout'
import { useState } from "react";
import Shopping from "../../components/screens/profile/Shopping/Shopping";

const index = () => {
    const [navHeigth, setNavHeigth] = useState()

    return (
        <Layout
            title={'Profile'}
            description={'Descripción del perfil'}
            setNavHeigth={setNavHeigth}
        >
            <article style={{paddingTop:`15vh`}} className={style.article}>
                <UserInfo/> 
                <Shopping/>
            </article>
        </Layout>
    );
};

export default index;