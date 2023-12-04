import { useTheme } from 'hooks/useTheme';

export const useStyles = () =>
  useTheme((theme, _, colorScheme) => ({
    container: {
      margin: 4,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    behaviorIndicator: {
      position: 'absolute',
      ...(colorScheme === 'light' && {
        left: 20,
        bottom: 6,
      }),
      zIndex: 1,
      color: theme.FONT_PRIMARY_COLOR_INVERTED,
      fontWeight: 'bold',
    },
  }));
