import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import {
  DrawerCreditsScreen,
  DrawerMainScreen,
  DrawerMoreScreen,
} from 'screens';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { getDefaultOptions, withoutHeader } from './DrawerStack.contants';
import {
  DRAWER_STACK_ROUTES,
  DrawerStackParamList,
} from './DrawerStack.routes';

const Stack = createNativeStackNavigator<DrawerStackParamList>();

export const DrawerStack = () => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  const defaultOptions = getDefaultOptions(colorScheme);

  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name={DRAWER_STACK_ROUTES.MainScreen}
        component={DrawerMainScreen}
        options={withoutHeader}
      />
      <Stack.Screen
        name={DRAWER_STACK_ROUTES.CreditsScreen}
        component={DrawerCreditsScreen}
      />
      <Stack.Screen
        name={DRAWER_STACK_ROUTES.MoreScreen}
        component={DrawerMoreScreen}
      />
    </Stack.Navigator>
  );
};
