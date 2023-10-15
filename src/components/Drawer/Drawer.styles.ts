import { StyleSheet } from 'react-native';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    drawer: {
      position: 'absolute',
      height: '100%',
      paddingHorizontal: 10,
      paddingBottom: bottom,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      zIndex: 99,
    },
    fadeContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_DARKER,
      zIndex: 4,
    },
  }));
