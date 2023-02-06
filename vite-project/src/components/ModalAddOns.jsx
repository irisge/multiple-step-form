import React, { useState } from 'react';
import { grey, purple } from './styles/Global';
import { StyledModal } from './styles/Modal.styles';
import { Button } from './styles/Modal.styles';

function Modal({ yearly }) {
  const [cart, setCart] = useState([]);

  const addOns = [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
      yearlyPrice: '+$10/yr',
      checked: false,
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      yearlyPrice: '+$20/yr',
      checked: false,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
      yearlyPrice: '+$20/yr',
      checked: false,
    },
  ];

  const handleIsChecked = (id) => {
    setCart(
      addOns.map((select) => {
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
        <Button
          yearly
          key={option.description}
          onClick={() => handleIsChecked(option.id)}
        >
          <div className="options-container">
            <input type="checkbox" id="checkbox" />
            <div className="text-container">
              <h3>{option.title}</h3>
              <h6 style={{ color: grey }}>{option.description}</h6>
            </div>
            {!yearly ? (
              <h6 style={{ color: purple }}>{option.price}</h6>
            ) : (
              <h6>{option.yearlyPrice}</h6>
            )}
          </div>
        </Button>
      ))}
    </StyledModal>
  );
}

export default Modal;
