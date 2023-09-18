import { isAndroid, withTheme } from 'utils';

export const useStyles = () =>
  withTheme(theme => ({
    container: {
      marginTop: 'auto',
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    mainText: {
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
    divider: {
      height: 1,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
    navigationBtn: {
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
  }));
