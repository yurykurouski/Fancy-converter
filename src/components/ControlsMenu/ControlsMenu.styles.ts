import { CONTROLS_OFFSET } from 'constants/index';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -CONTROLS_OFFSET,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.ACCENT_COLOR_DARKER,
    },
    blur: {
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: '100%',
      backgroundColor: 'transparent',
      paddingLeft: 18,
      paddingRight: 10,
      paddingVertical: 18,
    },
  }));
