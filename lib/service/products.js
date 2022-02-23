import axios from 'axios'
const url = "http://localhost:5000/products"
const urlCategory = 'http://localhost:5000/categories'

export const getAllProducts = async()=>{
    return await fetch(url,
        {
            method: 'GET'
        }
    )
    .then(res =>{
        return res.json()
    })
    .catch(err =>console.log(err))
}

export const getProduct = async(id)=>{
    return await fetch(`${url}/${id}`,{method: 'GET'})
    .then(res => {
        return res.json()
    }).catch(err =>console.log(err))
}

export const uploadProduct = (data)=>{
    axios({
        method: 'POST',
        url,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const updateProduct = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${url}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteProduct = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

// Categorías

export const getAllCategories = async()=>{
    return await fetch(urlCategory,
        {
            method: 'GET'
        }
    )
    .then(res =>{
        return res.json()
    })
    .catch(err =>console.log(err))
}

export const getCategory = async(id)=>{
    return await fetch(`${urlCategory}/${id}`,{method: 'GET'})
    .then(res => {
        res.json()
    }).catch(err =>console.log(err))
}

export const uploadCategory = (data)=>{
    axios({
        method: 'POST',
        url: urlCategory,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const updateCategory = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${urlCategory}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteCategory = (id) =>{
    axios.delete(`${urlCategory}/${id}`)
    .then(res => res)
}
