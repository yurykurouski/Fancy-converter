import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStatusBar, CurrenciesMainContent, Onboarding } from 'components';
import { useAppearanceChangeListener } from 'hooks';
import store, { persistor } from 'store';
import { onboardingStatusStore } from 'store/onboardingStatusStore';
import { useSnapshot } from 'valtio';

import { useStyles } from './App.styles';

import { WithNotificationHOC } from 'HOC/WithNotificationHOC';

const App = React.memo(() => {
  const { isOnBoarded } = useSnapshot(onboardingStatusStore);

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
    <GestureHandlerRootView style={container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <WithNotificationHOC>
            <App />
          </WithNotificationHOC>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
