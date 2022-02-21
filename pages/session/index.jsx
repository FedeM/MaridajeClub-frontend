import { Layout } from "../../components/layout";
import {Session} from "../../components/views";

import { isAuthenticate } from "../../lib/auth";
import style from '../../styles/pages/Index.module.css'

const Index = () => {

    return isAuthenticate() == false &&(
        <Layout
            title={"Login"}
            description={"Login de Maridaje Club"}
            nav
            footer
            cart
        >
            <article className={style.article}>
                <Session/>
            </article>
        </Layout>
    );
};

export default Index;