import React from 'react';
import './modal.scss';
import html from "../../src/assets/skills/html.jpg";

export const Modal = ({ isOpen, closeModal }) => {
    console.log('check');
//   if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
      <p>Hello!!!</p>
        {/* <img src={html} alt="Modal Image" /> */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
