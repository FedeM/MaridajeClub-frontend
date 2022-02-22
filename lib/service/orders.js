import axios from 'axios'
const url = "http://localhost:5000/orders"

export const getAllOrders = async()=>{
    return await fetch(url,
        {
            method: 'GET'
        }
    )
    .then(res =>{
        console.log(res)
        return res.json()
    })
    .catch(err =>console.log(err))
}

export const getOrder = async(id)=>{
    return await fetch(`${url}/${id}`,
        {
            method: 'GET'
        }
    )
    .then(res =>{
        console.log(res)
        return res.json()
    })
    .catch(err =>console.log(err))
}

export const uploadOrder = (data)=>{
    axios({
        method: 'POST',
        url,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const updateOrder = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${url}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteOrder = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

