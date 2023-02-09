import styled from 'styled-components';
import { denim, grey, purple, redErrors, veryLightGrey } from './Global';

export const Resume = styled.div`
  background: ${veryLightGrey};
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 1rem 1rem;
  margin: 1rem 0;

  p {
    white-space: nowrap;
  }

  button {
    background: none;
    border: none;
    color: ${grey};
    text-decoration: underline;
    width: 100%;
  }

  h4 {
    display: flex;
    padding: 0 1rem;
  }

  hr {
    border: 1px solid ${grey};
    margin: 0 1rem;
  }

  h4:nth-child(2) {
    color: ${denim};
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-weight: bold;
  }

  .planContainer {
  }

  h3 {
    padding: 0 1rem;
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #d6d9e6;
  border-radius: 8px;
  margin: 0.75rem 0;
  display: flex;
  width: 100%;
  height: auto;
  overflow: scroll;

  :active,
  :hover,
  :after,
  .checked {
    background: ${veryLightGrey};
    border: 1px solid ${purple};
  }

  button {
    background: none;
    border: none;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 0 0.475rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 0.875rem;
    justify-content: space-between;
    width: 100%;
    padding: 0;
  }

  .options-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 0 0.475rem;
  }

  .options-container input {
    width: 20px;
    height: 20px;
  }

  .options-text-container {
  }
`;

export const StyledModal = styled.div`
  background: white;
  margin: 0 1rem;
  padding: 2.5rem 1.5rem;
  flex-flow: flex-column;
  flex-wrap: nowrap;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 0.625rem;
  position: fixed;
  top: 6.188rem;

  button {
    flex-flow: flex-column;
    width: 100%;
    padding: 0.5rem 0;
  }

  div {
    flex-flow: flex-column;
    width: 100%;
    padding: 0.5rem 0;
  }

  label,
  input {
    width: 100%;
  }

  label {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${denim};
  }

  input::placeholder,
  input:focus {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 0.938rem;
    line-height: 1.063rem;
    color: ${grey};
  }

  input:placeholder-shown,
  input:focus {
    padding: 0.66rem 0.4rem;
    border: 1px solid #d6d9e6;
    border-radius: 4px;
  }

  input:not(:placeholder-shown) {
    padding: 0.66rem 0.4rem;
    border: 1px solid #d6d9e6;
    border-radius: 4px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 0.938rem;
    line-height: 1.063rem;
    color: ${denim};
  }

  input:focus {
    border: 1px solid #483eff;
  }

  input:focus, input:active, input: {
    color: ${denim};
  }

  input:user-invalid {
    border: 1px solid ${redErrors};
  }

  .switch-container {
    display: flex;
    flex-direction: row;
    width: full;
    align-items: center;
    justify-content: center;
    background-color: ${veryLightGrey};
  }

  .flex-container {
    width: 62%;
    display: flex;
    flex-direction: row;
    width: full;
    align-items: center;
    justify-content: space-between;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${denim};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${denim};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  h3 {
    margin-bottom: 0.45rem;
  }

  h5 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${denim};
  }

  h5:first-child {
    text-align: right;
  }
  h5:last-child {
    text-align: left;
  }

  h6 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-family: Ubuntu;
    text-align: left;
    white-space: nowrap;
    color: ${denim};
  }

  .total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .total h4, .total h3 {
    display: block;
  }

  .total h3 {
    color: ${purple}
  }
`;
