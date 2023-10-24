import { StyleSheet } from 'react-native';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    drawer: {
      position: 'absolute',
      height: '100%',
      paddingBottom: bottom,
      zIndex: 99,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    fadeContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_DARKER,
      zIndex: 4,
    },
  }));
