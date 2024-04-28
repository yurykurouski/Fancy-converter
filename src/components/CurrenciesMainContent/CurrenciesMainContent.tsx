import React, { useCallback, useRef } from 'react';
import { Keyboard } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { useSharedValue } from 'react-native-reanimated';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import { THEME_COLORS } from 'assets/colors';
import { ControlsMenu, CurrenciesBottomSheet, Header } from 'components';
import { CurrencySelector } from 'components/CurrencySelector/CurrencySelector';
import { DrawerMainScreen } from 'screens';
import { DRAWER_CONTENT_WIDTH } from 'screens/DrawerMainScreen/DrawerMainScreen.constants';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { TAvailableCurrenciesNames } from 'types';
import { isIos } from 'utils';
import { useSnapshot } from 'valtio';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
  useUpdateCourses,
} from './CurrenciesMainContent.hooks';

import { useStyles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = React.memo(() => {
  const styles = useStyles();

  const { colorScheme } = useSnapshot(colorSchemeStore);

  const drawerRef = useRef<DrawerLayout>(null);
  const containerListRef = useRef<BottomSheetFlatListMethods>(null);
  const currencyListRef = useRef<FlashList<TAvailableCurrenciesNames> | null>(
    null,
  );

  const headerSharedValue = useSharedValue(0);

  const { closeDrawer, openDrawer } = useOpenDrawerAnimations(drawerRef);

  const renderContent = useCallback(
    () => <DrawerMainScreen ref={drawerRef} />,
    [],
  );

  useHandleBackPress(closeDrawer, drawerRef);
  useUpdateCourses();

  return (
    <DrawerLayout
      //NOTE: https://github.com/software-mansion/react-native-gesture-handler/issues/2208#issuecomment-1291675205
      useNativeAnimations={false}
      ref={drawerRef}
      overlayColor={`${THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY}99`}
      contentContainerStyle={styles.drawerContainerStyle}
      drawerType={'slide'}
      drawerWidth={DRAWER_CONTENT_WIDTH}
      drawerPosition={'left'}
      renderNavigationView={renderContent}
      onDrawerOpen={Keyboard.dismiss}
      edgeWidth={isIos ? 10 : -10}
      enableTrackpadTwoFingerGesture>
      <Header
        onOpenDrawer={openDrawer}
        headerSharedValue={headerSharedValue}
        ref={containerListRef}
      />
      <CurrencySelector ref={currencyListRef} />
      <ControlsMenu
        headerSharedValue={headerSharedValue}
        ref={currencyListRef}
      />
      <CurrenciesBottomSheet
        headerSharedValue={headerSharedValue}
        ref={containerListRef}
      />
    </DrawerLayout>
  );
});
