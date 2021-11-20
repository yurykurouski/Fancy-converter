import React, { useState } from 'react';

export const SelectedCurrenciesContext = React.createContext({});

export const SelectedCurrenciesProvider: React.FC = ({ children }) => {
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  return (
    <SelectedCurrenciesContext.Provider
      value={{
        selectedCurrenciesContext: {
          selectedCurrencies: selectedCurrencies,
          setSelectedCurrencies: setSelectedCurrencies,
        },
      }}>
      {children}
    </SelectedCurrenciesContext.Provider>
  );
};
