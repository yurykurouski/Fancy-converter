import { useTheme } from 'hooks';

export const useStyles = (windowWidth: number) =>
  useTheme(theme => ({
    container: {
      flex: 1,
      width: windowWidth,
      justifyContent: 'space-between',
    },
    backgroundContainer: {
      height: '60%',
      marginTop: 20,
      padding: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
    separatorContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      width: '100%',
      marginLeft: 10,
    },
    separatorBackground: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      marginBottom: 10,
      borderRadius: 16,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_DARKER,
    },
    separatorItem: {
      width: 12,
      height: 16,
      borderRadius: 6,
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
    },
  }));
