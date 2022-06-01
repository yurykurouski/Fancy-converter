import { Animated, Easing } from 'react-native';

export const animatedPosition = new Animated.Value(0);
export const showNotification = () =>
  Animated.sequence([
    Animated.delay(500),
    Animated.timing(animatedPosition, {
      toValue: 70,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.sin,
    }),
    Animated.timing(animatedPosition, {
      toValue: 65,
      duration: 120,
      useNativeDriver: false,
    }),
    Animated.delay(1300),
    Animated.timing(animatedPosition, {
      toValue: 70,
      duration: 100,
      useNativeDriver: false,
    }),
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.exp,
    }),
  ]).start();
