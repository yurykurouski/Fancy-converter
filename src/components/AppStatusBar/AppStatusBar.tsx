import React from 'react';
import {
  ThemeAwareStatusBar,
  useThemePreference,
} from '@vonovak/react-native-theme-control';

export const AppStatusBar = () => {
  const colorScheme = useThemePreference();

  return (
    <ThemeAwareStatusBar
      backgroundColor={colorScheme === 'light' ? '#f0f0f3' : '#202124'}
      animated
    />
  );
};
