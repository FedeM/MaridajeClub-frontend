import Login from "./forms/Login";
import styles from '../../../styles/screens/session/Session.module.css'
import Register from "./forms/Register";
import { useState } from "react/cjs/react.development";

const Session = ({}) => {

    const [login, setLogin] = useState(true)

    return (
        <section className={styles.session_section}>
            <div className={styles.session_container}>
                <div className={styles.title_container}>
                    <h3>Bienvenid@ a Maridaje Club</h3>
                </div>
                <div className={styles.form_container}>
                {
                    login ?
                    (<Login setLogin={setLogin}/>)
                    :
                    (<Register setLogin={setLogin}/>)
                }
                </div>
            </div>
        </section>
    );
};

export default Session;