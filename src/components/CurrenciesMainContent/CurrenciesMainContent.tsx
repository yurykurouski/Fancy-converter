import React from 'react';
import { View } from 'react-native';
import { Drawer, Header } from 'components';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

import { styles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = React.memo(() => {
  const { isDrawerOpened, drawerAnimation, animatedPosition } =
    useOpenDrawerAnimations();

  useHandleBackPress(isDrawerOpened, drawerAnimation);

  return (
    <>
      <Header onLongPress={drawerAnimation} />
      <View style={styles.container}>
        <CurrencySelector />
      </View>
      <Drawer
        animatedPosition={animatedPosition}
        drawerAnimation={drawerAnimation}
        isDrawerOpened={isDrawerOpened}
      />
    </>
  );
});
