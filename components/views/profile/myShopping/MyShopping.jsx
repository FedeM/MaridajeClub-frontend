import { PurchaseItem } from '../../../common';
import style from './MyShopping.module.css'

const MyShopping = () => {
    return (
        <div className={style.container}>
            <div className={style.myShoppingContainer}>
                <PurchaseItem/>
                <PurchaseItem/>
                <PurchaseItem/>
                <PurchaseItem/>
                <PurchaseItem/>
                <PurchaseItem/>
            </div>
        </div>
    );
};

export default MyShopping;