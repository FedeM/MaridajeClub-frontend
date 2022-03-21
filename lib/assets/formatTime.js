export const formatDate= (date)=>{
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()

    return `${day}/${month}/${year}`
}

export const formatHour = (date)=>{
    const hour = new Date(date).getHours()
    const minutes = new Date(date).getMinutes()

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    return `${hour}:${minutes}`
}