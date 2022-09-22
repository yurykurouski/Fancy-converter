import { SCREEN_WIDTH } from 'constants/constants';
import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    drawer: {
      position: 'absolute',
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
      top: 0,
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
