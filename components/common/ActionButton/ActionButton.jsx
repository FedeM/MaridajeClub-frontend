import localStyle from './ActionButton.module.css'

const ActionButton = ({action, text, style}) => {
    return (
        <div className={localStyle.container} onClick={action} style={style}>
            <p>{text}</p>
        </div>
    );
};

export default ActionButton;