import { useState } from 'react';
import styles from './Login.module.css'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { Loader } from '../../../common';

const Register = ({setLogin}) => {
    const expressions = {
        name: /^[a-zA-Z0-9_.-]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password:  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    }
    
    const [valueValidate, setValueValidate] = useState({
        username:false,
        email: false,
        _email: false,
        password: false,
        _password: false
    })

    const {username, email, _email, password, _password} = valueValidate
    
    const [values, setValues] = useState({
        username:"",
        email: "",
        _email: "",
        password: "",
        _password: "",
        loading: false,
        error: ""
    })  

    const validateExpression = (expression, e, name)=>{
        if(expression.test(e.target.value.trim())){
            e.target.classList.remove(styles.errorInput)
            setValueValidate({...valueValidate, [name]: true})
            console.log(valueValidate)
        }else{
            e.target.classList.add(styles.errorInput)
            setValueValidate({...valueValidate, [name]: false})
        }
    }

    const compareField = (e,value, name)=>{
        if (e.target.value != value.trim()) {
            e.target.classList.add(styles.errorInput)
            setValueValidate({...valueValidate, [name]: false})
        }else{
            e.target.classList.remove(styles.errorInput)
            setValueValidate({...valueValidate, [name]: true})    
        }
    }

    const validateForm= (name,e)=>{
        switch(name){
            case "username":
                validateExpression(expressions.name, e, name)
            break
            case "email":
                validateExpression(expressions.email, e, name)
            break
            case "_email":
                compareField(e, values.email, name)
            break
            case "password":
                validateExpression(expressions.password, e, name)
            break
            case "_password":
                compareField(e, values.password, name)
            break
        }
    }

    const handleChange = (name, e)=>{
        setValues({...values, error:false, [name]: e.target.value})
        validateForm(name,e)
    }

    const submitRegister = (e)=>{
        e.preventDefault();
        if (values.email.trim() === values._email.trim()) {
            if (values.password.trim() === values._password.trim()) {
                
                if (username && email && _email && password && _password) {
                    setValues({...values,loading: true})

                    //LLAMAR AL BACKEND

                    window.location.href = "/"                   
                }else{
                    setValues({...values, error:"Por favor revisa los campos"})
                }

            }else{
                document.getElementById("_password").classList.add(styles.errorInput)
                setValues({...values, error:"Las contraseñas no coinciden"})
            }
        }else{
            document.getElementById("_email").classList.add(styles.errorInput)
            setValues({...values, error:"Los correos electrónicos no coinciden"})
        }
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
        {
            values.loading &&(
                <Loader
                    size={100}
                    style={{position: "fixed", top: "calc(50% - 50px)", left:"calc(50% - 50px)"}}
                />
            )
        }
        <form className={styles.form} onSubmit={(e)=> submitRegister(e)}>
            <div className={styles.title}>
                <h4>Crear cuenta</h4>
            </div>
            <div className={styles.social_media_register}>
                <GoogleLogin
                    clientId="562820573281-vcod58jbo8ianekgcf8fufrdqqqsq4l9.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps=>(
                        <div onClick={renderProps.onClick} className={styles.social_button}><i className="fab fa-google"></i> <span>Registrarse con Google</span></div>
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
                        <div onClick={renderProps.onClick} className={styles.social_button}><i className="fab fa-facebook-f"></i> <span>Registrarse con Facebook</span></div>
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
                    <label htmlFor="username">Nombre de usuario</label>
                    <div className={styles.input_container}>
                        <input type="text" id='username' autoComplete="off" placeholder='Nombre de usuario' onChange={(e)=> handleChange("username",e)}/>
                        <div className={styles.input_help}>
                            <i className="far fa-question-circle"></i>
                            <p>El nombre de usuario solo debe contener: letras (minusculas/mayúsculas sin acentos); números; carácteres especiales (solo . _ -)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.field_confirm}>
                    <div className={styles.fields}>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="text" id='email' autoComplete="off" placeholder='user@gmail.com' onChange={(e)=> handleChange("email",e)}/>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="_email">Confirmar correo electrónico</label>
                        <input type="text" id='_email' autoComplete="off" placeholder='user@gmail.com' onChange={(e)=> handleChange("_email",e)}/>
                    </div>
                </div>
                <div className={styles.field_confirm}>
                    <div className={styles.fields}>
                        <label htmlFor="password">Contraseña</label>
                        <div className={styles.input_container}>
                            <input type="password" id='password' placeholder='*******' onChange={(e)=> handleChange("password",e)}/>
                            <div className={styles.input_help}>
                                <i className="far fa-question-circle"></i>
                                <p>La contraseña debe tener, al menos, lo siguiente:Entre 8 y 16 dígitos, 1 letra mayúscula, 1 letra minúscula, 1 número</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="_password">Confirmar contraseña</label>
                        <input type="password" id='_password' placeholder='*******' onChange={(e)=> handleChange("_password",e)}/>
                    </div>
                </div>
            </div>
            <div className={styles.button_container}>
                <button>Registrarse</button>
            </div>
            <div className={styles.register} onClick={()=> setLogin(true)}>
                Ya tengo una cuenta
            </div>
            
        </form>
        </>
    );
};

export default Register;