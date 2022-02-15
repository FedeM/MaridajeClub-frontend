import React from 'react';
import style from './EditTitle.module.css'


import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { ActionButtons, ErrorInput } from '../../../common';
const updateSuccess = () => toast.success('Actualizado correctamente');


const EditTitle = ({close, title, setIsEditTitle}) => {
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(emptyInputMsg)
    })

    const onSubmit=(values)=>{
        console.log(values)
        updateSuccess()
        setIsEditTitle({activate: true, title: values.title})
    }

    return (
        <>
            <Toaster/>
            <div className={style.background}>
                <div className={style.container}>
                    <h4>Editar título de la tienda</h4>
                    <Formik
                        initialValues={{title}}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {
                            ({errors})=>(
                                <Form className={style.form}>
                                    <Field name="title" type="text" placeholder="Escribe aquí..." className={style.input}/>
                                    <ErrorMessage name='title' component={()=>(<ErrorInput error={errors.title}/>)}/>
                                    <div className={style.btnContiner}>
                                        <ActionButtons close={close} textAction="Actualizar"/>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default EditTitle;