import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PlanContextProvider } from './contexts/PlanContext';
import Step1 from './views/Step1';
import Step2 from './views/Step2';
import Step3 from './views/Step3';
import Step4 from './views/Step4';
import SubmissionNotification from './views/SubmissionNotification';

function App() {

  return (
    <PlanContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route
            path="/plan"
            element={<Step2/>}
          />
          <Route path="/add-ons" element={<Step3 />} />
          <Route path="/confirm-submission" element={<Step4 />} />
          <Route
            path="/submission-notification"
            element={<SubmissionNotification />}
          />
        </Routes>
      </BrowserRouter>
    </PlanContextProvider>
  );
}

export default App;
