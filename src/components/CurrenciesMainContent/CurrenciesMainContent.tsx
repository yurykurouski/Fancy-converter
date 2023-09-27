import React, { useState } from 'react';
import { View } from 'react-native';
import { Drawer, Header } from 'components';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

import { styles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { isDrawerOpened, drawerAnimation, animatedPosition } =
    useOpenDrawerAnimations();

  useHandleBackPress(isDrawerOpened, drawerAnimation);

  return (
    <>
      <Header onLongPress={drawerAnimation} isHeaderBlurred={isHeaderBlurred} />
      <View style={styles.container}>
        <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
      </View>
      <Drawer
        animatedPosition={animatedPosition}
        drawerAnimation={drawerAnimation}
        isDrawerOpened={isDrawerOpened}
      />
    </>
  );
});
