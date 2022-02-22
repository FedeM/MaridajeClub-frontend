import style from './PurchaseItem.module.css'

import Image from 'next/image'
import Link from 'next/link'

const PurchaseItem = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <Image src={'/assets/img/products/wine1.jpg'} width="50px" height={"50px"} objectFit="cover" alt='product'/>
                <span>Vino Malbec</span>
            </div>
            <div className={style.item}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.</span>
            </div>
            <div className={style.item}>
                <span>$99.75</span>
            </div>
            <Link href={'/'}>
                <a className={style.btn}>Ver producto</a>
            </Link>
        </div>
    );
};

export default PurchaseItem;