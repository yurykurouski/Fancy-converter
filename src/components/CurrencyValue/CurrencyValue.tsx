import React, { useContext } from 'react';

import { OPERATION_TYPE_OUT } from '../../contsants';
import { useFilteredCourseBySelectedCurrencies } from '../../hooks/useFilteredCourseBySelectedCurrencies';
import { FocusedCurrencyContext } from '../Context/FocusedCurrencyContext';
import { CurrencyInputValue } from './CurrencyInputValue/CurrencyInputValue';

export const CurrencyValue = ({ selectedCurrencies, exchangeCourse }) => {
  const {
    focusedCurrencyContext: { focusedCurrency, setFocusedCurrency },
  } = useContext(FocusedCurrencyContext);

  const selectedCourses = useFilteredCourseBySelectedCurrencies(
    exchangeCourse,
    selectedCurrencies,
    OPERATION_TYPE_OUT,
  );

  return selectedCurrencies.map(currencyCode => (
    <CurrencyInputValue
      key={currencyCode}
      currencyCode={currencyCode}
      setFocusedCurrency={setFocusedCurrency}
      focusedCurrency={focusedCurrency}
    />
  ));
};
