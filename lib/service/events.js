import axios from 'axios'
const url = "http://localhost:5000/events"

export const getAllEvents = async()=>{
    return axios.get(url).then(res=> res.data)
}

export const getEvent = async(id)=>{
    return axios.get(`${url}/${id}`).then(res=> res.data)
}

export const uploadEvent = (body)=>{
    return axios.post(url,body)
    .then(()=>{
        console.log("Añadido correctamente")
    }).catch(error=>{
        console.log(error)
    })
}

export const updateEvent = (id, body)=>{
    return axios.put(`${url}/${id}`,body)
    .then(()=>{
        console.log("Añadido correctamente")
    }).catch(error=>{
        console.log(error)
    })
}

export const deleteEvent = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

