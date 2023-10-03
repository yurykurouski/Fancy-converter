import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    searchEmptyStateContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: '50%',
    },
    searchEmptyStateText: {
      color: theme.FONT_COLOR_FADED,
    },
  }));
