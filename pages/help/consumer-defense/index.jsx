import React from 'react';

import {Layout} from '../../../components/layout'
import style from '../../../styles/pages/Help.module.css'

const index = () => {
    return (
        <Layout
            title="Defensa al consumidor"
            description="Defensa al consumidor de Maridaje Club"
            nav
            footer
        >
            <article className={style.article}>
                Defensa al consumidor
            </article>
        </Layout>
    );
};

export default index;