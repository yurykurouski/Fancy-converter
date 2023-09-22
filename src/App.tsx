import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import {
  CurrenciesBottomSheet,
  CurrenciesMainContent,
  Onboarding,
} from 'components';
import { WithNotification } from 'context';
import {
  useAppearanceChangeListener,
  useMultiSetToStorageOnBackground,
} from 'hooks';
import { useInitDataFromStorage } from 'hooks/useInitDataFromStorage';
import store from 'store';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { StorageKeys } from 'utils';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const { isOnBoarded, isLoadingStatus } = useSelector(selectOnBoardingStatus);
  const { isDrawerOpened } = useSelector(selectDrawerOpenStatus);
  const { exchangeCourses, lastUpdated } = useSelector(selectExchangeCourses);

  const styles = useStyles();

  useInitDataFromStorage();

  useMultiSetToStorageOnBackground([
    [StorageKeys.COLOR_SCHEME, colorScheme],
    [StorageKeys.SELECTED_CURRENCIES, selectedCurrencies.join(',')],
    [StorageKeys.IS_ONBOARDED, JSON.stringify(isOnBoarded)],
    [StorageKeys.EXCHANGE_COURSES, JSON.stringify(exchangeCourses)],
    [StorageKeys.LAST_COURSES_UPDATE, JSON.stringify(lastUpdated)],
  ]);

  useAppearanceChangeListener();

  if (isLoadingStatus) return;

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={THEME_COLORS[colorScheme].APP_BACKGROUND_PRIMARY}
        />
        {isOnBoarded ? <CurrenciesMainContent /> : <Onboarding />}
        <CurrenciesBottomSheet
          isDrawerOpened={isDrawerOpened}
          selectedCurrencies={selectedCurrencies}
        />
      </SafeAreaView>
    </>
  );
});

export default () => (
  <SafeAreaProvider>
    <GestureHandlerRootView>
      <Provider store={store}>
        <WithNotification>
          <App />
        </WithNotification>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
