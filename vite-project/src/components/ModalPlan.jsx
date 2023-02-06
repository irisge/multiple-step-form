import React from 'react';
import { StyledModal, Button } from './styles/Modal.styles';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import { grey, denim } from './styles/Global';

function Modal({ yearly, setYearly }) {
  const plan = [
    {
      url: Arcade,
      alt: 'Arcade icon',
      description: 'Arcade',
      price: '$9/mo',
      yearlyPrice: '$90/yr',
      discount: '2 months free',
    },
    {
      url: Advanced,
      alt: 'Advanced icon',
      description: 'Advanced',
      price: '$12/mo',
      yearlyPrice: '$120/yr',
      discount: '2 months free',
    },
    {
      url: Pro,
      alt: 'Pro icon',
      description: 'Pro',
      price: '$15/mo',
      yearlyPrice: '$150/yr',
      discount: '2 months free',
    },
  ];
  function handleYearly() {
    setYearly((prev) => !prev);
  }
  const monthlyColor = yearly && grey;
  const yearlyColor = !yearly && grey;

  console.log(yearly);
  return (
    <StyledModal>
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      {plan.map((option) => (
        <Button yearly key={option.description}>
          <div className="container">
            <img src={option.url} alt={option.alt} />
            <div className="text-container">
              <h3>{option.description}</h3>
              {!yearly ? (
                <h4>{option.price}</h4>
              ) : (
                <h4>{option.yearlyPrice}</h4>
              )}
              {yearly && <h6>{option.discount}</h6>}
            </div>
          </div>
        </Button>
      ))}
      <div className="switch-container">
        <div className="flex-container">
          <h5 style={{ color: monthlyColor }}>Monthly</h5>
          <label className="switch" htmlFor="toggle">
            <input type="checkbox" id="toggle" onClick={handleYearly} />
            <span className="slider round" />
          </label>
          <h5 style={{ color: yearlyColor }}> Yearly</h5>
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
