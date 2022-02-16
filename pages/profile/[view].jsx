import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout'
import { MyShop, Orders, PersonalData, ProfileHome, Purchase, Sidebar } from '../../components/views';

import { isAuthenticate } from '../../lib/auth';
import style from '../../styles/pages/Profile.module.css'

import { useRouter } from 'next/router';
import { user } from '../../lib/user';


const Index = () => {
    const [mounted, setMounted] = useState(false)
    const router = useRouter()
    const { view } = router.query

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
            <article className={style.article}>
                <Sidebar/>
                {
                    view === "home" ?(
                        <ProfileHome/>
                    ): view === "personal-data" ?(
                        <PersonalData/>
                    ): view === "purchase" ?(
                        <Purchase/>
                    ): view === "shop" && user.role === 1 ?(
                        <MyShop/>
                    ): view === "orders" && user.role === 1 ?(
                        <Orders/>
                    ):('')
                }
            </article>
        </Layout>
    );
};

export default Index;