import React from 'react';

import { withSelectedCurrencies } from '../SelectedCurrenciesContext';
import { CurrencyInputValue } from './CurrencyInputValue';

const CurrencyValue = ({
  selectedCurrenciesContext: { selectedCurrencies },
}) => {
  return selectedCurrencies.map(currencyCode => (
    <CurrencyInputValue key={currencyCode} currencyCode={currencyCode} />
  ));
};

export default withSelectedCurrencies(CurrencyValue);
