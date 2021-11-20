import React, { useContext } from 'react';

import { OPERATION_TYPE_OUT } from '../../contsants';
import { useFilteredCourseBySelectedCurrencies } from '../../hooks/useFilteredCourseBySelectedCurrencies';
import { FocusedCurrencyContext } from '../Context/FocusedCurrencyContext';
import { CurrencyInputValue } from './CurrencyInputValue/CurrencyInputValue';

export const CurrencyValue = React.memo(
  ({ selectedCurrencies, exchangeCourse }) => {
    const {
      focusedCurrencyContext: {
        focusedCurrency,
        setFocusedCurrencyName,
        setFocusedCurrencyValue,
      },
    } = useContext(FocusedCurrencyContext);

    const { focusedCurrencyName, focusedCurrencyValue } = focusedCurrency;

    const selectedCourses = useFilteredCourseBySelectedCurrencies(
      exchangeCourse,
      selectedCurrencies,
      OPERATION_TYPE_OUT,
    );

    return selectedCurrencies.map(currencyCode => (
      <CurrencyInputValue
        key={currencyCode}
        currencyCode={currencyCode}
        setFocusedCurrencyName={setFocusedCurrencyName}
        focusedCurrencyName={focusedCurrencyName}
        setFocusedCurrencyValue={setFocusedCurrencyValue}
        focusedCurrencyValue={focusedCurrencyValue}
        course={selectedCourses[currencyCode]}
        focusedCurrencyCourse={selectedCourses[focusedCurrencyName]}
      />
    ));
  },
);
