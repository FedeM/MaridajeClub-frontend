import { useState } from 'react';
import style from './Checkout.module.css'

const Checkout = () => {

    const [step, setStep] = useState(1)
    const [payment, setPayment] = useState({
        card_number: '',
        cvv: '',
        name: '',
        expDate: '',
        dni: ''
    })

    const inputStep = ()=>{
        switch (step){
            case 1:
                return(
                    <div className={style.step_one}>
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
                    </div>
                )
            break;
            case 2:
                return(
                    <div>Dirección</div>
                )
            break;
            case 3:
                return(
                    <div>Datos personales</div>
                )
            break;
            default:
                ""
            break;
        }
    }

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
            {
                step > 1 &&(
                    <div className={style.stepBack} onClick={()=> setStep(step-1)}><i className="fas fa-chevron-circle-left"></i></div>
                )
            }
                <span className={step === 1 ? (style.marker_selected):("")} onClick={()=> setStep(1)}></span>
                <span className={step === 2 ? (style.marker_selected):("")} onClick={()=> setStep(2)}></span>
                <span className={step === 3 ? (style.marker_selected):("")} onClick={()=> setStep(3)}></span>
            </div>
            <form className={style.detail_content} onSubmit={(e)=> submitForm(e)}> 
                {
                    inputStep()
                }
            </form>
            {
                step < 3 ?
                (
                    <div className={style.checkout_btn} onClick={()=> setStep(step+1)}>
                        Siguiente
                    </div>
                )
                :
                (
                    <button className={style.checkout_btn} onClick={(e)=> submitForm(e)}>
                        Checkout
                    </button>
                )
            }
        </div>
    );
};

export default Checkout;