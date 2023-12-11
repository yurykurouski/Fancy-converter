import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => {
    return {
      scrollView: {
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      },
      container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
      },
    };
  });
