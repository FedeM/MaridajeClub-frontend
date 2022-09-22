import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import CartContext from '../../../../context/CartContext';
import { DataUser, FeaturedInfo } from '../../../common';
import style from './ProfileHome.module.css'

const ProfileHome = () => {
    const {name, email, photo, phone, role, address} = useContext(AuthContext)
    const {countCart} = useContext(CartContext)

    return (
        <div className={style.profileHomeContainer}>
            <FeaturedInfo 
                cards={[
                    {
                        title: "Artículos en carrito",
                        value: countCart,
                        icon: <ion-icon name="cart-outline"></ion-icon>,
                        enable: true
                    },
                    {
                        title: "Compras realizadas",
                        value: "5",
                        icon: <ion-icon name="bag-check-outline"></ion-icon>,
                        enable: false
                    },
                    {
                        title: "Eventos vistos",
                        value: "12",
                        icon: <ion-icon name="videocam-outline"></ion-icon>,
                        enable: false
                    },
                ]}
            />
            <DataUser user={{name, email, photo, phone, role, address}}/>
        </div>
    );
};

export default ProfileHome;