import style from './SortBox.module.css'

const SortBox = ({callbackClose}) => {
    return (
        <div className={style.filter_container}>
            <div className={style.close}>
                <i className="fas fa-times" onClick={()=> callbackClose(false)}></i>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Ordenar por</h3>
                </div>
                <div className={style.sort_container}>
                    <div><p>Más reciente</p></div>
                    <div><p>Mayor precio</p></div>
                    <div><p>Menor precio</p></div>
                </div>
            </div>
        </div>
    );
};

export default SortBox;