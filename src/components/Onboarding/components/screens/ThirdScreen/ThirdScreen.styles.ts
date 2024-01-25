import { StyleSheet } from 'react-native';
import { CONTROLS_OFFSET } from 'constants/index';

export const useScreenStyles = (windowWidth: number) =>
  StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 10, width: windowWidth },
    contentContainer: {
      justifyContent: 'center',
      gap: 10,
    },
    subTitle: { marginTop: 100 },
    subTitleDrag: { marginBottom: 20 },
    controls: {
      marginTop: 'auto',
      transform: [{ translateY: -CONTROLS_OFFSET }],
    },
    rippleBaseStyle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
    },
    swipeRipple: {
      left: 10,
      bottom: 8,
    },
    pressRipple: {
      bottom: 10,
      left: 24,
      transform: [{ scale: 0 }],
    },
    pressRippleRight: {
      bottom: 10,
      right: 24,
    },
  });
