import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
import { ThemeProvider } from 'context/ThemeProvider';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { themeColors, colorScheme } = useContext(ThemeContext);
  const { isOnboarded, isLoading } = useContext(OnboardingContext);

  const styles = useStyles();

  if (isLoading) return;

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={themeColors.APP_BACKGROUND_PRIMARY}
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
        <ThemeProvider>
          <OnboardingContextProvider>
            <WithNotification>
              <ExchangeCourseProvider>
                <App />
              </ExchangeCourseProvider>
            </WithNotification>
          </OnboardingContextProvider>
        </ThemeProvider>
      </LocalStorageProvider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
