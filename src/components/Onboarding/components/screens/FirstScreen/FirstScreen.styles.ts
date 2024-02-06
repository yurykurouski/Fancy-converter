import { StyleSheet } from 'react-native';

export const useScreenStyles = (windowWidth: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      justifyContent: 'center',
    },
    appIcon: {
      alignSelf: 'center',
      width: 160,
      height: 160,
    },
  });
