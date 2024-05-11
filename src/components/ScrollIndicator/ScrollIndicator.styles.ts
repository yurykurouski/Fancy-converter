import { ELEVATIONS } from 'assets/styles';
import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    container: {
      position: 'absolute',
      left: -8,
      top: '50%',
      gap: 4,
    },
    common: {
      width: 8,
      height: 8,
      borderRadius: 6,
    },
    background: {
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      ...ELEVATIONS[1],
    },
    indicator: {
      top: 12,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
      zIndex: 2,
    },
  }));
