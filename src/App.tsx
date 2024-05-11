import React from 'react';
import { StyleSheet, UIManager, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppStatusBar, CurrenciesMainContent, Onboarding } from 'components';
import { NotificationMessage } from 'components/NotificationMessage';
import { useInitStore } from 'store';
import { onboardingStatusStore } from 'store/onboardingStatusStore';
import { isAndroid } from 'utils';
import { useSnapshot } from 'valtio';

import { useStyles } from './App.styles';

if (UIManager.setLayoutAnimationEnabledExperimental && isAndroid) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = React.memo(() => {
  const { isOnBoarded } = useSnapshot(onboardingStatusStore);

  const styles = useStyles();

  const { isHydrated } = useInitStore();

  if (!isHydrated) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <AppStatusBar />
      <View style={styles.container}>
        <NotificationMessage />
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
      <App />
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
