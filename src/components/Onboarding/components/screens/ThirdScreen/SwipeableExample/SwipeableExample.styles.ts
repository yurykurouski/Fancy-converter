import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    underlayBackground: {
      flexDirection: 'row',
      backgroundColor: theme.SUNSET_ORANGE,
      borderRadius: 15,
      height: 54,
      alignItems: 'center',
    },
    cancelBtnAdditional: { marginLeft: 10 },
    selector: { position: 'absolute', width: '100%' },
  }));
