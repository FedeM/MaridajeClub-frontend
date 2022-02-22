import styles from './Session.module.css'

import Login from "./forms/Login";
import Register from "./forms/Register";
import { useState } from "react";

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