import { useTheme } from 'hooks';

import { DRAWER_CONTENT_WIDTH } from './DrawerMainScreen.constants';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      width: DRAWER_CONTENT_WIDTH,
    },
  }));
