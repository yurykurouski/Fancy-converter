import { SelectedCurrenciesContext } from 'components/Context/SelectedCurrenciesContext';
import { CurrencySelectorValue } from 'components/CurrenciesModal/CurrencySelectorValue';
import { useCurrenciesListToArray } from 'components/CurrencySelector/CurrencySelector.hooks';
import React, { useContext } from 'react';
import avaliableCurrencies from 'resources/avaliable-currencies.json';

export const CurrencySelectorValueMap = React.memo(() => {
  const {
    selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);
  //TODO: look at setSelectedCurrencies logic
  // const [modalSelectedCurrencies, setModalSelectedCurrencies] =
  //   useState(selectedCurrencies);

  const currenciesArray = useCurrenciesListToArray(avaliableCurrencies);

  return currenciesArray.map(value => (
    <CurrencySelectorValue
      key={Object.keys(value)[0]}
      value={value}
      modalSelectedCurrencies={selectedCurrencies}
      setModalSelectedCurrencies={setSelectedCurrencies}
    />
  ));
});
