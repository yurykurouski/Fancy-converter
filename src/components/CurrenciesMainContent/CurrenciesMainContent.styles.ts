import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(() => ({
    container: {
      flex: 1,
    },
    gestureHandler: {
      flexGrow: 100,
    },
  }));
