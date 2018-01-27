import React from 'react';


const Modal = ({
                   title,
                   content,
                   affirmativeText,
                   dismissiveText,
                   affirmativeAction,
                   dismissiveAction,
                   show
               }, closeModal) => {

    const displayMode = () => {
        if (show) {
            return {display: 'flex'}
        }
        else {
            return {display: 'none'}
        }
    };

    return (
        <div className="modal" style={displayMode()} onClick={closeModal}>
            <div className="modal-content">
                <h5 className="title">{title}</h5>
                <p className="content">{content}</p>
                <div className="modal-button-container">
                    <button onClick={dismissiveAction}>{dismissiveText}</button>
                    <button onClick={affirmativeAction}>{affirmativeText}</button>
                </div>
            </div>
        </div>
    )

};

export default Modal;
