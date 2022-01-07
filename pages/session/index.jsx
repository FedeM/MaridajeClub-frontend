import Layout from "../../components/layout/Layout";
import Session from "../../components/screens/session/Session";
import { isAuthenticate } from "../../lib/auth";

const Index = () => {

    return isAuthenticate() == false &&(
        <Layout
            title={"Login"}
            description={"Login de Maridaje Club"}
            nav
            footer
        >
            <article style={{paddingTop:`15vh`}}>
                <Session/>
            </article>
        </Layout>
    );
};

export default Index;