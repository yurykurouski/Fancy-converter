import { useCurrenciesListToArray } from 'components/CurrencySelector/CurrencySelector.hooks';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';
import { SelectedCurrenciesContext } from 'context/SelectedCurrenciesContext';
import React, { useContext } from 'react';
import avaliableCurrencies from 'resources/avaliable-currencies.json';

type Props = {
  isExpanded: boolean;
};

export const CurrencySelectorValueMap = React.memo<Props>(({ isExpanded }) => {
  const {
    selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const currenciesArray = useCurrenciesListToArray(avaliableCurrencies);

  return (
    <>
      {currenciesArray.map(value => (
        <CurrencySelectorValue
          key={Object.keys(value)[0]}
          value={value}
          modalSelectedCurrencies={selectedCurrencies}
          setModalSelectedCurrencies={setSelectedCurrencies}
          isExpanded={isExpanded}
        />
      ))}
    </>
  );
});
