import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  GoBackButton,
  NextStepButton,
  StyledFooter,
} from './styles/Footer.styled';

function Footer({ hide }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(1);
  };
  return (
    <StyledFooter>
      <div>
        <GoBackButton hide={hide} onClick={goBack} type="button">
          Go Back
        </GoBackButton>
        <NextStepButton onClick={goForward} type="button">
          Next Step
        </NextStepButton>
      </div>
    </StyledFooter>
  );
}

export default Footer;
