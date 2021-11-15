import React, { useState } from 'react';
import { Button } from 'react-native';

import { CurrenciesOverlay } from '../CurrenciesOverlay/CurrenciesOverlay';
import { withSelectedCurrencies } from '../SelectedCurrenciesContext';
import { useCurrenciesListToArray } from './CurrencySelector.hooks';

const CurrencySelector = ({
  avaliableCurrencies,
  selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
}) => {
  const [isModal, setIsModal] = useState(false);

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
      <Button onPress={() => setIsModal(true)} title="Add a currency" />
    </>
  );
};

export default withSelectedCurrencies(CurrencySelector);
