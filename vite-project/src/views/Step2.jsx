import React from 'react';
import GlobalStyles from '../components/styles/Global';
import Sidebar from '../components/Sidebar';
import ModalPlan from '../components/ModalPlan';
import Footer from '../components/Footer';
import { usePlanContext } from '../contexts/PlanContext';

function Step2() {
  const { yearly, setYearly, plan, setPlan } = usePlanContext();
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <ModalPlan />
      <Footer />
    </>
  );
}

export default Step2;
