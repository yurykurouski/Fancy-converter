import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = (pageHeight: number) => {
  return useTheme(({ theme }) => ({
    container: {
      height: pageHeight,
      gap: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.colors.text,
      alignSelf: 'center',
      marginTop: 10,
    },
    icon: {
      backgroundColor: theme.colors.card,
      borderRadius: 20,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
};
