import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { isAndroid } from 'utils';

export const AppStatusBar = () => {
  const colorScheme = useColorScheme();

  return (
    <StatusBar
      barStyle={
        isAndroid
          ? colorScheme === 'dark'
            ? 'light-content'
            : 'dark-content'
          : undefined
      }
      backgroundColor={'transparent'}
      translucent
      animated
    />
  );
};
