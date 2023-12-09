import React from 'react';
import { ColorSchemeName } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BlurEffectTypes } from 'react-native-screens';
import { ScreenHeaderLeft, ScreenHeaderTitle } from 'components';

import { DrawerStackParamList } from './DrawerStack.routes';

export const withoutHeader = { headerShown: false };
export const getDefaultOptions =
  (colorScheme: ColorSchemeName) =>
  ({
    route,
  }: {
    route: RouteProp<DrawerStackParamList, keyof DrawerStackParamList>;
  }) => ({
    title: '',
    headerLeft: () => <ScreenHeaderLeft />,
    headerRight: () => <ScreenHeaderTitle route={route} />,
    headerTransparent: true,
    headerBlurEffect: (colorScheme === 'light'
      ? 'systemThickMaterialLight'
      : 'systemThickMaterialDark') as BlurEffectTypes,
  });
