import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    currencyInfoWrapper: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 30,
      padding: 6,
    },
    currencyCodeNameWrapper: {
      marginHorizontal: 10,
    },
    currencyCodeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 62,
      justifyContent: 'space-between',
    },
    currencyCode: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
      alignItems: 'center',
    },
    currencyName: {
      fontSize: 14,
      color: theme.FONT_COLOR_FADED,
      flexShrink: 0,
      flexWrap: 'nowrap',
    },
    icon: { marginLeft: 'auto', marginRight: 4 },
  }));
