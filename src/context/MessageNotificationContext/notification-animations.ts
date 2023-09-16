import { Animated, Easing } from 'react-native';

export const animatedPosition = new Animated.Value(0);
export const showNotification = () =>
  Animated.sequence([
    Animated.delay(500),
    Animated.timing(animatedPosition, {
      toValue: 70,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.sin,
    }),
    Animated.timing(animatedPosition, {
      toValue: 65,
      duration: 120,
      useNativeDriver: true,
    }),
    Animated.delay(1300),
    Animated.timing(animatedPosition, {
      toValue: 70,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.exp,
    }),
  ]).start();

export const animatedWidth = new Animated.Value(0);
export const showNotificationForIsland = () =>
  Animated.sequence([
    Animated.delay(500),
    Animated.parallel([
      Animated.timing(animatedPosition, {
        toValue: 44,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.sin,
      }),
      Animated.sequence([
        Animated.delay(100),
        Animated.timing(animatedWidth, {
          toValue: 1,
          duration: 120,
          useNativeDriver: false,
        }),
      ]),
    ]),
    Animated.timing(animatedPosition, {
      toValue: 40,
      duration: 120,
      useNativeDriver: false,
    }),
    Animated.delay(1300),
    Animated.timing(animatedPosition, {
      toValue: 44,
      duration: 120,
      useNativeDriver: false,
    }),
    Animated.parallel([
      Animated.timing(animatedPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.sin,
      }),
      Animated.sequence([
        Animated.delay(100),
        Animated.timing(animatedWidth, {
          toValue: 0,
          duration: 120,
          useNativeDriver: false,
        }),
      ]),
    ]),
  ]).start();
