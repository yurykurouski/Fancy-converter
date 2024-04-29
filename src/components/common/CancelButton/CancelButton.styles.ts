import { useTheme } from 'hooks';

export const useStyles = (size: number) =>
  useTheme(({ theme }) => ({
    buttonWrapper: {
      borderRadius: size / 2,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      width: size,
      height: size,
    },
  }));
