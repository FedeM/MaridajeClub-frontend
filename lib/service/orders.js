import axios from 'axios'
import { config } from '../config'

const url = `${config.databaseUrl}/orders`


export const getAllOrders = async()=>{
    return axios.get(url).then(res=> res.data)
}

export const getOrder = async(id)=>{
    return axios.get(`${url}/${id}`).then(res=> res.data)
}

export const uploadOrder = (data)=>{
//AXIOS
}

export const updateOrder = (id, body)=>{
    return axios.patch(`${url}/${id}`,body)
    .then(res=>{
        console.log("Añadido correctamente")
    }).catch(error=>{
        new Error(error)
        console.log(error)
    })
}

export const deleteOrder = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}