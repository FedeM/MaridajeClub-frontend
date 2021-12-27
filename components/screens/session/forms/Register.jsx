import styles from '../../../../styles/screens/session/forms/Login.module.css'

const Register = ({setLogin}) => {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <h4>Crear cuenta</h4>
            </div>
            <div className={styles.fields_container}>
                <div className={styles.fields}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id='username' placeholder='Nombre de usuario'/>
                </div>
                <div className={styles.field_confirm}>
                    <div className={styles.fields}>
                        <label htmlFor="username">Correo electrónico</label>
                        <input type="text" id='username' placeholder='user@gmail.com'/>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="username">Confirmar correo electrónico</label>
                        <input type="text" id='re-username' placeholder='user@gmail.com'/>
                    </div>
                </div>
                <div className={styles.field_confirm}>
                    <div className={styles.fields}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id='password' placeholder='*******'/>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="password">Confirmar contraseña</label>
                        <input type="password" id='re-password' placeholder='*******'/>
                    </div>
                </div>
            </div>
            <div className={styles.button_container}>
                <button>Registrarse</button>
            </div>
            <div className={styles.register} onClick={()=> setLogin(true)}>
                Ya tengo una cuenta
            </div>
            <div className={styles.social_media_register}>
                <div className={styles.social_button}><i className="fab fa-google"></i> <span>Google</span></div>
                <div className={styles.social_button}><i className="fab fa-facebook-f"></i> <span>Facebook</span></div>
            </div>
        </form>
    );
};

export default Register;