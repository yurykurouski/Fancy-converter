import React from 'react';
import { SafeAreaView, UIManager, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
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
  const styles = useStyles();
  const { isOnBoarded } = useSnapshot(onboardingStatusStore);

  const { isHydrated } = useInitStore();

  if (!isHydrated) {
    return null;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <AppStatusBar />
      <NotificationMessage />
      {isOnBoarded ? <CurrenciesMainContent /> : <Onboarding />}
    </SafeAreaView>
  );
});

// const { container } = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.APP_BACKGROUND_PRIMARY },
// });

export default () => {
  const scheme = useColorScheme();
  const styles = useStyles();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={styles.wrapper}>
          <App />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
