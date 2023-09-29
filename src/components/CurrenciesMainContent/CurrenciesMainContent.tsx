import React, { useState } from 'react';
import { CurrenciesBottomSheet, Drawer, Header } from 'components';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import {
  useHandleBackPress,
  useOpenDrawerAnimations,
} from './CurrenciesMainContent.hooks';

export const CurrenciesMainContent = React.memo(() => {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState<boolean>(false);

  const { animatedPosition, closeDrawer, openDrawer } =
    useOpenDrawerAnimations();

  useHandleBackPress(closeDrawer);

  return (
    <>
      <Header onLongPress={openDrawer} isHeaderBlurred={isHeaderBlurred} />
      <CurrencySelector setIsHeaderBlurred={setIsHeaderBlurred} />
      <Drawer animatedPosition={animatedPosition} closeDrawer={closeDrawer} />
      <CurrenciesBottomSheet />
    </>
  );
});
