import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    buttonWrapper: {
      flex: 1,
      borderRadius: 15,
      elevation: 2,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    buttonText: {
      width: '100%',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 18,
    },
    buttonTextAccept: {
      color: theme.MAIN_BUTTON_TEXT_COLOR,
    },
    buttonTextCancel: {
      color: '#8aa6d4',
    },
    acceptButton: {
      backgroundColor: theme.MAIN_BUTTON_COLOR,
    },
    cancelButton: {
      borderWidth: 1,
    },
  }));
