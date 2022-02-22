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
                    <div className={style.step}>
                        <h3>Contacto</h3>
                        <div className={style.personalDataContainer}>
                            <div className={style.dualInput}>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Nombre' id='name'/>
                                </div>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Apellido' id='lastname'/>
                                </div>
                            </div>
                            <div className={style.input_container}>
                                <input type="text" placeholder='Escribe tú número de teléfono' id='phone'/>
                            </div>
                        </div>
                        <h3>Dirección</h3>
                        <div className={style.direction_container}>
                            <div className={style.dualInput}>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='País' id='country'/>
                                </div>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Provincia' id='province'/>
                                </div>
                            </div>
                            <div className={style.dualInput}>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Ciudad' id='city'/>
                                </div>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Código postal' id='zip'/>
                                </div>
                            </div>
                            <div className={style.dualInput}>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Calle, casa/apartamento' id="direction"/>
                                </div>
                                <div className={style.input_container}>
                                    <input type="text" placeholder='Apt, Suite, unidad, etc. (Opcional)' id="dpto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            break;
            case 2:
                return(
                    <div className={style.step}>
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
            case 3:
                return(
                    <div className={style.step}>
                        <div className={style.detailPrice}>
                            <p>Costo de envío</p>
                            <span>$750</span>
                        </div>
                        <div className={style.discount}>
                            <div className={`${style.input_container} ${style.coupon}`}>
                                <input type="text" placeholder='Ingresar cupón de descuento'/>
                                <button>Confirmar</button>
                            </div>
                            <div className={style.detailPrice}>
                                <p>Descuento</p>
                                <span>$0</span>
                            </div>
                        </div>
                        <div className={style.detailPrice}>
                            <h4>Total</h4>
                            <span>$5869</span>
                        </div>
                    </div>
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