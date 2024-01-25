import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    iconsContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 30,
      marginBottom: 10,
      marginHorizontal: 10,
      overflow: 'hidden',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.ACCENT_COLOR_DARKER,
    },
    blurView: {
      flex: 1,
      zIndex: 1,
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'transparent',
    },
  }));
