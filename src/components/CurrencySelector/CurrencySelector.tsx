import React from 'react';
import { CurrenciesOverlay } from '../CurrenciesOverlay/CurrenciesOverlay';
import { useCurrenciesListToArray } from './CurrencySelector.hooks';

export const CurrencySelector = ({
  avaliableCurrencies,
  isModal,
  setIsModal,
  setSelectedCurrencies,
  selectedCurrencies,
}) => {
  const resultsArray = useCurrenciesListToArray(avaliableCurrencies);
  return (
    <>
      {isModal && (
        <CurrenciesOverlay
          setIsModal={setIsModal}
          currenciesList={resultsArray}
          setSelectedCurrencies={setSelectedCurrencies}
          selectedCurrencies={selectedCurrencies}
        />
      )}
    </>
  );
};
