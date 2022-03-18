import styles from './Login.module.css'
import { useState } from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorInput } from '../../../common';

import { authenticate, signIn } from '../../../../lib/auth';

import { Loader } from '../../../common';


const Login = ({setLogin}) => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    //Variables iniciales
    const initialValues = {
        username: "",
        password: ""
    }

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        username: Yup.string().required(emptyInputMsg).trim(),
        password: Yup.string().required(emptyInputMsg).trim(),
    })

    //Enviar datos al backend
    const onSubmit = async (values)=> {
        setLoader(true)
        try {
            await signIn({
                username: values.username, 
                password: values.password
            }, ()=> authenticate({name: values.name, email: values.email}, ()=> window.location.href = "/"))
            setError(false)
        } catch (error) {
            setLoader(false)
            setError(error)
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
        <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
        >
            {
                ({errors})=>(
                    <Form className={styles.form}>
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
                            error &&(
                                <div className={styles.error}>
                                    {error}
                                </div>
                            )
                        }
                        <div className={styles.fields_container}>
                            <div className={styles.fields}>
                                <label htmlFor="username">Nombre/email</label>
                                <Field name="username" type="text" id='username' placeholder='Nombre de usuario'/>
                                <ErrorMessage name='username' component={()=>(<ErrorInput error={errors.username}/>)}/>
                            </div>
                            <div className={styles.fields}>
                                <label htmlFor="password">Contraseña</label>
                                <Field name="password" type="password" id='password' placeholder='*********'/>
                                <ErrorMessage name='password' component={()=>(<ErrorInput error={errors.password}/>)}/>
                            </div>
                        </div>
                        <div className={styles.forget_password}>
                            <a href="">Olvidaste tu contraseña?</a>
                        </div>
                        <div className={styles.button_container}>
                            <button type='submit'>
                                {
                                    loader ?(
                                        <Loader size={"1.3rem"} style={{position: "relative"}}/>
                                    ):(
                                        "Ingresar"
                                    )
                                }
                            
                            </button>
                        </div>
                        <div className={styles.register} onClick={()=> setLogin(false)}>
                            Registrarse
                        </div>
                    </Form>
                )
            }
        </Formik>
        </>
    );
};

export default Login;