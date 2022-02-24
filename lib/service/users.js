import axios from 'axios'
const url = "http://localhost:5000/users"

export const getAllUsers = async()=>{
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

export const getUser = async(id)=>{
    return await fetch(`${url}/${id}`,
        {
            method: 'GET'
        }
    )
    .then(res =>{
        return res.json()
    })
    .catch(err =>console.log(err))
}

export const uploadUser = (data)=>{
    return fetch(url,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) 
    }).then(res=>{
        return res.json
    }).catch(err=> console.log(err))
}

export const updateUser = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${url}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteUser = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

