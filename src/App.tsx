import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrenciesMainContent, Onboarding } from 'components';
import { WithNotification } from 'context';
import {
  OnboardingContext,
  OnboardingContextProvider,
} from 'context/OnboardingContext';
import {
  useMultiSetToStorageOnBackground,
  useSetCustomColorSchemeFromStorage,
} from 'hooks';
import { useSetCurrenciesFromStorage } from 'hooks/useSetCurrenciesFromStorage';
import store from 'store';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { StorageKeys } from 'utils';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const { isOnboarded, isLoading } = useContext(OnboardingContext);

  const styles = useStyles();

  const result = selectedCurrencies.join(',');

  useSetCustomColorSchemeFromStorage();
  useSetCurrenciesFromStorage();
  useMultiSetToStorageOnBackground([
    [StorageKeys.COLOR_SCHEME, colorScheme],
    [StorageKeys.SELECTED_CURRENCIES, result],
  ]);

  if (isLoading) return;

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={THEME_COLORS[colorScheme].APP_BACKGROUND_PRIMARY}
        />
        {isOnboarded ? <CurrenciesMainContent /> : <Onboarding />}
      </SafeAreaView>
    </>
  );
});

export default () => (
  <SafeAreaProvider>
    <GestureHandlerRootView>
      <Provider store={store}>
        <OnboardingContextProvider>
          <WithNotification>
            <App />
          </WithNotification>
        </OnboardingContextProvider>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
