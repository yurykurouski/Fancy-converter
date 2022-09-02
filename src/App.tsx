import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
// import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
  const { isOnboarded } = useContext(OnboardingContext);

  const styles = useStyles();

  return (
    <>
      <View style={styles.backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={themeColors.APP_BACKGROUND_PRIMARY}
        />
        {isOnboarded ? <CurrenciesMainContent /> : <Onboarding />}
      </View>
    </>
  );
});

export default () => (
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
);
