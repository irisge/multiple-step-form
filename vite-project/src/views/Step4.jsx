import React from 'react';
import GlobalStyles from '../components/styles/Global';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ModalConfirmSubmission from '../components/ModalConfirmSubmission';

function Step4() {
  return (
    <>
      <GlobalStyles />
      <ModalConfirmSubmission />
      <Sidebar />
      <Footer />
    </>
  );
}

export default Step4;
