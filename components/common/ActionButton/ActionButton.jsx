import localStyle from './ActionButton.module.css'

const ActionButton = ({action, text, style}) => {
    return (
        <button type='submit' className={localStyle.container} onClick={action} style={style}>
            <p>{text}</p>
        </button>
    );
};

export default ActionButton;