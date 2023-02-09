import React, { useEffect } from 'react';
import { usePlanContext } from '../contexts/PlanContext';
import { grey, purple } from './styles/Global';
import { StyledModal } from './styles/Modal.styles';
import { Button } from './styles/Modal.styles';

function Modal() {
  const { yearly, cart, setCart } = usePlanContext();

  const addOns = [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      yearlyPrice: 10,
      checked: false,
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      yearlyPrice: 20,
      checked: false,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2,
      yearlyPrice: 20,
      checked: false,
    },
  ];

  useEffect(() => setCart(addOns), []);

  const handleIsChecked = (id) => {
    setCart((prev) =>
      prev.map((select) => {
        if (select.id === id) {
          return { ...select, checked: !select.checked };
        }
        return select;
      })
    );
  };

  console.log(cart);

  return (
    <StyledModal>
      <h1>Pick add-ons</h1>
      <h2>Add-ons help enhance your gaming experience.</h2>
      {addOns.map((option) => (
        <Button yearly key={option.description}>
          <div className="options-container">
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => handleIsChecked(option.id)}
            />
            <div className="text-container">
              <h3>{option.title}</h3>
              <h6 style={{ color: grey }}>{option.description}</h6>
            </div>
            {!yearly ? (
              <h6 style={{ color: purple }}>{`+$${option.price}/mo`}</h6>
            ) : (
              <h6>{`+$${option.yearlyPrice}/yr`}</h6>
            )}
          </div>
        </Button>
      ))}
    </StyledModal>
  );
}

export default Modal;
