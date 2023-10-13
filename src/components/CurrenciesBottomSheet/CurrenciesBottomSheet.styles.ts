import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((_, { bottom }) => ({
    listContainer: {
      marginTop: 0,
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
  }));
