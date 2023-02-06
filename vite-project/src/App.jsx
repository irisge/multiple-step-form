import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Step1 from './views/Step1';
import Step2 from './views/Step2';
import Step3 from './views/Step3';
import Step4 from './views/Step4';
import SubmissionNotification from './views/SubmissionNotification';

function App() {
  const [yearly, setYearly] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route
          path="/plan"
          element={<Step2 yearly={yearly} setYearly={setYearly} />}
        />
        <Route path="/add-ons" element={<Step3 yearly={yearly} />} />
        <Route path="/confirm-submission" element={<Step4 />} />
        <Route
          path="/submission-notification"
          element={<SubmissionNotification />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
