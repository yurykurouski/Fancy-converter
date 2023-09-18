import { withTheme } from 'utils';

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
      flex: 1,
    },
    currencyCodeNameWrapper: {
      marginLeft: 10,
      flex: 1,
    },
    currencyCode: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
    },
    currencyName: {
      fontSize: 14,
      color: theme.FONT_COLOR_FADED,
      flexShrink: 0,
      flexWrap: 'nowrap',
    },
    checkBoxContainer: {
      left: 15,
    },
  }));
