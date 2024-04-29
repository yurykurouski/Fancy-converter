import { useTheme } from 'hooks';
import { isIos } from 'utils';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      width: 56,
      overflow: 'hidden',
      borderRadius: 10,
      height: 30,
    },
    counterContainer: {
      height: 20,
      overflow: 'hidden',
    },
    counterText: {
      fontWeight: 'bold',
      height: 20,
      textAlignVertical: 'center',
      color: theme.FONT_PRIMARY_COLOR,
      paddingTop: isIos ? 2 : 0,
    },
  }));
