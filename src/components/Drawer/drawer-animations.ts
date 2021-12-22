import { Animated } from 'react-native';

export const opacityValue = new Animated.Value(0);

export const increaseOpacity = () =>
  Animated.timing(opacityValue, {
    toValue: 0.5,
    duration: 200,
    useNativeDriver: false,
  }).start();

export const decreaseOpacity = () =>
  Animated.timing(opacityValue, {
    toValue: 0,
    duration: 200,
    useNativeDriver: false,
  }).start();
