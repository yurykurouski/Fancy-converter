import React, { useState } from 'react';

type SelectedCurrenciesContext = {
  selectedCurrenciesContext?: {
    selectedCurrencies: string[] | [];
    setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export const SelectedCurrenciesContext =
  React.createContext<SelectedCurrenciesContext>({});

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
