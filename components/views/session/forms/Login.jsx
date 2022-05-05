import styles from './Login.module.css'
import { useState } from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorInput } from '../../../common';

import { authenticate, signIn } from '../../../../lib/auth';

import { Loader } from '../../../common';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = ({setLogin}) => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Variables iniciales
    const initialValues = {
        name: "",
        password: ""
    }

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(emptyInputMsg).trim(),
        password: Yup.string().required(emptyInputMsg).trim(),
    })

    //Enviar datos al backend
    const onSubmit = async (values)=> {
        const {name, password} = values
        setLoader(true)
        try {
            await signIn({
                name,
                password
            })
            setError(false)
        } catch (error) {
            setError(error)
            setLoader(false)
        }
    }

    const signInWithSocialMedia = (email = "enzo135246@gmail.com", name, password, photo = false)=>{
        //Enviar al backend
        authenticate({email, name, password, photo}, ()=>{
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
                                    {console.log("Error: " + error)}
                                </div>
                            )
                        }
                        <div className={styles.fields_container}>
                            <div className={styles.fields}>
                                <label htmlFor="name">Nombre/email</label>
                                {/* VER */}
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                                {/* VER */}
                                <ErrorMessage name='name' component={()=>(<ErrorInput error={errors.name}/>)}/>
                            </div>
                            {/* VER */}
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {/* VER */}
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