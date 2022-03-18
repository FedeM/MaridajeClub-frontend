import { getAllUsers, uploadUser } from "./service/users";

//Cerrar sesión
export const signout = (next) =>{
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        // return fetch(`${API}/auth/signout`,{
        //     method: 'GET',
        // })
        // .then( response =>{
        //     return response.json()
        // })
        // .catch(err => console.log(err))
    }
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

//Iniciar sesión
export const signIn = async(data, next)=>{
    next()
}

//Autenticación
export const authenticate = (data, next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

//El usuario esta autenticado?
export const isAuthenticate = ()=>{
    if (typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }
    return false;
}