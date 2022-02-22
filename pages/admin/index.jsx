import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout';
import { isAuthenticate } from '../../lib/auth';
import { user } from '../../lib/user';

const Index = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    }, [mounted])

    return isAuthenticate() && user.role === 1 && mounted &&(
        <Layout
            title={"Administración"}
            description={"Administración de maridaje Club"}
        >
            <div></div>
        </Layout>
    );
};

export default Index;