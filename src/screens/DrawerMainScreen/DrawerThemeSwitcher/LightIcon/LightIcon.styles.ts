import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      width: 34,
      height: 34,
      alignItems: 'center',
      justifyContent: 'center',
    },
    core: {
      width: 18,
      height: 18,
      borderRadius: 10,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
    },
    rays: {
      width: 34,
      height: 34,
      top: 0,
      zIndex: 1,
      position: 'absolute',
    },
  }));
