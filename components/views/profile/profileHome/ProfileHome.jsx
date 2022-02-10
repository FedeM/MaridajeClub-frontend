import { DataUser, FeaturedInfo } from '../../../common';
import style from './ProfileHome.module.css'

const ProfileHome = () => {
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
            <DataUser/>
        </div>
    );
};

export default ProfileHome;