import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    flagContainer: {
      alignSelf: 'center',
      borderRadius: 32,
      overflow: 'hidden',
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: 1,
      borderColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
    },
  }));
