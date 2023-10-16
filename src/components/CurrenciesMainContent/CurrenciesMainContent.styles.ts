import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { bottom }) => ({
    container: { flex: 1 },
    gestureHandler: {
      minHeight: 70,
      flexGrow: 100,
      marginBottom: bottom,
    },
  }));
