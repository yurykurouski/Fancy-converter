import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = (pageHeight: number) => {
  return useTheme(theme => ({
    container: {
      height: pageHeight,
      gap: 6,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
      alignSelf: 'center',
      marginTop: 10,
    },
    icon: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_DARKER,
      borderRadius: 20,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.APP_BACKGROUND_PRIMARY,
    },
  }));
};
