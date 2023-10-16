import React, { useState } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { CurrenciesBottomSheet, Drawer, Header } from 'components';
import { CurrencySelector } from 'components/CurrencySelector/CurrencySelector';

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

  const { animatedPosition, closeDrawer, openDrawer } =
    useOpenDrawerAnimations();

  useHandleBackPress(closeDrawer);
  useUpdateCourses();

  const animatedScreenStyle = useAnimatedScreenStyle(animatedPosition);
  const panGesture = useOpedDrawerGesture(animatedPosition);

  return (
    <>
      <Animated.View style={[styles.container, animatedScreenStyle]}>
        <Header onOpenDrawer={openDrawer} isHeaderBlurred={isHeaderBlurred} />
        <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
        <GestureDetector gesture={panGesture}>
          <View style={styles.gestureHandler} />
        </GestureDetector>
        <CurrenciesBottomSheet />
      </Animated.View>
      <Drawer animatedPosition={animatedPosition} closeDrawer={closeDrawer} />
    </>
  );
});
