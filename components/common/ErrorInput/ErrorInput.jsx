import React from 'react';

const ErrorInput = ({error}) => {
    return (
        <p style={{padding: "5px 0", color: "red"}}>
            {error}
        </p>
    );
};

export default ErrorInput;