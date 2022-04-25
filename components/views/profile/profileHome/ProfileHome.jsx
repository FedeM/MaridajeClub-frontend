import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import { DataUser, FeaturedInfo } from '../../../common';
import style from './ProfileHome.module.css'

const ProfileHome = () => {
    const {name, email, photo, phone, role, address} = useContext(AuthContext)
    return (
        <div className={style.profileHomeContainer}>
            <FeaturedInfo 
                cards={[
                    {
                        title: "Artículos en carrito",
                        value: "15",
                        icon: <ion-icon name="cart-outline"></ion-icon>
                    },
                    {
                        title: "Compras realizadas",
                        value: "5",
                        icon: <ion-icon name="bag-check-outline"></ion-icon>
                    },
                    {
                        title: "Eventos vistos",
                        value: "12",
                        icon: <ion-icon name="videocam-outline"></ion-icon>
                    },
                ]}
            />
            <DataUser user={{name, email, photo, phone, role, address}}/>
        </div>
    );
};

export default ProfileHome;