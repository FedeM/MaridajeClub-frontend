import { useState } from "react"
import style from './EditInfo.module.css'

const EditInfo = ({name, email, phone, close, setUserData, userData})=>{
    const [updateValues, setUpdateValues] = useState({
        name,
        email,
        phone
    })

    const handleChange = (name, e)=>{
        setUpdateValues({...updateValues,
            [name]:e.target.value
        })
    }

    const submitForm = (e)=>{
        e.preventDefault()
        setUserData({
            ...userData,
            name: updateValues.name,
            email: updateValues.email,
            phone: updateValues.phone,
        })
        close()
    }

    return(
        <div className={style.background}>
            <form onSubmit={(e)=> submitForm(e)}>
                <div>
                    <h3>Editar información</h3>
                </div>
                <div className={style.inputs_container}>
                    <div className={style.input_box}>
                        <label htmlFor="name">Nombre <i className="fas fa-pen" title='Editar'></i></label>
                        <input type="text" value={updateValues.name} id='name' onChange={(e)=> handleChange("name", e)}/>
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="email">Email <i className="fas fa-pen" title='Editar'></i></label>
                        <input type="text" value={updateValues.email} id='email' onChange={(e)=> handleChange("email", e)}/>
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="phone">Número de teléfono <i className="fas fa-pen" title='Editar'></i></label>
                        <input type="text" value={updateValues.phone} id='phone' onChange={(e)=> handleChange("phone", e)}/>
                    </div>
                </div>
                    <div className={style.buttons_container}>
                        <div className={style.button} onClick={()=> close()}>Cancelar</div>
                        <button className={style.button}>Actualizar</button>
                    </div>
            </form>
        </div>
    )
}

export default EditInfo;