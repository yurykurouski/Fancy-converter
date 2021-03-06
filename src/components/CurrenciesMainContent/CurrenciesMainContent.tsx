import React from 'react';
import { View } from 'react-native';
import { Drawer, Header } from 'components';
import { SelectedCurrenciesProvider } from 'context';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

import { styles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = () => {
  const { isDrawerOpened, drawerAnimation, animatedPosition } =
    useOpenDrawerAnimations();

  useHandleBackPress(isDrawerOpened, drawerAnimation);

  return (
    <>
      <Header onLongPress={drawerAnimation} />
      <SelectedCurrenciesProvider>
        <View style={styles.container}>
          <CurrencySelector />
        </View>
        <Drawer
          animatedPosition={animatedPosition}
          drawerAnimation={drawerAnimation}
          isDrawerOpened={isDrawerOpened}
        />
      </SelectedCurrenciesProvider>
    </>
  );
};
