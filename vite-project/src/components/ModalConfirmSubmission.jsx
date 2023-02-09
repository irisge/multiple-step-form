import React from 'react';
import { usePlanContext } from '../contexts/PlanContext';
import { Resume, StyledModal } from './styles/Modal.styles';

function Modal() {
  const { selectedPlan, cart, yearly, setYearly } = usePlanContext();

  const total =
    parseInt(
      selectedPlan.map((x) => x.price),
      10
    ) +
    parseInt(
      cart
        .filter((options) => options.checked === true)
        .map((priceAdd) => priceAdd.price)
        .reduce((a, b) => a + b, 0),
      10
    );

  return (
    <StyledModal>
      <h1>Finishing up</h1>
      <h2>Double-check everything looks OK before confirming.</h2>
      <Resume>
        {selectedPlan.map((elem) => (
          <>
            <h3>
              {elem.description} ({yearly ? 'Yearly' : 'Monthly'})
            </h3>
            <div class="planContainer">
              <button type="button" onClick={() => setYearly((prev) => !prev)}>
                <h4>Change</h4>
              </button>
              <h4 class="price">
                {yearly ? `$${elem.yearlyPrice}/yr` : `$${elem.price}/mo`}
              </h4>
            </div>
            <hr />
            <div>
              {cart
                .filter((checked) => checked.checked === true)
                .map((x) => (
                  <div>
                    <h4>{x.title}</h4>
                    <h4>
                      {yearly ? `$${x.yearlyPrice}/yr` : `$${x.price}/mo`}
                    </h4>
                  </div>
                ))}
            </div>
          </>
        ))}
      </Resume>
      <div class="total">
        <h4>Total (per {yearly ? 'year' : 'month'})</h4>
        <h3>{yearly ? `+$${total * 10}/yr` : `+$${total}/mo`}</h3>
      </div>
    </StyledModal>
  );
}

export default Modal;
