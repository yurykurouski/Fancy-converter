import React, { useState } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { CurrenciesBottomSheet, Drawer, Header } from 'components';
import { CurrencySelector } from 'components/CurrencySelector/CurrencySelector';
import { DRAWER_CONTENT_WIDTH } from 'components/Drawer/Drawer.constants';

import {
  useAnimatedScreenStyle,
  useHandleBackPress,
  useOpedDrawerGesture,
  useOpenDrawerAnimations,
  useUpdateCourses,
} from './CurrenciesMainContent.hooks';

import { useStyles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = React.memo(() => {
  const styles = useStyles();

  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const headerSharedValue = useSharedValue(0);
  const drawerPosition = useSharedValue(-DRAWER_CONTENT_WIDTH);

  const { closeDrawer, openDrawer } = useOpenDrawerAnimations(drawerPosition);

  useHandleBackPress(closeDrawer);
  useUpdateCourses();

  const animatedScreenStyle = useAnimatedScreenStyle(drawerPosition);
  const panGesture = useOpedDrawerGesture(drawerPosition);

  return (
    <>
      <Animated.View style={[styles.container, animatedScreenStyle]}>
        <Header
          onOpenDrawer={openDrawer}
          isHeaderBlurred={isHeaderBlurred}
          headerSharedValue={headerSharedValue}
        />
        <CurrencySelector
          setIsHeaderBlurred={setIsHeaderBlurred}
          drawerPosition={drawerPosition}
        />
        <GestureDetector gesture={panGesture}>
          <View style={styles.gestureHandler} />
        </GestureDetector>
        <CurrenciesBottomSheet headerSharedValue={headerSharedValue} />
      </Animated.View>
      <Drawer drawerPosition={drawerPosition} closeDrawer={closeDrawer} />
    </>
  );
});
