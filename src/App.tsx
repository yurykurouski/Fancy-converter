import React, { useContext, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CurrenciesMainContent, Onboarding } from 'components';
import {
  ExchangeCourseProvider,
  LocalStorageProvider,
  WithNotification,
} from 'context';
import { ThemeProvider } from 'context/ThemeProvider';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { themeColors, colorScheme } = useContext(ThemeContext);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const styles = useStyles();
  return (
    <>
      <View style={styles.backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={themeColors.APP_BACKGROUND_PRIMARY}
        />
        {isOnboarded ? (
          <CurrenciesMainContent />
        ) : (
          <Onboarding setIsOnboarded={setIsOnboarded} />
        )}
      </View>
    </>
  );
});

export default () => (
  <GestureHandlerRootView>
    <LocalStorageProvider>
      <ThemeProvider>
        <WithNotification>
          <ExchangeCourseProvider>
            <App />
          </ExchangeCourseProvider>
        </WithNotification>
      </ThemeProvider>
    </LocalStorageProvider>
  </GestureHandlerRootView>
);
