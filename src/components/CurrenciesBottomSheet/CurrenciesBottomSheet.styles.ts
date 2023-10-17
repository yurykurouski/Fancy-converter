import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { bottom }) => ({
    listContainer: {
      paddingHorizontal: 10,
      width: WINDOW_WIDTH,
    },
    containerStyle: {
      marginBottom: bottom,
      zIndex: 2,
    },
    backgroundStyle: {
      elevation: 10,
    },
    activityIndicatorContainer: {
      position: 'absolute',
      width: '100%',
      top: 10,
    },
  }));
