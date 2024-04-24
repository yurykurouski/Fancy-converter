import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppStatusBar, CurrenciesMainContent, Onboarding } from 'components';
import { useAppearanceChangeListener } from 'hooks';
import { useInitStore } from 'store';
import { onboardingStatusStore } from 'store/onboardingStatusStore';
import { useSnapshot } from 'valtio';

import { useStyles } from './App.styles';

import { WithNotificationHOC } from 'HOC/WithNotificationHOC';

const App = React.memo(() => {
  const { isOnBoarded } = useSnapshot(onboardingStatusStore);

  const styles = useStyles();

  useAppearanceChangeListener();

  const { isHydrated } = useInitStore();

  if (!isHydrated) return null;

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
      <WithNotificationHOC>
        <App />
      </WithNotificationHOC>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
