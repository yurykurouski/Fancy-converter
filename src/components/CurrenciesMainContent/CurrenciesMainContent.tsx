import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { ExchangeCourseContext } from '../Context/ExchangeCourseContext';
import { SelectedCurrenciesProvider } from '../Context/SelectedCurrenciesContext';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

export const CurrenciesMainContent = () => {
  const {
    currentExchangeCourseContext: { currentExchangeCourse },
  } = useContext(ExchangeCourseContext);
  const { isLoading, exchangeCourse } = currentExchangeCourse;

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <SelectedCurrenciesProvider>
      <CurrencySelector exchangeCourse={exchangeCourse} />
    </SelectedCurrenciesProvider>
  );
};
