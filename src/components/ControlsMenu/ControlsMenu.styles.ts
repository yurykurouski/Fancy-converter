import { CONTROLS_OFFSET } from 'constants/index';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -CONTROLS_OFFSET,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      paddingLeft: 18,
      paddingRight: 10,
      paddingVertical: 18,
    },
  }));
