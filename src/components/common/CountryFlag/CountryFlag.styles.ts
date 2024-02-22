import { ELEVATION_1 } from 'constants';
import { useTheme } from 'hooks';

export const useStyles = (size?: number) =>
  useTheme(theme => ({
    container: {
      ...ELEVATION_1,
    },
    flagContainer: {
      alignSelf: 'center',
      borderRadius: 32,
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: 1,
      borderColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      width: size,
      height: size,
      zIndex: 1,
    },
    bookmarkIcon: { position: 'absolute', bottom: 0, right: 1 },
  }));
