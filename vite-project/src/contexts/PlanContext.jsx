import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlanContext = () => useContext(PlanContext);

export const PlanContextProvider = ({ children }) => {
  // mettre les states ici
  const [yearly, setYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <PlanContext.Provider
      value={{
        yearly,
        setYearly,
        cart,
        setCart,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
