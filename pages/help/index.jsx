import React from 'react';
import {Layout} from '../../components/layout'
import { FAQ } from '../../components/views';

import style from '../../styles/pages/Help.module.css'

const index = () => {
    return (
        <Layout
            title="Ayuda"
            description={'Ayuda'}
            nav
            footer
        >
            <article className={style.article}>
                <FAQ/>
            </article>
        </Layout>
    );
};

export default index;