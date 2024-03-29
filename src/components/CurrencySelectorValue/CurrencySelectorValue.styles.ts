import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    currencyBlock: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 10,
      borderRadius: 20,
      overflow: 'hidden',
    },
    currencyInfoWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    currencyCodeNameWrapper: {
      marginLeft: 10,
      flex: 1,
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
    checkBoxContainer: {
      left: 15,
    },
    deselectedIcon: {
      height: 30,
      width: 30,
      borderWidth: 3,
      borderColor: theme.FONT_COLOR_FADED,
      borderRadius: 30,
    },
  }));
