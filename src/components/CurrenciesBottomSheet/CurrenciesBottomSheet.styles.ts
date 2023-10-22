import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useTheme } from 'hooks';

export const useStyles = (height?: number) =>
  useTheme((_, { bottom }) => ({
    container: {
      width: WINDOW_WIDTH,
      height,
    },
    listContainer: {
      paddingHorizontal: 10,
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
    separator: {
      height: 10,
    },
  }));
