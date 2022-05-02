import React, { useContext, useRef } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ColorsDark } from 'assets/colors';
import { CurrenciesBottomSheet } from 'components';
import {
  ExchangeCourseContext,
  FocusedCurrencyProvider,
  SelectedCurrenciesContext,
} from 'context';

import { CurrencyValue } from '../CurrencyValue';

import { useTrackKeyboardStatus } from './CurrencySelector.hooks';

import { useStyles } from './CurrencySelector.styles';

export const CurrencySelector: React.FC = React.memo(() => {
  const styles = useStyles();
  const {
    selectedCurrenciesContext: { selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const {
    currentExchangeCourseContext: {
      currentExchangeCourse,
      setCurrentExchangeCourse,
    },
  } = useContext(ExchangeCourseContext);

  const { isLoading, exchangeCourse } = currentExchangeCourse;

  const sheetRef = useRef<BottomSheet>(null);

  const isKeyBoardOpened = useTrackKeyboardStatus();

  return exchangeCourse ? (
    <>
      <ScrollView
        style={[
          styles.container,
          isKeyBoardOpened ? { marginBottom: 20 } : { marginBottom: 60 },
        ]}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={setCurrentExchangeCourse}
            colors={[ColorsDark.MAIN_BUTTON_COLOR]}
          />
        }>
        {!!selectedCurrencies.length && (
          <FocusedCurrencyProvider>
            <CurrencyValue
              selectedCurrencies={selectedCurrencies}
              exchangeCourse={exchangeCourse}
            />
          </FocusedCurrencyProvider>
        )}
      </ScrollView>
      <CurrenciesBottomSheet
        sheetRef={sheetRef}
        selectedCurrencies={selectedCurrencies}
      />
    </>
  ) : (
    <ActivityIndicator size="large" />
  );
});
