import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { Drawer, Header } from 'components';
import { SelectedCurrenciesProvider } from 'context';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import { useOpenDrawerAnimations } from './CurrenciesMainContent.hooks';

import { styles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = () => {
  const { isDrawerOpened, drawerAnimation, animatedPosition } =
    useOpenDrawerAnimations();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isDrawerOpened) {
          drawerAnimation();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [isDrawerOpened, drawerAnimation]);

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
