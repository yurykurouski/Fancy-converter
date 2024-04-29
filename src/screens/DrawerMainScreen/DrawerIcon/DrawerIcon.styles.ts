import { useTheme } from 'hooks';

export const useStyles = (color?: string) =>
  useTheme(({ theme, elevation }) => ({
    iconContainer: {
      width: 40,
      height: 40,
      backgroundColor: color ?? theme.ELEMENT_FADE_OR_BACKGROUND,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      ...elevation[1],
    },
  }));
