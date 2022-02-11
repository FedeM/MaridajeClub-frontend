import style from './AddProduct.module.css'
import Image from 'next/image'
import { useState } from 'react';
import 'animate.css';


const AddProduct = ({close}) => {
    const [img, setImg] = useState('/assets/img/products/wine1.jpg')

    return (
        <div className={`${style.container} animate__animated animate__fadeInRight`}>
            <form action="">
                <div className={style.title}><h4>Añadir producto</h4></div>
                <div className={style.inputsContainer}>
                    <div className={style.side}>
                        <div className={style.inputImage}>
                            <label htmlFor="img"><ion-icon name="image-outline"></ion-icon></label>
                            <input type="file" id='img'/>
                            <Image src={img} layout="fill" objectFit='contain'/>
                        </div>
                        <div className={style.inputName}>
                            <ion-icon name="pencil-outline"></ion-icon>
                            <input type="text" placeholder='Nombre' name='name' className={style.input}/>
                        </div>
                    </div>
                    <div className={style.side}>
                        <div className={style.inputDescription}>
                            <label className={style.label} htmlFor="description">Descripción</label>
                            <textarea name="description" id="description" placeholder='Escribe aquí...' className={style.input}></textarea>
                        </div>
                        <div className={style.inputCategory}>
                            <label className={style.label} htmlFor="category">Seleccionar categoría</label>
                            <select name="" id="category">
                                <option value="wine">Vino</option>
                                <option value="champagne">Champagne</option>
                                <option value="whisky">Whisky</option>
                            </select>
                        </div>
                        <div className={style.inputPrice}>
                            <div className={style.price}>
                                <label className={style.label} htmlFor="regular_price">Precio costo</label>
                                <div className={style.priceContainer}>
                                    <input type="number" className={style.input} id="regular_price"/>
                                    <span>$</span>
                                </div>
                            </div>
                            <div className={style.price}>
                                <label className={style.label} htmlFor="sale_price">Precio costo</label>
                                <div className={style.priceContainer}>
                                    <input type="number" className={style.input} id="sale_price"/>
                                    <span>$</span>
                                </div>
                            </div>
                            <div className={style.status}>
                                <label htmlFor="activate" className={style.label}>Producto activado</label>
                                <div className={style.checkbox_box}>
                                    <input type="checkbox" name="activate" id="activate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.btnContainer}>
                    <div className={style.button} onClick={close}>Cancelar</div>
                    <button className={style.button} ><span>Añadir</span></button>
                </div>    
            </form>
        </div>
    );
};
1
export default AddProduct;