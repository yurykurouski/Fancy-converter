import { SCREEN_WIDTH } from 'constants/constants';
import { useTheme } from 'hooks';

export const useStyles = (bottom: number) =>
  useTheme(theme => ({
    drawer: {
      position: 'absolute',
      bottom,
      height: '100%',
      width: SCREEN_WIDTH * 0.6,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      elevation: 20,
      shadowColor: 'black',
      zIndex: 2,
    },
    fadeContainer: {
      position: 'absolute',
      height: '100%',
      bottom,
      left: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'black',
    },
    fade: {
      height: '100%',
      width: '100%',
    },
  }));
