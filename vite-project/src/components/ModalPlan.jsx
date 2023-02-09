import React from 'react';
import { StyledModal, Button } from './styles/Modal.styles';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import { grey, denim } from './styles/Global';
import { usePlanContext } from '../contexts/PlanContext';

//context ou LocalStorage
function Modal() {
  const { yearly, setYearly, selectedPlan, setSelectedPlan } = usePlanContext();

  const plan = [
    {
      url: Arcade,
      alt: 'Arcade icon',
      description: 'Arcade',
      price: 9,
      yearlyPrice: 90,
      discount: '2 months free',
    },
    {
      url: Advanced,
      alt: 'Advanced icon',
      description: 'Advanced',
      price: 12,
      yearlyPrice: 120,
      discount: '2 months free',
    },
    {
      url: Pro,
      alt: 'Pro icon',
      description: 'Pro',
      price: 15,
      yearlyPrice: 150,
      discount: '2 months free',
    },
  ];
  function handleYearly() {
    setYearly((prev) => !prev);
  }
  const monthlyColor = yearly && grey;
  const yearlyColor = !yearly && grey;

  function handlePlan(description) {
    setSelectedPlan(() =>
      plan.filter((select) => {
        if (select.description === description) {
          return { select };
        }
      })
    );
  }

  console.log(selectedPlan);

  return (
    <StyledModal>
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      {plan.map((option) => (
        <Button yearly key={option.description}>
          <button
            className="container"
            type="button"
            onClick={() => handlePlan(option.description)}
            style={{ alignItems: yearly ? 'start' : 'start' }}
          >
            <img src={option.url} alt={option.alt} />
            <div className="text-container">
              <h3>{option.description}</h3>
              {!yearly ? (
                <h4>{`$${option.price}/mo`}</h4>
              ) : (
                <h4>{`$${option.yearlyPrice}/yr`}</h4>
              )}
              {yearly && <h6>{option.discount}</h6>}
            </div>
          </button>
        </Button>
      ))}
      <div className="switch-container">
        <div className="flex-container">
          <h5 style={{ color: monthlyColor }}>Monthly</h5>
          <label className="switch" htmlFor="toggle">
            <input
              type="checkbox"
              id="toggle"
              checked={yearly}
              onClick={handleYearly}
            />
            <span className="slider round" />
          </label>
          <h5 style={{ color: yearlyColor }}> Yearly</h5>
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
