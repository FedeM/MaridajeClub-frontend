import style from './PersonalData.module.css'
import { useState } from "react";

import Image from 'next/image'
import { user } from '../../../../lib/user';
import Link from 'next/link';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
const updateSuccess = () => toast.success('Actualizado correctamente');


const PersonalData = () => {
    const [img, setImage] = useState(user.photo)
    const [initialValues, setInitialValues] = useState({
        photo: "",
        username: user.name,
        email: user.email,
        phone: user.phone,
        address: "Barrio San Pedro M20 C27 / San Martín / Mza",
    })

    // const initialValues = {
    //     photo: "",
    //     username: user.name,
    //     email: user.email,
    //     phone: user.phone,
    //     address: "Barrio San Pedro M20 C27 / San Martín / Mza",
    // }

    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        username: Yup.string().required(emptyInputMsg),
        email: Yup.string().required(emptyInputMsg).email("Por favor utiliza el formato 'user@gmail.com'"),
        phone: Yup.number().required(emptyInputMsg)
    })

    const onSubmit = (values, {resetForm})=> {
        updateSuccess()
        setInitialValues(values)
        // resetForm()
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
                    ({errors})=>(
                    <Form> 
                        <div className={style.photoInputContainer}>
                            <Image src={img} layout="fill" objectFit='contain'/>
                            <label htmlFor="photo"><ion-icon name="camera-outline"></ion-icon></label>
                            <Field type="file" name='photo' id="photo"/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="id-card-outline"></ion-icon>
                            {user.id}
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="at-outline"></ion-icon>
                            <Field type="text" name='username'/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <Field type="text" name='email'/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="call-outline"></ion-icon>
                            <Field type="text" name='phone'/>
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="bulb-outline"></ion-icon>
                            Administrador
                        </div>
                        <div className={style.personalData}>
                            <ion-icon name="compass-outline"></ion-icon>
                            <Field type="text" name='address'/>
                        </div>
                        <div className={style.personalData}>
                            <Link href="/forget-password">
                                <a>¿Olvidaste tu contraseña?</a>
                            </Link>
                        </div>
                        <button className={style.updateBtn}>
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