import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'hooks';

const useStyles = () =>
  useTheme(theme => ({
    backgroundStyle: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
  }));

export const BottomSheetBackground = () => {
  const styles = useStyles();

  return <View pointerEvents="none" style={styles.backgroundStyle} />;
};
