import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, BackHandler, View } from 'react-native';
import { Drawer, Header } from 'components';
import { ExchangeCourseContext, SelectedCurrenciesProvider } from 'context';

import { CurrencySelector } from '../CurrencySelector/CurrencySelector';

import { useOpenDrawerAnimations } from './CurrenciesMainContent.hooks';

import { styles } from './CurrenciesMainContent.styles';

export const CurrenciesMainContent = () => {
  const {
    currentExchangeCourseContext: { currentExchangeCourse },
  } = useContext(ExchangeCourseContext);

  const { isLoading, exchangeCourse } = currentExchangeCourse;
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
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <SelectedCurrenciesProvider>
          <View style={styles.container}>
            <CurrencySelector exchangeCourse={exchangeCourse} />
          </View>
          <Drawer
            animatedPosition={animatedPosition}
            drawerAnimation={drawerAnimation}
            isDrawerOpened={isDrawerOpened}
          />
        </SelectedCurrenciesProvider>
      )}
    </>
  );
};
