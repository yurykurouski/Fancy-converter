import React from 'react';
import { StatusBar } from 'react-native';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { useSnapshot } from 'valtio';

export const AppStatusBar = () => {
  const { colorScheme } = useSnapshot(colorSchemeStore);

  return (
    <StatusBar
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      backgroundColor={'transparent'}
      translucent
      animated
    />
  );
};
