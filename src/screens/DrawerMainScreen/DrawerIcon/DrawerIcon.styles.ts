import { useTheme } from 'hooks';

export const useStyles = (color?: string) =>
  useTheme(theme => ({
    iconContainer: {
      width: 40,
      height: 40,
      backgroundColor: color ?? theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      overflow: 'hidden',
    },
  }));
