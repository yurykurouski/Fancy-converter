import React, { useState } from 'react';

type FocusedCurrencyContext = {
  focusedCurrencyContext?: {
    focusedCurrency: {
      focusedCurrencyName: string;
      focusedCurrencyValue: string;
    };
    setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>;
    setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const FocusedCurrencyContext =
  React.createContext<FocusedCurrencyContext>({});

export const FocusedCurrencyProvider: React.FC = ({ children }) => {
  const [focusedCurrencyName, setFocusedCurrencyName] = useState('');
  const [focusedCurrencyValue, setFocusedCurrencyValue] = useState('');

  return (
    <FocusedCurrencyContext.Provider
      value={{
        focusedCurrencyContext: {
          focusedCurrency: {
            focusedCurrencyName,
            focusedCurrencyValue,
          },
          setFocusedCurrencyName,
          setFocusedCurrencyValue,
        },
      }}>
      {children}
    </FocusedCurrencyContext.Provider>
  );
};
