import styles from './Login.module.css'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import { Loader } from '../../../common';


import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorInput } from '../../../common';
import { useState } from 'react';
import { authenticate, signUp } from '../../../../lib/auth';

const Register = ({setLogin}) => {
    const [compareValues, setCompareValues] = useState({
        email: "",
        password: ""
    })
    const [loader, setLoader] = useState(false)

    let expEmail = new RegExp("^"+ compareValues.email + "$");
    let expPassword = new RegExp("^"+ compareValues.password + "$")

    //Valores Iniciales
    const initialValues = {
        name: "",
        email: "",
        _email: "",
        password: "",
        _password: ""
    }

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(emptyInputMsg).max(10, "El nombre tiene que tener un máximo de 10 carácteres").matches(/^[a-zA-Z0-9_.-]{1,10}$/, "El nombre de usuario solo debe contener: letras (minusculas/mayúsculas sin acentos); números; carácteres especiales (solo . _ -)").trim(),
        email: Yup.string().required(emptyInputMsg).email("Por favor utiliza el formato 'user@gmail.com'").trim(),
        _email: Yup.string().required(emptyInputMsg).matches(expEmail, "Los correos tienen que coincidir").trim(),
        password: Yup.string().required(emptyInputMsg).matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, "La contraseña debe tener, al menos, lo siguiente:Entre 8 y 16 dígitos, 1 letra mayúscula, 1 letra minúscula, 1 número").trim(),
        _password: Yup.string().required(emptyInputMsg).matches(expPassword, "Las contraseñas tienen que coincidir").trim()
    })

    //Enviar datos al backend
    const onSubmit = (values)=> {
        setLoader(true)
        signUp({
            name: values.name,
            email: values.email,
            password: values.password,
            photo: "",
            phone: "",
            address: "",
            role_id: 1
        }, ()=>{
            authenticate({name: values.name, email: values.email}, ()=> window.location.href = "/")
        })
    }



    const registerWithSocialMedia = (email, username, password)=>{
        //Enviar al backend
    }

    const responseFacebook = (response) => {
        registerWithSocialMedia(response.email, response.name, response.accessToken)
    }

    const responseGoogle = (response) => {
        const res = response.profileObj
        registerWithSocialMedia(res.email, res.name, response.accessToken)
    }

    return (
        <>
        <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
        >
            {
                ({errors, setFieldValue})=>(
                    <Form className={styles.form}>
                        <div className={styles.title}>
                            <h4>Crear cuenta</h4>
                        </div>
                        <div className={styles.social_media_register}>
                            <GoogleLogin
                                clientId="562820573281-vcod58jbo8ianekgcf8fufrdqqqsq4l9.apps.googleusercontent.com"
                                buttonText="Login"
                                render={renderProps=>(
                                    <div onClick={renderProps.onClick} className={styles.social_button}><i  aria-hidden className="fab fa-google"></i> <span>Registrarse con Google</span></div>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            <FacebookLogin
                                appId="2261506954147846"
                                fields="name,email,picture"
                                callback={responseFacebook} 
                                autoLoad={false}
                                render={renderProps=>(
                                    <div onClick={renderProps.onClick} className={styles.social_button}><i  aria-hidden className="fab fa-facebook-f"></i> <span>Registrarse con Facebook</span></div>
                                )}
                            />
                        </div>
                        <div className={styles.form_div}>
                            <div></div>
                            <p>Or</p>
                            <div></div>
                        </div>
                        <div className={styles.fields_container}>
                            <div className={styles.fields}>
                                <label htmlFor="name">Nombre de usuario</label>
                                <div className={styles.input_container}>
                                    <Field name="name" type="text" id='name' placeholder='Nombre de usuario'/>
                                    <div className={styles.input_help}>
                                        <i className="far fa-question-circle"></i>
                                        <p>El nombre de usuario solo debe contener: letras (minusculas/mayúsculas sin acentos); números; carácteres especiales (solo . _ -)</p>
                                    </div>
                                </div>
                                <ErrorMessage name='name' component={()=>(<ErrorInput error={errors.name}/>)}/>
                            </div>
                            <div className={styles.field_confirm}>
                                <div className={styles.fields}>
                                    <label htmlFor="email">Correo electrónico</label>
                                    <Field 
                                        name="email" 
                                        type="text" 
                                        id='email' 
                                        placeholder='user@gmail.com'
                                        value={undefined}
                                        onChange={(e)=>{
                                            setCompareValues({...compareValues, email: e.target.value})
                                            setFieldValue('email', e.target.value)
                                        }}
                                    />
                                    <ErrorMessage name='email' component={()=>(<ErrorInput error={errors.email}/>)}/>
                                </div>
                                <div className={styles.fields}>
                                    <label htmlFor="_email">Confirmar correo electrónico</label>
                                    <Field name="_email" type="text" id='_email' placeholder='user@gmail.com'/>
                                    <ErrorMessage name='_email' component={()=>(<ErrorInput error={errors._email}/>)}/>
                                </div>
                            </div>
                            <div className={styles.field_confirm}>
                                <div className={styles.fields}>
                                    <label htmlFor="password">Contraseña</label>
                                    <div className={styles.input_container}>
                                        <Field 
                                            name="password" 
                                            type="password" 
                                            id='password' 
                                            placeholder='*******'
                                            value={undefined}
                                            onChange={(e)=>{
                                            setCompareValues({...compareValues, password: e.target.value})
                                            setFieldValue('password', e.target.value)
                                        }}
                                        />
                                        <div className={styles.input_help}>
                                            <i className="far fa-question-circle"></i>
                                            <p>La contraseña debe tener, al menos, lo siguiente:Entre 8 y 16 dígitos, 1 letra mayúscula, 1 letra minúscula, 1 número</p>
                                        </div>
                                    </div>
                                    <ErrorMessage name='password' component={()=>(<ErrorInput error={errors.password}/>)}/>
                                </div>
                                <div className={styles.fields}>
                                    <label htmlFor="_password">Confirmar contraseña</label>
                                    <Field name="_password" type="password" id='_password' placeholder='*******'/>
                                    <ErrorMessage name='_password' component={()=>(<ErrorInput error={errors._password}/>)}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button_container}>
                            <button type='submit'>
                                {
                                    loader ?(
                                        <Loader size={"1.3rem"} style={{position: "relative"}}/>
                                    ):(
                                        "Registrarse"
                                    )
                                }
                            
                            </button>
                        </div>
                        <div className={styles.register} onClick={()=> setLogin(true)}>
                            Ya tengo una cuenta
                        </div>
                        
                    </Form>
                )
            }
        </Formik>
        </>
    );
};

export default Register;