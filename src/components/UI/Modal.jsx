import React from 'react';
import modalcss from './modal.module.css';
import { useUserContext } from '../../context/useContext';

function Modal() {
  const { toggleModal, error } = useUserContext();

  return (
    <div className={modalcss.container}>
      <div>Oh Snap!</div>
      <div>
        <p>{error}</p>
      </div>
      <button className={modalcss.btnmodal} onClick={toggleModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
