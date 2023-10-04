import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CurrenciesMainContent, Onboarding } from 'components';
import { WithNotification } from 'context';
import { useAppearanceChangeListener } from 'hooks';
import store, { persistor } from 'store';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isOnBoarded } = useSelector(selectOnBoardingStatus);

  const styles = useStyles();

  useAppearanceChangeListener();

  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
        animated
      />
      <View style={styles.container}>
        {isOnBoarded ? <CurrenciesMainContent /> : <Onboarding />}
      </View>
    </>
  );
});

const { container } = StyleSheet.create({
  container: { flex: 1 },
});

export default () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <WithNotification>
            <App />
          </WithNotification>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
