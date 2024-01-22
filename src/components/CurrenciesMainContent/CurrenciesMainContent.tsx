import React from 'react';
import { useCallback, useRef } from 'react';
import { Keyboard } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { useSharedValue } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { ControlsMenu, CurrenciesBottomSheet, Header } from 'components';
import { CurrencySelector } from 'components/CurrencySelector/CurrencySelector';
import { DrawerStack } from 'navigation';
import { DRAWER_CONTENT_WIDTH } from 'screens/DrawerMainScreen/DrawerMainScreen.constants';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isIos } from 'utils';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
  useUpdateCourses,
} from './CurrenciesMainContent.hooks';

import { useStyles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = React.memo(() => {
  const styles = useStyles();

  const { colorScheme } = useSelector(selectColorSchemeState);

  const drawerRef = useRef<DrawerLayout>(null);
  const containerListRef = useRef<BottomSheetFlatListMethods>(null);

  const headerSharedValue = useSharedValue(0);

  const { closeDrawer, openDrawer } = useOpenDrawerAnimations(drawerRef);

  const renderContent = useCallback(() => <DrawerStack />, []);

  useHandleBackPress(closeDrawer, drawerRef);
  useUpdateCourses();

  return (
    <DrawerLayout
      //NOTE: https://github.com/software-mansion/react-native-gesture-handler/issues/2208#issuecomment-1291675205
      useNativeAnimations={false}
      ref={drawerRef}
      overlayColor={`${THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY}99`}
      contentContainerStyle={styles.drawerContainerStyle}
      drawerType={'back'}
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
      <CurrencySelector />
      <ControlsMenu headerSharedValue={headerSharedValue} />
      <CurrenciesBottomSheet
        headerSharedValue={headerSharedValue}
        ref={containerListRef}
      />
    </DrawerLayout>
  );
});
