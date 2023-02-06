import React from 'react';
import GlobalStyles from '../components/styles/Global';
import Sidebar from '../components/Sidebar';
import ModalAddOns from '../components/ModalAddOns';
import Footer from '../components/Footer';

function Step3({ yearly }) {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <ModalAddOns yearly={yearly} />
      <Footer />
    </>
  );
}

export default Step3;
