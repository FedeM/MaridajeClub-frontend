import React from 'react';
import { Layout } from '../../../components/layout';
import { Terms } from '../../../components/views';

import style from '../../../styles/pages/Help.module.css'

const index = () => {
    return (
        <Layout
            title={'Terminos y condiciones'}
            description='Terminos y condiciones de Maridaje Club'
            nav
            footer
        >
            <article className={style.article}>
                <Terms/>
            </article>
        </Layout>
    );
};

export default index;