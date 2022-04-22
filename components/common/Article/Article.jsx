import style from './Article.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Article = ({item, width, updateItem, deleteItemToCart}) => {
    const {id, feature_img, name, quantity, sale_price} = item

    return (
        <div className={style.article_content} style={{width:`${width}%`}}>
            <div className={style.article_img}>
                <Image src={feature_img} layout='fill' objectFit='cover' priority alt={name}/>
            </div>
            <div className={style.article_info}>
                <div className={style.article_name}>
                    <h3>{name}</h3>
                </div>
                <div className={style.article_quantity}>
                    <div>{quantity}</div>
                    <div className={style.counters}>
                        <i className="fas fa-chevron-circle-up" onClick={()=> updateItem("AUMENTAR", item)}></i>
                        <i className="fas fa-chevron-circle-down" onClick={()=> updateItem("REDUCIR",item)}></i>
                    </div>
                </div>
                <div className={style.article_price}>
                    <span>${sale_price}</span>
                </div>
                <div className={style.trash_article} onClick={()=> deleteItemToCart(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    );
};

export default Article;