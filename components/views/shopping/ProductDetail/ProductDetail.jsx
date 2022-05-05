import style from './ProductDetail.module.css'
import { ProductAgregateSection, ProductImageSection } from '../../../common';


const ProductDetail = ({product}) => {

    return (
        <>
            <div className={style.productDetail_container}>                
                <div className={style.first_box}>
                    <ProductImageSection product={product}/>
                    <ProductAgregateSection product={product}/>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;