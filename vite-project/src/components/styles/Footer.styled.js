import styled from 'styled-components';
import { denim, grey } from './Global';

export const GoBackButton = styled.button`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${grey};
  border: none;
  background: none;
  padding: 0;
  visibility: ${(props) => props.hide}

`;

export const NextStepButton = styled.button`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  background-color: ${denim};
  color: #fff;
  border-radius: 0.25rem;
  border: none;
  padding: 0.75rem 1.02rem;
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  bottom: 0;
  position: fixed;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background: white;
    padding: 1rem 1rem;
  }

  button {
    color: ;
  }
`;
