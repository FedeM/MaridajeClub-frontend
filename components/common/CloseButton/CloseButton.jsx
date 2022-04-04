import localStyle from './CloseButton.module.css'


const CloseButton = ({action, text, style}) => {
    return (
        <div className={localStyle.container} onClick={action} style={style}>
            <p>{text}</p>
        </div>
    );
};

export default CloseButton;