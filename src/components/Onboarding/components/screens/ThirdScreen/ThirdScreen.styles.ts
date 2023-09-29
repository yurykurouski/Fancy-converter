import { StyleSheet } from 'react-native';

export const useScreenStyles = (windowWidth: number) =>
  StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 10, width: windowWidth },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    subTitle: { marginBottom: 20 },
    subTitleDrag: { marginBottom: 20 },
  });
