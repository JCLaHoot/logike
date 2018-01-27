import React from 'react';


const Toast = ({toastMessage, show}) => {

    return (
        <div className={`toast ${show ? "show" : ""}`}>
            {toastMessage}
        </div>
    )

};

export default Toast;
