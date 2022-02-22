import axios from 'axios'
const url = "http://localhost:5000/events"

export const getAllEvents = async()=>{
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

export const getEvent = async(id)=>{
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

export const uploadEvent = (data)=>{
    axios({
        method: 'POST',
        url,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const updateEvent = (id, data)=>{
    axios({
        method: 'PUT',
        url: `${url}/${id}`,
        data
    }).then(res=>{
        return res.data
    }).catch(err=> console.log(err))
}

export const deleteEvent = (id) =>{
    axios.delete(`${url}/${id}`)
    .then(res => res)
}

