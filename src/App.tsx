import React from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles } from './App.styles';
import { ExchangeCourseProvider } from './components/Context/ExchangeCourseContext';
import { LocalStorageProvider } from './components/Context/LocalStorageProvider/LocalStorageProvider';
import { CurrenciesMainContent } from './components/CurrenciesMainContent';
import { getCurrentColorTheme, getCurrentThemeColors } from './utils';

const currentTheme = getCurrentColorTheme();
const colors = getCurrentThemeColors();

const App = React.memo(() => {
  return (
    <GestureHandlerRootView>
      <LocalStorageProvider>
        <View style={styles.backgroundStyle}>
          <StatusBar
            barStyle={
              currentTheme === 'dark' ? 'light-content' : 'dark-content'
            }
            backgroundColor={colors.APP_BACKGROUND_PRIMARY}
          />
          <ExchangeCourseProvider>
            <CurrenciesMainContent />
          </ExchangeCourseProvider>
        </View>
      </LocalStorageProvider>
    </GestureHandlerRootView>
  );
});

export default App;
