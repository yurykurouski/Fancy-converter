import React, { useState, useCallback } from 'react';
import CheckBox from '@react-native-community/checkbox';

export const CurrenciesCheckbox = ({
  selectedCurrencies,
  currencyCode,
  setModalSelectedCurrencies,
  isActive,
}) => {
  const [isChecked, setIsChecked] = useState(isActive);

  const checkHandler = useCallback(
    value => {
      if (isChecked) {
        const filteredCurrenciesList = selectedCurrencies.filter(
          code => code !== currencyCode,
        );
        setModalSelectedCurrencies(filteredCurrenciesList);
      } else {
        setModalSelectedCurrencies([...selectedCurrencies, currencyCode]);
      }

      setIsChecked(value);
    },
    [currencyCode, isChecked, selectedCurrencies, setModalSelectedCurrencies],
  );

  return <CheckBox value={isChecked} onValueChange={checkHandler} />;
};
