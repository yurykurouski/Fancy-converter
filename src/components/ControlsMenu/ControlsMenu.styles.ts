import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 18,
      paddingRight: 10,
      paddingVertical: 18,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 10,
    },
  }));
