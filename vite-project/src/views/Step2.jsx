import React from 'react';
import GlobalStyles from '../components/styles/Global';
import Sidebar from '../components/Sidebar';
import ModalPlan from '../components/ModalPlan';
import Footer from '../components/Footer';

function Step2({ yearly, setYearly }) {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <ModalPlan yearly={yearly} setYearly={setYearly} />
      <Footer />
    </>
  );
}

export default Step2;
