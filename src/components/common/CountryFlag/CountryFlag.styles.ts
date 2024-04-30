import { ELEVATION_1 } from 'assets/styles';
import { useTheme } from 'hooks';

export const useStyles = (size?: number) =>
  useTheme(({ theme }) => ({
    container: {
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      borderRadius: 32,
      ...ELEVATION_1,
    },
    flagContainer: {
      alignSelf: 'center',
      borderRadius: 32,
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: 0.4,
      borderColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      width: size,
      height: size,
      zIndex: 1,
    },
    bookmarkIcon: { position: 'absolute', bottom: 0, right: 1 },
  }));
