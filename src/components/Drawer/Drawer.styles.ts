import { StyleSheet } from 'react-native';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    drawer: {
      position: 'absolute',
      height: '100%',
      paddingBottom: bottom,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      elevation: 20,
      shadowColor: 'black',
      zIndex: 4,
    },
    fadeContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 3,
    },
  }));
