import { ELEVATIONS } from 'assets/styles';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    containerWrapper: {
      borderRadius: 15,
      borderColor: 'transparent',
      borderWidth: 2,
      backgroundColor: theme.colors.card,
      marginHorizontal: 10,
      marginVertical: 4,
      ...ELEVATIONS[1],
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    },
    containerWrapperFocused: {
      borderColor: theme.colors.primary,
    },
    title: {
      textAlignVertical: 'center',
      textAlign: 'center',
      paddingVertical: 10,
      color: theme.colors.text,
      fontSize: 22,
      width: 62,
    },
    titleFocused: {
      color: theme.colors.text,
      fontWeight: '500',
    },
    input: {
      height: 60,
      flexGrow: 1,
      fontSize: 24,
      fontWeight: '500',
      color: theme.colors.text,
    },
    underlayBackground: {
      backgroundColor: theme.colors.notification,
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
