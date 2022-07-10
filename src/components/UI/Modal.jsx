import React from 'react';
import modalcss from './modal.module.css';

function Modal({ onToggleModal, loginError }) {
  console.log(loginError);
  return (
    <div className={modalcss.container}>
      <div>Oh Snap!</div>
      <div>
        <p>{loginError}</p>
      </div>
      <button className={modalcss.btnmodal} onClick={onToggleModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
