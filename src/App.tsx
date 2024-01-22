import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStatusBar, CurrenciesMainContent, Onboarding } from 'components';
import { useAppearanceChangeListener } from 'hooks';
import store, { persistor } from 'store';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';

import { useStyles } from './App.styles';

import { WithNotificationHOC } from 'HOC/WithNotificationHOC';

const App = React.memo(() => {
  const { isOnBoarded } = useSelector(selectOnBoardingStatus);

  const styles = useStyles();

  useAppearanceChangeListener();

  return (
    <View style={styles.wrapper}>
      <AppStatusBar />
      <View style={styles.container}>
        {isOnBoarded ? <CurrenciesMainContent /> : <Onboarding />}
      </View>
    </View>
  );
});

const { container } = StyleSheet.create({
  container: { flex: 1 },
});

export default () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer>
      <GestureHandlerRootView style={container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <WithNotificationHOC>
              <App />
            </WithNotificationHOC>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  </SafeAreaProvider>
);
