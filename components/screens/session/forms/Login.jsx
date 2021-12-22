import styles from '../../../../styles/screens/session/forms/Login.module.css'

const Login = ({setLogin}) => {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <h4>Iniciar Sesión</h4>
            </div>
            <div className={styles.fields_container}>
                <div className={styles.fields}>
                    <label htmlFor="username">Nombre/email</label>
                    <input type="text" id='username' placeholder='Nombre de usuario'/>
                </div>
                <div className={styles.fields}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' placeholder='*******'/>
                </div>
            </div>
            <div className={styles.forget_password}>
                <a href="">Olvidaste tu contraseña?</a>
            </div>
            <div className={styles.button_container}>
                <button>Ingresar</button>
            </div>
            <div className={styles.register} onClick={()=> setLogin(false)}>
                Registrarse
            </div>
            <div className={styles.social_media_register}>
                <div className={styles.social_button}><i className="fab fa-google"></i> <span>Google</span></div>
                <div className={styles.social_button}><i className="fab fa-facebook-f"></i> <span>Facebook</span></div>
            </div>
        </form>
    );
};

export default Login;