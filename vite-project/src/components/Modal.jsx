import React from 'react';
import { StyledModal } from './styles/Modal.styles';

function Modal() {
  return (
    <StyledModal>
      <h1>Personal info</h1>
      <h2> Please provide your name, email address, and phone number.</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value=""
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value=""
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </StyledModal>
  );
}

export default Modal;
