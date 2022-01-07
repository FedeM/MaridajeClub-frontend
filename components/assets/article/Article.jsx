import style from './Article.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Article = ({id, img, name, price, quantity, width, updateQuantity}) => {

    return (
        <div className={style.article_content} style={{width:`${width}%`}}>
            <div className={style.article_img}>
                <Image src={img} layout='fill' objectFit='cover' priority/>
            </div>
            <div className={style.article_info}>
                <div className={style.article_name}>
                    <h3>{name}</h3>
                </div>
                <div className={style.article_quantity}>
                    <div>{quantity}</div>
                    <div className={style.counters}>
                        <i className="fas fa-chevron-circle-up" onClick={()=> updateQuantity(id, true)}></i>
                        <i className="fas fa-chevron-circle-down" onClick={()=> updateQuantity(id, false)}></i>
                    </div>
                </div>
                <div className={style.article_price}>
                    <span>${price}</span>
                </div>
                <div className={style.trash_article}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    );
};

export default Article;