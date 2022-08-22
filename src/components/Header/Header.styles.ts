import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      textTransform: 'uppercase',
      paddingTop: 25,
      alignSelf: 'center',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
