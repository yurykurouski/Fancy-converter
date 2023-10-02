import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { CurrenciesBottomSheet, Drawer, Header } from 'components';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useAnimatedScreenStyle,
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

const style = StyleSheet.create({
  container: { flex: 1 },
});

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { animatedPosition, closeDrawer, openDrawer } =
    useOpenDrawerAnimations();

  useHandleBackPress(closeDrawer);

  const animatedScreenStyle = useAnimatedScreenStyle(animatedPosition);

  return (
    <>
      <Animated.View style={[style.container, animatedScreenStyle]}>
        <Header onOpenDrawer={openDrawer} isHeaderBlurred={isHeaderBlurred} />
        <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
        <CurrenciesBottomSheet />
      </Animated.View>
      <Drawer animatedPosition={animatedPosition} closeDrawer={closeDrawer} />
    </>
  );
});
