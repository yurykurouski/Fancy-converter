import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    wrapper: {
      paddingTop: top,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,

      paddingHorizontal: 10,
      paddingBottom: 8,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }));
