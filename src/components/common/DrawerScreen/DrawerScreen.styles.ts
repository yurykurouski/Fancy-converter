import { useHeaderHeight } from '@react-navigation/elements';
import { useTheme } from 'hooks';

export const useStyles = () => {
  const headerHeight = useHeaderHeight();

  return useTheme(theme => {
    return {
      scrollView: {
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      },
      container: {
        flex: 1,
        paddingTop: headerHeight + 10,
        paddingHorizontal: 10,
      },
    };
  });
};
