import { PurchaseItem } from '../../../common';
import style from './Purchase.module.css'

const Purchase = () => {
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

export default Purchase;