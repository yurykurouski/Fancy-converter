import { useTheme } from 'hooks';

import { DRAWER_CONTENT_WIDTH } from './DrawerMainScreen.constants';

export const useStyles = () =>
  useTheme(({ theme, insets: { top } }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
      justifyContent: 'space-between',
      width: DRAWER_CONTENT_WIDTH,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
      overflow: 'hidden',
    },
  }));
