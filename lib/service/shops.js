import axios from 'axios'
import { config } from '../config'

const url = `${config.databaseUrl}/shops`

export const getAllShops = async()=>{
    return axios.get(url).then(res=> res.data)
}

export const getShop = async(id)=>{
    return axios.get(`${url}/${id}`).then(res=> res.data)
}

export const uploadShop = (body)=>{
    return axios.post(url,body)
        .then(()=>{
            console.log("Añadido correctamente")
        }).catch(error=>{
            console.log(error)
        })
}

export const updateShop = (id, body)=>{
    return axios.patch(`${url}/${id}`,body)
    .then(()=>{
        console.log("Editado correctamente")
    }).catch(error=>{
        console.log(error)
    })
}

export const deleteShop = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}