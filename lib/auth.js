import { getAllUsers, uploadUser } from "./service/users";
import axios from 'axios'
import Cookies from 'universal-cookie'
import { config } from "./config";

// const url = `${config.databaseUrl}/users`
const url = `${config.databaseUrl}`
const cookies = new Cookies()

//Cerrar sesión
export const signout = (next = ()=> window.location.href = "/") =>{
    cookies.remove('userData', {path: '/'})
    next()
}

//Registrar usuario
export const signUp = async(data, next)=>{
    let users = await getAllUsers()
    let error = false

    //Verificamos que el correo no esté utilizado
    users.map(user=>{
        if (user.email === data.email) {
            error = "Este correo ya está en uso"
        }else if(user.name === data.name){
            error = "Este nombre de usuario ya está en uso"
        }
    })

    //Verificamos si hay errores
    if (error) {
        throw error
    }else{
        uploadUser(data).then(()=>{
            return next()
        }).catch(error=>{
            throw error
        })
    }
}

//Iniciar sesión provisorio
export const signIn = async(data, next = ()=> window.location.href = "/")=>{
    let error = false
    
    await axios.post(`${url}/login`, {
        email: data.email,
        password: data.password
    })
    .then(res=>{
        return res.data
    })
    .then(data=>{
        console.log(data)
        if (data.success) {
            cookies.set('userData', data.data.token, {path: '/'})

            next()
        }else{
            error = "El usuario / contraseña no son correctos"
        }
    })
    .catch(err=>{
        throw err
    })

    if (error) {
        console.log("Holaaa")
        throw error
    }
}

//El usuario esta autenticado?
export const isAuthenticate = ()=>{
    if(cookies.get('userData')){
        return cookies.get('userData')
    }
    return false;
}