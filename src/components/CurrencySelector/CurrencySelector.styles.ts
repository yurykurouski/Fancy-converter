import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { top }) => ({
    recyclerContainer: {
      paddingTop: 44 + top,
    },
  }));
