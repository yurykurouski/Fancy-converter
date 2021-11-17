import React, { useState } from 'react';

export const SelectedCurrenciesContext = React.createContext({
  selectedCurrenciesContext: {
    selectedCurrencies: [],
    setSelectedCurrencies: value => value,
  },
});

export const SelectedCurrenciesProvider = ({ children }) => {
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
