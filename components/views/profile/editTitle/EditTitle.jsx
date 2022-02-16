import React from 'react';
import style from './EditTitle.module.css'


import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ActionButtons, ErrorInput } from '../../../common';


const EditTitle = ({close, title, editTitle}) => {
    //Validaciones del input
    const emptyInputMsg = "Por favor rellena el campo"
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(emptyInputMsg)
    })

    //Enviar datos al backend y frontend
    const onSubmit=(values)=>{
        editTitle(values.title)
        updateSuccess()
    }

    return (
        <>
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