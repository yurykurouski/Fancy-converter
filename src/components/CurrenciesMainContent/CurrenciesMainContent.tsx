import React, { useState } from 'react';
import { Drawer, Header } from 'components';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { isDrawerOpened, drawerAnimation, animatedPosition } =
    useOpenDrawerAnimations();

  useHandleBackPress(isDrawerOpened, drawerAnimation);

  return (
    <>
      <Header onLongPress={drawerAnimation} isHeaderBlurred={isHeaderBlurred} />
      <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
      <Drawer
        animatedPosition={animatedPosition}
        drawerAnimation={drawerAnimation}
        isDrawerOpened={isDrawerOpened}
      />
    </>
  );
});
