import React, { createContext, FC, useState } from 'react';

import { FocusedCurrencyContext as Type } from './FocusedCurrencyContext.types';

export const FocusedCurrencyContext = createContext<Type | null>(null);

export const FocusedCurrencyProvider: FC = ({ children }) => {
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
