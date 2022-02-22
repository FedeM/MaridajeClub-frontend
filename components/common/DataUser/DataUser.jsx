import style from './DataUser.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { user } from '../../../lib/user';
const DataUser = () => {
    return (
        <div className={style.dataUserContainer}>
            <div className={style.dataUserHeader}>
                <div className={style.dataUserHeaderContainer}>
                    <div className={style.img}>
                        <Image src={user.photo} layout="fill" objectFit="contain" alt={user.name}/>
                    </div>
                    <h4>{user.name}</h4>
                </div>
                <Link href="/profile/personal-data">
                    <a className={style.btn}>Editar datos</a>
                </Link>
            </div>
            <div className={style.dataContainer}>
                <div className={style.data}>
                    <ion-icon name="mail"></ion-icon>
                    <span>{user.email}</span>
                </div>
                <div className={style.data}>
                    <ion-icon name="call"></ion-icon>
                    <span>{user.phone}</span>
                </div>
                <div className={style.data}>
                    <ion-icon name="compass"></ion-icon>
                    <span>Barrio San Pedro M20 C27 / San Martín / Mza</span>
                </div>
                <div className={style.data}>
                    <ion-icon name="bulb"></ion-icon>
                    <span>Comprador</span>
                </div>
            </div>
        </div>
    );
};

export default DataUser;