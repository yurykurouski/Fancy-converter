import { ELEVATION_1 } from 'constants/index';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      borderRadius: 16,
      ...ELEVATION_1,
    },
  }));
