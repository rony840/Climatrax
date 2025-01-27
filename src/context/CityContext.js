import React, { createContext, useState, useContext } from 'react';

// Create a Context for the City
const CityContext = createContext();

// CityProvider component to wrap your app and provide the context
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

// Custom hook to access City context
export const useCity = () => useContext(CityContext);
