import { withTheme } from 'context/ThemeProvider';

export const useStyles = () =>
  withTheme(theme => ({
    container: {
      borderRadius: 15,
      flexDirection: 'row',
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      padding: 10,
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    codeValueContainer: {
      flexDirection: 'row',
      marginVertical: 5,
    },
    codePlaceholder: {
      height: 25,
      width: 50,
      backgroundColor: theme.FONT_COLOR_FADED,
      borderRadius: 10,
    },
    valuePlaceholder: {
      width: 30,
      backgroundColor: theme.FONT_COLOR_FADED,
      borderRadius: 10,
      marginLeft: 15,
    },
    flagPlaceholder: {
      width: 35,
      borderRadius: 20,
      backgroundColor: theme.FONT_COLOR_FADED,
    },
    rippleBaseStyle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      top: 2,
      left: 10,
    },
  }));
