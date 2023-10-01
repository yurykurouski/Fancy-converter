import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { top, bottom }) => ({
    container: {
      paddingHorizontal: 10,
      marginBottom: bottom,
      flex: 1,
    },
    headerComponent: {
      marginBottom: 12,
      height: 34 + top,
    },
  }));
