import ActionButton from '../ActionButton/ActionButton';
import CloseButton from '../CloseButton/CloseButton';
import localStyle from './ActionButtons.module.css'



const ActionButtons = ({style, closeStyle, textClose, close, actionStyle, textAction, action}) => {
    return (
        <div className={localStyle.container} style={style}>
            <CloseButton
                action={close}
                text={textClose}
                style={closeStyle}
            />
            <ActionButton
                action={action}
                text={textAction}
                style={{marginLeft: "10px"}}
            />
        </div>    
    );
};

export default ActionButtons;