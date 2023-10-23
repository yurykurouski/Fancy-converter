import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      position: 'absolute',
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
      minWidth: '50%',
      maxWidth: '100%',
      top: -38,
      height: 38,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      padding: 10,
      elevation: 3,
    },
    text: {
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 16,
      textAlign: 'center',
      color: theme.FONT_SECONDARY_COLOR,
    },
    withIslandContainer: {
      top: 12,
      height: 35,
    },
  }));
