import { StyleSheet } from 'react-native';
import { DRAWER_CONTENT_WIDTH } from 'screens/DrawerMainScreen/DrawerMainScreen.constants';

export const useStyles = (windowWidth: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    scrollContainer: {
      marginTop: 10,
      width: DRAWER_CONTENT_WIDTH,
    },
    currs: {
      marginTop: '50%',
      gap: 10,
    },
  });
