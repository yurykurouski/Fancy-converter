import { StyleSheet } from 'react-native';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    drawer: {
      position: 'absolute',
      height: '100%',
      paddingBottom: bottom,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      zIndex: 99,
    },
    fadeContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 4,
    },
    fade: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 3,
    },
  }));
