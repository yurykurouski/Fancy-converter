import { useTheme } from 'hooks';
import { isIos } from 'utils';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: 6,
      paddingHorizontal: 10,
      paddingBottom: (isIos ? 150 : 170) + bottom,
    },
    text: {
      color: theme.FONT_COLOR_FADED,
      fontSize: 12,
      marginRight: 4,
    },
  }));
