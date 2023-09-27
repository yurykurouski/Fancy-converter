import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
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
    },
    searchEmptyStateContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: '50%',
    },
    searchEmptyStatetext: {
      color: theme.FONT_COLOR_FADED,
    },
  }));
