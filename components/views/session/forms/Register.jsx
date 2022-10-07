import styles from './Login.module.css'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import { Loader } from '../../../common';


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { signIn, signUp } from '../../../../lib/auth';
import { Alert, FormHelperText, IconButton, Input, InputAdornment, InputLabel, TextField, FormControl, Box, useMediaQuery  } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = ({setLogin}) => {
    //Verificamos el min-width
    const matches = useMediaQuery('(min-width:800px)');

    const [compareValues, setCompareValues] = useState({
        email: "",
        password: ""
    })
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        showPassword: false,
    });

    let expEmail = new RegExp("^"+ compareValues.email + "$");
    let expPassword = new RegExp("^"+ compareValues.password + "$")

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(emptyInputMsg).max(40, "El nombre tiene que tener un máximo de 40 carácteres").matches(/^[a-zA-Z0-9_.-]{1,40}$/, "El nombre de usuario solo debe contener: letras (minusculas/mayúsculas sin acentos); números; carácteres especiales (solo . _ -)").trim(),
        email: Yup.string().required(emptyInputMsg).email("Por favor utiliza el formato 'user@gmail.com'").trim(),
        _email: Yup.string().required(emptyInputMsg).matches(expEmail, "Los correos tienen que coincidir").trim(),
        password: Yup.string().required(emptyInputMsg).matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, "La contraseña debe tener, al menos, lo siguiente:Entre 8 y 16 dígitos, 1 letra mayúscula, 1 letra minúscula, 1 número").trim(),
        _password: Yup.string().required(emptyInputMsg).matches(expPassword, "Las contraseñas tienen que coincidir").trim()
    })

    //Valores Iniciales
    const initialValues = {
        name: "",
        email: "",
        _email: "",
        password: "",
        _password: ""
    }


    //Enviar datos al backend
    const onSubmit = async (values)=> {
        setLoader(true)
        try {
            await signUp({
                name: values.name,
                email: values.email,
                password: values.password,
                c_password: values._password,
                // photo: "",
                // phone: "",
                // address: "",
                // role_id: 1
            }, ()=>{
                signIn({email: values.email, password: values.password}, ()=> window.location.href = "/")
            })
        } catch (err) {
            console.log(err);
            setLoader(false)
            setError(err)
        }
    }

    //Variables iniciales
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });


    const registerWithSocialMedia = async(email, name, password, photo)=>{
        try {
            await signUp({
                name,
                email,
                password,
                photo,
                phone: "",
                address: "",
                role_id: 1
            }, ()=>{
                console.log("registrado")
                signIn({name, email, photo}, ()=> window.location.href = "/")
            })
        } catch (err) {
            setError(err)
        }
    }

    const responseFacebook = (response) => {
        registerWithSocialMedia(response.email, response.name, response.accessToken, response.picture.data.url)
    }

    const responseGoogle = (response) => {
        const res = response.profileObj
        registerWithSocialMedia(res.email, res.name, response.accessToken, res.imageUrl)
    }

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.title}>
                <h4>Crear cuenta</h4>
            </div>
            {/* <div className={styles.social_media_register}>
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
            </div> */}
            {
                error &&(
                    <Alert sx={{mb: 2}}severity="error">{error}</Alert>
                )
            }
            <div className={styles.fields_container}>
                <TextField 
                    id="name" 
                    label="Nombre de usuario" 
                    variant="standard" 
                    sx={{width: '100%' }}
                    value={formik.values.name}
                    name="name"
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <Box
                    sx={{
                        display: matches ? 'flex': 'block',
                        justifyContent: 'space-between'
                    }}
                >
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="standard" 
                        sx={{
                            width: matches ? '49%': '100%' 
                        }}
                        value={formik.values.email}
                        name="email"
                        onChange={(e)=>{
                            setCompareValues({...compareValues, email: e.target.value})
                            formik.setFieldValue('email', e.target.value)
                        }}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField 
                        id="_email" 
                        label="Verificar email" 
                        variant="standard" 
                        sx={{
                            width: matches ? '49%': '100%' 
                        }}
                        value={formik.values._email}
                        name="_email"
                        onChange={formik.handleChange}
                        error={formik.touched._email && Boolean(formik.errors._email)}
                        helperText={formik.touched._email && formik.errors._email}
                    />
                </Box>
                <Box
                    sx={{
                        display: matches ? 'flex': 'block',
                        justifyContent: 'space-between'
                    }}
                >

                    <FormControl 
                        sx={{
                            width: matches ? '49%': '100%' 
                        }}
                        variant="standard" 
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    >
                        <InputLabel htmlFor="standard-adornment-password">Nueva contraseña</InputLabel>
                        <Input
                            id="standard-adornment-password" 
                            type={values.showPassword ? 'text' : 'password'}
                            value={formik.values.password}
                            name="password"
                            onChange={(e)=>{
                                setCompareValues({...compareValues, password: e.target.value})
                                formik.setFieldValue('password', e.target.value)
                            }}
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
                        <FormHelperText >
                            {formik.touched.password && formik.errors.password}
                        </FormHelperText>
                    </FormControl>
                    <FormControl 
                        sx={{
                            width: matches ? '49%': '100%' 
                        }}
                        variant="standard" 
                        error={formik.touched._password && Boolean(formik.errors._password)}
                    >
                        <InputLabel htmlFor="standard-adornment-password">Verificar contraseña</InputLabel>
                        <Input
                            id="_password" 
                            type={values.showPassword ? 'text' : 'password'}
                            value={formik.values._password}
                            name="_password"
                            onChange={formik.handleChange}
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
                        <FormHelperText >
                            {formik.touched._password && formik.errors._password}
                        </FormHelperText>
                    </FormControl>
                </Box>
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
            
        </form>
    )
};

export default Register;