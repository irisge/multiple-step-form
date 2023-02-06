import React from 'react';
import GlobalStyles from '../components/styles/Global';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

function Step1() {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Modal />
      <Footer hide="hidden" />
    </>
  );
}

export default Step1;
