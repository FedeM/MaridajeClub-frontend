import { useState } from "react/cjs/react.development";
import Layout from "../../components/layout/Layout";
import Session from "../../components/screens/session/Session";

const index = () => {
    const [navHeigth, setNavHeigth] = useState()

    return (
        <Layout
            title={"Login"}
            description={"Login de Maridaje Club"}
            setNavHeigth={setNavHeigth}
        >
            <article style={{marginTop:`${navHeigth}px`}}>
                <Session/>
            </article>
        </Layout>
    );
};

export default index;