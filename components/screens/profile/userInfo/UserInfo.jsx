import style from '../../../../styles/screens/profile/userInfo/UserInfo.module.css'
import {signout} from '../../../../lib/auth'
import Router from "next/router";
import Image from 'next/image'

const UserInfo = () => {

    const closeSesion = () =>{
        signout(()=>{
            Router.push('/')
        })
    }
    
    return (
        <section className={style.user_section}>
            <div className={style.user_container}>
                <div className={style.user_img}>
                    <Image src="/assets/img/profile/user.png" layout="fill" objectFit="contain" alt="" />
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