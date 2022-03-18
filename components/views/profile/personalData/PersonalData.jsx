import style from './PersonalData.module.css'
import { useState } from "react";

import Image from 'next/image'
import { user } from '../../../../lib/user';
import Link from 'next/link';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorInput } from '../../../common';
const updateSuccess = () => toast.success('Actualizado correctamente');


const PersonalData = () => {
    //Declaramos los estados (Imagen - Valores iniciales)
    const [img, setImage] = useState(user.photo)
    const [initialValues, setInitialValues] = useState({
        photo: "",
        username: user.name,
        email: user.email,
        phone: user.phone,
        address: "Barrio San Pedro M20 C27 / San Martín / Mza",
    })

    //Renderizar nueva foto al seleccionarla
    const changePhoto=(e)=>{
        let url = URL.createObjectURL(e.target.files[0]);
        setImage(url)
    }  

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        username: Yup.string().required(emptyInputMsg),
        email: Yup.string().required(emptyInputMsg).email("Por favor utiliza el formato 'user@gmail.com'"),
        phone: Yup.number().required(emptyInputMsg)
    })

    //Enviar datos al backend
    const onSubmit = (values)=> {
        updateSuccess()
        setInitialValues(values)
    }


    return (
        <div className={style.container}>
            <Toaster/>
            <div className={style.personalDataContainer}>
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                >
                {
                    ({errors, setFieldValue})=>(
                    <Form> 
                        <div className={style.photoInputContainer}>
                            <Image src={img} layout="fill" objectFit='contain' alt={user.name}/>
                            <label htmlFor="photo"><ion-icon name="camera-outline"></ion-icon></label>
                            <Field 
                            type="file" 
                            name='photo' 
                            id="photo"
                            accept='image/*'    
                            value={undefined}
                            onChange={(e)=> {
                                changePhoto(e)
                                setFieldValue('photo', e.currentTarget.files[0])
                            }}
                            />
                            <ErrorMessage name='photo' component={()=>(<ErrorInput error={errors.photo}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="at-outline"></ion-icon>
                            <Field type="text" name='username'/>
                            <ErrorMessage name='username' component={()=>(<ErrorInput error={errors.username}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <Field type="text" name='email'/>
                            <ErrorMessage name='email' component={()=>(<ErrorInput error={errors.email}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="call-outline"></ion-icon>
                            <Field type="text" name='phone'/>
                            <ErrorMessage name='phone' component={()=>(<ErrorInput error={errors.phone}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="bulb-outline"></ion-icon>
                            Administrador
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="compass-outline"></ion-icon>
                            <Field type="text" name='address'/>
                            <ErrorMessage name='address' component={()=>(<ErrorInput error={errors.address}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <Link href="/forget-password">
                                <a>¿Olvidaste tu contraseña?</a>
                            </Link>
                        </div>
                        <button className={style.updateBtn} type="submit">
                            Actualizar
                        </button>
                    </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    );
};

export default PersonalData;