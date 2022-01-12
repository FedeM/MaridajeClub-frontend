import style from './AlertModal.module.css'
import Image from 'next/image'

const AlertModal = ({img, title, alert, btnText, callback, closeCallback}) => {
    return (
        <div className={style.modal_background}>
            <div className={style.modal_container}>
                <div className={style.modal_icon}>
                    <Image src={img} alt="Icono de alerta" layout="fill" objectFit='contain' objectPosition={'50%'}/>
                </div>
                <div className={style.modal_text}>
                    <h3>{title}</h3>
                    <p>{alert}</p>
                </div>
                <div className={style.modal_buttons}>
                    <div className={style.modal_button} onClick={()=> closeCallback()}>Cancelar</div>
                    <div className={style.modal_button} onClick={()=> callback()}>
                        {btnText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;