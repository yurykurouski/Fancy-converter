import React, { useState } from 'react';

export const FocusedCurrencyContext = React.createContext({
  focusedCurrencyContext: {
    focusedCurrency: '',
    setFocusedCurrency: value => value,
  },
});

export const FocusedCurrencyProvider = ({ children }) => {
  const [focusedCurrency, setFocusedCurrency] = useState('CAD');

  return (
    <FocusedCurrencyContext.Provider
      value={{
        focusedCurrencyContext: {
          focusedCurrency: focusedCurrency,
          setFocusedCurrency: setFocusedCurrency,
        },
      }}>
      {children}
    </FocusedCurrencyContext.Provider>
  );
};
