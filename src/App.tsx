import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { CurrenciesMainContent, Onboarding } from 'components';
import { WithNotification } from 'context';
import {
  useAppearanceChangeListener,
  useMultiSetToStorageOnBackground,
} from 'hooks';
import { useInitDataFromStorage } from 'hooks/useInitDataFromStorage';
import store from 'store';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';

import { useStyles } from './App.styles';

const App = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isOnBoarded, isLoadingStatus } = useSelector(selectOnBoardingStatus);

  const styles = useStyles();

  useInitDataFromStorage();
  useMultiSetToStorageOnBackground();

  useAppearanceChangeListener();

  if (isLoadingStatus) {
    return null;
  }

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
        <WithNotification>
          <App />
        </WithNotification>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);
