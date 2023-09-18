import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrenciesMainContent, Onboarding } from 'components';
import {
  ExchangeCourseProvider,
  LocalStorageProvider,
  WithNotification,
} from 'context';
import {
  OnboardingContext,
  OnboardingContextProvider,
} from 'context/OnboardingContext';
import {
  useMultiSetToStorageOnBackground,
  useSetCustomColorSchemeFromStorage,
} from 'hooks';
import store from 'store';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { StorageKeys } from 'utils';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isOnboarded, isLoading } = useContext(OnboardingContext);

  const styles = useStyles();

  useMultiSetToStorageOnBackground([StorageKeys.COLOR_SCHEME, colorScheme]);
  useSetCustomColorSchemeFromStorage();

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
      <LocalStorageProvider>
        <Provider store={store}>
          <OnboardingContextProvider>
            <WithNotification>
              <ExchangeCourseProvider>
                <App />
              </ExchangeCourseProvider>
            </WithNotification>
          </OnboardingContextProvider>
        </Provider>
      </LocalStorageProvider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
