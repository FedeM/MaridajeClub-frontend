import React from 'react';
import style from './ActionButtons.module.css'

const ActionButtons = ({close, textAction}) => {
    return (
        <div className={style.container}>
            <div className={style.button} onClick={close}>Cerrar</div>
            <button type='submit' className={style.button}><span>{textAction}</span></button>
        </div>    
    );
};

export default ActionButtons;