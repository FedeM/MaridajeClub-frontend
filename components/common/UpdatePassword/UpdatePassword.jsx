import { useState } from "react";
import style from './UpdatePassword.module.css'

const UpdatePassword= ({close, email})=>{
    const [forgetPassword, setForgetPassword] = useState(false)

    return(
        <div className={style.background}>
            <form action="">
            {
                !forgetPassword &&(
                    <>
                        <div className={style.inputs_container}>
                            <div className={style.input_box}>
                                <label htmlFor="currentPassword">Contraseña Actual</label>
                                <input type="password" id='currentPassword'/>
                            </div>
                            <div className={style.input_box}>
                                <label htmlFor="newPassword">Nueva contraseña</label>
                                <input type="password" id='newPassword'/>
                            </div>
                            <div className={style.input_box}>
                                <label htmlFor="_newPassword">Repetir nueva contraseña</label>
                                <input type="password" id='_newPassword'/>
                            </div>
                        </div>
                        <div className={style.forget_password}>
                            <span onClick={()=>setForgetPassword(true)}>¿Olvidaste tu contraseña?</span>
                        </div>
                    </>
                )
            }
            {
                forgetPassword &&(
                    <>
                    <h3>Reestablecer contraseña</h3>
                    <div>
                        ¿Enviar código al correo {email}?
                    </div>
                    </>
                )
            }
                <div className={style.buttons_container}>
                    <div className={style.button} onClick={()=> close()}>Cancelar</div>
                    <button className={style.button}>
                        {
                            !forgetPassword ?(
                                "Actualizar"
                            ):(
                                "Enviar"
                            )
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword;