import React from 'react';

import { CurrencyInputValue } from './CurrencyInputValue/CurrencyInputValue';

export const CurrencyValue = ({ selectedCurrencies }) => {
  return selectedCurrencies.map(currencyCode => (
    <CurrencyInputValue key={currencyCode} currencyCode={currencyCode} />
  ));
};
