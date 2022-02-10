import { FeaturedInfo, TableProducts } from '../../../common';
import style from './MyShop.module.css'

const MyShop = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h4>Los Haroldos</h4>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <FeaturedInfo
                cards={[
                    {
                        title: "Pedidos pendientes",
                        value: "2",
                        icon: <ion-icon name="cart-outline"></ion-icon>
                    },
                    {
                        title: "Dinero recaudado",
                        value: "$2,000",
                        icon: <ion-icon name="cash-outline"></ion-icon>
                    },
                    {
                        title: "Mis productos",
                        value: "15",
                        icon: <ion-icon name="cube-outline"></ion-icon>
                    },
                ]}
            />
            <TableProducts/>
        </div>
    );
};

export default MyShop;