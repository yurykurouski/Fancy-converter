import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    container: {
      paddingHorizontal: 10,
    },
    fab: {
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
      paddingVertical: 12,
      paddingHorizontal: 15,
      alignItems: 'center',
      borderRadius: 30,
      elevation: 3,
      marginTop: 10,
      marginBottom: 10,
    },
    fabText: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '500',
      color: theme.FONT_SECONDARY_COLOR,
    },
  }));
