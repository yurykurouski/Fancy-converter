import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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

const style = StyleSheet.create({
  container: { flex: 1 },
});

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { animatedPosition, closeDrawer, openDrawer } =
    useOpenDrawerAnimations();

  useHandleBackPress(closeDrawer);
  useUpdateCourses();

  const animatedScreenStyle = useAnimatedScreenStyle(animatedPosition);
  const panGesture = useOpedDrawerGesture(animatedPosition);

  return (
    <>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[style.container, animatedScreenStyle]}>
          <Header onOpenDrawer={openDrawer} isHeaderBlurred={isHeaderBlurred} />
          <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
          <CurrenciesBottomSheet />
        </Animated.View>
      </GestureDetector>
      <Drawer animatedPosition={animatedPosition} closeDrawer={closeDrawer} />
    </>
  );
});
