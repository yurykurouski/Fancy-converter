import React, { useContext } from 'react';
import { useFilteredCourseBySelectedCurrencies } from 'hooks/useFilteredCourseBySelectedCurrencies';
import { OnlyCourses } from 'utils/utils.types';

import { FocusedCurrencyContext } from '../../context/FocusedCurrencyContext';

import { CurrencyInputValue } from './CurrencyInputValue/CurrencyInputValue';

type Props = {
  selectedCurrencies: string[];
  exchangeCourse: OnlyCourses | null;
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

    return (
      <>
        {selectedCurrencies.map(currencyCode => (
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
        ))}
      </>
    );
  },
);
