import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      left: -8,
      top: '50%',
      gap: 4,
    },
    common: {
      width: 8,
      height: 8,
      borderRadius: 6,
    },
    background: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
    },
    indicator: {
      top: 12,
      backgroundColor: theme.FONT_COLOR_FADED,
      zIndex: 1,
    },
  }));
