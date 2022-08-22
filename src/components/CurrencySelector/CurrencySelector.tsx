import React, { lazy, Suspense, useContext } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import { ColorsDark } from 'assets/colors';
import {
  ExchangeCourseContext,
  FocusedCurrencyProvider,
  SelectedCurrenciesContext,
} from 'context';

import { CurrencyValue } from '../CurrencyValue';

import { useTrackKeyboardStatus } from './CurrencySelector.hooks';

const CurrenciesBottomSheet = lazy(
  () => import('../CurrenciesBottomSheet/CurrenciesBottomSheet'),
);

export const CurrencySelector = React.memo(() => {
  const {
    selectedCurrenciesContext: { selectedCurrencies, setSelectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const {
    currentExchangeCourseContext: {
      currentExchangeCourse,
      setCurrentExchangeCourse,
    },
  } = useContext(ExchangeCourseContext);

  const { isLoading, exchangeCourse } = currentExchangeCourse;

  const isKeyBoardOpened = useTrackKeyboardStatus();

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <ScrollView
        style={isKeyBoardOpened ? { marginBottom: 20 } : { marginBottom: 60 }}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={setCurrentExchangeCourse}
            colors={[ColorsDark.MAIN_BUTTON_COLOR]}
          />
        }>
        {!!selectedCurrencies.length && exchangeCourse && (
          <FocusedCurrencyProvider>
            <CurrencyValue
              selectedCurrencies={selectedCurrencies}
              exchangeCourse={exchangeCourse}
            />
          </FocusedCurrencyProvider>
        )}
      </ScrollView>

      <Suspense fallback={<View />}>
        {exchangeCourse && (
          <CurrenciesBottomSheet
            selectedCurrencies={selectedCurrencies}
            setSelectedCurrencies={setSelectedCurrencies}
          />
        )}
      </Suspense>
    </Suspense>
  );
});
