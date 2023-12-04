import React, { useCallback, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { useSharedValue } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrenciesBottomSheet, Header } from 'components';
import { CurrencySelector } from 'components/CurrencySelector/CurrencySelector';
import { DrawerContent } from 'components/DrawerContent';
import { DRAWER_CONTENT_WIDTH } from 'components/DrawerContent/Drawer.constants';
import { selectColorSchemeState } from 'store/ui/selectors';
import { isIos } from 'utils';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
  useUpdateCourses,
} from './CurrenciesMainContent.hooks';

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { colorScheme } = useSelector(selectColorSchemeState);

  const drawerRef = useRef<DrawerLayout>(null);

  const headerSharedValue = useSharedValue(0);

  const { closeDrawer, openDrawer } = useOpenDrawerAnimations(drawerRef);

  const renderContent = useCallback(() => <DrawerContent />, []);

  useHandleBackPress(closeDrawer, drawerRef);
  useUpdateCourses();

  return (
    <DrawerLayout
      //NOTE: https://github.com/software-mansion/react-native-gesture-handler/issues/2208#issuecomment-1291675205
      useNativeAnimations={false}
      ref={drawerRef}
      overlayColor={`${THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY}99`}
      contentContainerStyle={{
        backgroundColor: THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY,
      }}
      drawerType={'back'}
      drawerWidth={DRAWER_CONTENT_WIDTH}
      drawerPosition={'left'}
      renderNavigationView={renderContent}
      onDrawerOpen={Keyboard.dismiss}
      edgeWidth={isIos ? 10 : -10}
      enableTrackpadTwoFingerGesture>
      <Header
        onOpenDrawer={openDrawer}
        isHeaderBlurred={isHeaderBlurred}
        headerSharedValue={headerSharedValue}
      />
      <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
      <CurrenciesBottomSheet headerSharedValue={headerSharedValue} />
    </DrawerLayout>
  );
});
