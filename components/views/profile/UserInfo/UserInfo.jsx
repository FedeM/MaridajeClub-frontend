import style from './UserInfo.module.css'
import Router from "next/router";
import Image from 'next/image'
import { signout } from '../../../../lib/auth';

const UserInfo = ({name}) => {

    const closeSesion = () =>{
        signout(()=>{
            Router.push('/')
        })
    }
    
    return (
        <section className={style.user_section}>
            <div className={style.user_container}>
                <div className={style.user_img}>
                    <Image src="/assets/img/profile/user.png" layout="fill" objectFit="contain" alt={name || "nombre"} />
                </div>
                <div className={style.user_name}>santillienzo</div>
            </div>
            <div className={style.user_info}>
                <div><i className="far fa-envelope"></i><span>enzo135246@gmail.com</span></div>
                <div><i className="fas fa-mobile-alt"></i><span>2634786580</span></div>
                <div className={style.close_session} onClick={()=>{closeSesion()}} title='Salir'>
                    Cerrar Sesión
                </div>
            </div>
        </section>
    );
};

export default UserInfo;