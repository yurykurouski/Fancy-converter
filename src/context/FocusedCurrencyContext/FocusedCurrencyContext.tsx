import React, { useState } from 'react';

import { FocusedCurrencyContext as Type } from './FocusedCurrencyContext.types';

export const FocusedCurrencyContext = React.createContext<Type | null>(null);

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
