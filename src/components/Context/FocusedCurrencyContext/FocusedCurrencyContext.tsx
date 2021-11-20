import React, { useState } from 'react';

export const FocusedCurrencyContext = React.createContext({});

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
