import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/ModalHeader.scss';

// Rendered within the MODAL (PhotoDetailsModal)
const ModalHeader = ({ onClose }) => (
  <button className="modal-header__close-button" onClick={onClose}>
    <img src={closeSymbol} alt="close symbol" />
  </button>
);

export default ModalHeader;
