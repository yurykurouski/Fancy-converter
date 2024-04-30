import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    container: {
      marginTop: '50%',
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 40,
      color: theme.FONT_COLOR_FADED,
    },
  }));
