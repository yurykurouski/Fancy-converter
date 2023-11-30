import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/ui/selectors';

export const AppStatusBar = () => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <StatusBar
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      backgroundColor={'transparent'}
      translucent
      animated
    />
  );
};
