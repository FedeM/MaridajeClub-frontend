import { updateUser, uploadUser } from "./service/users";

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
export const signUp =(data, next)=>{
    uploadUser(data).then(()=>{
        return next()
    }).catch(err=>{
        console.log(err)
    })
}

export const authenticate = (data, next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const isAuthenticate = ()=>{
    if (typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }
    return false;
}