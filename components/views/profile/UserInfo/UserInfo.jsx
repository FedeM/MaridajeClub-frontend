import style from './UserInfo.module.css'
import Image from 'next/image'
import { signout } from '../../../../lib/auth';
import { user } from '../../../../lib/user';
import { useState } from 'react';
import { EditInfo, UpdatePassword } from '../../../common';

const UserInfo = () => {
    const [openEdit, setOpenEdit] = useState(false)
    const [openPassword, setOpenPassword] = useState(false)
    const [userData, setUserData] = useState({
        id: user.id,
        photo: user.photo,
        name: user.name,
        email: user.email,
        phone: user.phone
    })

    const closeSesion = () =>{
        signout(()=>{
            window.location.href = "/"
        })
    }
    
    return (
        <>
            <section className={style.user_section}>
                <div className={style.user_container}>
                    <div className={style.user_img} title='Cambiar foto de perfil'>
                        <form>
                            <label htmlFor="picture">
                                <Image src={userData.photo} layout="fill" objectFit="contain" alt={user.name} />
                            </label>
                            <input type="file" id='picture'/>
                        </form>
                    </div>
                    <div className={style.user_name}>{userData.name}</div>
                </div>
                <div className={style.user_info}>
                    <div><i className="far fa-envelope"></i><span>{userData.email}</span><i className="fas fa-pen" onClick={()=> setOpenEdit(true)} title='Editar'></i></div>
                    <div><i className="fas fa-mobile-alt"></i><span>{userData.phone}</span><i className="fas fa-pen" onClick={()=> setOpenEdit(true)} title='Editar'></i></div>
                    <div className={style.change_password} onClick={()=> setOpenPassword(true)}><i className="fas fa-lock"></i><span>Cambiar contraseña</span> <i className="fas fa-pen"></i></div>
                </div>
                <div className={style.close_session} onClick={()=>{closeSesion()}} title='Salir'>
                    Cerrar Sesión
                </div>
            </section>
        {
            openEdit &&(
                <EditInfo
                    close={()=> setOpenEdit(false)}
                    name={userData.name}
                    email={userData.email}
                    phone={userData.phone}
                    setUserData={setUserData}
                    userData={userData}
                />
            )
        }
        {
            openPassword &&(
                <UpdatePassword
                    close={()=> setOpenPassword(false)}
                    email={userData.email}
                />
            )
        }
        </>
    );
};

export default UserInfo;