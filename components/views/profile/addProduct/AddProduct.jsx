import style from './AddProduct.module.css'
import Image from 'next/image'
import { useState } from 'react';
import 'animate.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { ActionButtons, ErrorInput } from '../../../common';
const updateSuccess = () => toast.success('Agregado correctamente');


const AddProduct = ({close, setProducts, products}) => {
    //Definir estados (Imagen - Si la imagen está seleccionada)
    const [img, setImg] = useState('/assets/img/products/wine1.jpg')
    const [isSelected, setIsSelected] = useState(false)

    //Renderizar nueva foto al seleccionarla
    const changePhoto=(e)=>{
        let url = URL.createObjectURL(e.target.files[0]);
        setImg(url)
        console.log(e.target.files[0])
        setIsSelected(true)
    }  

    //Valores iniciales del input
    const initialValues = {
        img: "",
        name: "",
        description: "",
        category: "wine",
        stock: 0,
        regular_price: 0,
        price: 0,
        status: true
    }

    //Esquema de validación de YUP
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        img: Yup.mixed().required(emptyInputMsg).nullable(),
        name: Yup.string().required(emptyInputMsg),
        description: Yup.string().required(emptyInputMsg).max(230, "La descripción debe tener como máximo 230 carácteres"),
        stock: Yup.number().required(emptyInputMsg).min(0,"Tiene que ser un número mayor o igual a 0"),
        regular_price: Yup.number().required(emptyInputMsg).min(0, "Tiene que ser un número mayor o igual a 0"),
        price: Yup.number().required(emptyInputMsg).min(0, "Tiene que ser un número mayor o igual a 0"),
    })

    //Función para enviar el formulario
    const onSubmit = (values, {resetForm})=> {
        updateSuccess()
        resetForm()
        values ={
            ...values,
            img:img
        }
        setProducts([...products, values])
    }

    return (
        <div className={`${style.container} animate__animated animate__fadeInRight`}>
        <Toaster />
            <Formik
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
            >
            {
                ({errors, setFieldValue})=>(
                    <Form>
                        <div className={style.title}><h4>Añadir producto</h4></div>
                        <div className={style.inputsContainer}>
                            <div className={style.side}>
                                <div className={`${style.inputImage} ${isSelected &&(style.selected)}`}>
                                    <label htmlFor="img"><ion-icon name="image-outline"></ion-icon></label>
                                    <Field 
                                        id='img' 
                                        name="img" 
                                        type="file" 
                                        accept='image/*'    
                                        value={undefined}
                                        onChange={(e)=> {
                                            changePhoto(e)
                                            setFieldValue('img', e.currentTarget.files[0])
                                        }}
                                    />
                                    <Image src={img} layout="fill" objectFit='contain' alt="asd"/>
                                </div>
                                <ErrorMessage name='img' component={()=>(<ErrorInput error={errors.img}/>)}/>
                                <div className={style.inputName}>
                                    <ion-icon name="pencil-outline"></ion-icon>
                                    <Field type="text" placeholder='Nombre' name='name' className={style.input}/>
                                </div>
                                <ErrorMessage name='name' component={()=>(<ErrorInput error={errors.name}/>)}/>
                            </div>
                            <div className={style.side}>
                                <div className={style.inputDescription}>
                                    <label className={style.label} htmlFor="description">Descripción</label>
                                    <Field as="textarea" name="description" id="description" placeholder='Escribe aquí...' className={style.input}></Field>
                                    <ErrorMessage name='description' component={()=>(<ErrorInput error={errors.description}/>)}/>
                                </div>
                                <div className={style.inputCategory}>
                                    <label className={style.label} htmlFor="category">Seleccionar categoría</label>
                                    <Field name="category" as="select" id="category">
                                        <option value="wine">Vino</option>
                                        <option value="champagne">Champagne</option>
                                        <option value="whisky">Whisky</option>
                                    </Field>
                                </div>
                                <div className={style.inputPrice}>
                                    <div className={style.price}>
                                        <label className={style.label} htmlFor="regular_price">Precio costo</label>
                                        <div className={style.priceContainer}>
                                            <Field type="number" className={style.input} id="regular_price" name="regular_price"/>
                                            <span>$</span>
                                        </div>
                                        <ErrorMessage name='regular_price' component={()=>(<ErrorInput error={errors.regular_price}/>)}/>
                                    </div>
                                    <div className={style.price}>
                                        <label className={style.label} htmlFor="price">Precio Venta</label>
                                        <div className={style.priceContainer}>
                                            <Field type="number" className={style.input} id="price" name="price"/>
                                            <span>$</span>
                                        </div>
                                        <ErrorMessage name='price' component={()=>(<ErrorInput error={errors.price}/>)}/>
                                    </div>
                                    <div className={style.price}>
                                        <label className={style.label} htmlFor="price">Stock</label>
                                        <div className={style.priceContainer}>
                                            <Field type="number" className={style.input} id="price" name="stock"/>
                                        </div>
                                        <ErrorMessage name='stock' component={()=>(<ErrorInput error={errors.stock}/>)}/>
                                    </div>
                                </div>
                                <div className={style.status}>
                                    <label htmlFor="status" className={style.label}>Producto activado</label>
                                    <div className={style.checkbox_box}>
                                        <Field type="checkbox" name="status" id="status" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.btnContainer}>
                            <ActionButtons close={close} textAction={"Añadir"}/>
                        </div>   
                    </Form>
                )
            }
            </Formik>
        </div>
    );
};

export default AddProduct;