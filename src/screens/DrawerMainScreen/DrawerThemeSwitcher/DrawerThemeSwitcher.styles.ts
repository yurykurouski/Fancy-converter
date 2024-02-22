import { ELEVATION_1 } from 'constants';
import { useTheme } from 'hooks/useTheme';

export const useStyles = () =>
  useTheme((theme, _, colorScheme) => ({
    container: {
      margin: 4,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      ...ELEVATION_1,
    },
    behaviorIndicator: {
      position: 'absolute',
      ...(colorScheme === 'light' && {
        left: 20,
        bottom: 6,
      }),
      includeFontPadding: false,
      zIndex: 1,
      color: theme.ELEMENT_FADE_OR_BACKGROUND,
      fontWeight: 'bold',
    },
  }));
