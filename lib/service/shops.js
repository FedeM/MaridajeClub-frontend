import axios from 'axios'
const url = "http://localhost:5000/shops"

export const getAllShops = async()=>{
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

export const getShop = async(id)=>{
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

export const uploadShop = (data)=>{
    axios({
        method: 'POST',
        url,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const updateShop = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${url}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteShop = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

