import styles from './Login.module.css'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { authenticate } from '../../../../lib/auth';
import { Loader } from '../../../common';

const Login = ({setLogin}) => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        error: "",
        loading: false
    })
    const {username, password} = values;

    const handleChange = (name, e)=>{
        setValues({...values, error:false, [name]: e.target.value})
    }

    const submitForm = (e)=>{
        e.preventDefault()
        if (username.length != 0 && password != 0) {
            setValues({...values,loading: true})

            //LLAMAR AL BACKEND Y DENTRO DE LA FUNCIÓN COLOCAR LO SIGUIENTE
            authenticate({username, password}, ()=>{
                window.location.href = "/"
            })

        }else{
            setValues({...values, error:"Por favor rellena los campos"})
        }
    }

    const signInWithSocialMedia = (email = "enzo135246@gmail.com", username, password, photo = false)=>{
        //Enviar al backend
        authenticate({email, username, password, photo}, ()=>{
            window.location.href = "/"
        })
    }

    const responseFacebook = (response) => {
        signInWithSocialMedia(response.email, response.name, response.accessToken, response.picture.data.url)
    }

    const responseGoogle = (response) => {
        const res = response.profileObj
        signInWithSocialMedia(res.email, res.name, response.accessToken, res.imageUrl)
    }


    return (
        <>  
        {
            values.loading &&(
                <Loader
                    size={100}
                    style={{position: "fixed", top: "calc(50% - 50px)", left:"calc(50% - 50px)"}}
                />
            )
        }
            <form className={styles.form} onSubmit={(e)=>submitForm(e)}>
                <div className={styles.title}>
                    <h4>Iniciar Sesión</h4>
                </div>
                <div className={styles.social_media_register}>
                    <GoogleLogin
                        clientId="562820573281-vcod58jbo8ianekgcf8fufrdqqqsq4l9.apps.googleusercontent.com"
                        buttonText="Login"
                        render={renderProps=>(
                            <div onClick={renderProps.onClick} className={styles.social_button}><i  aria-hidden className="fab fa-google"></i> <span>Iniciar sesión con Google</span></div>
                        )}
                        onSuccess={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        appId="2261506954147846"
                        fields="name,email,picture"
                        callback={responseFacebook} 
                        autoLoad={false}
                        render={renderProps=>(
                            <div onClick={renderProps.onClick} className={styles.social_button}><i  aria-hidden className="fab fa-facebook-f"></i> <span>Iniciar sesión con Facebook</span></div>
                        )}
                    />
                </div>
                <div className={styles.form_div}>
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                {
                    values.error.length > 0 &&(
                        <div className={styles.error}>
                            {values.error}
                        </div>
                    )
                }
                <div className={styles.fields_container}>
                    <div className={styles.fields}>
                        <label htmlFor="username">Nombre/email</label>
                        <input type="text" id='username' placeholder='Nombre de usuario' onChange={(e)=> handleChange("username",e)}/>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id='password' placeholder='*********' onChange={(e)=> handleChange("password",e)}/>
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
            </form>
        </>
    );
};

export default Login;