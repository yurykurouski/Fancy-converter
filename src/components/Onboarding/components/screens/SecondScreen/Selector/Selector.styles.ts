import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
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
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
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
      gap: 10,
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
    iconContainer: {
      marginLeft: 'auto',
    },
    checkbox: {
      height: 30,
      width: 30,
      borderWidth: 3,
      borderColor: theme.FONT_COLOR_FADED,
      borderRadius: 30,
    },
  }));
