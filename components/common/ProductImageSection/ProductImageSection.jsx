import React from 'react';
import Image from 'next/image'
import {isMobile} from 'react-device-detect';
import style from './ProductImageSection.module.css'

const ProductImageSection = ({product}) => {
    return (
        <section className={style.image_section}>
            {
                isMobile &&(
                    <div className={style.title}>
                        <h2>{product.name}</h2>
                    </div>
                )
            }
            <div className={style.viewImage}>
                <Image src={product.feature_img} layout='fill' objectFit='cover' priority alt="description"/>
            </div>
        </section>
    );
};

export default ProductImageSection;