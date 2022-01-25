import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout'

import {UserInfo, Purchase} from '../../components/views'
import { isAuthenticate } from '../../lib/auth';
import style from '../../styles/pages/Profile.module.css'


const Index = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    }, [mounted])

    return isAuthenticate() && mounted &&(
        <Layout
            title={'Profile'}
            description={'Descripción del perfil'}
            nav
            footer
            cart
        >
            <article style={{paddingTop:`15vh`}} className={style.article}>
                <UserInfo/> 
                <Purchase/>
            </article>
        </Layout>
    );
};

export default Index;