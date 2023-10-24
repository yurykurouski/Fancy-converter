import { useTheme } from 'hooks';
import { isIos } from 'utils';

export const useStyles = () =>
  useTheme((_, { bottom }) => ({
    container: {
      flex: 1,
      ...(isIos && { paddingBottom: bottom + 68 }),
    },
    gestureHandler: {
      minHeight: 70,
      flexGrow: 100,
      marginBottom: bottom,
    },
  }));
