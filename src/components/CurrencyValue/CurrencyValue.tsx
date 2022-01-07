import { useFilteredCourseBySelectedCurrencies } from 'hooks/useFilteredCourseBySelectedCurrencies';
import React, { useContext } from 'react';
import { ResultFromAPI, SelectedCurrencies } from 'types/avaliable-currencies';

import { FocusedCurrencyContext } from '../Context/FocusedCurrencyContext';
import { CurrencyInputValue } from './CurrencyInputValue/CurrencyInputValue';

type Props = {
  selectedCurrencies: SelectedCurrencies;
  exchangeCourse: ResultFromAPI[] | null;
};

export const CurrencyValue = React.memo<Props>(
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
