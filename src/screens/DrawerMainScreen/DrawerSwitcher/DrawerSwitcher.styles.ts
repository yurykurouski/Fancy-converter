import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme, elevation }) => ({
    iconsContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 30,
      marginBottom: 10,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      ...elevation[10],
    },
  }));
