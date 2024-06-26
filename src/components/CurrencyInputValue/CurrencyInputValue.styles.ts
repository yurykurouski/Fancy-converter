import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme, elevation }) => ({
    containerWrapper: {
      borderRadius: 15,
      borderColor: 'transparent',
      borderWidth: 2,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      marginHorizontal: 10,
      marginVertical: 4,
      ...elevation[1],
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    },
    containerWrapperFocused: {
      borderColor: theme.ACCENT_COLOR_LIGHTER,
    },
    title: {
      textAlignVertical: 'center',
      textAlign: 'center',
      paddingVertical: 10,
      color: theme.FONT_COLOR_FADED,
      fontSize: 22,
      width: 62,
    },
    titleFocused: {
      color: theme.FONT_PRIMARY_COLOR,
      fontWeight: '500',
    },
    input: {
      height: 60,
      flexGrow: 1,
      fontSize: 24,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
    },
    underlayBackground: {
      backgroundColor: theme.SUNSET_ORANGE,
      width: 80,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      height: '100%',
      borderColor: 'transparent',
      borderWidth: 2,
      paddingLeft: 10,
      justifyContent: 'center',
    },
    cancelBtnAdditional: {
      marginHorizontal: 10,
    },
  }));
