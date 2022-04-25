import axios from 'axios'

import { config } from '../config'

const url = `${config.databaseUrl}/products`
const urlCategory = `${config.databaseUrl}/categories`

export const getAllProducts = async()=>{
    return await axios.get(url).then(res=> res.data)
}

export const getProduct = async(id)=>{
    return await  axios.get(`${url}/${id}`).then(res=> res.data)
}

export const uploadProduct = (body)=>{
    return axios.post(url,body)
    .then(res=>{
        console.log("Añadido correctamente")
    }).catch(error=>{
        console.log(error)
    })
}

export const updateProduct = (id, body)=>{
    return axios.put(`${url}/${id}`,body)
    .then(res=>{
        console.log("Añadido correctamente")
    }).catch(error=>{
        new Error(error)
        console.log(error)
    })
}

export const deleteProduct = async(id) =>{
    return await axios.delete(`${url}/${id}`)
    .then(res => res)
}

// Categorías

export const getAllCategories = async()=>{
    return await axios.get(urlCategory).then(res=> res.data)
}

export const getCategory = async(id)=>{
    return axios.get(`${urlCategory}/${id}`).then(res=> res.data)
}

export const uploadCategory = (data)=>{
// [HACERLO CON AXIOS]
}

export const updateCategory = (id, data)=>{
// [HACERLO CON AXIOS]
}

export const deleteCategory = (id) =>{
    axios.delete(`${urlCategory}/${id}`)
    .then(res => res)
}
