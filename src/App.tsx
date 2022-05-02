import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CurrenciesMainContent } from 'components';
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
  const styles = useStyles();
  return (
    <View style={styles.backgroundStyle}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeColors.APP_BACKGROUND_PRIMARY}
      />
      <WithNotification>
        <ExchangeCourseProvider>
          <CurrenciesMainContent />
        </ExchangeCourseProvider>
      </WithNotification>
    </View>
  );
});

export default () => (
  <GestureHandlerRootView>
    <LocalStorageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocalStorageProvider>
  </GestureHandlerRootView>
);
