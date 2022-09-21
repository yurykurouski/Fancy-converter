import { withTheme } from 'context/ThemeProvider';

export const useStyles = () =>
  withTheme(theme => ({
    currencyWrapper: {
      borderBottomLeftRadius: 20,
      borderBottomEndRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    currencyContainer: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      width: '100%',
      heigth: 40,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      flexDirection: 'row',
    },
    currencyFlagPlaceholder: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.FONT_COLOR_FADED,
    },
    codeNameContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: 10,
    },
    currencyCodePlaceholder: {
      height: 16,
      width: 32,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
      borderRadius: 8,
    },
    currencyNamePlaceholder: {
      height: 12,
      width: 100,
      borderRadius: 6,
      backgroundColor: theme.FONT_COLOR_FADED,
    },
    checkbox: {
      marginLeft: 'auto',
    },
  }));
