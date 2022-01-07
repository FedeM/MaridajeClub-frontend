import { useState } from 'react';
import style from '../../../../styles/screens/cart/checkout/Checkout.module.css'

const Checkout = () => {

    const [payment, setPayment] = useState({
        card_number: '',
        cvv: '',
        name: '',
        expDate: '',
        dni: ''
    })


    const handleChange = (name, e)=>{
        setPayment({...payment, [name]: e.target.value})
        console.log(payment)
    }

    const submitForm = (e)=>{
        e.preventDefault()
        alert('enviado correctamente')
    }


    return (
        <div className={style.checkout_container}>
            <div className={style.title}>
                <h3>Detalles de la compra</h3>
            </div>
            <div className={style.steps_marker}>
                <span className={style.marker_selected}></span>
                <span></span>
                <span></span>
            </div>
            <form className={style.detail_content} onSubmit={(e)=> submitForm(e)}> 
                <div className={style.number_card_container}>
                    <div className={style.input_container}>
                        <label htmlFor="card_number">Número de tarjeta</label>
                        <input type="text" id='card_number' onChange={(e)=> handleChange("card_number",e)}/>
                    </div>
                    <div className={style.input_container}>
                        <label htmlFor="cvv">Cvv</label>
                        <input type="text" id='cvv' onChange={(e)=> handleChange("cvv",e)}/>
                    </div>
                </div>
                <div className={style.input_container}>
                    <label htmlFor="name">Nombre y apellido</label>
                    <input type="text"  id='name' onChange={(e)=> handleChange("name",e)}/>
                </div>
                <div className={style.input_container}>
                    <label htmlFor="expDate">Fecha de expiración</label>
                    <input type="date" id='expDate' onChange={(e)=> handleChange("expDate",e)}/>
                </div>
                <div className={style.input_container}>   
                    <label htmlFor="dni">Dni del titular</label>
                    <input type="text" id='dni' onChange={(e)=> handleChange("dni",e)}/>
                </div>
            </form>
            <div className={style.checkout_btn}>
                Siguiente
            </div>
        </div>
    );
};

export default Checkout;