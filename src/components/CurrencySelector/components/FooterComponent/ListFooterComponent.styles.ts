import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 10,
    },
    text: {
      color: theme.FONT_COLOR_FADED,
      fontSize: 12,
      marginRight: 4,
    },
  }));
