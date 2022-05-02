import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    currencyBlockWrapper: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      marginBottom: 10,
      borderRadius: 20,
    },
    currencyBlock: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    currencyInfoWrapper: {
      flexDirection: 'row',
    },
    currencyCodeNameWrapper: {
      marginLeft: 10,
    },
    currencyCode: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
    },
    currencyName: {
      fontSize: 14,
      color: theme.FONT_COLOR_FADED,
    },
    checkBoxContainer: {
      left: 15,
    },
  }));
