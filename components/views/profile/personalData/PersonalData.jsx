import style from './PersonalData.module.css'
import { useContext, useState } from "react";

import Image from 'next/image'
import { user } from '../../../../lib/user';
import Link from 'next/link';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorInput } from '../../../common';
import AuthContext from '../../../../context/AuthContext';
const updateSuccess = () => toast.success('Actualizado correctamente');


const PersonalData = () => {
    const {name, email, photo, phone, address, role, setUserName, setUserEmail, setUserPhoto, setUserPhone, setUserAddress} = useContext(AuthContext)
    console.log(role)
    //Declaramos los estados (Imagen - Valores iniciales)
    const initialValues = {
        photo: "",
        name,
        email,
        phone,
        address,
    }

    //Renderizar nueva foto al seleccionarla
    const changePhoto=(e)=>{
        let url = URL.createObjectURL(e.target.files[0]);
        setUserPhoto(url)
    }  

    //Esquema de validación
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(emptyInputMsg),
        email: Yup.string().required(emptyInputMsg).email("Por favor utiliza el formato 'user@gmail.com'"),
        phone: Yup.number().required(emptyInputMsg)
    })

    //Enviar datos al backend
    const onSubmit = (values)=> {
        updateSuccess()
        setUserName(values.name) 
        setUserEmail(values.email) 
        setUserPhone(values.phone) 
        setUserAddress(values.address)
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
                            <Image src={photo} layout="fill" objectFit='contain' alt={user.name}/>
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
                            <Field type="text" name='name'/>
                            <ErrorMessage name='name' component={()=>(<ErrorInput error={errors.name}/>)}/>
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
                            <ion-icon name="compass-outline"></ion-icon>
                            <Field type="text" name='address'/>
                            <ErrorMessage name='address' component={()=>(<ErrorInput error={errors.address}/>)}/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="bulb-outline"></ion-icon>
                            {
                                role === 1 ?('Comprador'):
                                role === 2 ?('Vendedor'):
                                ('Administrador')
                            }
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