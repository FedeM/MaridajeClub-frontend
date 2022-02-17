import style from './LoadingTab.module.css'

const LoadingTab = () => {
    return (
        <div className={style.container}>
            <div className={style.loader}>
                Loading
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default LoadingTab;