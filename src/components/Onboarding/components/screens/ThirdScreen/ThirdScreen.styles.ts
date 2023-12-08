import { StyleSheet } from 'react-native';

export const useScreenStyles = (windowWidth: number) =>
  StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 10, width: windowWidth },
    contentContainer: {
      justifyContent: 'center',
      gap: 10,
    },
    subTitle: { marginBottom: 20 },
    subTitleDrag: { marginBottom: 20 },
    rippleBaseStyle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      left: 10,
      bottom: 8,
    },
  });
