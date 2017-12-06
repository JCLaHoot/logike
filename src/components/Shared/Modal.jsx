import React from 'react';


const Modal = ({
    title,
    content,
    affirmativeText,
    dismissiveText,
    affirmativeAction,
    dismissiveAction
  }) => {

    return (
          <div className="modal">
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
