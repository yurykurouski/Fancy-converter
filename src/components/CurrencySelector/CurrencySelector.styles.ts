import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { top }) => ({
    container: {
      paddingHorizontal: 10,
    },
    headerComponent: {
      marginBottom: 12,
      height: 34 + top,
    },
  }));
