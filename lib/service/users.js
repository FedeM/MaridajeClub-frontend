import axios from 'axios'
import { config } from '../config'

const url = `${config.databaseUrl}/users`

export const getAllUsers = async()=>{
    return await axios.get(url).then(res=> res.data)
}

export const getUser = async(id)=>{
    return await axios.get(`${url}/${id}`).then(res=> res.data)
}

export const uploadUser = (data)=>{
    return axios.post(url,body)
        .then(()=>{
            console.log("Añadido correctamente")
        }).catch(error=>{
            console.log(error)
        })
}

export const updateUser = (id, data)=>{
    return axios.patch(`${url}/${id}`,body)
    .then(()=>{
        console.log("Editado correctamente")
    }).catch(error=>{
        console.log(error)
    })
}

export const deleteUser = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

//Roles
export const getAllRoles = async()=>{
    return axios.get(urlRole).then(res=> res.data)
}

export const getRole = async(id)=>{
    return axios.get(`${urlRole}/${id}`).then(res=> res.data)
}


