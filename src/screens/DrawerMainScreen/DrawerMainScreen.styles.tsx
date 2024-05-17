import { useTheme } from 'hooks';

import { DRAWER_CONTENT_WIDTH } from './DrawerMainScreen.constants';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    contentContainer: {
      flex: 1,
      justifyContent: 'space-between',
      width: DRAWER_CONTENT_WIDTH,
      backgroundColor: theme.colors.background,
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.card,
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
      overflow: 'hidden',
    },
  }));
