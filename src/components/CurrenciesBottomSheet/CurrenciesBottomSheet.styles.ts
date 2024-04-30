import { useTheme, useWindowDimensionChange } from 'hooks';
import { EDimensions } from 'types';

export const useStyles = (height?: number) => {
  const windowWidth = useWindowDimensionChange(EDimensions.WIDTH);

  return useTheme(({ elevation }) => ({
    container: {
      height,
    },
    listContainer: {
      width: windowWidth,
      paddingHorizontal: 10,
    },
    containerStyle: {
      zIndex: 2,
    },
    backgroundStyle: {
      ...elevation[10],
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
};
